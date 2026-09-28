---
title: Statistiques
description: Notes de cours sur la statistique descriptive, les représentations graphiques et les indicateurs de position et de dispersion.
slug: statistics
tags: [lecture notes, A3, maths, statistics]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de probabilités](probability.md)

## Chapitre 1 : Démarche d'analyse

Données brutes (individus, réponses) $\to$ tableau de synthèse (modalités, effectifs), puis :

- **Analyse graphique** :
  - diagramme en barres (variable qualitative) ;
  - diagramme en bâtons (variable quantitative discrète) ;
  - histogramme (variable quantitative continue) ;
  - diagramme circulaire ;
  - courbe cumulative (discrète).
- **Analyse paramétrique** (calcul d'indicateurs) :
  - de position : moyenne, quantiles, mode ;
  - de dispersion : étendue, écart interquartile, variance, écart-type ;
  - de forme : symétrie, aplatissement.

:::tip[Diagramme circulaire]
L'angle associé à la modalité $i$ de fréquence $f_i$ est $\alpha_{i}=360°\times f_{i}$.
:::

## Chapitre 2 : Indicateurs

:::note[Définitions]

- **Mode** : modalité la plus fréquente.
- **Moyenne** : $\displaystyle \bar{x} = \frac{1}{n}\sum_{i = 1}^{n} x_{i}$.
- **Variance** : $\displaystyle V(X) = \frac{1}{n}\sum_{i = 1}^{n} ( x_{i}-\bar{x} )^{2}$.
- **Écart-type** : $\sigma(X)=\sqrt{ V(X) }$.
- **Écart interquartile** : $Q_{3}-Q_{1}$.

:::

:::tip[Méthode (boîte à moustaches)]

- Rectangle entre $Q_{1}$ et $Q_{3}$.
- Barre verticale en $Q_{2}$ (la médiane).
- Segment de $L_{g}$ à $L_{d}$, avec :
  - $P_{g}=Q_{1}-1{,}5\,(Q_{3}-Q_{1})$ et $P_{d}=Q_{3}+1{,}5\,(Q_{3}-Q_{1})$ ;
  - $L_{g}$ la plus petite observation $\ge P_{g}$ ;
  - $L_{d}$ la plus grande observation $\le P_{d}$.
- Les observations hors de $[L_g, L_d]$ sont représentées comme valeurs atypiques.

:::

:::info[Exemple (TD 1, exercice 1)]
Tableau de synthèse avec les effectifs $n_i$, les fréquences $f_i$ et leurs cumuls $n_i^c$, $f_i^c$ :

| $m_i$ | $n_i$ | $f_{i}$ | %   | $n^c_{i}$ | $f_i^c$ |
| ----- | ----- | ------- | --- | --------- | ------- |
| 2     | 2     | 0,08    | 8   | 2         | 0,08    |
| 3     | 1     | 0,04    | 4   | 3         | 0,12    |
| 4     | 4     | 0,16    | 16  | 7         | 0,28    |
| 5     | 5     | 0,20    | 20  | 12        | 0,48    |
| 6     | 7     | 0,28    | 28  | 19        | 0,76    |
| 7     | 4     | 0,16    | 16  | 23        | 0,92    |
| 8     | 1     | 0,04    | 4   | 24        | 0,96    |
| 9     | 1     | 0,04    | 4   | 25        | 1       |
|       | 25    | 1       | 100 |           |         |

- Minimum $= 2$, maximum $= 9$, étendue $= 7$.
- $Q_1 = 4$, $Q_2 = 6$ (médiane), $Q_3 = 6$.
- Moyenne $\bar x = \frac{135}{25} = 5{,}4$, mode $= 6$.
- Variance $V = \frac{799}{25} - 5{,}4^2 = 2{,}8$, écart-type $\sigma \approx 1{,}67$.

:::
