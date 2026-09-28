---
title: Dérivation et intégration
description: Notes de cours sur l'analyse réelle, les relations de comparaison, les développements limités et les formules de Taylor.
slug: differentiation_integration
tags: [lecture notes, A1, maths, analysis]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

## Chapitre 1 : Analyse réelle

:::note[Distance]
Une distance sur $E$ est une application $d : E \times E \to \mathbb {R}_+$ telle que :

- $d(x,y)=0 \iff x=y$ ;
- $d(x,y)=d(y,x)$ ;
- $d(x,z)\le d(x,y)+d(y,z)$.

Le couple $(E,d)$ est alors un **espace métrique**.
:::

- **Ouvert** : $\mathcal A \in \mathcal P(E)$ est un ouvert de $E$ si $\forall x \in \mathcal A, \exists r > 0,\ B(x,r) \subset \mathcal A$.
- **Voisinage** : $\mathcal V \subset E$ est un voisinage de $a$ ssi $\exists r > 0,\ B(a,r) \subset \mathcal V$.
  - En dimension 1 : $\mathcal V_a=\,]a-\eta, a+\eta[$.
  - En dimension 2 : $\mathcal V_a=B(a,\eta)$.
- **Continuité** : $f$ est continue en $a$ ssi
  $$
  \forall \varepsilon > 0, \exists \eta > 0, \forall x \in I, |x-a| \le \eta \implies |f(x)-f(a)|\le \varepsilon
  $$

## Chapitre 2 : Relations de comparaison

### Domination et négligeabilité

:::note[Définitions]

- $f$ est **dominée** par $\varphi$ au voisinage de $a$ s'il existe $u:I \to \mathbb R$ bornée au voisinage de $a$ telle que $f=\varphi u$ au voisinage de $a$. On note $f=\mathcal O (\varphi)$.
- $f$ est **négligeable** devant $\varphi$ au voisinage de $a$ s'il existe $\varepsilon:I \to \mathbb R$ telle que $f=\varphi \varepsilon$ au voisinage de $a$ et $\displaystyle \lim_a \varepsilon = 0$. On note $f=o (\varphi)$.

:::

Propriétés :

- $f$ est bornée au voisinage de $a$ ssi $f = \mathcal O(1)$.
- $f$ tend vers $0$ en $a$ ssi $f = o(1)$.
- $f = o(\varphi) \implies f = \mathcal O(\varphi)$.
- $f_1 =\mathcal O(\varphi)$ et $f_2 = \mathcal O(\varphi) \implies f_1 + f_2 =\mathcal O(\varphi)$.
- $f_1 =\mathcal O(\varphi_1)$ et $f_2 =\mathcal O(\varphi_2) \implies f_1f_2 =\mathcal O(\varphi_1\varphi_2)$.
- $f_1 = o(\varphi)$ et $f_2 = o(\varphi) \implies f_1 + f_2 = o(\varphi)$.
- $f_1 = o(\varphi_1)$ et $f_2 = o(\varphi_2) \implies f_1f_2 = o(\varphi_1\varphi_2)$.
- $f =\mathcal O(\varphi_1)$ et $\varphi_1 =\mathcal O(\varphi_2) \implies f =\mathcal O(\varphi_2)$.
- $f = o(\varphi_1)$ et $\varphi_1 = o(\varphi_2) \implies f = o(\varphi_2)$.
- $f$ est dominée par $\varphi$ ssi $\dfrac f \varphi$ est bornée au voisinage de $a$ (si $\varphi$ ne s'annule pas).
- $f$ est négligeable devant $\varphi$ ssi $\displaystyle \lim_{x\to a} \frac {f (x)} {\varphi(x)} = 0$ (si $\varphi$ ne s'annule pas).

### Équivalence

:::note[Définition]
$f$ est **équivalente** à $g$ au voisinage de $a$ s'il existe $h : I \to \mathbb R$ telle que $f=gh$ au voisinage de $a$ et $\displaystyle \lim_{x \to a} h(x)=1$. On note $f \sim_a g$.
:::

Propriétés :

- Soit $\displaystyle f(x) = \sum_{k=p}^n a_kx^k$ un polynôme avec $a_p\neq 0$ et $a_n \neq 0$ : $f(x) \sim_0 a_px^p$ et $f(x)\sim_{+\infty} a_nx^n$.
- Si $f \sim_a g$ et si $g$ a une limite en $a$, alors $\displaystyle \lim_a f=\lim_a g$.
- Si $f \sim_a g$ et si $g$ est positive sur $I$, alors $f$ est positive au voisinage de $a$.
- Si $f \sim_a g$ et si $g$ ne s'annule pas sur $I$, alors $f$ ne s'annule pas au voisinage de $a$.
- $f_1 \sim g_1$ et $g_1\sim g_2 \implies f_1 \sim g_2$.
- $f_1 \sim g_1$ et $f_2\sim g_2 \implies f_1f_2 \sim g_1g_2$ et $\dfrac {f_1}{f_2} \sim \dfrac {g_1} {g_2}$.
- Si $f$ est dérivable en $a$ et $f'(a)\neq 0$ : $f(x) -f(a) \sim_a f'(a)(x-a)$.
- Si $f\sim_a g$, $u : \Delta \to I$ et $\displaystyle \lim_{t \to \alpha} u(t)=a$, alors $f(u(t)) \sim_\alpha g(u(t))$.

:::caution
On ne somme pas des équivalents et on ne compose pas un équivalent à gauche par une fonction.
:::

## Chapitre 3 : Développements limités

:::note[Définition]
Une fonction $f$ admet un développement limité à l'ordre $n$ au voisinage de $0$ s'il existe des réels $a_0, a_1, \dots, a_{n}$ et une fonction $\varepsilon$ définie sur $\mathcal{D}_{f}$ tels que :
$$
\forall x \in \mathcal{D} _f, \quad f(x)=\sum _{k=0}^n a_{k}x^k + x^n \varepsilon (x) \quad \text{avec} \quad \lim_{x \to 0} \varepsilon (x) =0
$$
$$
\iff f(x)=\sum _{k=0}^n a_{k}x^k + o(x^n)
$$
:::

Les développements limités usuels sont regroupés dans le [formulaire](formulary.md).

### Formules de Taylor

:::note[Taylor avec reste intégral]
Soient $a,b\in I$ avec $a < b$ et $f$ de classe $\mathcal C^{n+1}$ sur $I$ :
$$
f(b)=\sum_{k=0}^n \frac{(b-a)^k}{k!}f^{(k)}(a)+\int_{a}^b \frac {(b-t)^n}{n!}f^{(n+1)}(t) \, dt
$$
:::

:::note[Inégalité de Taylor-Lagrange]
Soit $f$ de classe $\mathcal C^{n+1}$ sur $I$. Si $M$ majore $\lvert f^{(n+1)} \rvert$ sur $[a,b]$ :
$$
\left\lvert f(b)-\sum_{k=0}^n \frac{(b-a)^k}{k!}f^{(k)}(a) \right\rvert \le M \frac {\lvert b-a \rvert ^{n+1}}{(n+1)!}
$$
:::

:::note[Taylor-Young]
Soit $f$ de classe $\mathcal C^{n}$ sur $I$ et $a \in I$ :
$$
\forall x \in I, \quad f(x) = \sum_{k=0}^n \frac{(x-a)^k}{k!}f^{(k)}(a)+(x-a)^n \varepsilon (x) \quad \text{avec} \quad \lim_{x\to a} \varepsilon (x)=0
$$
$$
\iff f(x) = \sum_{k=0}^n \frac{(x-a)^k}{k!}f^{(k)}(a) + o\big((x-a)^n\big)
$$
:::
