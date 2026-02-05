---
title: Électronique
description: Notes de cours sur les bases de l'électronique analogique.
slug: electronics
tags: [lecture notes, A1, science engineering, electronics]
last_update:
  date: 2026-02-05
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes d'électricité](electricity.md)

## Chapitre 1 : Rappel d'électricité

- Loi d'Ohm : $U = R I$.
- Puissance : $P = U I$.
- Energie : $E = P t$ car $P = \frac{dE}{dt}$.

## Chapitre 2 : Espace complexe ($j\omega$)

- $\omega$ : pulsation en rad $\cdot$ s$^{-1}$.
- $j$ : unité imaginaire utilisée en électrotechnique.
- $\underline V, \underline I$ : représentations complexes de $v(t), i(t)$ en régime sinusoïdal.
- $j\omega$ : opérateur dérivation.
- $\frac{1}{j\omega}$ : opérateur intégration.
- Impédances :
  - $\mathcal Z_R = R$.
  - $\mathcal Z_L = j L \omega = j L 2\pi f$.
  - $\mathcal Z_C = \frac{1}{j C \omega} = \frac{1}{j C 2\pi f}$.

L'impédance $\mathcal Z$ est la généralisation de la résistance en régime sinusoïdal.

## Chapitre 3 : Filtres

Un filtre est un circuit électrique qui limite les fréquences qui passent.

Types principaux :

- Passe-bas (Low-pass) : laisse passer les fréquences basses et atténue les fréquences élevées.
- Passe-haut (High-pass) : laisse passer les fréquences élevées et atténue les fréquences basses.
- Passe-bande (Band-pass) : ne laisse passer qu'une bande de fréquences.
- Coupe-bande (Band-stop) : atténue une bande de fréquences et laisse passer les autres.

:::note[Méthode (comportement asymptotique)]

- Basse fréquence $f \to 0$ :
  - $\mathcal Z_R = R$ (fixe).
  - $\mathcal Z_L = j L 2\pi f \to 0$.
  - $\mathcal Z_C = \frac{1}{j C 2\pi f} \to +\infty$.
- Haute fréquence $f \to +\infty$ :
  - $\mathcal Z_R = R$ (fixe).
  - $\mathcal Z_L = j L 2\pi f \to +\infty$.
  - $\mathcal Z_C = \frac{1}{j C 2\pi f} \to 0$.

Synthese :

| Element | B.F.           | H.F.           |
| ------- | -------------- | -------------- |
| $R$     | $R$            | $R$            |
| $L$     | fil            | circuit ouvert |
| $C$     | circuit ouvert | fil            |

:::

Caractéristiques :

- Ordre : nombre de bobines + nombre de condensateurs.
- Type.
- Fonction de transfert : $T(j\omega) = H(j\omega) = \frac{V_s}{V_e} = \frac{\mathcal Z_2}{\mathcal Z_1 + \mathcal Z_2}$.
- <img src="/assets/docs/Electronique/Fonction de transfert.jpg" alt="Fonction de transfert" width="380" />

## Chapitre 4 : Déphasage

- $\varphi = \frac{\Delta t \times 2\pi}{T}$.
- Réactances : $X_L = L\omega$ et $X_C = \frac{1}{C\omega}$ en $\Omega$.
- Résistif : courant et tension en phase.
- Capacitif : courant en avance de phase.
- Inductif : courant en retard de phase.

## Chapitre 5 : Diodes

- Diode bloquée : $V_A < V_K$.
- Diode passante : $V_A > V_K$.
- <img src="/assets/docs/Electronique/Diode 1.png" alt="Diode 1" width="380" />
- <img src="/assets/docs/Electronique/Diode 2.png" alt="Diode 2" width="380" />
- <img src="/assets/docs/Electronique/Diode 3.jpg" alt="Diode 3" width="380" />

## Chapitre 6 : Transistors bipolaires

- $I_c = \beta I_B$ avec $\beta$ le gain en courant.
- $I_e \approx I_c$ car $I_e = I_c + I_b$.

## Chapitre 7 : AOP

- Déterminer $V^-$ avec Millman.
- Gain : $G = 20 \log(|H(j\omega)|)$.
- Module de la fonction de transfert : $|H| = \sqrt{a^2 + b^2}$.
- <img src="/assets/docs/Electronique/Filtre forme canonique.png" alt="Filtre forme canonique" width="380" />
