import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type { PrismTheme } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Coloration du code selon la charte v2 : le bloc de code est un « bloc noir »
 * (encre en clair, papier en sombre). Palette réduite : orange texte pour les
 * mots-clés, gris pour les commentaires, graisse pour les noms. Pas d'italique.
 */
const erCodeTheme = (c: {
  bg: string;
  fg: string;
  body: string;
  muted: string;
  signal: string;
}): PrismTheme => ({
  plain: { color: c.fg, backgroundColor: c.bg },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: c.muted, fontStyle: "normal" },
    },
    { types: ["punctuation", "operator"], style: { color: c.body } },
    {
      types: ["keyword", "atrule", "important", "selector", "tag", "builtin", "deleted"],
      style: { color: c.signal },
    },
    {
      types: ["string", "char", "attr-value", "regex", "url", "inserted"],
      style: { color: c.body },
    },
    {
      types: ["function", "class-name", "attr-name", "property"],
      style: { color: c.fg, fontWeight: "700" },
    },
    {
      types: ["number", "boolean", "constant", "symbol", "variable"],
      style: { color: c.fg, fontWeight: "700" },
    },
    { types: ["namespace"], style: { opacity: 0.8 } },
  ],
});

const erCodeLight = erCodeTheme({
  bg: "#0B0C0E",
  fg: "#E7E5DF",
  body: "#C4C6CB",
  muted: "#A2A5AD",
  signal: "#FF8A57",
});

const erCodeDark = erCodeTheme({
  bg: "#EEECE6",
  fg: "#0E0F12",
  body: "#2E3138",
  muted: "#4A4D55",
  signal: "#B53C0B",
});

const config: Config = {
  title: "Notes de cours",
  tagline: "Notes de cours d'école d'ingénieur, par Eliott Roussille",
  favicon: "img/favicon.ico",

  headTags: [
    {
      tagName: "link",
      attributes: { rel: "icon", type: "image/svg+xml", href: "/img/favicon.svg" },
    },
    {
      tagName: "link",
      attributes: { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png" },
    },
  ],

  url: "http://localhost:3000",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  future: {
    v4: {
      useCssCascadeLayers: true,
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/aust-1/lectures-notes/tree/main/site/",
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Monogramme « ER_ » : le « _ » orange est ajouté en CSS (.navbar__title::after)
    navbar: {
      title: "ER",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Notes de cours",
        },
        {
          href: "https://github.com/aust-1/lectures-notes",
          position: "right",
          className: "header-github-link",
          "aria-label": "Dépôt GitHub",
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    footer: {
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:eliottroussille@gmail.com",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/eliott-roussille/",
            },
            {
              label: "GitHub",
              href: "https://github.com/aust-1/",
            },
          ],
        },
      ],
      // Signature de la charte : une seule ligne, « Eliott Roussille @aust-1 »
      copyright: `<span class="er-signature"><span class="er-mark" aria-hidden="true">ER<span>_</span></span><span class="er-name">Eliott Roussille</span><span class="er-handle">@aust-1</span></span>`,
    },
    prism: {
      theme: erCodeLight,
      darkTheme: erCodeDark,
      additionalLanguages: [
        "bash",
        "c",
        "cpp",
        "csharp",
        "css",
        "json",
        "latex",
        "markdown",
        "powershell",
        "python",
        "rust",
        "sql",
        "typescript",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
  plugins: ["docusaurus-plugin-sass"],

  // Statistiques de visite (Rybbit auto-hébergé, sans cookie) ; l'ID vient du tableau de bord
  scripts: [
    {
      src: "https://analytics.eliott-roussille.fr/api/script.js?siteId=1b1e712f7d86",
      "data-site-id": "2",
      defer: true,
    },
  ],
};

export default config;
