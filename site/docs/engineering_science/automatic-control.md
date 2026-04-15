---
title: Automatique et asservissements
description: Notes de cours sur les fonctions de transfert, la stabilité et les performances des systèmes asservis.
slug: automatic-control
tags: [lecture notes, A2, science engineering, control]
last_update:
  date: 2026-04-15
  author: Eliott A. Roussille
---

## Chapitre 1 : Dynamique d'un système en rotation

- Loi fondamentale en rotation :
  $$
  \alpha(t) = \frac{\sum C}{J}
  $$
- $\alpha(t)$ : accélération angulaire en $\text{rad} \cdot \text{s}^{-2}$.
- $J$ : moment d'inertie en $\text{kg} \cdot \text{m}^2$.
- $\sum C$ : somme des couples de forces en $\text{N} \cdot \text{m}$.

Moments d'inertie utiles :

- Définition générale : $\displaystyle J = \int r^2\, dm$.
- Cylindre ou roue autour de l'axe central : $\displaystyle J = \frac{1}{2}mr^2$.

Frottement visqueux (modèle linéaire) :

- $C_f = -b\,\omega(t)$.
- $b$ : coefficient d'amortissement visqueux en $\text{N} \cdot \text{m} \cdot \text{s}$.

## Chapitre 2 : Fonctions de transfert

- Définition : $\displaystyle G(s) = \frac{Y(s)}{U(s)}$.
- Les **pôles** sont les racines du dénominateur.
- Les **zéros** sont les racines du numérateur.
- Un système linéaire est stable ssi tous les pôles ont une partie réelle strictement négative.

### Forme canonique du second ordre

$$
G(s)=\frac{K_s}{1 + 2\frac{\zeta}{\omega_0}s + \frac{s^2}{\omega_0^2}}
$$

Selon le facteur d'amortissement $\zeta$ :

- $0 < \zeta < 1$ : régime sous-amorti.
- $\zeta = 0$ : régime non amorti.
- $\zeta \ge 1$ : amortissement critique ou sur-amorti.

## Chapitre 3 : Systèmes bouclés et asservissement

<img src="/assets/docs/Automatique et asservissements/Schema asservissement.png" alt="Schema d'asservissement" width="520" />

:::note Lexique

- $R(s)$ : entrée (consigne).
- $Y(s)$ : sortie.
- $\varepsilon(s)$ : erreur.
- $C_d(s)$ : chaîne directe.
- $C_r(s)$ : chaîne de retour (souvent un simple gain).
- FTBO : fonction de transfert en boucle ouverte.
- FTBF : fonction de transfert en boucle fermée.

:::

- Boucle **fermée** : présence d'une rétroaction.
- Boucle **ouverte** : absence de rétroaction.

:::caution Retour unitaire
Si la flèche de retour est présente sans bloc explicite de retour, on prend $C_r(s)=1$.
:::

### Relations FTBO et FTBF

- En boucle ouverte :
  $$
  \text{FTBO}(s) = \frac{Y(s)}{R(s)} = C_d(s)
  $$
- En boucle fermée :
  $$
  Y = (R - C_rY)C_d
  $$
  $$
  Y(1 + C_rC_d) = RC_d
  $$
  $$
  \text{FTBF}(s) = \frac{Y(s)}{R(s)} = \frac{C_d(s)}{1 + C_d(s)C_r(s)}
  $$

## Chapitre 4 : Stabilité

Pour $\displaystyle \text{FT}(s)=\frac{N(s)}{D(s)}$ :

- Les racines de $N(s)$ sont les zéros.
- Les racines de $D(s)$ sont les pôles.

:::note Critère EBSB
Entrée bornée implique sortie bornée. Un système linéaire est stable ssi tous les pôles de sa FT ont une partie réelle strictement négative.
:::

### Critère de Routh-Hurwitz

:::caution
Ce critère s'applique à l'équation caractéristique en **boucle fermée**.
:::

$$
1 + C_d(s)C_r(s) = a_n s^n + a_{n-1}s^{n-1} + \dots + a_1s + a_0
$$

<img src="/assets/docs/Automatique et asservissements/Table de Routh-Hurwitz.png" alt="Table de Routh-Hurwitz" width="460" />

Le système est stable si tous les éléments de la première colonne existent et sont de même signe.

## Chapitre 5 : Performances

### Rapidité

Plus les racines de l'équation caractéristique $1 + C(s)G(s)$ sont à gauche dans le plan complexe (parties réelles plus négatives), plus le système est rapide.

### Précision

- Erreur :
  $$
  \varepsilon(s) = R(s) - Y(s)
  $$
  $$
  \varepsilon(s) = \frac{R(s)}{1 + C_d(s)C_r(s)}
  $$

:::note Théorème de la valeur finale
Si $f(t)=0$ pour $t<0$ et si tous les pôles de $sF(s)$ sont dans le demi-plan gauche, alors :

$$
\lim_{t \to +\infty} f(t) = \lim_{s \to 0} sF(s)
$$

Applications :

- $\displaystyle \varepsilon(\infty)=\lim_{s \to 0} s\,\varepsilon(s)$
- $\displaystyle y(\infty)=\lim_{s \to 0} s\,Y(s)$

:::

Relation de cours : $\displaystyle y(TD_1)=K\big(1 + D_{1\%}\big)$.
