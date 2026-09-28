---
title: Formulaire
description: Formulaire de tronc commun avec développements limités usuels, dérivées usuelles et équivalents classiques.
slug: formulary
tags: [lecture notes, maths, analysis]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

## Chapitre 1 : Développements limités usuels en 0

- $\displaystyle e^{u}=1+u+\frac{u^{2}}{2!}+\dots+\frac{u^{n}}{n!}+o(u^{n})$
- $\displaystyle \sin(u)=u-\frac{u^{3}}{3!}+\frac{u^{5}}{5!}-\dots$ et $\displaystyle \sinh(u)=u+\frac{u^{3}}{3!}+\frac{u^{5}}{5!}+\dots$
- $\displaystyle \cos(u)=1-\frac{u^{2}}{2!}+\frac{u^{4}}{4!}-\dots$ et $\displaystyle \cosh(u)=1+\frac{u^{2}}{2!}+\frac{u^{4}}{4!}+\dots$
- $\displaystyle \tan(u)=u+\frac{u^{3}}{3}+\frac{2u^{5}}{15}+o(u^{5})$
- $\displaystyle \ln(1+u)=u-\frac{u^{2}}{2}+\frac{u^{3}}{3}-\dots+(-1)^{n+1}\frac{u^{n}}{n}+o(u^{n})$
- $\displaystyle \frac{1}{1-u}= \sum_{k = 0}^{n} u^{k}+o(u^{n})$
- $\displaystyle (1+u)^{\alpha}=1+\alpha u+\frac{\alpha(\alpha-1)}{2!}u^{2}+\dots+\frac{\alpha(\alpha-1)\dots(\alpha-n+1)}{n!}u^{n}+o(u^{n})$

:::tip
Série exponentielle : $\displaystyle \sum_{i\ge 0} \frac {x^i} {i!}=e^x$ pour tout $x \in \mathbb{R}$.
:::

## Chapitre 2 : Dérivées usuelles

- $\displaystyle \arccos'(x)=-\frac{1}{\sqrt{ 1-x^{2} }}$
- $\displaystyle \arcsin'(x)=\frac{1}{\sqrt{ 1-x^{2} }}$
- $\displaystyle \arctan'(x)=\frac{1}{ 1+x^{2} }$

## Chapitre 3 : Équivalents et fonctions spéciales

:::note[Formule de Stirling]
$$
n!\sim\sqrt{2\pi n}\left( \frac n e \right)^n
$$
:::

- $\displaystyle \tan t \underset{t\to \frac{\pi}{2}}{\sim} -\frac{1}{t-\frac{\pi}{2}}$

:::note[Fonction Gamma d'Euler]

- $\Gamma(n+1)=n!$
- $\displaystyle \Gamma\left( n+\frac{1}{2} \right)=\frac{(2n)!}{n!\,2^{2n}}\sqrt{ \pi }$

:::
