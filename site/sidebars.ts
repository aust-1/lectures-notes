import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Mathématiques",
      collapsed: true,
      collapsible: true,
      items: [
        "maths/algebra",
        "maths/math-tools",
        "maths/differentiation-integration",
        "maths/vectorial-spaces",
        "maths/euclidean-spaces",
        "maths/multivariable-analysis",
        "maths/rde",
        "maths/series",
        "maths/integral-calculus",
        "maths/probability",
        "maths/statistics",
        "maths/formulary",
      ],
    },
    {
      type: "category",
      label: "Sciences de l'ingénieur",
      collapsed: true,
      collapsible: true,
      items: [
        "engineering-science/meca-i-static",
        "engineering-science/meca-ii-dynamics",
        "engineering-science/strength-of-materials",
        "engineering-science/automatic-control",
        "engineering-science/thermodynamics",
        "engineering-science/heat-transfer",
        "engineering-science/fluid-mechanics-thermodynamics",
        "engineering-science/electricity",
        "engineering-science/electronics",
        "engineering-science/electromagnetism",
      ],
    },
    {
      type: "category",
      label: "Informatique",
      collapsed: true,
      collapsible: true,
      items: ["it/architecture", "it/machine-learning"],
    },
    {
      type: "category",
      label: "Matériel d'apprentissage d'informatique",
      collapsed: true,
      collapsible: true,
      items: ["learning-materials/unit-testing", "learning-materials/latex"],
    },
  ],
};

export default sidebars;
