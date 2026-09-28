---
title: Probabilités
description: Notes de cours sur les variables aléatoires, les lois usuelles, les couples de variables et les théorèmes limites.
slug: probability
tags: [lecture notes, A1, A2, maths, probability]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

## Chapitre 1 : Introduction aux probabilités

- **Espace probabilisé** : $(\Omega, \mathcal{A}, P)$ avec $\mathcal{A}$ une tribu et $P$ une probabilité.
- **Probabilité conditionnelle** : $\displaystyle P_{B}(A) = P(A\mid B) = \frac{P(A \cap B)}{P(B)}$.
- **Indépendance** : $A$ et $B$ sont indépendants si $P(A \cap B) = P(A)\,P(B)$.
- **Probabilités totales** : si $(B_i)$ est un système complet d'événements, $\displaystyle P(A) = \sum_i P(A\mid B_i)\,P(B_i)$.

:::note[Formule de Bayes]
$$
P(B\mid A) = \frac{P(A\mid B)\,P(B)}{P(A)}
$$
:::

## Chapitre 2 : Variables aléatoires

- **Définition** : application $X : \Omega \to \mathbb{R}$.
- **Fonction de répartition** : $F_X(x) = P(X \leq x)$.
- **Espérance** (cas discret) : $\displaystyle E(X) = \sum_{x_i \in X(\Omega)} x_i\, P(X = x_i)$.
- **Transfert** : $\displaystyle E(g(X)) = \sum_{x_i \in X(\Omega)} g(x_i)\, P(X = x_i)$.
- **Variance** : $V(X) = E(X^2) - E(X)^2$.
- **Écart-type** : $\sigma_X = \sqrt{V(X)}$.

:::tip[Méthode (rédaction d'une loi discrète)]

1. Lister tous les cas possibles et expliciter $X(\Omega)=\{x_1, x_2, \dots, x_n\}$.
2. Expliciter $\text{Card}\ \Omega$.
3. Calculer chaque $P(X=x_i)$, par exemple $P(X=-1)=P(\text{1 blanche et 1 noire})=\dots$
4. Résumer dans un tableau :

| $x_i$      | $\dots$ |
| ---------- | ------- |
| $P(X=x_i)$ | $\dots$ |
| $F_X(x_i)$ | $\dots$ |

:::

:::info[Exemple (densité $f(x)=\frac{c}{2}e^{-c\lvert x \rvert}$)]
Espérance, par intégration par parties :
$$
E(X)= \frac{c}{2}\left( \int_{-\infty}^{0} xe^{cx}\,dx + \int_{0}^{+\infty}xe^{-cx}\,dx\right)
=\frac{c}{2}\left( -\frac{1}{c^{2}} + \frac{1}{c^{2}} \right)=0
$$
Variance, par parité de $x \mapsto x^2 e^{-c\lvert x \rvert}$ :
$$
V(X)=E(X^{2})=c\int_{0}^{+\infty}x^{2}e^{-cx}\,dx=c\times\frac{2}{c^{3}}=\frac{2}{c^{2}}
$$
:::

## Chapitre 3 : Lois usuelles discrètes

| Loi                                    | $P(X=k)$                                       | $E(X)$          | $V(X)$               |
| -------------------------------------- | ---------------------------------------------- | --------------- | -------------------- |
| Uniforme $\mathcal U(n)$               | $\frac{1}{n}$, $k \in \{1, \dots, n\}$         | $\frac{n+1}{2}$ | $\frac{n^2-1}{12}$   |
| Bernoulli $\mathcal B(p)$              | $P(X=1)=p$, $P(X=0)=1-p$                       | $p$             | $p(1-p)$             |
| Binomiale $\mathcal B(n,p)$            | $\binom{n}{k} p^k (1-p)^{n-k}$                 | $np$            | $np(1-p)$            |
| Poisson $\mathcal P(\lambda)$          | $\frac{\lambda^k e^{-\lambda}}{k!}$            | $\lambda$       | $\lambda$            |
| Géométrique $\mathcal G(p)$            | $(1 - p)^{k-1} p$, $k \geq 1$                  | $\frac{1}{p}$   | $\frac{1-p}{p^2}$    |
| Binomiale négative $\mathcal{BN}(r,p)$ | $\binom{k-1}{r-1} p^r (1-p)^{k-r}$, $k \geq r$ | $\frac{r}{p}$   | $\frac{r(1-p)}{p^2}$ |

- **Bernoulli** : expérience à deux issues ($0/1$).
- **Binomiale** : nombre de succès sur $n$ essais indépendants.
- **Poisson** : nombre d'événements rares.
- **Géométrique** : rang du premier succès.
- **Binomiale négative** : nombre d'essais pour obtenir $r$ succès.

## Chapitre 4 : Lois usuelles continues

| Loi                                 | Densité $f_X(x)$                                               | $E(X)$              | $V(X)$                |
| ----------------------------------- | -------------------------------------------------------------- | ------------------- | --------------------- |
| Uniforme $\mathcal U(a,b)$          | $\frac{1}{b-a}$ sur $[a,b]$                                    | $\frac{a+b}{2}$     | $\frac{(b-a)^2}{12}$  |
| Exponentielle $\mathcal E(\lambda)$ | $\lambda e^{-\lambda x}$ pour $x \geq 0$                       | $\frac{1}{\lambda}$ | $\frac{1}{\lambda^2}$ |
| Normale $\mathcal N(\mu, \sigma^2)$ | $\frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$               | $\sigma^2$            |

- **Normale** : variable influencée par de nombreux facteurs indépendants.
- **Exponentielle** : durée de vie sans mémoire.

:::tip[Méthode (centrer et réduire une loi normale)]
Si $X\sim \mathcal{N}(\mu, \sigma^{2})$, alors :
$$
Z=\frac{X-\mu}{\sigma} \sim \mathcal{N}(0,1)
$$
$P(a \leq X \leq b)$ se calcule ensuite avec la table de la loi normale centrée réduite.
:::

:::tip[Approximations utiles]

- Binomiale $\approx$ Poisson : si $n$ est grand et $p$ petit, avec $\lambda = np$.
- Binomiale $\approx$ Normale : si $np > 5$ et $n(1-p) > 5$.

:::

## Chapitre 5 : Couples de variables aléatoires

### Loi conjointe, marginales et conditionnelles

- **Loi conjointe** :
  - discrète : $p_{X,Y}(x_i,y_j)=P(X=x_i,Y=y_j)$ ;
  - continue : densité $f_{X,Y}$ telle que $\displaystyle\iint_{\mathbb R^2} f_{X,Y}(x,y)\,dx\,dy =1$.
- **Lois marginales** : $\displaystyle p_X(x_i)=\sum_j p_{X,Y}(x_i,y_j)$ ; $\displaystyle f_X(x)=\int_{\mathbb R} f_{X,Y}(x,y)\,dy$.
- **Lois conditionnelles** : $\displaystyle P(X=x_i\mid Y=y_j)=\frac{p_{X,Y}(x_i,y_j)}{p_Y(y_j)}$ ; $\displaystyle f_{X\mid Y}(x\mid y)=\frac{f_{X,Y}(x,y)}{f_Y(y)}$.

### Indépendance

- $X$ et $Y$ sont indépendantes $\iff p_{X,Y}(x_i,y_j)=p_X(x_i)\,p_Y(y_j)$ (ou $f_{X,Y}=f_X f_Y$).
- Indépendance $\implies \text{Cov}(X,Y)=0$, mais la réciproque est fausse.

### Moments d'un couple

- **Transfert** : $\displaystyle E[g(X,Y)]=\sum_{i,j} g(x_i,y_j)\,p_{X,Y}(x_i,y_j)$ (ou $\displaystyle\iint g\, f_{X,Y}$).
- **Covariance** : $\text{Cov}(X,Y)=E[XY]-E[X]\,E[Y]$.
- **Corrélation** : $\displaystyle \rho=\frac{\text{Cov}(X,Y)}{\sigma_X\sigma_Y}\in[-1,1]$.
- **Variance d'une somme** : $V(X+Y)=V(X)+V(Y)+2\,\text{Cov}(X,Y)$.

:::note[Espérance et variance conditionnelles]

- $E[Y]=E\big[E(Y\mid X)\big]$.
- Variance totale : $V(Y)=E\big[V(Y\mid X)\big]+V\big[E(Y\mid X)\big]$.

:::

- **Régression de $Y$ sur $X$** : la fonction $x\mapsto E(Y\mid X=x)$ ; c'est une droite si $(X,Y)$ est gaussien.

### Transformations

- Somme $Z=X+Y$ de variables indépendantes (convolution) :
  - discret : $\displaystyle p_Z(k)=\sum_{i} p_X(i)\,p_Y(k-i)$ ;
  - continu : $\displaystyle f_Z(z)=\int_{\mathbb R} f_X(x)\,f_Y(z-x)\,dx$.
- Changement de variables $(U,V)=h(X,Y)$ bijectif : $f_{U,V}(u,v)=f_{X,Y}\big(h^{-1}(u,v)\big)\,\lvert \det J_{h^{-1}}(u,v)\rvert$.
- Min et max de $n$ variables i.i.d. continues : $F_{\min}(t)=1-\big(1-F_X(t)\big)^n$ et $F_{\max}(t)=\big(F_X(t)\big)^n$.

:::tip[Méthodes]

- **Reconnaître l'indépendance** : tester la factorisation de la loi conjointe.
- **Calculer $P(X\le a, Y\le b)$** : intégrer la densité ou sommer la loi conjointe sur le domaine.
- **Trouver une loi marginale** : sommer ou intégrer la loi conjointe sur l'autre variable.
- **Utiliser la convolution** : sommes de binomiales, de lois de Poisson, d'exponentielles (loi Gamma), etc.

:::

## Chapitre 6 : Théorèmes limites et convergences

### Inégalités fondamentales

| Inégalité           | Hypothèses                | Énoncé                                                                       |
| ------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| Markov              | $X\ge 0$, $E(X)$ existe   | $P(X\ge\lambda)\le\dfrac{E(X)}{\lambda}$                                     |
| Bienaymé-Tchebychev | $E(X)$ et $V(X)$ existent | $P\big(\lvert X-E(X)\rvert\ge\varepsilon\big)\le\dfrac{V(X)}{\varepsilon^2}$ |
| Jensen              | $g$ convexe               | $g\big(E(X)\big)\le E\big[g(X)\big]$                                         |

### Modes de convergence

- **En probabilité** : $X_n\xrightarrow{P}X$ si $\forall\varepsilon>0,\ P(|X_n-X|>\varepsilon)\to0$.
- **En loi** : $X_n\xrightarrow{\mathcal L}X$ si $F_{X_n}(x)\to F_{X}(x)$ en tout point de continuité de $F_X$.
- **Presque sûre** : $X_n\to X$ p.s. si $P\big(\lim_{n\to\infty}X_n=X\big)=1$.
- **En moyenne d'ordre $p$** : $X_n\xrightarrow{L^p}X$ si $E\big[|X_n-X|^{p}\big]\to0$ ($p\ge1$).

:::note[Implications]
$$
\text{p.s.} \implies \text{probabilité} \implies \text{loi}
\qquad
L^q \implies L^p \implies \text{probabilité} \quad (q \geq p \geq 1)
$$
Les réciproques sont fausses en général (sauf cas particuliers, par exemple une limite constante pour loi $\implies$ probabilité).
:::

:::tip[Condition suffisante de convergence vers une constante]
Si $E(X_n)\to a$ et $V(X_n)\to0$, alors $X_n\xrightarrow{P}a$.
:::

:::note[Théorème de Slutsky]
Si $X_n\xrightarrow{\mathcal L}X$ et $Y_n\xrightarrow{P}a$, alors :

- $X_n+Y_n\xrightarrow{\mathcal L}X+a$ ;
- $X_nY_n\xrightarrow{\mathcal L}aX$ ;
- $X_n/Y_n\xrightarrow{\mathcal L}X/a$ si $a\ne0$.

:::

### Théorèmes limites

:::note[Loi des grands nombres]
Pour des variables i.i.d. d'espérance $\mu$, $\displaystyle\bar X_n=\frac1n\sum_{k=1}^{n}X_k$ :

- **faible** : $\bar X_n\xrightarrow{P}\mu$ ;
- **forte** : $\bar X_n\to\mu$ presque sûrement.

:::

:::note[Théorème central limite]
Pour des variables i.i.d. d'espérance $\mu$ et de variance $\sigma^{2}$ :
$$
\sqrt{n}\,\frac{\bar X_n-\mu}{\sigma}\xrightarrow{\mathcal L}\mathcal N(0,1)
$$
Applications : approximation d'une binomiale ou d'une Poisson par une normale, intervalles de confiance, formule de Stirling, etc.
:::

:::note[Méthode delta]
Si $\sqrt{n}\,(X_n-\theta)\xrightarrow{\mathcal L}\mathcal N(0,\sigma^{2})$ et $g$ est dérivable en $\theta$, alors :
$$
\sqrt{n}\,\big(g(X_n)-g(\theta)\big)\xrightarrow{\mathcal L}\mathcal N\big(0,\,g'(\theta)^{2}\sigma^{2}\big)
$$
:::

### Convergences de lois usuelles

- $\mathcal B(n,p)\to\mathcal P(\lambda)$ si $n\to\infty$, $p\to0$ et $np\to\lambda$.
- $\mathcal B(n,p)\approx \mathcal N(np,np(1-p))$ si $np(1-p)\to\infty$.
- $\mathcal P(\lambda)\approx \mathcal N(\lambda,\lambda)$ pour $\lambda$ grand.

:::tip[Méthodes]

1. **Majorations rapides** : utiliser Markov ou Bienaymé-Tchebychev pour borner des probabilités.
2. **Montrer une convergence** : vérifier $E(X_n)\to a$ et $V(X_n)\to0$, ou passer par $E\big[|X_n - X|^p\big]$ (convergence $L^p$).
3. **Approximations numériques** : TCL pour $P(S_n\le k)$, ou loi de Poisson pour $n$ grand et $p$ petit.
4. **Combiner des suites** : appliquer Slutsky pour les mélanges « partie aléatoire + partie déterministe ».

:::
