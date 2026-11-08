---
title: Machine Learning
description: Notes de cours sur le prétraitement, la sélection de modèles en classification supervisée, l'évaluation et les données déséquilibrées.
slug: machine-learning
tags: [lecture notes, A4, it, machine learning]
last_update:
  date: 2026-11-08
  author: Eliott A. Roussille
---

Par convention, la classe 1 est la classe positive.

## Chapitre 1 : Données et prétraitement

### Pipeline ML

Données $\to$ prétraitement $\to$ variables $\to$ modèle $\to$ évaluation $\to$ décision. Chaque étape peut introduire du biais, du bruit ou de la fuite de données (leakage).

:::note[Train / validation / test]

- Train : apprendre les paramètres du modèle.
- Validation : comparer les modèles, régler les hyperparamètres.
- Test : estimation finale et non biaisée de la généralisation. Il n'est utilisé qu'une seule fois, à la fin.

:::

:::caution[Pourquoi ne pas choisir sur le test]
Si on choisit un modèle ou des hyperparamètres en regardant plusieurs fois le score de test, le test sert en pratique de validation : l'estimation finale devient optimiste et n'est plus indépendante.
:::

### Fuite de données (data leakage)

Une information indisponible au moment de la prédiction influence l'entraînement.

- Ajuster (fit) un scaler, un imputer, un sélecteur de variables ou SMOTE sur tout le jeu avant le split.
- Variables issues du futur ou dérivées de la cible.
- Doublons ou observations d'un même individu dans train et test.

:::tip[Règles]

1. Séparer avant d'apprendre les paramètres du prétraitement.
2. `fit` sur train, `transform` sur train et test.
3. Une valeur suspecte n'est pas forcément une erreur (âge = 240 : erreur ; revenu = 1 000 000 € : possible).

:::

### Mise à l'échelle

- Min-Max : $x' = \dfrac{x - x_{min}}{x_{max} - x_{min}}$.
- Standardisation : $z = \dfrac{x - \mu}{\sigma}$.
- Sensibles à l'échelle : KNN, K-Means, SVM, régression logistique, réseaux de neurones. Peu sensibles : arbres, forêts aléatoires.

### Valeurs manquantes

- MCAR (complètement aléatoire), MAR (aléatoire conditionnellement aux observées), MNAR (non aléatoire).
- Numérique : médiane (robuste) ou moyenne. Catégoriel : modalité la plus fréquente ou catégorie "missing".
- Ajouter un indicateur de valeur manquante si l'absence est informative.

### Pipeline scikit-learn

```python
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.linear_model import LogisticRegression

numeric = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
])
categorical = Pipeline([
    ("imputer", SimpleImputer(strategy="most_frequent")),
    ("encoder", OneHotEncoder(handle_unknown="ignore")),
])
preprocess = ColumnTransformer([
    ("num", numeric, numerical_features),
    ("cat", categorical, categorical_features),
])
model = Pipeline([
    ("preprocess", preprocess),
    ("classifier", LogisticRegression(max_iter=1000)),
])
```

:::info[Exemple (exercice 8 : corriger la fuite)]
Le scaler est ajusté sur tout `X` avant le split : moyenne et écart-type contiennent de l'information du test. Correction :

```python
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression()),
])
scores = cross_val_score(pipe, X_train, y_train, cv=5, scoring="accuracy")
print(scores.mean())

pipe.fit(X_train, y_train)          # une seule fois, à la fin
print(pipe.score(X_test, y_test))   # évaluation finale
```

`cross_val_score` mesure la performance sur des folds de validation issus de `X_train`, pas sur le test. Autres opérations à ajuster uniquement sur train : imputation, encodage, sélection de variables (`SelectKBest`), SMOTE.
:::

## Chapitre 2 : Classification supervisée

### Formalisation

- Espace d'entrée $\mathcal{X} \subseteq \mathbb{R}^d$, espace de sortie $\mathcal{Y} = \{1, \dots, K\}$ (binaire : $\{0, 1\}$).
- Jeu de données $\mathcal{D} = \{(x_i, y_i)\}_{i=1}^n$, classifieur $h : \mathcal{X} \to \mathcal{Y}$ dans l'espace d'hypothèses $\mathcal{H}$.
- Perte 0-1 : $\ell(h(x), y) = 0$ si $h(x) = y$, $1$ sinon.
- Risque : $R(h) = \mathbb{E}_{(x,y)\sim P}[\ell(h(x), y)]$, risque empirique : $\hat R(h) = \dfrac{1}{n}\sum_{i=1}^n \ell(h(x_i), y_i)$.
- Objectif : $h^* = \arg\min_{h \in \mathcal{H}} R(h)$.

### Sous-apprentissage et surapprentissage

- Sous-apprentissage : modèle trop simple, erreur élevée en train et en test (biais élevé).
- Surapprentissage : modèle trop complexe, apprend le bruit. Indicateur : $\hat R_{train}(h) \ll \hat R_{test}(h)$ (variance élevée).
- Erreur attendue $=$ Biais$^2$ $+$ Variance $+$ Bruit irréductible.

:::tip[Méthode (lire un tableau train / validation / test)]

- Grand écart entre train et validation $\Rightarrow$ surapprentissage.
- Train et validation faibles et proches $\Rightarrow$ sous-apprentissage.
- On choisit le modèle sur la validation, puis on confirme sur le test.
- Réduire le surapprentissage d'un arbre : limiter `max_depth`, augmenter `min_samples_leaf`, élaguer (`ccp_alpha`), ou passer à une forêt aléatoire.

:::

:::info[Exemple (exercice 9 : sélection de modèle)]

| Modèle                | Train | Validation | Test |
| --------------------- | ----- | ---------- | ---- |
| A : arbre peu profond | 0,84  | 0,82       | 0,81 |
| B : arbre profond     | 0,99  | 0,83       | 0,80 |
| C : régression log.   | 0,80  | 0,79       | 0,78 |

- B surapprend : écart train/validation de 0,16 contre 0,02 pour A.
- Sur la validation, B (0,83) et A (0,82) sont proches ; A est préférable car plus simple et plus stable (écart faible), et son test le confirme.
- Pour B : limiter la profondeur ou le nombre minimal d'échantillons par feuille.

:::

### Régression logistique

$$
P(y = 1 \mid x) = \sigma(z) = \frac{1}{1 + e^{-z}}, \quad z = w^T x + b = \beta_0 + \beta_1 x
$$

- Règle de décision : $\hat y = 1$ si $P(y=1 \mid x) \ge s$ (par défaut $s = 0{,}5$).
- Coût : entropie croisée $\mathcal{L} = -\dfrac{1}{n}\sum_i \left[ y_i \log \hat y_i + (1 - y_i)\log(1 - \hat y_i) \right]$, minimisée par descente de gradient.
- Frontière de décision linéaire : $w^T x + b = 0$.

:::note[Log-odds et odds ratio]

- Log-odds : $\log \dfrac{p}{1-p} = \beta_0 + \beta_1 x$.
- $\beta_1$ : variation des log-odds pour une unité de $x$ en plus.
- Odds ratio : $e^{\beta_1}$, facteur multiplicatif des odds pour une unité de plus.
- $P = 0{,}5 \iff z = 0 \iff x = -\dfrac{\beta_0}{\beta_1}$.

:::

:::info[Exemple (exercice 2)]
$\beta_0 = -2{,}4$, $\beta_1 = 0{,}6$.

1. $x = 3$ : $z = -2{,}4 + 1{,}8 = -0{,}6$, $P = \dfrac{1}{1 + e^{0{,}6}} = \dfrac{1}{1 + 1{,}822} \approx 0{,}354 < 0{,}5 \Rightarrow \hat y = 0$.
2. Chaque visite ajoute 0,6 aux log-odds ; $e^{0{,}6} \approx 1{,}82$, les odds sont multipliées par environ 1,82.
3. $x = 2{,}4 / 0{,}6 = 4$ visites.
4. Seuil 0,5 $\to$ 0,3 : plus de prédictions positives, rappel en hausse (ou stable), précision en général en baisse (plus de faux positifs).

:::

### SVM et noyau RBF

- Fonction de décision $f(x) = w^T x + b$, $y \in \{-1, +1\}$, $\hat y = \text{sign}(f(x))$. L'hyperplan $f(x) = 0$ sépare les classes.
- Le SVM maximise la marge ; les points les plus proches de la frontière sont les vecteurs de support.
- Noyau RBF : $K(x_i, x_j) = \exp\left(-\gamma \lVert x_i - x_j \rVert^2\right)$, proche de 1 si les points sont proches, de 0 sinon.
- $\gamma$ petit : frontière lisse, risque de sous-apprentissage. $\gamma$ grand : frontière complexe, risque de surapprentissage.

### Arbres de décision

- Nœuds internes : règles de décision sur un seuil de variable. Feuilles : prédictions.
- Gini : $G = 1 - \sum_{k} p_k^2$. Entropie : $H = -\sum_k p_k \log_2 p_k$.
- Gain d'information : $Gain(S, A) = H(S) - \sum_{v} \dfrac{|S_v|}{|S|} H(S_v)$.
- On choisit la séparation qui réduit le plus l'impureté : les enfants deviennent plus purs, donc les feuilles prédisent une classe avec plus de certitude.
- Avantages : interprétable, pas besoin de normaliser, gère le non linéaire. Limites : variance élevée, sensible au déséquilibre.

:::info[Exemple (exercice 6, partie C)]

- Nœud 5 positifs / 5 négatifs : $G = 1 - (0{,}5^2 + 0{,}5^2) = 0{,}5$ (impureté maximale en binaire).
- Nœud 10 / 0 : $G = 1 - (1^2 + 0^2) = 0$ (nœud pur).

:::

## Chapitre 3 : Évaluation d'un classifieur

### Matrice de confusion

|              | Prédit positif | Prédit négatif |
| ------------ | -------------- | -------------- |
| Réel positif | TP             | FN             |
| Réel négatif | FP             | TN             |

:::caution
Bien lire l'orientation de la matrice dans l'énoncé. En scikit-learn, `confusion_matrix` renvoie `[[TN, FP], [FN, TP]]` (lignes = réel, colonnes = prédit, classe 0 en premier).
:::

### Métriques

| Métrique          | Formule                                          | Question                                  |
| ----------------- | ------------------------------------------------ | ----------------------------------------- |
| Accuracy          | $\dfrac{TP + TN}{TP + TN + FP + FN}$             | Part de bonnes prédictions                |
| Précision         | $\dfrac{TP}{TP + FP}$                            | Parmi les prédits positifs, combien vrais |
| Rappel (TPR)      | $\dfrac{TP}{TP + FN}$                            | Parmi les vrais positifs, combien trouvés |
| Spécificité (TNR) | $\dfrac{TN}{TN + FP}$                            | Parmi les vrais négatifs, combien trouvés |
| FPR               | $\dfrac{FP}{FP + TN} = 1 -$ spécificité          | Taux de fausses alertes                   |
| F1                | $2 \dfrac{P \times R}{P + R}$                    | Moyenne harmonique de $P$ et $R$          |
| $F_\beta$         | $(1 + \beta^2)\dfrac{P \times R}{\beta^2 P + R}$ | $\beta > 1$ favorise le rappel            |
| Prévalence        | $\dfrac{TP + FN}{N}$                             | Proportion réelle de positifs             |

:::note[Cas limites]
Si aucun positif n'est prédit ($TP + FP = 0$), la précision est indéfinie (0/0) ; on la pose à 0 par convention (`zero_division=0`), et donc $F1 = 0$.
:::

:::tip[Précision ou rappel ?]

- Faux négatif coûteux (maladie grave, fraude, défaut de crédit, défaut de fabrication) $\Rightarrow$ rappel. Coût : plus de faux positifs (examens inutiles, clients bloqués, contrôles en trop).
- Faux positif coûteux (alerte qui déclenche une action chère ou gênante, ex. bloquer une carte, jeter une pièce saine) $\Rightarrow$ précision.
- Compromis : F1 ou $F_\beta$.

:::

:::info[Exemple (exercice 1)]
$TP = 36$, $FN = 24$, $FP = 64$, $TN = 876$, $N = 1000$.

- Prévalence : $60 / 1000 = 6\,\%$.
- Accuracy : $912 / 1000 = 0{,}912$.
- Précision : $36 / 100 = 0{,}36$. Rappel : $36 / 60 = 0{,}60$. Spécificité : $876 / 940 \approx 0{,}932$.
- F1 : $2 \times \dfrac{0{,}36 \times 0{,}60}{0{,}96} = 0{,}45$.
- Baseline "toujours non" : accuracy $= 940/1000 = 0{,}94$ (meilleure que le modèle), rappel $= 0$. L'accuracy est trompeuse en déséquilibre.
- Banque qui veut trouver un maximum de défauts : rappel ; coût : plus de bons clients refusés.

:::

:::info[Exemple (exercice 4 : 10 000 transactions, 500 fraudes, tout prédit légitime)]

- Matrice : $TP = 0$, $FN = 500$, $FP = 0$, $TN = 9500$.
- Accuracy $= 0{,}95$, précision indéfinie (0), rappel $= 0$, F1 $= 0$.
- Inutile : aucune fraude détectée. L'accuracy reflète surtout la classe majoritaire.

:::

### Courbe ROC et AUC

- ROC : TPR (ordonnée) en fonction du FPR (abscisse) pour tous les seuils.
- Seuil qui baisse : plus de positifs prédits, TPR et FPR augmentent (ou restent constants).
- AUC $= P(\text{score}(pos) > \text{score}(neg))$ : probabilité qu'un positif au hasard ait un score plus élevé qu'un négatif au hasard.
- AUC $= 0{,}5$ : classement aléatoire. AUC $= 1$ : séparation parfaite.
- La ROC ne dépend pas d'un seuil fixe : elle évalue le classement des scores sur tous les seuils.

:::caution[Erreurs fréquentes]

- "AUC = 0,90 signifie 90 % de bonnes prédictions" : faux. L'AUC mesure la qualité du classement, pas l'accuracy à un seuil donné.
- ROC $\ne$ courbe précision-rappel : la ROC utilise TPR et FPR (le FPR a TN au dénominateur, donc reste faible quand les négatifs sont très nombreux) ; la courbe PR utilise précision et rappel et ne fait pas intervenir TN.
- Une AUC élevée ne garantit pas un modèle exploitable (exemple du cours : AUC $= 0{,}98$ mais FPR $= 0{,}355$ au seuil choisi, matrice $\begin{bmatrix} 3179 & 1748 \\ 0 & 73 \end{bmatrix}$).
- En déséquilibre, la courbe PR (et l'AUC-PR) est plus informative.

:::

:::tip[Méthode (construire une ROC à la main)]

1. Compter $P$ positifs et $N$ négatifs.
2. Trier par score décroissant.
3. Partir de $(0, 0)$ (seuil au-dessus du max). À chaque score franchi : positif $\Rightarrow$ TPR $+ 1/P$, négatif $\Rightarrow$ FPR $+ 1/N$.
4. AUC par trapèzes : $\displaystyle AUC = \sum_i (FPR_{i+1} - FPR_i)\frac{TPR_i + TPR_{i+1}}{2}$.
5. Vérification : AUC $=$ (nombre de paires positif/négatif bien ordonnées) $/ (P \times N)$.

:::

:::info[Exemple (exercice 3)]
Scores triés : A(1) 0,95, B(0) 0,80, C(1) 0,70, D(1) 0,55, E(0) 0,35, F(0) 0,10. $P = 3$, $N = 3$.

| Seuil      | TP  | FP  | FPR | TPR |
| ---------- | --- | --- | --- | --- |
| $> 0{,}95$ | 0   | 0   | 0   | 0   |
| 0,95       | 1   | 0   | 0   | 1/3 |
| 0,80       | 1   | 1   | 1/3 | 1/3 |
| 0,70       | 2   | 1   | 1/3 | 2/3 |
| 0,55       | 3   | 1   | 1/3 | 1   |
| 0,35       | 3   | 2   | 2/3 | 1   |
| 0,10       | 3   | 3   | 1   | 1   |

AUC $= \frac{1}{3}\times\frac{1}{3} + \frac{1}{3}\times 1 + \frac{1}{3}\times 1 = \frac{7}{9} \approx 0{,}78$. Vérification : 7 paires bien ordonnées sur 9 (seul B dépasse C et D).
:::

### Choix du seuil

- Baisser le seuil : plus de positifs prédits, des positifs auparavant ratés passent au-dessus, donc FN diminue et le rappel augmente. Coût : FP augmente, précision en baisse.
- Stratégie : choisir le seuil sur la validation (ou par validation croisée), par exemple le plus haut seuil qui atteint un rappel cible (ex. $\ge 0{,}9$), ou celui qui minimise $C_{FN} \cdot FN + C_{FP} \cdot FP$, ou qui maximise $F_\beta$. Ne jamais choisir le seuil sur le test.

:::info[Exemple (exercice 5)]
Positifs : patients 1, 2, 4, 6, 8 ($P = 5$, $N = 5$).

- Seuil 0,5 (patients 1 à 6 prédits positifs) : $TP = 4$ (1, 2, 4, 6), $FP = 2$ (3, 5), $FN = 1$ (8), $TN = 3$. Précision $= 4/6 \approx 0{,}67$, rappel $= 4/5 = 0{,}8$, F1 $= 2 \times \frac{0{,}667 \times 0{,}8}{1{,}467} \approx 0{,}73$.
- Seuil 0,3 (patients 1 à 8) : $TP = 5$, $FP = 3$, $FN = 0$, $TN = 2$. Précision $= 5/8 = 0{,}625$, rappel $= 1$, F1 $\approx 0{,}77$.
- Le patient 8 (0,31) est maintenant détecté ; coût : le patient 7 devient un faux positif.

:::

### Code scikit-learn

```python
from sklearn.metrics import (
    confusion_matrix, precision_score, recall_score, f1_score,
    roc_auc_score, precision_recall_curve, average_precision_score,
)

y_proba = model.predict_proba(X_test)[:, 1]
y_pred = (y_proba >= 0.5).astype(int)

print(confusion_matrix(y_test, y_pred))   # [[TN, FP], [FN, TP]]
print(precision_score(y_test, y_pred, zero_division=0))
print(recall_score(y_test, y_pred))
print(f1_score(y_test, y_pred))
print(roc_auc_score(y_test, y_proba))     # scores, pas les classes
precision, recall, thresholds = precision_recall_curve(y_test, y_proba)
print(average_precision_score(y_test, y_proba))  # AUC-PR
```

## Chapitre 4 : Validation croisée

- K-fold : découper en $K$ folds ; pour chaque fold, entraîner sur $K - 1$ folds et évaluer sur le fold restant ; moyenne $CV_K = \frac{1}{K}\sum_k M_k$.
- Stratified K-Fold : conserve la proportion de classes dans chaque fold. Recommandé en classification déséquilibrée.
- LOOCV : $K = n$, coûteux.
- Repeated K-Fold : plusieurs K-fold avec des mélanges différents, estimation plus stable.
- $K$ petit (5) : plus rapide. $K$ grand (10) : estimation plus précise, plus lent.
- $n$ petit : estimations très variables ; $n$ grand : plus stables.

### Observations répétées et temps

:::note[Groupes]
Plusieurs lignes par patient : un split aléatoire par ligne met des visites du même patient dans train et test. Le modèle reconnaît le patient plutôt que de généraliser, l'estimation est trop optimiste. Solution : `GroupKFold` (ou `StratifiedGroupKFold`, `GroupShuffleSplit`) en fournissant l'identifiant patient comme `groups`.
:::

```python
from sklearn.model_selection import GroupKFold, cross_val_score

gkf = GroupKFold(n_splits=5)
scores = cross_val_score(pipe, X, y, groups=patient_ids, cv=gkf, scoring="recall")
print(scores.mean())
```

:::note[Temps]
Pour prédire des réadmissions futures, il faut entraîner sur le passé et tester sur le futur (split temporel, `TimeSeriesSplit` ou coupure à une date). Sinon le modèle profite d'informations postérieures et des changements de distribution dans le temps sont masqués.
:::

## Chapitre 5 : Données déséquilibrées

- Ratio de déséquilibre $=$ effectif majoritaire / effectif minoritaire (ex. $357/212 \approx 1{,}7$, soit 1:1,7).
- Niveaux : 1:1 à 1:5 faible ; 1:5 à 1:20 modéré ; $>$ 1:50 élevé.
- Les classifieurs standards favorisent la classe majoritaire ; l'accuracy est trompeuse : prédire toujours la classe majoritaire donne une accuracy égale à sa proportion.

:::info[Exemple (exercice 7)]
2 % de défauts sur 5 000 produits : "toujours non défectueux" donne 98 % d'accuracy, donc 97 % peut être pire que ne rien faire. Métriques utiles : rappel, précision, F1, AUC-PR (et matrice de confusion). Améliorations : baisser le seuil, `class_weight="balanced"`, SMOTE dans le pipeline, apprentissage sensible au coût.
:::

### Solutions

- Données : sous-échantillonnage (aléatoire, liens de Tomek, NearMiss, Edited-NN, Condensed-NN), sur-échantillonnage (aléatoire, SMOTE, ADASYN, Borderline-SMOTE, SVM-SMOTE).
- Algorithme : `class_weight="balanced"`, coût $L = C_{FN} \cdot FN + C_{FP} \cdot FP$.
- Évaluation : métriques adaptées, réglage du seuil, validation stratifiée.

:::note[Liens de Tomek]
$(A, B)$ de classes différentes forment un lien de Tomek s'il n'existe aucun $C$ tel que $d(A, C) < d(A, B)$ ou $d(B, C) < d(A, B)$ (plus proches voisins mutuels). On supprime l'élément majoritaire pour clarifier la frontière.
:::

### SMOTE

$$
x_{new} = x_i + \lambda (x_{NN} - x_i), \quad \lambda \in [0, 1]
$$

avec $x_{NN}$ un plus proche voisin minoritaire de $x_i$.

- Synthétique : le point est créé par interpolation sur le segment entre deux minoritaires, il n'a jamais été observé.
- Avantage : limite le surapprentissage par rapport à la duplication.
- Limite : peut créer du bruit ou des points dans la zone de l'autre classe, ne marche pas directement sur des variables catégorielles.

:::info[Exemple (exercice 6, partie B)]
$x_i = (2, 4)$, $x_{NN} = (4, 8)$, $\lambda = 0{,}25$ : $x_{new} = (2, 4) + 0{,}25 \times (2, 4) = (2{,}5;\ 5)$.
:::

:::danger[SMOTE et fuite]
Dataset $\to$ SMOTE $\to$ validation croisée : les points synthétiques sont créés à partir de points qui finissent dans les folds de validation, et des quasi-copies se retrouvent des deux côtés. Les scores sont trop optimistes, et la validation ne reflète plus la vraie distribution. Procédure correcte : split, puis SMOTE uniquement sur les données d'entraînement de chaque fold, via un pipeline `imblearn`. Validation et test restent non modifiés.
:::

```python
from imblearn.pipeline import Pipeline
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import StratifiedKFold, cross_val_score

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("smote", SMOTE(random_state=42)),
    ("clf", DecisionTreeClassifier(max_depth=5, random_state=42)),
])
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores = cross_val_score(pipe, X_train, y_train, cv=cv, scoring="recall")
```

:::info[Exemple (exercice 6, parties A et D)]
Partie A : accuracy max pour la régression logistique (95,1 %), rappel max pour l'arbre (0,67). Si les FN sont coûteux : l'arbre. Avec 95 % de négatifs, "tout négatif" donne déjà 95 % d'accuracy.

Partie D : F1 identiques (0,64), l'arbre a le meilleur rappel (0,79 contre 0,71) : on recommande l'arbre. L'accuracy n'est pas le critère principal. Informations à demander : coûts réels $C_{FN}$ et $C_{FP}$, rappel minimal acceptable, intervalles de confiance ou écart-type entre folds, calibration, AUC-PR, performance sur des sous-groupes. Seuil : sur la validation, prendre le seuil qui atteint le rappel cible avec la meilleure précision, ou qui minimise le coût. Évaluation finale : figer pipeline, hyperparamètres et seuil, entraîner sur tout le train, évaluer une seule fois sur un test indépendant non rééchantillonné, avec matrice de confusion, rappel, précision, F1, AUC-PR.
:::

:::tip[Recommandation type (défi final)]
Je recommande l'arbre de décision, car il a le meilleur rappel (0,79) pour un F1 égal. Le critère principal est le rappel, complété par la précision, le F1 et l'AUC-PR, car un faux négatif coûte bien plus qu'un faux positif. Le déséquilibre est traité par pondération des classes ou SMOTE, appliqué uniquement sur les folds d'entraînement. Tout le prétraitement est dans un pipeline ajusté sur le train seulement, avec une validation croisée stratifiée. Le seuil est choisi sur la validation pour atteindre le rappel visé. Le modèle final est évalué une seule fois sur un test indépendant non modifié.
:::
