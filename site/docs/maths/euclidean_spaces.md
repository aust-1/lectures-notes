---
title: Espaces euclidiens
description: Notes de cours sur le produit scalaire, les bases orthonormées, les projections et symétries orthogonales.
slug: euclidean_spaces
tags: [lecture notes, A2, maths, algebra]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes d'espaces vectoriels](vectorial_spaces.md)

## Chapitre 1 : Produit scalaire et bases orthonormées

### Produit scalaire

:::note[Définition]
Un **produit scalaire** sur un espace vectoriel réel $E$ est une application $\langle \cdot, \cdot \rangle : E \times E \to \mathbb{R}$ qui vérifie :

- **Symétrie** : $\langle x, y \rangle = \langle y, x \rangle$.
- **Linéarité** : $\langle ax + by, z \rangle = a \langle x, z \rangle + b \langle y, z \rangle$ pour $a, b \in \mathbb{R}$.
- **Positivité** : $\langle x, x \rangle \geq 0$, et $\langle x, x \rangle = 0$ si et seulement si $x = 0$.

:::

Norme associée : $\|x\| = \sqrt{\langle x, x \rangle}$.

:::note[Propriétés]

- **Inégalité de Cauchy-Schwarz** : $\lvert \langle x, y \rangle \rvert \leq \|x\| \, \|y\|$.
- **Inégalité triangulaire** : $\|x + y\| \leq \|x\| + \|y\|$.
- $\| x+y \| ^{2}=\| x \| ^{2}+2\langle x,y \rangle+\| y \| ^{2}$.
- **Théorème de Pythagore** : si $x,y \in E$ sont orthogonaux, $\| x+y \| ^{2}=\| x \| ^{2}+\| y \| ^{2}$.

:::

### Bases orthonormées

:::note[Définition]
Une **base orthonormée** d'un espace euclidien $E$ est une base $(e_1, \dots, e_n)$ telle que $\langle e_i, e_j \rangle = \delta_{ij}$ (produit scalaire nul pour $i \neq j$, égal à $1$ sinon).
:::

- Décomposition d'un vecteur $x \in F$ dans une base orthonormée $(e_1, \dots, e_n)$ de $F \subseteq E$ :
  $$
  x=\sum_{i = 1}^{n} \langle x, e_i \rangle e_i
  $$

:::tip[Méthode (orthonormalisation de Gram-Schmidt)]
Pour orthonormaliser une famille libre $(v_1, \dots, v_n)$ :

1. $\displaystyle e_1 = \frac{v_1}{\|v_1\|}$.
2. $u_2 = v_2 -\langle v_2, e_1 \rangle e_1$, puis $\displaystyle e_2 = \frac{u_2}{\|u_2\|}$.
3. $u_3 = v_3 - \langle v_3, e_1 \rangle e_1-\langle v_3, e_2 \rangle e_2$, puis $\displaystyle e_3 = \frac{u_3}{\|u_3\|}$.
4. De manière générale : $\displaystyle u_k = v_k - \sum_{i=1}^{k-1} \langle v_k, e_i \rangle e_i$ et $\displaystyle e_k = \frac{u_k}{\|u_k\|}$.

:::

## Chapitre 2 : Orthogonalité, adjoint et dual

### Supplémentaire orthogonal

Soit $F$ un sous-espace de $E$. Son **supplémentaire orthogonal** est :

$$
F^\perp = \{ x \in E \mid \forall y \in F, \langle x, y \rangle = 0 \}
$$

- $\dim F + \dim F^\perp = \dim E$.
- $F \oplus F^{\perp}=E$.
- Toute base orthonormée de $F$ se complète en une base orthonormée de $E$ par une base orthonormée de $F^\perp$.

### Adjoint

:::note[Définition]
Pour tout $u\in \mathcal{L}(E)$, il existe un unique endomorphisme $u^{*}\in \mathcal{L}(E)$ tel que :
$$
\forall x, y \in E, \quad \langle u(x), y \rangle =\langle x, u^*(y)\rangle
$$
Dans une base orthonormée, la matrice de $u^*$ est la transposée de celle de $u$ : $A^{*}={}^{t}A$.
:::

### Dual

- $E^{*}$ : ensemble des formes linéaires sur $E$ (applications linéaires de $E$ dans $\mathbb{R}$).
- $\dim E^{*} = \dim E$.

:::note[Théorème de représentation]
Soit $l\in E^{*}$ une forme linéaire sur $E$. Il existe un unique $a\in E$ tel que :
$$
\forall x\in E, \quad l(x)=\langle a,x \rangle
$$
On dit que $a$ représente la forme linéaire $x \mapsto \langle a,x \rangle$. L'application $\varphi:a\in E\mapsto \langle a,\cdot \rangle\in E^{*}$ est un isomorphisme.
:::

## Chapitre 3 : Projections et symétries orthogonales

### Projection orthogonale

:::note[Définition]
Soit $F$ un sous-espace vectoriel de $E$. La **projection orthogonale** de $x \in E$ sur $F$, notée $p_F(x)$, est l'unique $y \in F$ tel que $x - y \in F^\perp$.

Si $(f_{1},\dots,f_{r})$ est une base orthonormée de $F$ :
$$
p_{F}(x)=\sum_{i = 1}^{r} \langle x,f_{i} \rangle f_{i}
$$
:::

<img src="/assets/docs/Espaces Euclidiens/Projection.png" alt="Projection orthogonale" width="450" />

:::note[Propriétés]

- $\forall x \in E$, $x=p_{F}(x)+p_{F^{\perp}}(x)$, donc $p_{F}(x)=x-p_{F^{\perp}}(x)$.
- $p_{F}^{2}=p_{F}$, c'est-à-dire $p_{F}(p_{F}(x))=p_{F}(x)$.

:::

:::note[Distance à un sous-espace]
$$
d(x,F)=\| x-p_{F}(x) \|=\| p_{F^{\perp}}(x) \|
$$
Les projections de $x$ sur $F$ et sur $F^{\perp}$ sont orthogonales, donc d'après Pythagore :
$$
d(x,F)^{2}=\| x \| ^{2}-\| p_{F}(x) \| ^{2}
$$
:::

:::tip[Méthode (montrer que $p$ est un projecteur orthogonal)]
Soit $M=Mat_{e}(p) \in \mathcal{M}_{n}(\mathbb{R})$ dans une base orthonormée $e$.

1. Montrer que $M^{2}=M$.
2. Calculer $K=\ker M$.
3. Calculer $I=\mathrm{Im}\, M$ (engendré par les colonnes de $M$), qui est $F$.
4. Montrer que $K \perp I$ : $\forall x\in K,\forall y\in I, \langle x,y \rangle=0$.

:::

### Symétrie orthogonale

:::note[Définition]
La **symétrie orthogonale** par rapport à un sous-espace $F$ est l'application :
$$
s_F(x) = 2 p_F(x) - x
$$
:::

<img src="/assets/docs/Espaces Euclidiens/Symétrie.png" alt="Symétrie orthogonale" width="450" />

:::note[Propriété]
$s^{2}_{F}=Id$, c'est-à-dire $s_{F}(s_{F}(x))=x$.
:::

:::tip[Méthode (montrer que $s$ est une symétrie orthogonale)]
Soit $M=Mat_{e}(s) \in \mathcal{M}_{n}(\mathbb{R})$ dans une base orthonormée $e$.

1. Montrer que $M^{2}=I_n$.
2. Calculer $\ker(M-I_n)$, qui est $F$.
3. Calculer $\ker(M+I_n)$.
4. Montrer que $\ker(M+I_n) \perp \ker(M-I_n)$, c'est-à-dire $\ker(M+I_n)=\ker(M-I_n)^{\perp}$.

:::
