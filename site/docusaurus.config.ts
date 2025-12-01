import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Austin's Course Notes",
  favicon: "img/favicon.ico",

  url: "http://localhost:3000",
  baseUrl: "/",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    path: "i18n",
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
    navbar: {
      logo: {
        alt: "Austin's Course Notes Logo",
        src: "img/favicon.svg",
        srcDark: "img/favicon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/aust-1/lectures-notes",
          position: "right",
          className: "header-github-link",
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
          title: "Connect",
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
      logo: {
        alt: "Austin's Course Notes Logo",
        src: "img/favicon.svg",
        srcDark: "img/favicon.svg",
        width: "170px",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Eliott A. Roussille.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.vsDark,
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
};

export default config;
