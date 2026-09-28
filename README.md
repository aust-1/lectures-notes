# Notes de cours

Notes de cours d'école d'ingénieur (mathématiques, sciences de l'ingénieur, informatique), publiées sous forme de site [Docusaurus](https://docusaurus.io) sur **[docs.eliott-roussille.fr](https://docs.eliott-roussille.fr)**.

> Ces notes ont été rédigées par un étudiant pour ses propres besoins d'apprentissage. Ce ne sont pas des documents officiels et elles peuvent contenir des erreurs.

## Contenu

### Mathématiques

| Cours                                 | Fichier                                          |
| ------------------------------------- | ------------------------------------------------ |
| Algèbre                               | `site/docs/maths/algebra.md`                     |
| Outils mathématiques pour l'ingénieur | `site/docs/maths/math_tools.md`                  |
| Dérivation et intégration             | `site/docs/maths/differentiation_integration.md` |
| Espaces vectoriels                    | `site/docs/maths/vectorial_spaces.md`            |
| Espaces euclidiens                    | `site/docs/maths/euclidean_spaces.md`            |
| Analyse à plusieurs variables         | `site/docs/maths/multivariable_analysis.md`      |
| Réduction d'endomorphismes            | `site/docs/maths/rde.md`                         |
| Séries                                | `site/docs/maths/series.md`                      |
| Calcul intégral                       | `site/docs/maths/integral_calculus.md`           |
| Probabilités                          | `site/docs/maths/probability.md`                 |
| Statistiques                          | `site/docs/maths/statistics.md`                  |
| Formulaire                            | `site/docs/maths/formulary.md`                   |

### Sciences de l'ingénieur

| Cours                                    | Fichier                                                           |
| ---------------------------------------- | ----------------------------------------------------------------- |
| Mécanique I - Statique                   | `site/docs/engineering_science/meca-i-static.md`                  |
| Mécanique II - Dynamique                 | `site/docs/engineering_science/meca-ii-dynamics.md`               |
| Résistance des matériaux                 | `site/docs/engineering_science/strength-of-materials.md`          |
| Automatique et asservissements           | `site/docs/engineering_science/automatic-control.md`              |
| Thermodynamique                          | `site/docs/engineering_science/thermodynamics.md`                 |
| Transferts thermiques                    | `site/docs/engineering_science/heat-transfer.md`                  |
| Mécanique des fluides et thermodynamique | `site/docs/engineering_science/fluid-mechanics-thermodynamics.md` |
| Électricité                              | `site/docs/engineering_science/electricity.md`                    |
| Électronique                             | `site/docs/engineering_science/electronics.md`                    |
| Électromagnétisme                        | `site/docs/engineering_science/electromagnetism.md`               |

### Informatique

| Cours                                        | Fichier                                        |
| -------------------------------------------- | ---------------------------------------------- |
| Architecture                                 | `site/docs/it/architecture.md`                 |
| Écrire des maths en LaTeX                    | `site/docs/learning_materials/latex.md`        |
| Tests unitaires (exemples en C# avec MSTest) | `site/docs/learning_materials/unit-testing.md` |

## Structure du dépôt

```text
.
├── site/                      # Site Docusaurus
│   ├── docs/                  # Notes de cours (Markdown)
│   │   ├── maths/
│   │   ├── engineering_science/
│   │   ├── it/
│   │   ├── learning_materials/
│   │   └── tags.yml           # Déclaration des tags
│   ├── static/assets/docs/    # Images des notes, un dossier par cours
│   ├── sidebars.ts            # Ordre et catégories de la barre latérale
│   └── docusaurus.config.ts
├── docker/Dockerfile          # Build Node puis service statique nginx
├── docker-compose.yml         # Lancement de l'image publiée sur le serveur
├── Caddyfile                  # Reverse proxy HTTPS
└── .github/workflows/         # CI : build, push et déploiement
```

## Développement local

Prérequis : Node.js 18 ou plus et [pnpm](https://pnpm.io).

```shell
cd site
pnpm install
pnpm start    # serveur de développement sur http://localhost:3000
pnpm build    # build de production dans site/build
pnpm serve    # prévisualisation du build
```

## Ajouter ou modifier une note

1. Créer le fichier dans le dossier de la matière (`site/docs/maths/`, `site/docs/engineering_science/`, …). Nom de fichier en anglais : `snake_case` pour les maths, `kebab-case` pour les sciences de l'ingénieur.
2. Commencer par le frontmatter :

   ```yaml
   ---
   title: Nom du cours
   description: Notes de cours sur …
   slug: nom-du-fichier
   tags: [lecture notes, A1, maths, analysis]
   last_update:
     date: AAAA-MM-JJ
     author: Eliott A. Roussille
   ---
   ```

   Tout nouveau tag doit être déclaré dans `site/docs/tags.yml`.

3. Si le cours en prolonge un autre, l'indiquer en tête : `Ce cours s'appuie sur [les notes de …](fichier.md)`.
4. Structurer le contenu en `## Chapitre N : Titre`, puis `###` pour les sous-parties.
5. Utiliser les admonitions Docusaurus avec un titre entre crochets :

   | Contenu                      | Syntaxe               |
   | ---------------------------- | --------------------- |
   | Définition, théorème, preuve | `:::note[Définition]` |
   | Méthode, critère, astuce     | `:::tip[Méthode]`     |
   | Exemple                      | `:::info[Exemple]`    |
   | Mise en garde                | `:::caution`          |

6. Écrire les maths en LaTeX (rendu KaTeX) : `$…$` en ligne, `$$…$$` sur des lignes séparées pour les blocs. Les unités et le texte en mode math passent par `\text{…}`.
7. Placer les images dans `site/static/assets/docs/<Nom du cours>/` et les insérer avec :

   ```html
   <img src="/assets/docs/Nom du cours/image.png" alt="Description" width="450" />
   ```

8. Ajouter la page dans `site/sidebars.ts`, puis vérifier avec `pnpm build` (aucun avertissement KaTeX ni tag non déclaré).

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/build-and-deploy.yml` :

1. construction de l'image Docker (`docker/Dockerfile`, cible `serve`) et publication sur `ghcr.io/aust-1/documentation` ;
2. connexion SSH au serveur, puis `docker compose pull` et `docker compose up -d`.

Sur le serveur, `docker-compose.yml` lance l'image sur le réseau `proxy`, et Caddy (`Caddyfile`) sert le site en HTTPS sur `docs.eliott-roussille.fr`.

## Licence

[MIT](LICENSE) © Eliott A. Roussille
