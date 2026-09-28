---
title: Séries
description: Notes de cours sur les séries numériques, les suites et séries de fonctions et les séries de Fourier.
slug: series
tags: [lecture notes, A2, maths, analysis]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

## Chapitre 1 : Séries numériques

:::note[Définition]
La suite $(S_{n})_{n\in\mathbb{N}}$ est la **série** associée à la suite $(u_{n})_{n \ge n_{0}}$ :
$$
S_{n}=u_{n_{0}}+u_{n_{0}+1}+\dots+u_{n}=\sum_{k = n_{0}}^{n} u_{k}
$$
:::

- **Série géométrique** de raison $q$ et de premier terme $u_{0}$ : $\displaystyle S_{n}=\sum_{k = 0}^{n} u_{0}q^k$.
- $(S_{n})_{n\in\mathbb{N}}$ converge $\iff q \in \,]-1;1[$, et alors $\displaystyle \sum_{k = 0}^{+\infty} u_{0}q^k =\frac{u_{0}}{1-q}$.

:::note[Propriété]
Soit $(u_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$. Si la série de terme général $u_{n}$ converge, alors $\displaystyle \lim_{ n \to +\infty } u_{n}=0$.

Contraposée : si $\displaystyle \lim_{ n \to +\infty }u_{n} \neq 0$, la série de terme général $u_{n}$ **diverge grossièrement**.
:::

:::note[Définition]
Soit $(u_{n})_{n\in\mathbb{N}}\subset \mathbb{R}$. On dit que $\displaystyle \sum_{k = 0}^{+\infty} u_{k}$ **converge absolument** si $\displaystyle \sum_{k = 0}^{+\infty} \lvert u_{k} \rvert$ converge.
:::

### Critères de convergence

:::tip[Critère de d'Alembert]
Soit $(u_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$ telle que $\forall n \in \mathbb{N}$, $u_{n} > 0$, avec $\displaystyle \lim_{ n \to +\infty }\frac{u_{n+1}}{u_{n}}=\ell$ :

- $\ell < 1 \implies (S_{n})_{n\in\mathbb{N}}$ converge.
- $\ell > 1 \implies (S_{n})_{n\in\mathbb{N}}$ diverge.
- $\ell=1$ : on ne peut rien conclure.

:::

:::tip[Critère de Cauchy]
Soit $(u_{n})_{n\in\mathbb{N}}\subset \mathbb{R}$ telle que $\forall n\in\mathbb{N}$, $u_{n}\ge0$, avec $\displaystyle \lim_{ n \to +\infty } (u_{n})^{\frac{1}{n}}=\ell$ :

- $\ell < 1 \implies (S_{n})_{n\in\mathbb{N}}$ converge.
- $\ell > 1 \implies (S_{n})_{n\in\mathbb{N}}$ diverge.
- $\ell=1$ : on ne peut rien conclure.

:::

:::tip[Critère d'Abel]
Soient $(a_{n})_{n\in\mathbb{N}}, (b_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$ et $\displaystyle \forall n \in \mathbb{N}, \quad B_{n} = \sum_{k=0}^{n} b_{k}$. Si :

- $(a_{n})_{n\in\mathbb{N}}$ est décroissante,
- $\displaystyle \lim_{n \to +\infty} a_{n} = 0$,
- $\exists C \in \mathbb{R}, \forall n \in \mathbb{N}, |B_{n}| \leq C$,

alors $\displaystyle \sum_{k=0}^{+\infty} a_{k} b_{k}$ converge.
:::

:::tip[Critère de comparaison]
Soient $(u_{n})_{n\in\mathbb{N}}, (v_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$. Si $\forall n \in \mathbb{N}$, $0 \leq u_{n} \le v_{n}$ :

- $\displaystyle \sum_{k=0}^{+\infty} v_{k}$ converge $\implies \displaystyle \sum_{k=0}^{+\infty} u_{k}$ converge.
- $\displaystyle \sum_{k=0}^{+\infty} u_{k}$ diverge $\implies \displaystyle \sum_{k=0}^{+\infty} v_{k}$ diverge.

:::

:::tip[Critère d'équivalence]
Soient $(u_{n})_{n\in\mathbb{N}}, (v_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$. Si $u_{n} \sim v_{n}$ et $\forall n \in \mathbb{N}$, $v_{n} \geq 0$ :

$\displaystyle \sum_{k=0}^{+\infty} u_{k}$ converge $\iff \displaystyle \sum_{k=0}^{+\infty} v_{k}$ converge (idem pour la divergence).
:::

:::tip[Critère du petit $o$]
Soient $(u_{n})_{n\in\mathbb{N}}, (v_{n})_{n\in\mathbb{N}} \subset \mathbb{R}$. Si $u_{n} = o(v_{n})$ et $\forall n \in \mathbb{N}$, $v_{n} \geq 0$ :

- $\displaystyle \sum_{k=0}^{+\infty} v_{k}$ converge $\implies \displaystyle \sum_{k=0}^{+\infty} u_{k}$ converge.
- $\displaystyle \sum_{k=0}^{+\infty} u_{k}$ diverge $\implies \displaystyle \sum_{k=0}^{+\infty} v_{k}$ diverge.

:::

## Chapitre 2 : Suites de fonctions

:::note[Définition]
Une suite de fonctions $(f_{n})_{n\in\mathbb{N}}$ est une suite dont les termes sont des fonctions toutes définies sur un ensemble $I$ et à valeurs dans $\mathbb{K}$.
:::

:::info[Exemple]
Soit $x \in \mathbb{R}$, $\displaystyle \forall n \in \mathbb{N}, f_{n}(x)=\frac{1}{1+(n+x)^{2}}$ (ou par récurrence : $f_{n+1}(x)=xf_{n}(x)+f_{n}(x)^{2}$).
:::

### Modes de convergence

- **Convergence simple** : $(f_{n})_{n\in\mathbb{N}}$ converge simplement vers $f$ si, pour tout $x \in I$, la suite $(f_{n}(x))_{n\in\mathbb{N}}$ converge :
  $$
  \forall x \in I, \quad f(x)=\lim_{n \to +\infty} f_{n}(x)
  $$
- **Convergence uniforme** : $(f_n)_{n\in\mathbb{N}}$ converge uniformément vers $f$ si :
  $$
  \lim_{n \to +\infty} \|f_n - f\|_{\infty} = 0 \iff \lim_{ n \to +\infty }\, \sup_{x \in I}\, \lvert f_{n}(x)-f(x) \rvert=0
  $$

### Théorèmes de passage à la limite

:::note[Théorème de continuité]
Soient $I \subset \mathbb{R}$, $f_{n} : I\to \mathbb{R}$ pour tout $n\in \mathbb{N}$ et $f:I\to \mathbb{R}$. Si :

- $\forall n\in \mathbb{N}$, $f_{n}$ est continue sur $I$,
- $(f_{n})_{n\in\mathbb{N}}$ converge uniformément vers $f$,

alors $f$ est continue sur $I$.
:::

:::note[Théorème de dérivabilité]
Soient $I \subset \mathbb{R}$, $f_{n} : I\to \mathbb{R}$ pour tout $n\in \mathbb{N}$, $f:I\to \mathbb{R}$ et $g:I\to \mathbb{R}$. Si :

- $\forall n\in \mathbb{N}$, $f_{n}$ est $C^{1}$ sur $I$,
- $(f_{n})_{n\in\mathbb{N}}$ converge simplement vers $f$,
- $(f'_{n})_{n\in\mathbb{N}}$ converge uniformément vers $g$,

alors $f$ est $C^{1}$ sur $I$ et $f'=g$.
:::

:::note[Théorème d'intégration]
Soient $a,b \in \mathbb{R}$, $a < b$, $f_{n} : [a,b]\to \mathbb{R}$ pour tout $n\in \mathbb{N}$ et $f:[a,b]\to \mathbb{R}$. Si :

- $\forall n\in \mathbb{N}$, $f_{n}$ est continue sur $[a,b]$,
- $(f_{n})_{n\in\mathbb{N}}$ converge uniformément vers $f$,

alors :
$$
\lim_{ n \to +\infty }\int_{a}^{b}f_{n}(x)\,dx=\int_{a}^{b}f(x)\,dx
$$
:::

## Chapitre 3 : Séries de fonctions

On considère la série $\displaystyle \sum f_{n}$ associée à la suite de fonctions $(f_{n})_{n\in\mathbb{N}}$.

- **Convergence simple** : $\displaystyle\sum_{k=0}^{+\infty}f_k$ converge simplement $\displaystyle \iff \forall x \in I, \sum_{k=0}^{+\infty}f_k(x)$ converge.
- **Convergence uniforme** : $\displaystyle\sum_{k=0}^{+\infty}f_k$ converge uniformément $\displaystyle\iff \lim_{ n \to +\infty } \Big\| \sum_{k=n+1}^{+\infty}f_k \Big\|_{\infty} =0$ (ce qui implique $\| f_{n} \|_{\infty}\to 0$).
- **Convergence normale** : $\displaystyle \sum f_n$ converge normalement $\displaystyle \iff \sum_{n=0}^{+\infty} \| f_{n} \|_\infty$ converge.

## Chapitre 4 : Séries de Fourier

:::note[Définition]
Soit $f$ une fonction $L$-périodique continue par morceaux :
$$
S_{n}(f)(x) = a_0 + \sum_{k=1}^{n}\Big(a_k\cos\big(\tfrac{2\pi}{L} kx\big) + b_k\sin\big(\tfrac{2\pi}{L} kx\big) \Big)
$$
$$
S(f)(x) = a_0 + \sum_{k=1}^{+\infty}\Big(a_k\cos\big(\tfrac{2\pi}{L} kx\big) + b_k\sin\big(\tfrac{2\pi}{L} kx\big) \Big)
$$
avec :

- $\displaystyle a_0 = \frac1L\int_0^L f(x)\,dx$
- $\displaystyle a_k = \frac2L\int_0^L f(x) \cos\big(\tfrac{2\pi}{L} kx\big)\,dx$
- $\displaystyle b_k = \frac2L\int_0^L f(x) \sin\big(\tfrac{2\pi}{L} kx\big)\,dx$

:::

:::tip[Parité]

- Si $f$ est paire : $b_{k}=0$.
- Si $f$ est impaire : $a_{k}=0$.

:::

:::note[Théorème de Dirichlet]
Soit $f : \mathbb{R} \to \mathbb{R}$, $L$-périodique et $C^{1}$ par morceaux. Alors la série de Fourier de $f$ converge simplement sur $\mathbb{R}$ et $\forall x\in \mathbb{R}$ :

- si $f$ est continue en $x$ : $S(f)(x)=f(x)$,
- sinon : $\displaystyle S(f)(x)=\frac{f(x^{+})+f(x^{-})}{2}$.

:::

:::note[Théorème de convergence $\mathcal{L}^{2}$]
$S(f)$ converge vers $f$ au sens de $\mathcal{L}^{2}$ :
$$
\lim_{ n \to +\infty }\| S_{n}(f)-f \|_2=0
$$
avec $\displaystyle\| g \|_2=\sqrt{ \frac{1}{L}\int_{0}^{L}g^{2}(x)\,dx }$.
:::

:::note[Égalité de Bessel-Parseval]
$$
\| f \|_2^{2}=a_{0}^{2}+\frac{1}{2}\sum_{k = 1}^{+\infty} \big( a_{k}^{2}+b_{k}^{2} \big)
$$
:::
