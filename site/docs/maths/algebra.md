---
title: Algèbre
description: Outils de raisonnement, ensembles et premières notions sur les applications.
slug: algebra
tags: [lecture notes, A1, maths, algebra]
last_update:
  date: 2025-01-12
  author: Eliott A. Roussille
---

## Chapitre 1 : Outils de raisonnement

- **Nombres transcendants** : réels ou complexes qui ne sont racines d'aucun polynôme à coefficients rationnels non tous nuls.
- **Raisonnement par l'absurde** : supposer $P$ vraie et $\overline Q$ vraie, dériver une contradiction avec les hypothèses, conclure que $P \Rightarrow Q$.

### Récurrences

- **Récurrence double (ou multiple)** : initialiser $P(n_0)$ et $P(n_0 + 1)$ ; montrer $P(n_k)$ et $P(n_k + 1)$ vraies $\Rightarrow P(n_k + 2)$ vraie
- **Récurrence forte** : pour $n \ge n_0$, initialiser sur $n_0$, supposer $P(k)$ vraie pour tout $k \in [\![n_0, n_k]\!]$, en déduire $P(n_k + 1)$

:::tip
Lorsqu'il s'agit de montrer une propriété pour tous les entiers supérieurs à un certain rang, la récurrence forte est souvent plus adaptée, notamment pour des propriétés liées à la divisibilité ou aux congruences.
:::

## Chapitre 2 : Ensembles et opérations

### Vocabulaire essentiel

- **Singleton** : ensemble à un élément.
- $A \subset B \iff A$ est un sous-ensemble de $B$
- $A \subset B$ et $B \subset A \iff A = B$
- Inclusion stricte : $A \varsubsetneq B \iff A \subset B$ et $A \neq B$
- Ensemble des parties : $P(E)$ ; si $|E| = n$, alors $|P(E)| = 2^n$

:::example
Pour $E = \{a, b, c\}$, $P(E) = \{\emptyset, \{a\}, \{b\}, \{c\}, \{a, b\}, \{a, c\}, \{b, c\}, \{a, b, c\}\}$.
:::

### Opérations de base

- Intersection : $A \cap B = \{x \in E \mid x \in A \text{ et } x \in B\}$
- Union : $A \cup B = \{x \in E \mid x \in A \text{ ou } x \in B\}$
- Différence : $A - B = A \setminus B = \{x \in E \mid x \in A \text{ et } x \notin B\}$
- Complémentaire (dans $E$) : $\complement_E A = A^C = \{x \in E \mid x \notin A\}$
- Différence symétrique (XOR) : $A \Delta B = (A \setminus B) \cup (B \setminus A)$

Propriétés utiles :

- $A \setminus B = A \cap B^C$
- $A \setminus B = \emptyset \iff A \subset B$
- $A \cup B = (A \setminus B) \cup (A \cap B) \cup (B \setminus A)$
- $A \Delta B = (A \cup B) \setminus (A \cap B)$

### Familles d'ensembles

- Union : $\displaystyle \bigcup_{i=1}^n A_i = \{x \in E \mid \exists i \in [\![1, n]\!],\, x \in A_i\}$.
- Intersection : $\displaystyle \bigcap_{i=1}^n A_i = \{x \in E \mid \forall i \in [\![1, n]\!],\, x \in A_i\}$.
- Ces définitions restent valables pour une famille $(A_i)_{i \in I}$ d'index quelconque.

:::note Lois de De Morgan
$(A \cup B)^C = A^C \cap B^C$ et $(A \cap B)^C = A^C \cup B^C$.\
Plus généralement, $(\bigcup_{i \in I} A_i)^C = \bigcap_{i \in I} A_i^C$ et $(\bigcap_{i \in I} A_i)^C = \bigcup_{i \in I} A_i^C$.
:::

### Produit cartésien et partitions

- Produit cartésien : $\displaystyle \prod_{i=1}^n E_i = \{(x_1, \dots, x_n) \mid x_i \in E_i\}$ ; si $E_i = E$, on note $E^n$.
- Partition de $E$ : une famille $(E_i)_{i \in I}$ telle que $E_i \neq \emptyset$, $E_i \cap E_j = \emptyset$ pour $i \neq j$, et $\bigcup_{i \in I} E_i = E$. Chaque $x \in E$ appartient à un unique $E_i$.
- Distributivité : $E \cup \bigl(\bigcap_{i \in I} F_i\bigr) = \bigcap_{i \in I} (E \cup F_i)$ et $E \cap \bigl(\bigcup_{i \in I} F_i\bigr) = \bigcup_{i \in I} (E \cap F_i)$.

## Chapitre 3 : Applications

Soit $f : E \to F$.

- **Graphe** : $G_f = \{(x, y) \in E \times F \mid y = f(x)\}$ ; $f = g \iff G_f = G_g$
- **Fonction identité** : $Id_E(x) = x$ pour $x \in E$
- **Composition** : si $g : F \to G$, alors $g \circ f : E \to G$ défini par $x \mapsto g(f(x))$ ; la composition est associative

Propriétés :

- $g \circ f$ injective $\Rightarrow f$ injective
- $g \circ f$ surjective $\Rightarrow g$ surjective

### Fonction indicatrice

Fonction $\mathbb 1_A : E \to \mathbb R$ définie par $\mathbb 1_A(x) = 1$ si $x \in A$ et $0$ sinon.

$$\mathbb 1_A(x) = \begin{cases}1 & \text{si } x \in A \\ 0 & \text{sinon} \end{cases}$$

Propriétés :

- $\mathbb 1_A = \mathbb 1_B \iff A = B$
- $\mathbb 1_A^2 = \mathbb 1_A$
- $\mathbb 1_{A^C} = 1 - \mathbb 1_A$
- $\mathbb 1_{A \cap B} = \mathbb 1_A\, \mathbb 1_B$
- $\mathbb 1_{A \cup B} = \mathbb 1_A + \mathbb 1_B - \mathbb 1_A \mathbb 1_B$

## Chapitre 4 : Images directes et réciproques

### Image directe

Pour $X \subset E$, $f(X) = \{y \in F \mid \exists x \in X,\ f(x) = y\}$.

Propriétés :

- $A \subset B \Rightarrow f(A) \subset f(B)$
- $f(A \cap B) \subset f(A) \cap f(B)$
- $f(A \cup B) = f(A) \cup f(B)$

### Image réciproque

Pour $Y \subset F$, $f^{-1}(Y) = \{x \in E \mid f(x) \in Y\}$

Propriétés :

- $A \subset B \Rightarrow f^{-1}(A) \subset f^{-1}(B)$
- $f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B)$
- $f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B)$

Terminologie : $f^{\leftarrow}(B)$ désigne aussi l'image réciproque de $B$ par $f$.

## Chapitre 5 : Injectivité, surjectivité et bijection

- **Injection** : $f$ injective $\iff \forall (x_1, x_2) \in E^2,\ f(x_1) = f(x_2) \Rightarrow x_1 = x_2$
- **Surjection** : $f$ surjective $\iff \forall y \in F,\ \exists x \in E$ tel que $f(x) = y$
- **Bijection** : $f$ bijective $\iff f$ injective et surjective $\iff \forall y \in F,\ \nexists x \in E$ avec $f(x) = y$

### Application réciproque et involutions

- Si $f$ est bijective, alors il existe $g : F \to E$ telle que $f \circ g = Id_F$ et $g \circ f = Id_E$ ; on note $g = f^{-1}$
- Composition de bijections : $f$ et $g$ bijectives $\Rightarrow g \circ f$ bijective et $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$
- **Involution** : $f : E \to E$ telle que $f \circ f = Id_E$, donc $f^{-1} = f$
