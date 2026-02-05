---
title: Réduction d'endomorphismes
description: Notes de cours sur valeurs propres, diagonalisation et exponentielle de matrices.
slug: rde
tags: [lecture notes, A2, maths, algebra]
last_update:
  date: 2026-02-05
  author: Eliott A. Roussille
---

Ce cours repose sur les notions d'espaces vectoriels (EV).

## Chapitre 1 : Éléments propres et polynôme caractéristique

Soit $\mathcal{A} \in \mathcal{M}_n(\mathbb{K})$ et $f \in \mathcal{L}(E)$.

### Définitions (matrices)

- Vecteur propre : $u \in \mathcal{M}_{n \times 1}(\mathbb{K})$ est un vecteur propre de $\mathcal{A}$ ssi $u \neq 0$ et $\exists \lambda \in \mathbb{K}$, $\mathcal{A}u = \lambda u$.
- Valeur propre : $\lambda \in \mathbb{K}$ est une valeur propre de $\mathcal{A}$ ssi $\exists u \in \mathcal{M}_{n \times 1}(\mathbb{K}) \setminus \{0\}$, $\mathcal{A}u = \lambda u$.
- Spectre : $Sp(\mathcal{A})$ est l'ensemble des valeurs propres de $\mathcal{A}$.
- Sous-espace propre associé à $\lambda$ :
  $$
  E_{\lambda}(\mathcal{A}) = \{u \in \mathcal{M}_{n \times 1}(\mathbb{K}) \mid \mathcal{A}u = \lambda u\} = Ker(\mathcal{A} - \lambda I_n)
  $$
  C'est l'ensemble des vecteurs propres associés à $\lambda$, plus le vecteur nul (c'est un sous-espace vectoriel).

:::note[Endomorphisme]

- $\lambda$ est une valeur propre de $f$ ssi $\exists u \in E \setminus \{0\}$, $f(u) = \lambda u$.
- $u$ est un vecteur propre de $f$ ssi $u \neq 0$ et $\exists \lambda \in \mathbb{K}$, $f(u) = \lambda u$.
- $Sp(f)$ est l'ensemble des valeurs propres de $f$.
- $E_{\lambda}(f) = \{u \in E \mid f(u) = \lambda u\}$.

:::

Propriétés :

- $E_{\lambda}(\mathcal{A}) = Ker(\mathcal{A} - \lambda I_n)$.
- Soit $Sp(\mathcal{A}) = \{\lambda_1, \lambda_2, \dots, \lambda_m\}$. Pour tout $i$, si $u_i$ est un vecteur propre associe a $\lambda_i$, alors la famille $\{u_1, u_2, \dots, u_m\}$ est libre.
- $E_{\lambda_1} + \dots + E_{\lambda_m} = E_{\lambda_1} \oplus \dots \oplus E_{\lambda_m}$ ssi $\forall i \neq j$, $E_{\lambda_i} \cap E_{\lambda_j} = \{\vec 0_E\}$.
- $\mathcal{A}$ admet au plus $n$ valeurs propres distinctes.

### Polynôme caractéristique

Le polynôme caractéristique est $\chi_{\mathcal{A}}(X) = \det(\mathcal{A} - X I_n) \in \mathbb{K}_n[X]$.

- $\lambda$ est une valeur propre de $\mathcal{A}$ ssi $\lambda$ est une racine de $\chi_{\mathcal{A}}$.
- $\lambda \in Sp(\mathcal{A}) \iff \chi_{\mathcal{A}}(\lambda) = 0 \iff \det(\mathcal{A} - \lambda I_n) = 0$.

:::note[Endomorphisme]
Soit $A$ une matrice représentant $f$ dans une base de $E$.

- $\det(f) = \det(A)$.
- $\chi_f(X) = \det(A - X I_n)$.

:::

### Multiplicités

- Multiplicité algébrique $MA(\lambda)$ : multiplicité de $\lambda$ comme racine de $\chi_f$.
- Multiplicité géométrique $MG(\lambda)$ : dimension de $E_{\lambda}$.
- $1 \le MG(\lambda) \le MA(\lambda)$.

## Chapitre 2 : Diagonalisation

### Definitions

- Endomorphisme diagonalisable : $f$ est diagonalisable ssi il existe une base de $E$ formee de vecteurs propres de $f$, ssi $Mat_f$ est diagonalisable.
- Matrice diagonalisable : $\mathcal{A}$ est diagonalisable ssi $\exists P \in \mathcal{M}_n(\mathbb{K})$ inversible telle que $P^{-1}\mathcal{A}P$ est diagonale.

:::tip[Méthode (cas $2 \times 2$)]
Si $\displaystyle P=\begin{pmatrix}a & b\\ c & d\end{pmatrix}$ est inversible et $\displaystyle P^{-1}\mathcal{A}P=\begin{pmatrix}\alpha_1&0\\0&\alpha_2\end{pmatrix}$, alors
$$
\mathcal{A}P = P\begin{pmatrix}\alpha_1&0\\0&\alpha_2\end{pmatrix}.
$$
Si le système admet une solution pour $P$ inversible (coefficients dans $\mathbb{K}$), alors $\mathcal{A}$ est diagonalisable dans $\mathbb{K}$.
:::

:::tip[Méthode (procédure générale)]

- Calculer le polynôme caractéristique $\chi_{\mathcal{A}}(X)$.
- En déduire les valeurs propres $\lambda_i$.
- Déterminer les sous-espaces propres associés à chaque $\lambda_i$.
- Choisir une base de vecteurs propres pour former $P$ (inversible).
- Vérifier que $P^{-1}\mathcal{A}P$ est diagonale.

:::

:::info[Exemple]
$$
\mathcal{A}=\begin{pmatrix}0&2&-2\\-2&4&-2\\-1&1&1\end{pmatrix}
$$

- $\chi_{\mathcal{A}}(X) = (1 - X)(2 - X)^2$.
- Valeurs propres : $1$ (multiplicité 1) et $2$ (multiplicité 2).
- Sous-espaces propres :
  $$
  E_{\lambda=1} = Vect\left\{\begin{pmatrix}2\\2\\1\end{pmatrix}\right\},
  \quad
  E_{\lambda=2} = Vect\left\{\begin{pmatrix}1\\1\\0\end{pmatrix},\begin{pmatrix}0\\1\\1\end{pmatrix}\right\}.
  $$
- Exemple de matrice de passage :
  $$
  P=\begin{pmatrix}2&1&0\\2&1&1\\1&0&1\end{pmatrix}.
  $$

:::

### Matrice de passage

Soient $\mathscr{B} = (e_1, \dots, e_n)$ et $\mathscr{B}' = (e_1', \dots, e_n')$ deux bases de $E$.

$$
P_{\mathscr{B}'}(\mathscr{B}) = Mat_{\mathscr{B}'}(\mathscr{B}) = Mat_{\mathscr{B},\mathscr{B}'}(I_E)
$$

$$
P_{\mathscr{B}'}(\mathscr{B})=
\begin{pmatrix}
\alpha_{11}&\alpha_{12}&\cdots&\alpha_{1n}\\
\alpha_{21}&\alpha_{22}&\cdots&\alpha_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
\alpha_{n1}&\alpha_{n2}&\cdots&\alpha_{nn}
\end{pmatrix}
\begin{matrix}
\leftarrow e_1'\\
\leftarrow e_2'\\
\vdots\\
\leftarrow e_n'
\end{matrix}
$$

avec $e_1 = \alpha_{11} e_1' + \alpha_{21} e_2' + \dots + \alpha_{n1} e_n'$.

:::caution
La matrice $P_{\mathscr{B}'}(\mathscr{B})$ représente le changement de base $(E, \mathscr{B}) \to (E, \mathscr{B}')$ et
$$
P\,\mathscr{X}_{\mathscr{B}} = \mathscr{X}_{\mathscr{B}'}.
$$
:::

### Critères de diagonalisation

$\mathcal{A}$ est diagonalisable ssi :

- $\chi_{\mathcal{A}}(X) = \prod_{k=1}^{p}(\lambda_k - X)^{m_k}$ avec $m_k = dim(E_{\lambda_k})$.
- $\sum_{k=1}^{p} dim(E_{\lambda_k}) = n$.
- $E_{\lambda_1} \oplus \dots \oplus E_{\lambda_p} = \mathcal{M}_{n\times 1}(\mathbb{K})$.

Si $\mathcal{A}$ est symetrique, alors $\mathcal{A}$ est diagonalisable.

## Chapitre 3 : Applications de la diagonalisation

Si $\mathcal{A}$ est diagonalisable, alors $\mathcal{A}^n = P D^n P^{-1}$.

### Suites récurrentes linéaires

Système :
$$
\begin{cases}
x_{n+1} = x_n + y_n + 2z_n \\
y_{n+1} = x_n + 2y_n + z_n \\
z_{n+1} = 2x_n + y_n + z_n
\end{cases}
$$

Avec $\displaystyle X_n = \begin{pmatrix}x_n\\y_n\\z_n\end{pmatrix}$ et
$$
\mathcal{A}=\begin{pmatrix}1&1&2\\1&2&1\\2&1&1\end{pmatrix},
\quad X_{n+1} = \mathcal{A}X_n \iff X_n = \mathcal{A}^n X_0.
$$

:::tip[Méthode (suite linéaire d'ordre 3)]
Pour $u_{n+3} = a u_{n+2} + b u_{n+1} + c u_n$, poser
$$
V=\begin{pmatrix}u_n\\u_{n+1}\\u_{n+2}\end{pmatrix},
\quad
M=\begin{pmatrix}0&1&0\\0&0&1\\c&b&a\end{pmatrix}.
$$
Alors $V_{n+1} = M V_n \iff V_n = M^n V_0$.

Si $M$ est diagonalisable avec trois valeurs propres distinctes $\alpha, \beta, \gamma$, alors
$$
u_n = A\alpha^n + B\beta^n + C\gamma^n,
$$
où $A, B, C$ se déterminent via $u_0, u_1, u_2$.
:::

### Exponentielle de matrice

$$
e^{\mathcal{A}} = \sum_{k \in \mathbb{N}} \frac{\mathcal{A}^k}{k!}.
$$

:::caution
Si $\mathcal{A}B = B\mathcal{A}$, alors $e^{\mathcal{A}} e^B = e^{\mathcal{A}+B}$. Sinon, cette propriété est fausse.
:::

Si $\mathcal{A}$ est diagonalisable,
$$
e^{\mathcal{A}} = P e^{D} P^{-1},
\quad
e^D = \begin{pmatrix}e^{\alpha}&0&\cdots&0\\0&e^{\beta}&\ddots&\vdots\\\vdots&\ddots&\ddots&0\\0&\cdots&0&e^{\gamma}\end{pmatrix}.
$$

### Systèmes différentiels linéaires

Pour $X'(t) = \mathcal{A} X(t)$,
$$
X(t) = e^{t\mathcal{A}} X_0.
$$

Si $\mathcal{A}$ est diagonalisable,
$$
X(t) = P e^{tD} P^{-1} X_0.
$$

### Équations matricielles

Une équation matricielle a pour inconnue une matrice $M$.

:::info[Exemple]
Trouver $M \in \mathcal{M}_3(\mathbb{C})$ tel que $M^2 = \mathcal{A}$ avec
$$
\mathcal{A}=PDP^{-1},
\quad
P=\begin{pmatrix}1&1&1\\1&0&-2\\1&-1&1\end{pmatrix},
\quad
D=\begin{pmatrix}4&0&0\\0&-1&0\\0&0&1\end{pmatrix}.
$$

Comme $M\mathcal{A} = \mathcal{A}M$, on obtient que $P^{-1}MP$ est diagonale.
Ainsi $M = P D_m P^{-1}$ avec $D_m^2 = D$, d'où
$$
D_m=\begin{pmatrix}\pm 2&0&0\\0&\pm i&0\\0&0&\pm 1\end{pmatrix}.
$$
Il y a $8$ solutions possibles.
:::
