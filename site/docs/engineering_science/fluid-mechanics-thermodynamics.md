---
title: Mécanique des fluides et thermodynamique
description: Notes de cours sur les machines thermiques, les changements de phase, la cinématique et la statique des fluides.
slug: fluid-mechanics-thermodynamics
tags: [lecture notes, A2, science engineering, thermodynamics]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de transferts thermiques](heat-transfer.md) et [les notes de thermodynamique](thermodynamics.md)

:::info[Conversions de pression]
$$
\begin{aligned} 760 \text{ mmHg}&=1{,}013\times 10^{5}\text{ Pa} \\ &=1\text{ atm} \\ &=1{,}013\text{ bar}  \end{aligned}
$$
:::

## Chapitre 1 : Rappels de thermodynamique

:::note[Définitions]

- **Transformation réversible** : transformation si lente que le système $\Sigma$ passe par une succession d'états d'équilibre thermodynamique.
- **Adiabatique** : sans échange de chaleur $\implies Q=0$.
- **Système fermé** $\implies N=C^{ste}$.

:::

### Premier principe

:::note[Premier principe]
$$
dE_{tot}=\delta W+\delta Q
$$
La différentielle de l'énergie totale du système est égale à la somme du travail $\delta W$ et de la chaleur $\delta Q$ reçus. Le système étant macroscopiquement immobile, $\Delta E_{m}=0$ et :
$$
\Delta E_{tot}=\Delta U=W+Q
$$
:::

- $\displaystyle W=-\int_{V_{i}}^{V_{f}}P_{ext}\,dV$ et $\displaystyle Q=\int_{EI}^{EF}\delta Q$.
- En système fermé :
  - $\delta Q_{\text{rév}}=C_{V}\, dT+l\, dV$ avec $l=P$ pour un gaz parfait ;
  - $\delta Q_{\text{rév}} = C_{P}\, dT + h\, dP$ avec $h=-V$ pour un gaz parfait.
- Cas particuliers :
  - isobare : $\delta Q = C_P\,dT$ ;
  - isochore : $\delta Q=C_V\,dT$ ;
  - isotherme (gaz parfait) : $\delta Q=P\, dV=-V\, dP$.

### Second principe

:::note[Second principe]
$$
\Delta S =S_{\text{créée}} + S_{\text{échangée}}, \qquad S_{\text{créée}}\ge 0
$$
:::

- Si la transformation est réversible : $S_{\text{créée}}=0$.
- $\displaystyle S_{\text{échangée}}=\sum_{i}\frac{Q_{i}}{T_{i}}$.

### Relation de Mayer (gaz parfait)

$$
C_{P}-C_{V}=nR \implies C_{V}=\frac{nR}{\gamma-1} \quad\text{et}\quad C_{P}=\frac{nR\gamma}{\gamma-1}
$$

avec $\displaystyle \gamma=\frac{C_{P}}{C_{V}}$.

### Lois de Laplace

Valables pour une transformation adiabatique réversible d'un gaz parfait :

- $PV^{\gamma}=C^{ste}$
- $TV^{\gamma-1}=C^{ste}$
- $T^{\gamma}P^{1-\gamma}=C^{ste}$

## Chapitre 2 : Machines thermiques

Sur un cycle : $\Delta U=\Delta P=\Delta T=\Delta V=\Delta S=0$, donc $\displaystyle W+\sum_{i = 1}^{n} Q_{i}=0$.

:::note[Inégalité de Clausius (sur un cycle)]
$$
\Delta S = 0 \ge S_{\text{éch}} \implies \sum_{i}\frac{Q_{i}}{T_{i}} \le 0
$$
Égalité si le cycle est réversible, car alors $S_{\text{créée}}=0$.
:::

### Moteur

:::note[Définition]
$W < 0$, $Q_{c} > 0$, $Q_{f} < 0$ : on prélève de la chaleur à la source chaude, on en rend une partie à la source froide et le reste est transformé en travail.
:::

- Rendement : $\displaystyle \eta=\left\lvert \frac{E_{utile}}{E_{\text{coûteuse}}} \right\rvert=\left\lvert \frac{W}{Q_{c}} \right\rvert=-\frac{W}{Q_{c}}$.

:::note[Théorème de Carnot (moteur)]
Le rendement ne peut pas dépasser $\displaystyle \eta_{Carnot}=\frac{T_{c}-T_{f}}{T_{c}}$.
:::

:::note[Preuve]
$W=-Q_{c}-Q_{f} \implies \displaystyle \eta=-\frac{W}{Q_{c}}=1+\frac{Q_{f}}{Q_{c}}$.

Clausius : $\displaystyle \frac{Q_{c}}{T_{c}}+\frac{Q_{f}}{T_{f}}\le 0 \implies Q_{f}\le-\frac{Q_{c}T_{f}}{T_{c}} \implies \frac{Q_{f}}{Q_{c}}\le -\frac{T_{f}}{T_{c}}$ (car $Q_c > 0$).

Donc $\displaystyle \eta \le 1-\frac{T_{f}}{T_{c}}$.
:::

### Récepteur

:::note[Définition]
$W > 0$, $Q_{c} < 0$, $Q_{f} > 0$ : le travail reçu permet un transfert thermique contraire à l'échange spontané. Le système reçoit de l'énergie thermique de la source froide et en cède à la source chaude.
:::

#### Machine frigorifique

Refroidit la source froide en chauffant l'air ambiant.

- Efficacité : $\displaystyle e=\left\lvert \frac{Q_{f}}{W} \right\rvert=\frac{Q_{f}}{W}$.

:::note[Théorème de Carnot (machine frigorifique)]
L'efficacité ne peut pas dépasser $\displaystyle e_{Carnot}=\frac{T_{f}}{T_{c}-T_{f}}$.
:::

:::note[Preuve]
$W=-Q_{c}-Q_{f} \implies \displaystyle e=\frac{Q_{f}}{W}=-\frac{Q_{f}}{Q_{c}+Q_{f}}=-\frac{1}{1+\frac{Q_{c}}{Q_{f}}}$.

Clausius : $\displaystyle \frac{Q_{c}}{T_{c}}+\frac{Q_{f}}{T_{f}}\le 0 \implies \frac{Q_{c}}{Q_{f}}\le -\frac{T_{c}}{T_{f}} \implies 1+\frac{Q_{c}}{Q_{f}}\le 1-\frac{T_{c}}{T_{f}}$.

En multipliant par $-1$ puis en passant à l'inverse (termes de même signe) : $\displaystyle e\le\frac{T_{f}}{T_{c}-T_{f}}$.
:::

#### Pompe à chaleur

Réchauffe la source chaude.

- Efficacité : $\displaystyle e=\left\lvert \frac{Q_{c}}{W} \right\rvert=-\frac{Q_{c}}{W}$.

:::note[Théorème de Carnot (pompe à chaleur)]
L'efficacité ne peut pas dépasser $\displaystyle e_{Carnot}=\frac{T_{c}}{T_{c}-T_{f}}$.
:::

:::note[Preuve]
$W=-Q_{c}-Q_{f} \implies \displaystyle e=-\frac{Q_{c}}{W}=\frac{Q_{c}}{Q_{c}+Q_{f}}=\frac{1}{1+\frac{Q_{f}}{Q_{c}}}$.

Clausius : $\displaystyle \frac{Q_{c}}{T_{c}}+\frac{Q_{f}}{T_{f}}\le 0 \implies Q_{f}\le-\frac{Q_{c}T_{f}}{T_{c}} \implies \frac{Q_{f}}{Q_{c}}\ge -\frac{T_{f}}{T_{c}}$ car $Q_{c} < 0$.

Donc $\displaystyle 1+\frac{Q_{f}}{Q_{c}}\ge 1-\frac{T_{f}}{T_{c}}$ et, les deux membres étant positifs, $\displaystyle e\le \frac{T_{c}}{T_{c}-T_{f}}$.
:::

### Cycle de Carnot (idéal)

:::note[Définition]
Cycle réversible d'une machine ditherme composé de :

- deux isothermes (une à $T_{f}$, une à $T_c$) ;
- deux adiabatiques, donc isentropiques car réversibles.

:::

L'aire du cycle dans un diagramme $(P,V)$ représente $\lvert W \rvert$.

:::tip[Méthode]

- La transformation est réversible : $S_{\text{créée}}=0 \implies \displaystyle \Delta S=S_{\text{échangée}}=\sum_{i}\frac{Q_{i}}{T_{i}}$.
- Isentropique de $A$ à $B$ : adiabatique $\implies \delta Q=0 \implies dS=0$.
- Isotherme de $A$ à $B$ : $\displaystyle \Delta S=S_{e}=\frac{Q}{T}\implies Q=T(S_{B}-S_{A})$.
- Sur un cycle : $\Delta U=0$.

:::

## Chapitre 3 : Changement de phase d'un corps pur

:::caution
Un changement de phase se fait à température et pression constantes.
:::

<img src="/assets/docs/Mécanique des fluides et thermodynamique/Diagramme d'équilibre du corps pur.png" alt="Diagramme d'équilibre du corps pur" width="550" />

<img src="/assets/docs/Mécanique des fluides et thermodynamique/Représentation des phases sur le diagramme de Clapeyron.png" alt="Représentation des phases sur le diagramme de Clapeyron" width="550" />

<img src="/assets/docs/Mécanique des fluides et thermodynamique/Isothermes d'Andrews.png" alt="Isothermes d'Andrews" width="550" />

Le changement de phase se faisant à pression constante, la pression ne change pas entre $V$ et $L$.

### Équation de Clausius-Clapeyron

$$
\frac{dP_{v}}{dT}=\frac{L_{v}}{T\,\Delta V}
$$

## Chapitre 4 : Mécanique des fluides

:::note[Définitions]

- Écoulement **stationnaire** $\iff \vec{v}(\vec{r},t)=\vec{v}(\vec{r})$ $\implies$ trajectoires, lignes de courant et lignes d'émission confondues.
- **Trajectoire** : équation horaire du mouvement $x(t)$, $y(t)$, $z(t)$.
- **Ligne de courant** : courbe qui, à un instant $t$, est en tout point tangente à la vitesse des particules de fluide (ligne de champ du champ eulérien des vitesses).
- **Ligne d'émission** : courbe décrivant, à l'instant $t$, la position de l'ensemble des particules passées antérieurement par un même point $(x_{0},y_{0})$.

:::

:::note[Dérivée particulaire]
Soit $g$ une grandeur quelconque ($P$, $T$, etc.) :
$$
\frac{Dg}{Dt}=\frac{g(\vec{r}+\vec{dr}, t+dt)-g(\vec{r},t)}{dt} \quad \text{avec } \vec{dr}=\vec{v}(\vec{r},t)\,dt
$$
$$
\frac{Dg}{Dt}=\underbrace{ \frac{ \partial g }{ \partial t } }_{ \text{dérivée locale} }+\underbrace{ \vec{v}\cdot \overrightarrow{\text{grad}}\,g }_{ \text{dérivée convective} }
$$
:::

:::tip[Méthode (caractériser un écoulement)]

1. Choisir la représentation (Lagrange ou Euler).
2. Stationnaire ou non.
3. Écoulement plan ou non.
4. Incompressible ou non : $\vec{\nabla}\cdot \vec{v}=0$ (vrai si $\rho=C^{ste}$, fluide incompressible).
5. Irrotationnel ou non : $\vec{\nabla}\wedge \vec{v}=\vec{0}$.

:::

Rappel : $P_{1}+\rho g z_{1}=P_{2}+\rho g z_{2}\iff\Delta P=-\rho g\Delta z$, lien entre pression et altitude.

### Cinématique : description de Lagrange

**Le mouvement macroscopique est défini par le mouvement de chaque particule.**

- Vitesse lagrangienne d'une particule $i$ : $\displaystyle \vec{V_{i}}(t)=\frac{d}{dt}\vec{R_{i}}(t)$, avec $\vec{R_{i}}(t)$ le vecteur position de la particule à l'instant $t$.
- Accélération : $\displaystyle \vec{A}(t)=\frac{d}{dt}\vec{V}(t)$.

:::info[Exemple]
Étudier un trafic routier en suivant chaque voiture.
:::

:::tip[Méthode (trajectoire, approche lagrangienne)]
On suit une particule de fluide le long de sa trajectoire : $\vec{V}(t)=\vec{v}(\vec{r}=\vec{R}(t),t)$ et $\displaystyle \vec{V}(t)=\frac{d}{dt}\vec{R}(t)$, soit :
$$
\begin{cases}  \dot{X}=v_{x}(X(t),Y(t),Z(t),t) \\ \dot{Y}=v_{y}(X(t),Y(t),Z(t),t) \\ \dot{Z}=v_{z}(X(t),Y(t),Z(t),t)\end{cases}
$$
On intègre pour obtenir $X(t)$, $Y(t)$ et $Z(t)$.
:::

### Cinématique : description d'Euler

Il est impossible de calculer toutes les trajectoires, d'où une nouvelle approche : **l'écoulement est représenté par un champ de vitesse**.

- Vitesse eulérienne : $\vec{v}(M,t)=\vec{v}(\vec{r},t)=\vec{v}(x,y,z,t)$, vitesse de la particule qui passe par $M$ à l'instant $t$.
- L'espace $\vec{r}$ et le temps $t$ sont des variables indépendantes. On peut de même définir des champs de pression, de température, etc.
- Champ d'accélération :
  $$
  \vec{a}(\vec{r},t)=\frac{D\vec{v}}{Dt}=\frac{ \partial \vec{v} }{ \partial t } + (\vec{v}\cdot \overrightarrow{\text{grad}})\,\vec{v}
  $$

:::tip[Méthode (lignes de courant, approche eulérienne)]
À un instant $t_0$ fixé, le déplacement élémentaire $\vec{dl}$ le long d'une ligne de courant est colinéaire à la vitesse : $\vec{dl}\wedge \vec{v}(M,t_{0})=\vec{0}$, soit :
$$
\frac{dx}{v_{x}(x,y,z,t_{0})}=\frac{dy}{v_{y}(x,y,z,t_{0})}=\frac{dz}{v_{z}(x,y,z,t_{0})}
$$
On intègre pour obtenir les équations des lignes de courant.
:::

### Lien entre les deux descriptions

- $\vec{V}(t)=\vec{v}(\vec{r}=\vec{R}(t),t)$
- $\vec{A}(t)=\vec{a}(\vec{r}=\vec{R}(t),t)$

### Statique des fluides

:::note[Relation fondamentale de l'hydrostatique]
$$
\overrightarrow{\text{grad}}\,p=\rho \vec{g} \implies p=p(z)
$$
:::

:::note[Preuve]
PFS avec deux forces : le poids $\vec{P}$ et les forces de pression $\vec{F_{p}}$.

- $\displaystyle \vec{F_{p}}=\oiint_{\partial\Omega}-p\,\vec{n}\,dS$ : somme des pressions exercées sur la surface du volume.
- $\vec{P}=m\vec{g}$ avec $\displaystyle m=\iiint_{\Omega}\rho\, dV$.

$$
\sum \vec{F}_{ext}=\vec 0
\iff \iiint_{\Omega}\rho \vec{g}\,dV=\oiint_{\partial\Omega}p\,\vec{n}\,dS
\iff \iiint_{\Omega}\rho \vec{g}\,dV=\iiint_{\Omega}\overrightarrow{\text{grad}}\,p\ dV
$$
par le théorème d'Ostrogradski-Gauss, d'où $\overrightarrow{\text{grad}}\,p=\rho \vec{g}$.
:::

- Force de pression élémentaire : $\vec{dF_{p}}=-p\, \vec{n}\,dS$.
- Poussée d'Archimède : $\vec{F}_{a}=-\rho V_{i}\vec{g}$, avec $V_i$ le volume **immergé**.
- Moment des forces de pression :
  $$
  \vec M_{O}=\iint_{M\in S}\overrightarrow{OM}\wedge(-p\,\vec{n})\,dS=\iint_{M\in S}\overrightarrow{OM}\wedge \vec{dF}=\overrightarrow{OP}\wedge \vec{F}
  $$
- Centre de poussée :
  $$
  z_{p}=\frac{\displaystyle\iint_{M\in S}z\,dF}{\displaystyle\iint_{M\in S}dF}
  $$
