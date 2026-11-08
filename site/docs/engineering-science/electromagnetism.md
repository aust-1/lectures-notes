---
title: Électromagnétisme
description: Notes de cours sur les forces électromagnétiques, les équations de Maxwell et les symétries des champs.
slug: electromagnetism
tags: [lecture notes, A2, science engineering, electromagnetism]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes d'électricité](electricity.md)

:::note[Lexique]

- $i$ : intensité du courant.
- $q$ : charge ponctuelle.
- $\rho$ : densité volumique de charge.
- $\sigma$ : conductivité.
- $\mu_{0}$ : perméabilité magnétique du vide.
- $\varepsilon_{0}$ : permittivité électrique du vide.
- $e$ : force électromotrice induite.
- $\vec{j}$ : vecteur densité de courant.
- $\vec{v}$ : vitesse des particules.
- $\vec{B}$ : champ magnétique.
- $\vec{E}$ : champ électrique.

:::

## Chapitre 1 : Courant et forces

### Densité de courant

$$
\vec{j}=\sum_{i} n_{i}q_{i}\vec{v}_{i}=\rho\, \vec{v}=\sigma\, \vec{E}
\implies i=\iint \vec{j}\cdot \overrightarrow{dS}
$$

### Forces

- **Loi de Coulomb** :
  $$
  \overrightarrow{F_{1\to 2}}=\frac{q_{1}q_{2}}{4\pi\varepsilon_{0}}\frac{\overrightarrow{M_{1}M_{2}}}{\| \overrightarrow{M_{1}M_{2}} \| ^{3}}
  $$
- **Force électrique** : $\overrightarrow{F_{el}}=q\, \vec{E}$.
- **Force magnétique** : $\overrightarrow{F_{mag}}=q\,\vec{v}\wedge \vec{B}$.

:::note[Force de Lorentz]
$$
\vec{F}=q\left(\vec{E}+\vec{v}\wedge \vec{B}\right)
$$
:::

### Induction

:::note[Loi de Faraday]
$$
e=-\frac{d\Phi_{B}}{dt} \quad \text{avec} \quad \Phi_{B}=\iint \vec{B}\cdot\overrightarrow{dS}
$$
:::

## Chapitre 2 : Équations de Maxwell

- **Maxwell-Gauss** : $\displaystyle \text{div}\, \vec{E}=\frac{\rho}{\varepsilon_{0}}$.
- **Maxwell-Faraday** : $\displaystyle \overrightarrow{\text{rot}}\, \vec{E}=-\frac{ \partial \vec{B} }{ \partial t }$.
- **Maxwell-Thomson** : $\text{div}\, \vec{B}=0$.
- **Maxwell-Ampère** : $\displaystyle \overrightarrow{\text{rot}}\, \vec{B}=\mu_{0}\left( \vec{j}+\varepsilon_{0}\frac{ \partial \vec{E} }{ \partial t } \right)$.

### Onde plane progressive harmonique

$$
\vec{E}=\vec{E}_{0}\,e^{ i(\omega t-\vec{k}\cdot \vec{r}) }
\qquad
k=\frac{\omega}{c}=\frac{2\pi}{\lambda}
$$

## Chapitre 3 : Symétries et invariances

:::tip[Méthode]

1. Choisir le système de coordonnées adapté.
2. Étudier les invariances (translation, rotation) et les symétries de la distribution.
3. En déduire les variables dont dépend le champ et sa direction :
   - $\vec{E}$ pour une distribution de charges fixes ;
   - $\vec{B}$ pour une distribution de courants.

:::

:::note[Symétries des champs]

- $\vec{E}$ est contenu dans les plans de symétrie de la distribution de charges.
- $\vec{E}$ est orthogonal aux plans d'antisymétrie de la distribution de charges.
- $\vec{B}$ est contenu dans les plans d'antisymétrie de la distribution de courants.
- $\vec{B}$ est orthogonal aux plans de symétrie de la distribution de courants.

:::

:::info[Exemple]

- Champ invariant par translation suivant $(Ok)$ $\implies$ le champ ne dépend pas de $k$ : $\vec B(i,j,k)=\vec B(i,j)$.
- Le plan $(O;\vec{e_{j}}, \vec{e_{k}})$ est un plan de symétrie de la distribution de courants $\implies$ le champ magnétique est dirigé par $\vec{e}_{i}$ : $\vec B(i,j,k)=B(i,j,k)\,\vec{e_{i}}$.

:::
