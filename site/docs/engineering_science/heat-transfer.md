---
title: Transferts thermiques
description: Notes de cours sur la conduction, la convection, les résistances thermiques et l'équation de la chaleur.
slug: heat-transfer
tags: [lecture notes, A2, science engineering, thermodynamics]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de thermodynamique](thermodynamics.md)

:::info[Hypothèses à préciser]

- Régime stationnaire ou non.
- Température uniforme ou non.
- Milieu isotrope ou non.

:::

## Chapitre 1 : Grandeurs thermiques et résistance thermique

- **Conductivité thermique** $\lambda$ (ou $k$) en $\text{W} \cdot \text{m}^{-1} \cdot \text{K}^{-1}$ : capacité d'un matériau à conduire la chaleur.
- **Puissance thermique** $\dot{Q}$ : débit de chaleur $Q$ par unité de temps, de la **partie chaude vers la partie froide**.

### Analogie avec l'électricité

$$
\begin{cases} U=R\times I \\ \Delta T_{(A \to B)} = R_{th} \times \dot{Q} \\ \Delta T_{(A \to B)} = r_{th} \times \dot{q} \end{cases}
$$

- $R_{th}$ en $\text{K}\cdot \text{W}^{-1}$.
- $r_{th}$ en $\text{m}^{2}\cdot \text{K}\cdot \text{W}^{-1}$.
- Densité de flux : $\displaystyle \dot{q}=\varphi =\frac{\dot{Q}}{S}$ en $\text{W}\cdot \text{m}^{-2}$.
- Résistances en série : $R_{th}=R_{A}+R_{1}+\dots + R_{B}$.
- Résistances en parallèle : $\displaystyle \frac{1}{R_{th}}=\frac{1}{R_{1}}+\frac{1}{R_{2}}+\dots$

## Chapitre 2 : Modes de transmission de la chaleur

- **Conduction** : dans les solides, transfert par les électrons libres (particulièrement important dans les métaux). Dans les liquides et les gaz, transfert d'énergie de mouvement entre molécules : les molécules les plus « chaudes » cèdent de l'énergie aux molécules voisines de plus faible énergie.
  Loi de Fourier : $\vec{\dot{Q}}=-\lambda \, A \, \vec{\nabla}T$.
- **Convection** : entre un solide et un fluide. Elle est **forcée** lorsque le fluide est mis en mouvement par une pompe ou un ventilateur, **naturelle** lorsque la différence de densité due à la différence de température crée une circulation du fluide au voisinage de la paroi.
  Loi de Newton : $\dot{Q}=h \, A \, (T_s-T_\infty )$.
- **Rayonnement** : à travers les gaz ou le vide, par ondes électromagnétiques.
  Loi de Stefan-Boltzmann : $\dot{Q} = \sigma\,\epsilon\,A\,(T_s^4-T_\infty^4 )$.

### Conduction thermique

Intuitivement, dans une barre : $\dot{Q} \propto \dfrac{\lambda \, A \, \Delta T}{L}$.

:::note[Loi de Fourier]
$$
\vec{\dot{Q}}=-\lambda \, A \, \vec{\nabla}T=- \lambda \, A \, \overrightarrow{\text{grad}}\,T
$$

- $\vec{\dot{Q}}$ en $\text{W}$.
- $\lambda$ en $\text{W} \cdot \text{m}^{-1} \cdot \text{K}^{-1}$.
- $A$ en $\text{m}^{2}$ : surface de la paroi normale au flux.
- $\overrightarrow{\text{grad}}\,T$ en $\text{K}\cdot \text{m}^{-1}$, dépend du système de coordonnées :
  - cartésiennes : $\left(  \frac{ \partial T }{ \partial x }, \frac{ \partial T }{ \partial y }, \frac{ \partial T }{ \partial z } \right)^{\text{T}}$
  - cylindriques : $\left(   \frac{ \partial T }{ \partial r }, \frac{1}{r} \frac{ \partial T }{ \partial \theta }, \frac{ \partial T }{ \partial z }  \right)^{\text{T}}$
  - sphériques : $\left(   \frac{ \partial T }{ \partial r }, \frac{1}{r} \frac{ \partial T }{ \partial \theta }, \frac{1}{r \sin \theta} \frac{ \partial T }{ \partial \varphi }  \right)^{\text{T}}$

:::

:::caution
Le signe $-$ suppose que $\vec{\dot{Q}}$ est orienté dans le sens de l'axe $\vec{x}$ ; sinon, il disparaît.
:::

- Mur plan 1D : $\displaystyle R_{th}=\frac{e}{\lambda S}$.

:::note[Preuve (mur plan)]
$\vec{\dot{Q}}=\dot{Q}\,\vec{x}$ et $\displaystyle -\lambda A \vec{\nabla}T=-\lambda A \frac{dT}{dx}\,\vec{x}$, donc :
$$
\int_{x_{1}}^{x_{2}} \dot{Q} \, dx=\int_{T_{1}}^{T_{2}} -\lambda A\, dT
\implies \Delta T=T_{1}-T_{2}=\frac{\dot{Q}(x_{2}-x_{1})}{\lambda A}
$$
$$
\implies R_{th}=\frac{x_{2}-x_{1}}{\lambda A}=\frac{e}{\lambda A}
$$
:::

- Cylindre homogène, flux radial : $\displaystyle R_{th}= \frac{1}{2\pi \lambda L}\ln \frac{r_{2}}{r_{1}}$.

:::note[Preuve (cylindre)]
$\vec{\dot{Q}}=\dot{Q}\,\vec{e_{r}}$ et $\displaystyle \dot{Q}=-\lambda \, 2\pi r L \, \frac{dT}{dr}$, donc :
$$
\int_{r_{1}}^{r_{2}} \frac{\dot{Q}}{r} \, dr=\int_{T_{1}}^{T_{2}} -2\pi\lambda L\, dT
\implies \dot{Q}(\ln r_{2}-\ln r_{1})=-2\pi\lambda L(T_{2}-T_{1})
$$
$$
\implies \Delta T=T_{1}-T_{2}=\frac{\dot{Q}}{2\pi \lambda L}\ln \frac{r_{2}}{r_{1}}
\implies R_{th}=\frac{\ln \frac{r_{2}}{r_{1}}}{2\pi \lambda L}
$$
:::

### Nombre de Biot

:::note[Définition]
$$
Bi=\frac{h\, L_{c}}{\lambda}
$$
avec la longueur caractéristique $\displaystyle L_{c}=\frac{V}{S}$.

- Si $Bi \gtrsim 1$ : gradients de $T$ dans le système $\iff$ température non uniforme.
- Si $Bi \ll 1$ (typiquement $Bi < 0{,}1$) : hypothèse de $T$ quasi uniforme $\iff$ on néglige les gradients de $T$.

:::

:::note[Preuve]
Peut-on négliger les gradients de $T$ ? On étudie le rapport entre $\dot{Q}_{conv}$ et $\dot{Q}_{cond}$ :
$$
Bi=\frac{\dot{Q}_{conv}}{\dot{Q}_{cond}}=\frac{h\,S\,\Delta T}{\lambda S\frac{\Delta T}{\Delta x}}=\frac{h\,\Delta x}{\lambda}
$$
avec $\Delta x$ la longueur caractéristique.
:::

### Convection thermique

:::note[Loi de Newton]
$$
\dot{Q}=h \, S \, (T_s-T_\infty )
$$

- $\dot{Q}$ en $\text{W}$.
- $h$ en $\text{W}\cdot \text{m}^{-2} \cdot \text{K}^{-1}$.
- $S$ en $\text{m}^{2}$ : surface de contact entre la paroi et le fluide.
- $\Delta T$ en $\text{K}$.

:::

- Résistance de convection : $\displaystyle R_{th}=\frac{1}{hS}$.

:::note[Preuve]
$\displaystyle \Delta T = R_{th} \, \dot{Q} \iff R_{th}=\frac{\Delta T}{hS\,\Delta T}=\frac{1}{hS}$
:::

### Rayon critique

Pour un cylindre ou une sphère, ajouter de l'isolant augmente aussi la surface d'échange avec l'extérieur, donc la convection. Jusqu'à une épaisseur appelée **rayon critique** $r_{cr}$, $\dot{Q}$ augmente, puis diminue une fois $r > r_{cr}$ :

- cylindre : $\displaystyle r_{cr}=\frac{\lambda}{h}$ ;
- sphère : $\displaystyle r_{cr}=\frac{2\lambda}{h}$.

## Chapitre 3 : Équation de diffusion de la chaleur

### Système uniforme

- $dU=\delta Q+\delta W$ avec $dU=m\, c\, dT$ et $\delta Q=\dot{Q}\,dt$.
- Donc : $\displaystyle C\, \frac{dT}{dt}=\dot{Q}+\dot{W}$.

:::info[Exemple (système 1D sans source de chaleur)]
Bilan sur une tranche d'épaisseur $\Delta x$ :
$$
\frac{\delta Q_{in}}{dt}=-\lambda S\frac{\partial T}{\partial x}\Big|_{x}
\qquad
\frac{\delta Q_{out}}{dt}=-\lambda S\frac{\partial T}{\partial x}\Big|_{x+\Delta x}
$$
$$
\delta Q=\delta Q_{in}-\delta Q_{out}= \lambda S\, dt\left(\frac{\partial T}{\partial x}\Big|_{x+\Delta x}-\frac{\partial T}{\partial x}\Big|_{x}\right)
$$
Par développement limité d'ordre 1 : $\displaystyle \frac{\partial T}{\partial x}\Big|_{x+\Delta x} = \frac{\partial T}{\partial x}\Big|_{x}+\Delta x\,\frac{\partial^{2}T}{\partial x^{2}}\Big|_{x}$, d'où :
$$
\delta Q=\lambda S\, \Delta x\,\frac{\partial^{2}T}{\partial x^{2}}\, dt
$$
Or $\delta Q=c\,\rho\, S\,\Delta x\, dT$, donc :
$$
\frac{\partial T}{\partial t}=\frac{\lambda}{\rho\, c}\frac{\partial^{2}T}{\partial x^{2}}
$$
:::

### Cas général

Avec $\omega$ la puissance volumique des sources internes :

$$
\frac{\partial T}{\partial t} = \frac{\lambda}{\rho\, c} \nabla^{2} T+\frac{\omega}{\rho\, c}
$$
