import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Maths",
      collapsed: true,
      collapsible: true,
      items: ["maths/algebra"],
    },
    {
      type: "category",
      label: "Engineering Science",
      collapsed: true,
      collapsible: true,
      items: [
        "engineering_science/thermodynamique",
        "engineering_science/electricity",
      ],
    },
    {
      type: "category",
      label: "IT",
      collapsed: true,
      collapsible: true,
      items: ["it/architecture"],
    },
    {
      type: "category",
      label: "Learning materials",
      collapsed: true,
      collapsible: true,
      items: ["learning_materials/unit-testing", "learning_materials/latex"],
    },
  ],
};

export default sidebars;
