---
title: Espaces vectoriels
description: Notes de cours sur les espaces vectoriels, sous-espaces et applications lineaires.
slug: vectorial_spaces
tags: [lecture notes, A1, maths, algebra]
last_update:
  date: 2026-02-05
  author: Eliott A. Roussille
---

## Chapitre 1 : Notations

- $\mathcal F(\mathbb A, \mathbb B)$ : ensemble des fonctions $f$ telles que $f : \mathbb A \to \mathbb B$.
- $\mathbb A^n$ : ensemble des $n$-uplets de $\mathbb A$.
- $\mathbb R_n[X]$ : ensemble des polynômes de degré au plus $n$ définis sur $\mathbb R$.

## Chapitre 2 : Espaces vectoriels

Un ensemble $E$ est un espace vectoriel sur $\mathbb K$, noté $(E, \oplus, \otimes)$, ssi il verifie les 9 axiomes suivants :

- Stabilité par la composition interne : $\forall (u, v) \in E^2$, $u \oplus v \in E$.
- Commutativité de la composition interne : $\forall (u, v) \in E^2$, $u \oplus v = v \oplus u$.
- Associativité de la composition interne : $\forall (u, v, w) \in E^3$, $(u \oplus v) \oplus w = u \oplus (v \oplus w)$.
- Élément neutre de la composition interne : $\exists \vec 0_E \in E$, $\forall u \in E$, $u \oplus \vec 0_E = u$.
- Élément symétrique de la composition interne : $\forall u \in E$, $\exists (-u) \in E$, $u \oplus (-u) = \vec 0_E$.
- Stabilité par la composition externe : $\forall u \in E$, $\forall \lambda \in \mathbb K$, $\lambda \otimes u \in E$.
- Distributivité à gauche de la composition externe : $\forall \lambda \in \mathbb K$, $\forall (u, v) \in E^2$, $\lambda \otimes (u \oplus v) = \lambda \otimes u \oplus \lambda \otimes v$.
- Associativité de la composition externe : $\forall (\lambda, \mu) \in \mathbb K^2$, $\forall u \in E$, $(\lambda \mu) \otimes u = \lambda \otimes (\mu \otimes u)$.
- Élément neutre de la composition externe : $\forall u \in E$, $1 \otimes u = u$.

Un ensemble $F$ est un sous-espace vectoriel de $E$ ssi il verifie les 3 conditions suivantes :

- $F \subset E$.
- $\vec 0_E \in F$.
- Soient $u, v \in F$, $\forall \lambda, \mu \in \mathbb K$, $\lambda \otimes u \oplus \mu \otimes v \in F$.

Toute intersection de sous-espaces vectoriels d'un $\mathbb K$-ev $E$ est un sous-espace vectoriel de $E$.

## Chapitre 3 : Sous-espaces engendrés (Vect)

Soit $E$ un $\mathbb K$-ev et $(u_1, \dots, u_n)$ une famille de $E$. L'ensemble des combinaisons linéaires de cette famille est un sous-espace vectoriel de $E$, appelé sous-espace vectoriel engendré par la famille $(u_1, \dots, u_n)$. On note cet ensemble $Vect(u_1, \dots, u_n)$.

:::example
$Vect(u_1, \dots, u_n) = \sum \lambda_i u_i = \{\lambda_1 u_1 + \dots + \lambda_n u_n \mid \lambda_1, \dots, \lambda_n \in \mathbb K\}$.

$\mathbb R_p[X] = Vect(1, X, \dots, X^p)$.

$\mathbb R^n = Vect((1, 0, \dots, 0), (0, 1, 0, \dots, 0), \dots, (0, \dots, 0, 1))$.
:::

On peut écrire l'ensemble des solutions d'un système homogène sous forme de $Vect$.

:::example
$S = \{(\lambda_1 + 2\lambda_2, \lambda_1 - \lambda_2) \mid \lambda_1, \lambda_2 \in \mathbb K\}$.

$S = \{\lambda_1(1, 1) + \lambda_2(2, -1) \mid \lambda_1, \lambda_2 \in \mathbb K\}$.

$S = Vect((1, 1), (2, -1))$.
:::

Deux familles engendrent le même $Vect$ si :

- On change l'ordre des vecteurs.
- On multiplie un vecteur par un scalaire non nul.
- On ajoute à un vecteur un multiple d'un autre vecteur.
- On enlève les vecteurs nuls.
- On enlève les vecteurs qui sont combinaisons linéaires des autres vecteurs.

Propriétés (pour $E$ un $\mathbb K$-ev) :

- $u_1, \dots, u_n \in E \iff Vect(u_1, \dots, u_n) \subset E$.
- $A \subset B \Rightarrow Vect(A) \subset Vect(B)$.

## Chapitre 4 : Sommes de sous-espaces

- $F + G = \{u + v \mid u \in F, v \in G\} = Vect(F \cup G)$.
- $F$ et $G$ sont en somme directe si tout élément de $F + G$ se décompose de manière unique en somme d'un élément de $F$ et d'un élément de $G$. On note alors $F + G = F \oplus G$.
- $F$ et $G$ sont supplémentaires dans $E$ si tout élément de $E$ se décompose de manière unique en somme d'un élément de $F$ et d'un élément de $G$. On note alors $F \oplus G = E$.

Propriétés :

- $F$ et $G$ sont en somme directe $\iff F \cap G = \{\vec 0_E\}$.
- $F$ et $G$ sont supplémentaires dans $E \iff F$ et $G$ en somme directe et $F + G = E$.

## Chapitre 5 : Applications linéaires

- Endomorphisme : linéaire $E \to E$.
- Isomorphisme : linéaire bijective.
- Automorphisme : $E \to E$ et linéaire bijective.
- $Ker(f)$ : noyau de $f$, ensemble des $u$ tels que $f(u) = 0$.
- $f$ injective $\iff Ker(f) = \{0\}$.

Soit $f : E \to F$ avec $E = Vect(u_1, u_2, \dots, u_n)$.

- $Im(f) = Vect(f(u_1), f(u_2), \dots, f(u_n))$.
- $f$ surjective $\iff Im(f) = F$.
- $rang(f) = dim(Im(f))$.
- $Dim(E) = Dim(Ker(f)) + rang(f)$.

## Chapitre 6 : Matrices

$$
M=\begin{pmatrix}
  \alpha_{11} & \cdots & \alpha_{1p} \\
  \vdots & \ddots & \vdots \\
  \alpha_{n1} & \cdots & \alpha_{np}
\end{pmatrix}
$$

On note $\mathscr{M}_{n,p}(\mathbb{K})$ l'ensemble des matrices à $n$ lignes et $p$ colonnes à coefficients dans $\mathbb{K}$. On note aussi $\mathscr{M}_{n} = \mathscr{M}_{n,n}$.

- Matrice diagonale :
  $$
  D = diag(\alpha_{11}, \cdots, \alpha_{nn}) = \begin{pmatrix}
    \alpha_{11} & 0 & \cdots & 0 \\
    0 & \alpha_{22} & \ddots & \vdots \\
    \vdots & \ddots & \ddots & 0 \\
    0 & \cdots & 0 & \alpha_{nn}
  \end{pmatrix}
  $$
- Matrice identité : $I_n = diag(1, \dots, 1)$.
- Matrice carrée symétrique et anti-symétrique :
  - $A$ est symétrique $\iff A =\ ^tA$.
  - $A$ est anti-symétrique $\iff A = -\ ^tA$.
- Trace de matrice carrée : $tr(A) = \alpha_{11} + \alpha_{22} + \dots + \alpha_{nn} = \sum^n_{i=1} \alpha_{i,i}$.

## Chapitre 7 : Déterminants

## Chapitre 8 : Représentation matricielle des applications linéaires

Avec $\mathcal{A} = Mat_f$,
$$
\begin{cases}
f(x_1) = y_1 \\
\vdots \\
f(x_n) = y_n
\end{cases}
\iff AX = Y
$$

Matrice d'une famille finie de vecteurs dans une base finie :
soit $E$ un $\mathbb{K}$-ev de dimension finie $n$, $\mathscr{B} = (e_1, \dots, e_n)$ une base de $E$ et $\mathscr{X} = (X_1, \dots, X_p)$ une famille finie de vecteurs de $E$. $Mat_{\mathscr{B}}(\mathscr{X})$ est appelée matrice de $\mathscr{X}$ dans la base $\mathscr{B}$ :
$X_1 = \alpha_{11} e_1 + \alpha_{21} e_2 + \dots + \alpha_{n1} e_n$.

- $rg(\mathscr{X}) = rg(Mat_{\mathscr{B}}(\mathscr{X}))$.
