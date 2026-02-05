import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Mathématiques",
      collapsed: true,
      collapsible: true,
      items: ["maths/algebra", "maths/vectorial_spaces"],
    },
    {
      type: "category",
      label: "Sciences de l'ingénieur",
      collapsed: true,
      collapsible: true,
      items: [
        "engineering_science/meca-i-static",
        "engineering_science/thermodynamics",
        "engineering_science/electricity",
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
