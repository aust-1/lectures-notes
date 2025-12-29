---
title: Mécanique I - Statique
description: Notes de cours sur les torseurs, la statique et les bases de cinématique du solide.
slug: meca-i-static
tags: [lecture notes, A1, science engineering, meca]
last_update:
  date: 2025-12-29
  author: Eliott A. Roussille
---

## Chapitre 1 : Torseurs et moments

- **Torseur au point A** : défini par sa résultante $\vec R = \sum \vec F$ et son moment $\vec M(A)$.
- **Transport des moments** : $\vec M(P) = \vec M(A) + \overrightarrow{PA} \wedge \vec R$.
- **Équiprojectivité** : $\overrightarrow{PA} \cdot \vec M(P) = \overrightarrow{PA} \cdot \vec M(A)$.
- **Glisseur** : $\vec R \neq 0$ et il existe $A$ tel que $\vec R \cdot \vec M(A) = 0$.

## Chapitre 2 : Statique et PFS

En mécanique statique, on étudie les solides en équilibre sous l'action de forces.

- **Équilibre d'un système** : $\vec R = \vec 0$ et $\vec M = \vec 0$.
- **Théorème de la résultante statique** : $\sum \vec F_{ext} = \vec 0$.
- **Théorème des moments** : $\sum \vec M_{ext}(A) = \vec 0$ pour tout point $A$.
- **Couple d'efforts** : intervient dans le calcul du moment mais pas dans la résultante.

## Chapitre 3 : Cinématique du solide

- **Transport des vitesses** : $\vec V(Q) = \vec V(P) + \overrightarrow{QP} \wedge \vec \Omega$.
- **Vecteur rotation** : $\vec \Omega_{01} = \dot \theta\, \vec z_0$ (rotation autour de $z_0$).

### Changement de base et dérivation

- $\vec x_1 = \cos\theta\, \vec x_0 + \sin\theta\, \vec y_0$.
- Sa dérivée : $(cos\theta)' \vec x_0+cos\theta (\vec x_0)'+(sin\theta)' \vec y_0+sin\theta (\vec y_0)'=\dot \theta(-sin\theta \vec x_0+cos \theta \vec y_0)=\dot \theta \vec y_1$.
  > Car $\vec x_0$ et $\vec y_0$ sont fixes et $cos(f(x))'=-f'(x)sinf(x)$ et $\theta$ dépend du temps

- $\displaystyle \frac{d_0 \vec x_1}{dt} = \frac {d_1 \vec x_1} {dt}+\vec \Omega_{01} \wedge \vec x_1= \dot \theta\, \vec y_1$.
  > Car dans le repère 1, $\vec x_1$ est fixe donc sa dérivée est nulle et $\vec \Omega_{01} \wedge \vec x_1 = \dot \theta\, \vec z_0 \wedge \vec x_1 = \dot \theta\, \vec y_1$.

- **Formule de changement de base** :
  $$
  \frac{d_0(\vec X)}{dt} = \frac{d_1(\vec X)}{dt} + \vec \Omega_{01} \wedge \vec X
  $$

### Vitesse absolue, relative, d'entraînement

- **Mouvement absolu** : observation depuis $\xi_0$.
- **Mouvement relatif** : observation depuis $\xi_1$.
- **Mouvement d'entraînement** : mouvement de $\xi_1$ par rapport à $\xi_0$.
- $\vec V_a = \vec V_0$.
- $\vec V_r = \vec V_1 = \dfrac{d_1}{dt}\, \overrightarrow{O_1P}(t)$.
- $\vec V_e = \vec V_0(O_1) + \overrightarrow{PO_1} \wedge \vec \Omega_{01}$.
- **Composition** : $\vec V_a = \vec V_r + \vec V_e$.

### Vitesse de glissement de S2 sur S1

- $\vec U_{12} = \vec V_1(I_2) = \vec V_1(O_2) + \overrightarrow{I_2O_2} \wedge \vec \Omega_{12}$.

## Chapitre 4 : Inertie et résultantes

### Opérateur linéaire d'inertie

- $\displaystyle II(O,S)\, \vec u = \int_S (\overrightarrow{OP} \wedge \vec u) \wedge \overrightarrow{OP}\, dm$.
- $II(O,S) = II(O,G) + m\,[\text{matrice de déplacement}]$.

### Résultantes cinétiques et dynamiques

- **Résultante cinétique** : $\vec R_0(S) = m\, \vec V_0(G)$.
- **Moment cinétique** : $\displaystyle \vec \sigma_{0c} = \int_S \overrightarrow{AP} \wedge \vec V_0(P)\, dm$.
- Si $G$ est le centre de masse ou est fixe dans $\xi_0$ : $\vec \sigma_{0c} = II(G,S)\, \vec \Omega_{0S}$.
- **Résultante dynamique** : $\vec R_0(S) = m\, \vec a_0(G)$.
- **Moment dynamique** : $\displaystyle \vec \delta_{0d}(A,\Sigma) = \int_S \overrightarrow{AP} \wedge \vec \gamma_0(P)\, dm$.
- Si $G$ est le centre de masse ou est fixe dans $\xi_0$ : $\vec \delta_{0d}(G) = \dfrac{d_0}{dt}\, \vec \sigma_{0c}(G)$.
