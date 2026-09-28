---
title: Calcul intégral
description: Notes de cours sur les intégrales généralisées, les intégrales à paramètre et la transformée de Laplace.
slug: integral_calculus
tags: [lecture notes, A2, maths, analysis]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de dérivation et intégration](differentiation_integration.md)

## Chapitre 1 : Intégrales généralisées

### Nature d'une intégrale généralisée

:::note[Définitions]

- Sur un intervalle semi-ouvert $[a,b[$ : $\displaystyle \int_{a}^{b}f(t)\,dt$ **converge** si $\displaystyle F(x) = \int_a^x f(t)\, dt$ admet une limite finie en $b$.
- Sur un intervalle semi-ouvert $]a,b]$ : $\displaystyle\int_a^b f(t)\, dt$ **converge** si $\displaystyle F(x) = \int_x^b f(t) \, dt$ admet une limite finie en $a$.
- Sur un intervalle ouvert $]a, b[$ : pour $c \in \,]a, b[$,
  $$
  \int_a^b f(t) \, dt = \int_a^c f(t) \, dt + \int_c^b f(t) \, dt
  $$
  et l'intégrale converge si les deux intégrales de droite convergent.

:::

- Une intégrale est **divergente** si elle ne converge pas.
- S'il n'y a pas d'ambiguïté, on peut omettre le terme « généralisée ».

:::info[Exemple]

1. $\displaystyle\int_0^{+\infty} \frac{dt}{1+t^2}$ converge et vaut $\dfrac{\pi}{2}$.
2. $\displaystyle\int_0^1 \ln t\, dt$ converge et vaut $-1$.
3. $\displaystyle\int_0^{+\infty} \frac{t}{t^2+3} \, dt$ diverge.

:::

### Intégrales de référence

:::note[Intégrales de Riemann]

- $\displaystyle\int_1^{+\infty} \frac{dt}{t^\alpha}$ converge $\iff \alpha > 1$.
- $\displaystyle\int_0^1 \frac{dt}{t^\alpha}$ converge $\iff \alpha < 1$.

:::

:::note[Intégrales de Bertrand]
$\displaystyle\int_2^{+\infty} \frac{dt}{t^\alpha (\ln t)^\beta}$ converge $\iff \alpha > 1$ ou ($\alpha = 1$ et $\beta > 1$).
:::

### Critères de convergence

:::tip[Limite en $+\infty$]
Si $\displaystyle\lim_{t \to +\infty} f(t) \neq 0$, alors $\displaystyle\int_a^{+\infty} f(t) \, dt$ diverge.
:::

:::tip[Critère de comparaison]
Si $0 \leq f(t) \leq g(t)$ au voisinage de $b$ :

- $\displaystyle\int_a^b g(t) \, dt$ converge $\implies \displaystyle\int_a^b f(t) \, dt$ converge ;
- $\displaystyle\int_a^b f(t) \, dt$ diverge $\implies \displaystyle\int_a^b g(t) \, dt$ diverge.

:::

:::tip[Critère d'équivalence]
Si $f(t) \sim g(t)$ en $b$ avec $g$ de signe constant au voisinage de $b$, alors $\displaystyle\int_a^b f(t) \, dt$ et $\displaystyle\int_a^b g(t) \, dt$ sont de même nature.
:::

:::tip[Critère du petit $o$]
Si $f(t) = o(g(t))$ en $b$ avec $g \geq 0$ :

- $\displaystyle\int_a^b g(t) \, dt$ converge $\implies \displaystyle\int_a^b f(t) \, dt$ converge ;
- $\displaystyle\int_a^b f(t) \, dt$ diverge $\implies \displaystyle\int_a^b g(t) \, dt$ diverge.

:::

:::note[Convergence absolue]
Si $\displaystyle\int_a^b \lvert f(t) \rvert\, dt$ converge, alors $\displaystyle\int_a^b f(t) \, dt$ converge.
:::

### Prolongement par continuité

- Une fonction est **continue par morceaux** si elle est continue sur chaque sous-intervalle d'une subdivision, avec des limites finies aux points de discontinuité.
- Si $f$ est continue sur $[a, b[$ et $\displaystyle\lim_{t \to b^-} f(t)$ existe et est finie, alors $f$ se prolonge par continuité en $b$ et $\displaystyle\int_a^b f(t)\,dt$ converge (intégrale faussement impropre).

### Méthodes de calcul

:::note[Intégration par parties]
Si $f$ et $g$ sont de classe $C^1$ et si le crochet admet des limites finies :
$$
\int_a^b f'(t)g(t) \, dt = \big[ f(t) g(t) \big]_a^b - \int_a^b f(t) g'(t) \, dt
$$
:::

:::note[Changement de variable]
Si $\varphi$ est $C^1$ et $\displaystyle\lim_{u \to \beta^-} \varphi(u) = b$, alors :
$$
\int_\alpha^\beta f(\varphi(u))\,\varphi'(u)\, du = \int_{\varphi(\alpha)}^b f(t) \, dt
$$
:::

:::tip[Parité]
Si l'intégrale converge :

- $f$ **paire** : $\displaystyle\int_{-\infty}^{+\infty} f(t) \, dt = 2 \int_0^{+\infty} f(t) \, dt$ ;
- $f$ **impaire** : $\displaystyle\int_{-\infty}^{+\infty} f(t) \, dt = 0$.

:::

### Résumé des techniques usuelles

| Méthode                     | Utilisation                                        |
| --------------------------- | -------------------------------------------------- |
| Comparaison                 | Comparer avec une intégrale connue                 |
| Équivalence                 | Étudier le comportement asymptotique               |
| Petit $o$                   | Utiliser des estimations asymptotiques             |
| Prolongement par continuité | Vérifier la continuité sur l'intervalle élargi     |
| Intégration par parties     | Transformer une intégrale en une autre plus simple |
| Changement de variable      | Simplifier une intégrale par substitution          |
| Parité                      | Exploiter la symétrie de la fonction               |

## Chapitre 2 : Intégrales à paramètre

Soit $g:\Omega \times[a,b]\to \mathbb{R}$ et :

$$
F : x\in \Omega \longmapsto \int_{a}^{b}g(x,t)\, dt
$$

:::tip[Théorème de continuité]
Pour montrer que $F$ est continue sur $\Omega$ :

- $x \mapsto g(x,t)$ est continue sur $\Omega$ ;
- $t \mapsto g(x,t)$ est continue par morceaux sur $[a,b]$ ;
- hypothèse de domination : $\lvert g(x,t) \rvert \le \varphi(t)$ avec $\varphi$ intégrable sur $[a,b]$.

:::

:::tip[Théorème de dérivabilité]
Pour montrer que $F$ est $C^{1}$ sur $\Omega$ :

- $F$ est bien définie (et continue) ;
- $\dfrac{ \partial g }{ \partial x }(x,t)$ existe et est continue sur $\Omega \times[a,b]$ (et dominée si l'intervalle n'est pas un segment).

Alors :
$$
F'(x)=\int_{a}^{b}\frac{ \partial g }{ \partial x }(x,t)\,dt
$$
:::

### Bornes variables

Si $f$ est continue et $u$, $v$ dérivables :

$$
G : x \mapsto \int_{u(x)}^{v(x)}f(t)\, dt
\implies G'(x)=v'(x)\,f(v(x))-u'(x)\,f(u(x))
$$

## Chapitre 3 : Transformée de Laplace et fonction Gamma

:::note[Transformée de Laplace]
$$
\mathcal{L}_{f}:s\in\Delta_{f}\longmapsto \int_{0}^{+\infty}e^{ -st }f(t)\, dt
$$
avec $\Delta_f$ l'ensemble des $s$ pour lesquels l'intégrale converge.
:::

:::note[Fonction Gamma d'Euler]

- $\Gamma(n+1)=n!$
- $\displaystyle \Gamma\left( n+\frac{1}{2} \right)=\frac{(2n)!}{n!\,2^{2n}}\sqrt{ \pi }$

:::
