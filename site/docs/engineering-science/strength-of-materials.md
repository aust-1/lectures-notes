---
title: Résistance des matériaux
description: Notes de cours sur les caractéristiques des sections, les contraintes et les sollicitations simples des poutres.
slug: strength-of-materials
tags: [lecture notes, A2, science engineering, meca]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de mécanique I - statique](meca-i-static.md) et [les notes de mécanique II - dynamique](meca-ii-dynamics.md)

:::caution[Hypothèses]
Le matériau est supposé :

- homogène ;
- isotrope ;
- élastique ;
- linéaire.

:::

<img src="/assets/docs/Résistance des matériaux/Liaisons.png" alt="Liaisons usuelles" width="550" />

## Chapitre 1 : Moments quadratiques et aires planes

<img src="/assets/docs/Résistance des matériaux/Moments Quadratiques.png" alt="Moments quadratiques usuels" width="550" />

### Centre de gravité

$$
X_{G}=\frac{\iint_{A}x\, dA}{A}=\frac{\sum A_{i}\, x_{Gi}}{A}
\qquad
Y_{G}=\frac{\iint_{A}y\, dA}{A}=\frac{\sum A_{i}\, y_{Gi}}{A}
$$

### Moments statiques

- $\displaystyle Q_{x}=\iint_{A} y\, dA=\sum A_{i}\, y_{Gi}=A\, Y_{G}$.
- $\displaystyle Q_{y}=\iint_{A}x\,dA=\sum A_{i}\, x_{Gi}=A\, X_{G}$.

### Moments quadratiques

- $\displaystyle I_{Ox}=\iint_{A} y^{2}\, dA=\sum I_{Ox_{i}}$.
- $\displaystyle I_{Oy}=\iint_{A}x^{2}\,dA=\sum I_{Oy_{i}}$.
- $\displaystyle I_{Gx}=\sum\left(I_{G_{i}x}+A_{i}\,(Y_{Gi}-Y_{G})^{2}\right)$.
- $\displaystyle I_{Gy}=\sum\left(I_{G_{i}y}+A_{i}\,(X_{Gi}-X_{G})^{2}\right)$.

:::note[Théorème de transport (Huygens)]
$$
I_{Ox}=I_{Gx}+A\, Y_{G}^{2} \qquad I_{Oy}=I_{Gy}+A\, X_{G}^{2}
$$
:::

### Moment d'inertie polaire

$$
J=\iint_{A}r^{2}\,dA=\iint_{A}(x^{2}+y^{2})\,dA=I_{x}+I_{y}
$$

Transport : $J=J_{G}+A\, d^{2}=I_{Gx}+I_{Gy}+A\,(X_{G}^{2}+Y_{G}^{2})$.

### Moment produit

- $\displaystyle I_{Oxy}=\iint_{A}x\, y\,dA=\sum I_{Oxy_{i}}$.
- $\displaystyle I_{Gxy}=\sum\left(I_{G_{i}xy}+A_{i}\,(X_{Gi}-X_{G})(Y_{Gi}-Y_{G})\right)$.
- Transport : $I_{Oxy}=I_{Gxy}+A\, X_{G}\, Y_{G}$.

## Chapitre 2 : Contraintes planes et treillis hyperstatiques

Sur toute facette élémentaire $dA$ d'une coupe naît une force de surface, appelée **vecteur contrainte** :

$$
d\vec{f}=(\sigma\,\vec{n}+\tau\,\vec{t})\,dA
$$

avec $\sigma$ et $\tau$ en $\text{Pa}$ :

- contrainte normale : $\displaystyle \sigma=\frac{\| \vec{F}_{n} \|}{A}$ ;
- contrainte tangentielle : $\displaystyle \tau=\frac{\| \vec{F}_{t} \|}{A}$.

:::note[Degré d'hyperstaticité d'un treillis plan]
$$
h=N+r-2n
$$

- $N$ : nombre d'efforts normaux (de barres) ;
- $r$ : nombre de réactions aux appuis ;
- $n$ : nombre de nœuds.

:::

## Chapitre 3 : Traction et compression

:::note[Définition]
Sollicitation telle que $N\neq 0$ et $T=0$, $M_{t}=M_{fy}=M_{fz}=0$.
:::

- Contrainte normale : $\displaystyle \sigma=\frac{F}{S}$
  - $\sigma$ : contrainte normale en $\text{MPa}$ ou $\text{N}\cdot\text{mm}^{-2}$ ;
  - $F$ : effort normal en $\text{N}$ ;
  - $S$ : aire de la section droite en $\text{mm}^{2}$.

:::note[Loi de Hooke]
$$
\sigma=E\,\varepsilon
$$
avec $E$ le module d'élasticité (module de Young) en $\text{MPa}$ et $\varepsilon$ la déformation (sans unité).
:::

### Coefficient de Poisson

Lorsqu'une poutre s'allonge dans sa **longueur**, son **diamètre** diminue :

- déformation longitudinale : $\displaystyle \varepsilon_{l}=\frac{\Delta l}{l_{0}}=\frac{l-l_{0}}{l_{0}}$ ;
- déformation transversale : $\displaystyle \varepsilon_{t}=\frac{\Delta d}{d_{0}}=\frac{d-d_{0}}{d_{0}}$ ;
- coefficient de Poisson $\nu$ : $\varepsilon_{t}=-\nu\,\varepsilon_{l}$.

## Chapitre 4 : Cisaillement

:::note[Définition]
Sollicitation telle que $T\neq 0$ et $N=0$, $M_{t}=M_{fy}=M_{fz}=0$.
:::

- Contrainte de cisaillement : $\displaystyle \tau=\frac{T}{S}$
  - $\tau$ : contrainte de cisaillement en $\text{MPa}$ ou $\text{N}\cdot\text{mm}^{-2}$ ;
  - $T$ : effort tranchant en $\text{N}$ ;
  - $S$ : aire totale cisaillée en $\text{mm}^{2}$.

:::caution
$S$ représente l'aire **totale** cisaillée : il faut multiplier l'aire de la section droite par le nombre de plans de cisaillement.
:::

:::info[Exemple]

- TD 5, exercice 3 : l'articulation est cisaillée à deux endroits (les deux jonctions entre les deux efforts $\vec{F}$), donc $S_{\text{totale}}=2\times S_{\text{section droite}}$.
- TD 5, exercice 2 : les rivets sont cisaillés à quatre endroits (deux jonctions $\times$ deux rivets), donc $S_{\text{totale}}=4\times S_{\text{section droite}}$.

:::

:::note[Loi de Hooke en cisaillement]
$$
\tau=G\,\gamma
$$
avec $G$ le module de cisaillement (module de Coulomb) en $\text{MPa}$ et $\gamma$ le glissement relatif (sans unité).
:::

- Glissement : $\displaystyle \gamma=\frac{\Delta l}{\Delta t}$, avec $\Delta l$ le déplacement dans le sens de la contrainte et $\Delta t$ la dimension orthogonale à la contrainte.
- Relation entre les modules : $\displaystyle G=\frac{E}{2(1+\nu)}$.

:::note[Preuve]
$\gamma$ est l'angle formé par le cisaillement entre un axe et le corps mobile depuis le support fixe. Pour $\gamma$ petit :
$$
\gamma\approx\tan\gamma=\frac{\text{opposé}}{\text{adjacent}}=\frac{\Delta l}{\Delta t}
$$
:::

## Chapitre 5 : Torsion

:::caution
Section incomplète, à vérifier.
:::

:::note[Définition]
Sollicitation telle que $M_{t}\neq 0$ et $N=T=0$, $M_{fy}=M_{fz}=0$.
:::

- Contrainte de cisaillement : $\displaystyle \tau=\frac{M_{t}\, r}{J}$
  - $M_{t}$ : moment de torsion en $\text{N}\cdot\text{mm}$ ;
  - $r$ : distance au centre de la section en $\text{mm}$ ;
  - $J$ : moment d'inertie polaire en $\text{mm}^{4}$.
- Angle de torsion sur une longueur $L$ : $\displaystyle \theta=\frac{M_{t}\, L}{G\, J}$ en $\text{rad}$, avec $G$ le module de Coulomb.

:::tip[Section circulaire creuse]
$$
J=\frac{\pi}{32}\left(d_{e}^{4}-d_{i}^{4}\right)
$$
avec $d_e$ et $d_i$ les diamètres extérieur et intérieur.
:::

## Chapitre 6 : Flexion

:::note[Définition]
Sollicitation telle que $T\neq 0$, $M_{f}\neq 0$ et $N=0$, $M_{t}=0$.
:::

On applique le PFS à chaque section d'abscisse $x\in\,]A,B[$ pour exprimer $T(x)$ et $M_f(x)$. On a :

$$
T=-\frac{dM_{f}}{dx}
$$

:::note[Formule de Navier]
$$
\sigma=-y\,\frac{M_{f}}{I_{z}}
$$
avec $y$ l'axe orthogonal à la poutre et $z$ l'axe sortant. La contrainte maximale est atteinte pour le plus grand $\lvert y\rvert$, c'est-à-dire au point le plus éloigné du centre de gravité.
:::

:::tip[Méthode (calcul de la déformée)]
$$
y''=\frac{M_{f}(x)}{EI}
\implies y=\frac{1}{EI}\iint M_{f}(x)\,dx\,dx+C_{1}x+C_{2}
$$
Les constantes $C_1$ et $C_2$ sont déterminées par les conditions aux appuis.
:::
