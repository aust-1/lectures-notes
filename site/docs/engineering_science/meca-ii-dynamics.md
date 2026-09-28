---
title: Mécanique II - Dynamique
description: Notes de cours sur les théorèmes généraux de la dynamique, la puissance, l'énergie et les frottements.
slug: meca-ii-dynamics
tags: [lecture notes, A1, science engineering, meca]
last_update:
  date: 2026-09-28
  author: Eliott A. Roussille
---

Ce cours s'appuie sur [les notes de mécanique I - statique](meca-i-static.md)

## Chapitre 1 : Théorèmes généraux de la dynamique

:::note[Principe fondamental de la dynamique (PFD)]
$$
[\mathcal A_0(\Sigma)]_A=[\mathcal T_{\overline \Sigma \to \Sigma}]_A
$$
Le torseur dynamique de $\Sigma$ dans son mouvement par rapport à $R_0$ est égal au torseur des efforts extérieurs, en tout point $A$.
:::

- **Théorème de la résultante dynamique (TRD)** : $\vec R_{\overline \Sigma \to \Sigma}=\vec R_{0d}(\Sigma)=m(\Sigma)\,\vec \gamma_0(G)$.
- **Théorème du moment dynamique (TMD)** : $\vec M_{\overline \Sigma \to \Sigma}(A)=\vec \delta_0(A,\Sigma)$.

### Condition de roulement sans glissement (CRSG)

La vitesse de glissement de $S_2$ par rapport à $S_1$ est nulle s'il n'y a pas de glissement. Soit $I_2$ le point de contact entre les deux solides et $O_2$ un point quelconque de $S_2$.

- Si un seul solide est en mouvement par rapport à $R_0$ :
  $$
  \vec U_{12}=\vec V_1(I_2 \in S)=\vec V_1(O_2)+\overrightarrow{I_2O_2} \wedge \vec \Omega_{1S}
  $$
- Si les deux solides sont en mouvement par rapport à $R_0$ :
  $$
  \vec{U}_{12}=\vec{V}_{1}(I_{2} \in S)-\vec{V}_{1}(I_{2}\in P)=\left(\vec V_1(G_{S})+\overrightarrow{I_2G_S} \wedge \vec \Omega_{1S}\right)-\left(\vec V_1(G_{P})+\overrightarrow{I_2G_P} \wedge \vec \Omega_{1P}\right)
  $$

## Chapitre 2 : Puissance, travail et énergie potentielle

### Puissance

Soit $[\mathcal C_0(S)]$ le torseur cinématique de $S$, de résultante $\vec \Omega_{0S}$ et de moment $\vec V_0(A)$.

- Puissance d'une force $\vec F$ appliquée en $P$, observée dans $R_0$ : $P_{F,0}=\vec F \cdot \vec V_0(P)$.
- Sur un solide : $P_{F,0}=[\mathcal C_0(S)]_A\odot [\mathcal F_{\overline S \to S}]_A$.

:::note[Liaisons parfaites]
Une liaison est parfaite si, pour tous les mouvements géométriquement permis, la puissance développée par les efforts de contact est nulle.

Soient $S_1$ et $S_2$ deux solides en contact et $C$ un point de la zone de contact :
$$
P_L = 0 \iff \vec R_{12}\cdot \vec V_{12}(C)+\vec \Omega_{12}\cdot \vec M_{12}(C) = 0
$$
pour tous les mouvements géométriquement permis.
:::

### Travail

$$
W_{F,0}(t_0,t_1)=\int_{t_0}^{t_1}P_{F,0}(t)\,dt
$$

### Énergie potentielle

- Définition : $\displaystyle P_{F,0}=-\frac {dE_p} {dt}$.
- Donc $W_{F,0}(t_0,t_1)=E_p(t_0)-E_p(t_1)$, soit $W_{A\to B}=E_{p,A}-E_{p,B}$.

Cas usuels :

- Système soumis à la pesanteur : $E_p=mg\,\overrightarrow{OG}\cdot\vec z_0$.
- Ressort reliant deux solides : $\displaystyle E_p=\frac 1 2 k(x-a)^2$.

## Chapitre 3 : Théorème de l'énergie cinétique

:::note[Théorème de l'énergie cinétique]
Pour un point matériel ou un solide $P$ :
$$
P_{F,0}=\frac{d}{dt} E_{c,0}(P) \implies W_{F,0}(t_0,t_1)=E_{c,0}(t_1)-E_{c,0}(t_0)
$$
:::

## Chapitre 4 : Frottements

Soit $\vec T$ l'effort tangentiel, $N$ l'effort normal, $f$ le coefficient de frottement et $\vec U$ la vitesse de glissement.

- **Glissement** : $\vec{T}\wedge \vec{U}=\vec{0}$ et $\vec{T}\cdot\vec{U} < 0$, autrement dit $\vec T$ est de sens contraire à $\vec U$, et $\| \vec{T}\|=f\,N$.
- **Non glissement** : $\vec{U}=\vec{0}$ et $\|\vec{T}\| < f\,N$.
