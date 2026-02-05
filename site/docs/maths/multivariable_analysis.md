---
title: Analyse à plusieurs variables
description: Notes de cours sur normes, limites, derivation et integrales en dimension superieure.
slug: multivariable_analysis
tags: [lecture notes, A2, maths, analysis]
last_update:
  date: 2026-02-05
  author: Eliott A. Roussille
---

## Continuité et dérivation

### Chapitre 1 : Normes, limites et continuité

#### Normes et topologie

:::note[Définition]
Une norme sur un $\mathbb{R}$-ev $E$ est une application $\|\cdot\| : E \to \mathbb{R}^+$ qui vérifie :

- $\|x\| = 0 \Rightarrow x = 0$ (séparation).
- $\|\lambda x\| = |\lambda|\,\|x\|$ (homogénéité).
- $\|x + y\| \le \|x\| + \|y\|$ (inégalité triangulaire).

:::

Normes usuelles :

- Pour $x=(x_1, \dots, x_n)$, $\displaystyle \|x\|_p = \sqrt[p]{\sum_{i=1}^{n}|x_i|^p}$.
- Norme euclidienne : $\|\cdot\|_2$.
- $\displaystyle \|x\|_{\infty} = \max_{1 \le i \le n} |x_i|$.

Équivalence des normes (dimension finie) : pour deux normes $\|\cdot\|$ et $\|\cdot\|'$, il existe $C, C' > 0$ telles que
$$
C'\|x\| \le \|x\|' \le C\|x\|.
$$

Boules :

- Boule ouverte : $B(a,r) = \{x \in E \mid \|x-a\| < r\}$.
- Boule fermée : $\overline{B}(a,r) = \{x \in E \mid \|x-a\| \le r\}$.

Vocabulaire :

- $\mathcal{A} \subset E$ est un ouvert si $\forall x \in \mathcal{A}$, $\exists r>0$ tel que $B(x,r) \subset \mathcal{A}$.
- $\mathcal{A} \subset E$ est fermé si son complémentaire est un ouvert.
- $\mathcal{V} \subset E$ est un voisinage de $a$ ssi $\exists r>0$ tel que $B(a,r) \subset \mathcal{V}$.
  - En dimension 1 : $\mathcal{V}_a = ]a-\eta, a+\eta[$.
  - En dimension 2 : $\mathcal{V}_a = B(a,\eta)$.

#### Limites

:::note[Définition]
Soit $U$ un ouvert de $E$, $f : U \to F$, $a \in U$ et $l \in F$. On dit que $f$ tend vers $l$ quand $x$ tend vers $a$ si
$$
\forall \varepsilon>0,\ \exists \delta>0\ \text{tel que}\ \|x-a\|<\delta \Rightarrow \|f(x)-l\|<\varepsilon.
$$
:::

:::tip[Méthode (non-existence de limite en $(0,0)$)]
Montrer deux limites différentes le long de chemins distincts :

- $f(x,0)=k$,
- $f(0,y)=\lambda \neq k$,

avec $(x,0) \to (0,0)$ et $(0,y) \to (0,0)$.
:::

:::tip[Méthode (coordonnées polaires)]
Poser $x=r\cos\theta + a$, $y=r\sin\theta + b$ avec $\theta \in [0, 2\pi[$, et étudier
$$
\lim_{(x,y) \to (a,b)} f(x,y) = \lim_{r \to 0} f(r\cos\theta, r\sin\theta),\ \forall \theta.
$$
:::

#### Continuité

:::note[Définition]
$f$ est continue en $a$ ssi $\lim_{x \to a} f(x) = f(a)$.
:::

:::caution
Pour une fraction rationnelle, préciser que $f$ est continue sur $E\setminus\{(a,b)\}$ (dénominateur non nul), puis vérifier si
$$
\lim_{(x,y) \to (a,b)} f(x,y) = f(a,b).
$$
:::

### Chapitre 2 : Dérivées d'ordre 1

#### Différentiabilité et dérivées partielles

:::note[Définition]
Une fonction $f : U \subset \mathbb{R}^n \to \mathbb{R}^m$ est différentiable en $a \in U$ s'il existe une application linéaire $L$ telle que
$$
f(a+h) = f(a) + L(h) + o(\|h\|).
$$
:::

:::note[Définition]
La dérivée partielle de $f$ par rapport à $x_i$ est
$$
\frac{\partial f}{\partial x_i}(a) = \lim_{h \to 0} \frac{f(x_1, \dots, x_i+h, \dots, x_n) - f(x_1, \dots, x_n)}{h}.
$$
:::

:::info[Exemple]
Soit $f(x,y) = x^2 + 2xy$. Alors
$$
\frac{\partial f}{\partial y} = 2x.
$$
:::

:::tip[Méthode (différentiabilité en $a$)]
Poser $h=(h_1,h_2)$ et
$$
df_a \cdot h = \nabla f(a) \cdot h = h_1 \frac{\partial f(a)}{\partial x} + h_2 \frac{\partial f(a)}{\partial y}.
$$
On écrit
$$
f(a+h) - f(a) - df_a \cdot h = \|h\|\,\varepsilon(h),
\quad \lim_{h \to (0,0)} \varepsilon(h) = 0.
$$

- Si $\varepsilon(h) \to 0$, alors $f$ est différentiable en $a$.
- Sinon, $f$ n'est pas différentiable en $a$.

:::

#### Dérivation d'une composée

Soient $f : U \subset \mathbb{R}^n \to \mathbb{R}^m$ et $g : V \subset \mathbb{R}^m \to \mathbb{R}^I$ avec $f(U) \subset V$.
On note $f=(f_1, \dots, f_m)$, $g=(g_1, \dots, g_I)$ et $h=g\circ f$.

Pour $a \in U$ et $k \in \{1, \dots, I\}$,
$$
\frac{\partial h_k}{\partial x_i}(a) = \sum_{j=1}^m \left( \frac{\partial g_k}{\partial y_j}(f(a))\,\frac{\partial f_j}{\partial x_i}(a) \right).
$$

:::info[Exemple]
Soit $f(x,y)=(x^2, x+y)$, $g(x,y)=x+y^2$, alors
$$
h(x,y) = (g \circ f)(x,y) = g(x^2, x+y) = 2x^2 + y^2 + 2xy.
$$
On obtient $\displaystyle \frac{\partial h}{\partial x}(x,y)=4x+2y$.
:::

Pour $g(x,y) = f(u,v)$ avec $u(x,y)$ et $v(x,y)$,
$$
\frac{\partial g}{\partial x} = \frac{\partial f}{\partial x}(u,v)\frac{\partial u}{\partial x} + \frac{\partial f}{\partial y}(u,v)\frac{\partial v}{\partial x}.
$$

#### Classe $C^1$

:::note[Définition]
$f : U \subset \mathbb{R}^2 \to \mathbb{R}$ est de classe $C^1$ sur $U$ si $f$ est différentiable et $df$ est continue.
:::

:::note[Définition]
$f$ est de classe $C^1$ ssi ses dérivées partielles sont continues en tout point.
:::

:::tip[Méthode (vérifier $C^1$)]

- Étudier la différentiabilité en $(a,b)$.
- Vérifier que $\partial_x f$ et $\partial_y f$ admettent une limite en $(a,b)$ et coïncident avec leurs valeurs en $(a,b)$.

:::

### Chapitre 3 : Dérivées d'ordre 2

Si $f$ est deux fois différentiable en $a$, alors sa matrice hessienne en $a$ est symétrique.

$$
H_f(a)=\begin{pmatrix}
\frac{\partial^2 f}{\partial x_1^2}(a) & \cdots & \frac{\partial^2 f}{\partial x_1\partial x_n}(a) \\
\vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n\partial x_1}(a) & \cdots & \frac{\partial^2 f}{\partial x_n^2}(a)
\end{pmatrix}
$$

:::note[Définition]
$f$ est de classe $C^2$ ssi $f$ est $C^1$ et ses dérivées partielles sont de classe $C^1$.
:::

:::note[Définition (développement limité)]
$$
f(a+h) = f(a) + df_a(h) + \frac{1}{2} d^2 f_a(h,h) + o(\|h\|^2).
$$
:::

:::info[Exemple]
Taylor : $f(x,y)=\cos(x+y)-1$.

Comme $\cos(u)=1-\frac{u^2}{2}+o(u^2)$,
$$
f(x,y) = -\frac{(x+y)^2}{2} + o((x+y)^2).
$$
:::

#### Extrema locaux

:::tip[Méthode]

- Trouver les points critiques $a$ de $f$ : $df_a=0$.
- Étudier le déterminant de la matrice hessienne en $a$.

:::

### Chapitre 4 : Changements de coordonnées

#### Dans $\mathbb{R}^2$ et $\mathbb{R}^3$

Coordonnées polaires :

$$
\begin{cases}
x=r\cos\theta \\
y=r\sin\theta
\end{cases}
\quad \Rightarrow \quad dx\,dy = r\,dr\,d\theta.
$$

:::note[Preuve (jacobien)]
$\varphi(r,\theta)=(r\cos\theta, r\sin\theta)$,
$$
J_{\varphi}(r,\theta)=\begin{pmatrix}\cos\theta&-r\sin\theta\\\sin\theta&r\cos\theta\end{pmatrix},
\quad \det J_{\varphi} = r.
$$
:::

Coordonnées cylindriques :

$$
\begin{cases}
x=r\cos\theta \\
y=r\sin\theta \\
z=z
\end{cases}
\quad \Rightarrow \quad dx\,dy\,dz = r\,dr\,d\theta\,dz.
$$

:::note[Preuve (jacobien)]
$\varphi(r,\theta,z)=(r\cos\theta, r\sin\theta, z)$,
$$
J_{\varphi}(r,\theta,z)=\begin{pmatrix}\cos\theta&-r\sin\theta&0\\\sin\theta&r\cos\theta&0\\0&0&1\end{pmatrix},
\quad \det J_{\varphi} = r.
$$
:::

Coordonnées sphériques :

$$
\begin{cases}
x=r\sin\theta\cos\varphi \\
y=r\sin\theta\sin\varphi \\
z=r\cos\theta
\end{cases}
\quad \Rightarrow \quad dx\,dy\,dz = r^2\sin\theta\,dr\,d\theta\,d\varphi.
$$

:::note[Preuve (jacobien)]
$\varphi(r,\theta,\varphi)=(r\sin\theta\cos\varphi, r\sin\theta\sin\varphi, r\cos\theta)$,
$$
J_{\varphi}(r,\theta,\varphi)=\begin{pmatrix}
\sin\theta\cos\varphi & r\cos\theta\cos\varphi & -r\sin\theta\sin\varphi \\
\sin\theta\sin\varphi & r\cos\theta\sin\varphi & r\sin\theta\cos\varphi \\
\cos\theta & -r\sin\theta & 0
\end{pmatrix}
$$
et $\det J_{\varphi} = r^2\sin\theta$.
:::

## Primitives et intégrales

### Chapitre 5 : 1-formes différentielles et champs de vecteurs

#### Lexique

- Champ de vecteurs $\vec{V}$ : application $V: U \subset \mathbb{R}^n \to \mathbb{R}^n$.
- Gradient $\vec{\nabla}f$ : direction de plus forte augmentation de $f$.
- Divergence $div\,\vec{V}$ : débit net sortant/entrant en un point.
- Rotationnel $\vec{rot}\,\vec{V}$ : tendance locale à tourner.
- Courbe paramétrée $\gamma(t)$ : trajectoire $\gamma:[a,b]\to \mathbb{R}^n$.
- Circulation $\int_{\gamma}\vec{V}\cdot d\vec{l}$ : travail du champ le long de $\gamma$.
- Surface paramétrée $S$ : $f : (u,v) \in \Delta \subset \mathbb{R}^2 \to \mathbb{R}^3$.
- Vecteur normal $\vec{n}$ : vecteur perpendiculaire à la surface.
- Flux $\iint_S \vec{V}\cdot \vec{n}\, dS$ : quantité traversant $S$.
- Bord $\partial\Omega$ : ensemble des points délimitant une région $\Omega$.
- Aire $\text{Aire}(S)$, volume $\text{Volume}(\Omega)=\iiint_{\Omega} dV$.

#### Théorèmes fondamentaux

- Green-Riemann (2D) :
  $$
  \int_{\partial \Omega} P\,dx + Q\,dy = \iint_{\Omega}\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\,dy.
  $$
- Stokes (3D) :
  $$
  \oint_{\partial S} \vec{V}\cdot d\vec{l} = \iint_S \vec{rot}\,\vec{V}\cdot \vec{n}\, dS.
  $$
- Gauss-Ostrogradsky :
  $$
  \iint_{\partial \Omega} \vec{V}\cdot \vec{n}\, dS = \iiint_{\Omega} div\,\vec{V}\, dV.
  $$

#### Divergence et rotationnel

- $div\,\vec{V} = \vec{\nabla}\cdot\vec{V}$.
- $\vec{rot}\,\vec{V} = \vec{\nabla} \wedge \vec{V}$.

Changement de coordonnées :
$$
\vec{V}_{\text{cartesiennes}} = P_{\mathscr{B}}\,\vec{V}_{\mathscr{B}}.
$$

<img src="/assets/docs/APV/Passage coordonnées.png" alt="Changement de coordonnées" width="380" />

#### Primitives et potentiels scalaires

:::note[Définition]
$\vec{V}$ dérive d'un potentiel scalaire $f$ s'il existe $f$ différentiable tel que $\vec{V} = \vec{\nabla} f$.
:::

Condition : $\vec{V}$ dérive d'un potentiel scalaire ssi $\vec{rot}\,\vec{V} = 0$.

:::tip[Méthode (potentiel scalaire)]

- Vérifier $\vec{rot}\,\vec{V} = 0$ (condition de Schwarz en dimension 3).
- Résoudre $\vec{\nabla} f = \vec{V}$.

:::

#### Potentiels vecteurs

:::note[Définition]
$\vec{V}$ dérive d'un potentiel vecteur $\vec{A}$ si $\vec{V} = \vec{rot}\,\vec{A}$.
:::

Condition : $\vec{V}$ dérive d'un potentiel vecteur ssi $div\,\vec{V} = 0$.

:::tip[Méthode (potentiel vecteur)]

- Vérifier $div\,\vec{V} = 0$ (condition de Schwarz en dimension 3).
- Résoudre $\vec{rot}\,\vec{A} = \vec{V}$.

:::

### Chapitre 6 : Intégrales doubles et triples

#### Théorème de Fubini

Soit $f:[a,b]\times[c,d]\to \mathbb{R}$ continue. Alors
$$
\iint_D f = \int_a^b\left(\int_c^d f(x,y)\,dy\right)dx = \int_c^d\left(\int_a^b f(x,y)\,dx\right)dy.
$$

Pour $D = \{(x,y) \mid a\le x\le b,\ g_1(x)\le y\le g_2(x)\}$ :
$$
\iint_D f = \int_a^b\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)dx.
$$

Pour $D = \{(x,y) \mid c\le y\le d,\ h_1(y)\le x\le h_2(y)\}$ :
$$
\iint_D f = \int_c^d\left(\int_{h_1(y)}^{h_2(y)} f(x,y)\,dx\right)dy.
$$

Changement de variables :
$$
\iint_D f(x,y)\,dx\,dy = \iint_{\Omega} (f\circ\varphi)(u,v)\,|\det(J_{\varphi}(u,v))|\,du\,dv.
$$

:::tip Rappel

- $dx\,dy = r\,dr\,d\theta$.
- $dx\,dy\,dz = r^2\sin\varphi\,dr\,d\theta\,d\varphi$.
:::

### Chapitre 7 : Intégrales sur des courbes paramétrées

#### Intégrales curvilignes

:::note[Définition]
Une courbe paramétrée (classe $C^1$) est définie par un support $C \subset \mathbb{R}^n$ et une fonction $\gamma : [a,b] \to \mathbb{R}^n$ telle que $\gamma([a,b])=C$.
:::

L'intégrale curviligne d'une 1-forme différentielle $\omega = a_1 dx_1 + \dots + a_n dx_n$ sur $\gamma$ est
$$
\int_{\gamma} \omega = \int_a^b \omega(\gamma(t))\,dt.
$$

#### Circulation de champs de vecteurs

:::note[Définition]
Circulation de $\vec{V}$ sur $\Gamma$ :
$$
\int_{\Gamma} \vec{V}\cdot d\vec{x} = \int_a^b \vec{V}(\gamma(t))\cdot \gamma'(t)\,dt.
$$
:::

:::note[Propriété]
Si $\vec{V}$ dérive d'un potentiel scalaire $f$, alors
$$
\int_{\Gamma}\vec{V}\cdot d\vec{l} = f(\gamma(b)) - f(\gamma(a)).
$$
:::

:::info[Exemple]
TD20.1 : $\vec{V}=(-y,-z,-x)$, $S$ est un demi-cylindre sur $y>0$ de rayon $R$ et de hauteur $h_2-h_1$.

On note $\gamma = \gamma_1 \cup \gamma_2 \cup \gamma_3 \cup \gamma_4$ avec

- $\gamma_1 : t \in [0,\pi] \mapsto (R\cos t, R\sin t, h_1)$,
- $\gamma_2 : t \in [h_1,h_2] \mapsto (-R, 0, t)$,
- $\gamma_3^{-1} : t \in [0,\pi] \mapsto (R\cos t, R\sin t, h_2)$,
- $\gamma_4^{-1} : t \in [h_1,h_2] \mapsto (R, 0, t)$.

Alors
$$
\int_{\gamma}\vec{V}\cdot d\vec{l} = \left(\int_{\gamma_1} + \int_{\gamma_2} - \int_{\gamma_3^{-1}} - \int_{\gamma_4^{-1}}\right)\vec{V}\cdot d\vec{l}.
$$
Exemple de terme :
$$
\int_{\gamma_4^{-1}} \vec{V}\cdot d\vec{l} = \int_{h_1}^{h_2} \begin{pmatrix}0\\-t\\-R\end{pmatrix} \cdot \begin{pmatrix}0\\0\\1\end{pmatrix} dt.
$$
Résultat final (entraînement) : $2R(h_2 - h_1)$.
:::

#### Formule de Green-Riemann

Lien entre l'intégrale sur le bord d'un domaine et la double intégrale sur ce domaine :

$$
\int_{\Gamma} P(x,y)\,dx + Q(x,y)\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\,dy.
$$

Pour $\vec{V}=(P,Q)$ :
$$
\int_{\Gamma}\vec{V}\cdot d\vec{x} = \iint_D \dots
$$

**Aires** :
$$
A=\text{Aire}(D),\quad A=-\int_{\Gamma} y\,dx = \int_{\Gamma} x\,dy = \frac{1}{2}\int_{\Gamma}(-y\,dx + x\,dy).
$$

### Chapitre 8 : Intégrales sur des surfaces paramétrées

#### Flux des champs de vecteurs

Surface paramétrée : $f : \Delta \subset \mathbb{R}^2 \to \mathbb{R}^3$, $S=f(\Delta)$.

Vecteur normal :
$$
\vec{n}(u,v)=\frac{\partial f}{\partial u} \wedge \frac{\partial f}{\partial v}.
$$

Flux :
$$
\Phi = \iint_S \vec{V}\cdot \vec{n}\,dS = \iint_{\Delta} \vec{V}(f(u,v))\cdot \vec{n}(u,v)\,du\,dv.
$$

#### Théorème de Stokes

$$
\iint_S \vec{rot}\,\vec{V}\cdot \vec{n}\,dS = \oint_{\partial S} \vec{V}\cdot d\vec{l}.
$$

#### Formule de Green-Ostrogradsky

$$
\iint_{\partial \Omega}\vec{V}\cdot \vec{n}\,dS = \iiint_{\Omega} div\,\vec{V}\,dV.
$$

| 1-formes différentielles          | champs de vecteurs                                       |
| --------------------------------- | -------------------------------------------------------- |
| $\omega=a_1dx_1+\dots+a_n dx_n$   | $\vec{V}=\begin{pmatrix}a_1\\ \vdots\\ a_n\end{pmatrix}$ |
| $\omega$ est exacte               | $\vec{V}$ dérive d'un potentiel scalaire                 |
| $\omega=df$                       | $\vec{V}=\vec{\nabla} f$                                 |
| $f$ est une primitive de $\omega$ | $f$ est un potentiel scalaire de $\vec{V}$               |
| lien intégrales / primitives      | lien circulation / potentiel scalaire                    |
