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
        "maths/math_tools",
        "maths/differentiation_integration",
        "maths/vectorial_spaces",
        "maths/euclidean_spaces",
        "maths/multivariable_analysis",
        "maths/rde",
        "maths/series",
        "maths/integral_calculus",
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
        "engineering_science/meca-i-static",
        "engineering_science/meca-ii-dynamics",
        "engineering_science/strength-of-materials",
        "engineering_science/automatic-control",
        "engineering_science/thermodynamics",
        "engineering_science/heat-transfer",
        "engineering_science/fluid-mechanics-thermodynamics",
        "engineering_science/electricity",
        "engineering_science/electronics",
        "engineering_science/electromagnetism",
      ],
    },
    {
      type: "category",
      label: "Informatique",
      collapsed: true,
      collapsible: true,
      items: ["it/architecture"],
    },
    {
      type: "category",
      label: "Matériel d'apprentissage d'informatique",
      collapsed: true,
      collapsible: true,
      items: ["learning_materials/unit-testing", "learning_materials/latex"],
    },
  ],
};

export default sidebars;
