---
title: Thermodynamique
description: Notes de cours sur la thermodynamique systemes, bilans d'énergie et entropie.
slug: thermodynamique
tags: [lecture notes, A1, science engineering, thermodynamics]
last_update:
  date: 2025-01-12
  author: Eliott A. Roussille
---

## Chapitre 1 : Cadre et vocabulaire

- Systeme ouvert : échange masse et énergie avec l'environnement.
- Systeme fermé : échange énergie mais pas de masse.
- Systeme isolé : aucun échange de masse ou d'énergie.

:::note Frontières

- Adiabatique : bloque les transferts de chaleur.
- Diatherme : laisse passer la chaleur.
:::

### Variables d'état

- Extensives (proportionnelles à la taille) : $V, n, m, q, S\dots$
- Intensives (indépendantes de la taille) : $p, T, C\dots$
- Un système simple se décrit par trois variables : une de taille, une mécanique, une thermique.

### Grandeurs caractéristiques

- Pression $p$ : effort surfacique $d\vec F = -p \vec n\, dS$ (état mécanique).
- Température $T$ : traduit l'agitation microscopique.

> Principe zéro : si A et B sont chacun en équilibre thermique avec C alors A et B sont en équilibre thermique et partagent la même température.

## Chapitre 2 : Inventaire des énergies

- Équivalences : $1\sim J = 1\sim N \cdot m = 1\sim W \cdot s$, $1\sim cal = 4.18\sim J$, $1\sim Wh = 3600\sim J$.
- Énergie totale conservée pour un système isolé : $E_t = \sum E_i$ ; énergie massique $e = E_t / m$.

### Énergies macroscopiques $E_m$

- Énergie cinétique (translation) : $E_c = \frac12 m v^2$.
- Énergie cinétique (rotation) : $E_c = \frac12 I \omega^2$.
- Énergie potentielle de pesanteur : $E_p = m g z$ et $\vec F = -\vec \nabla E_p$.

:::caution Forces conservatives
Seules les forces conservatives possèdent une énergie potentielle associée.
:::

### Énergie microscopique $U$

- Énergie interne liée à la structure microscopique (agitations, liaisons, configuration).

## Chapitre 3 : Équations d'état et coefficients

### Coefficients thermoélastiques

- Dilatation volumique : $\displaystyle \alpha_V = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_{p}$ en $K^{-1}$.
- Variation relative de pression : $\displaystyle \alpha_p = \frac{1}{p}\left(\frac{\partial p}{\partial T}\right)_{V}$ en $K^{-1}$.
- Compressibilité isotherme : $\displaystyle \mathcal{K}_T = -\frac{1}{V}\left(\frac{\partial V}{\partial p}\right)_T$ en $Pa^{-1}$.
Relation utile : $\alpha_V = p\, \alpha_p\, \mathcal{K}_T$.

### Gaz parfait

- Équation d'état : $pV = nRT$.

## Chapitre 4 : Premier principe (système fermé)

> Bilan général : $E_t = U + E_m$ et $\Delta E_t = Q + W$ avec $Q$ chaleur reçue, $W$ travail reçu.

- Variation d'énergie interne : $\Delta U = Q + W - \Delta E_m$ (centre de masse fixe : $\Delta E_m = 0$).
- Travail des forces de pression (transformation quasi statique) : $W = -\int p_{ext}\, dV$.
- Travail des forces conservatives : $W = -\Delta E_p$.

### Chaleur et calorimetrie

- Chaleur échangée en régime global : $Q = m\, c\, \Delta T$.
- Capacités massiques d'un gaz parfait : $C_p$ à pression constante, $C_V$ à volume constant.

## Chapitre 5 : Deuxième principe et entropie

- Entropie d'une transformation réversible : $dS = \delta Q_{rev} / T$.
- Gaz parfait (différentielles utiles) :
  - $\delta Q_{rev} = C_V\, dT + p\, dV$
  - $\delta Q_{rev} = C_p\, dT - V\, dp$

Cas particuliers :

- Isobare : $\delta Q = C_p\, dT$
- Isochore : $\delta Q = C_V\, dT$
- Isotherme : $\delta Q = p\, dV = -V\, dp$

:::tip Diagnostiquer l'irreversibilité
Pour une transformation réelle, $\Delta S > \displaystyle \int \frac{\delta Q}{T}$ ; l'égalité n'est atteinte que pour un chemin réversible.
:::

## Annexe : outils mathématiques

:::note Théorème de Schwarz
Une forme différentielle $P\,dx + Q\,dy$ est une différentielle totale exacte ssi $\displaystyle\left(\frac{\partial P}{\partial y}\right)_x = \left(\frac{\partial Q}{\partial x}\right)_y$

Pour $P\,dx + Q\,dy + R\,dz$, la forme est exacte ssi :

- $\displaystyle\left(\frac{\partial P}{\partial y}\right)_{x,z} = \left(\frac{\partial Q}{\partial x}\right)_{y,z}$
- $\displaystyle\left(\frac{\partial P}{\partial z}\right)_{x,y} = \left(\frac{\partial R}{\partial x}\right)_{y,z}$
- $\displaystyle\left(\frac{\partial Q}{\partial z}\right)_{x,y} = \left(\frac{\partial R}{\partial y}\right)_{x,z}$
:::
