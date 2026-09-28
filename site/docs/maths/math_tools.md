---
title: Outils mathématiques pour l'ingénieur
description: Notes de cours sur les racines n-ièmes des nombres complexes et les polynômes.
slug: math_tools
tags: [lecture notes, A1, maths, algebra]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

## Chapitre 1 : Nombres complexes

### Racines n-ièmes

:::note[Théorème]
Soit $c \in \mathbb{C}^*$ d'expression exponentielle $c=\lvert c \rvert e^{i\alpha}$. $c$ admet exactement $n$ racines n-ièmes, de la forme :
$$
z_k=\lvert c \rvert^{\frac{1}{n}}\, e^{i\left(\frac{\alpha}{n}+\frac{2k\pi}{n}\right)}, \quad k \in \{0,\dots,n-1\}
$$
:::

La seule racine n-ième de $0$ est $0$.

## Chapitre 2 : Polynômes

### Le nombre $j$

- $\displaystyle j=e^{\frac {2i\pi} 3}=-\frac{1}{2} + i\frac{\sqrt {3}}{2}$.
- $j^2=\overline j$.
- $j$ est racine de $1+x+x^2$ (tout comme $\overline j$).

### Divisibilité

:::note[Propriété]
Si $L$ est scindé à racines simples et si toutes les racines de $L$ sont racines de $P$, alors $L \mid P$.
:::
