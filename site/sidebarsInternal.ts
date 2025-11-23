import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  internalSidebar: [
    "intro",
    {
      type: "category",
      label: "Maths",
      collapsed: true,
      collapsible: true,
      items: ["maths/APV", "maths/EV", "maths/RDE", "maths/Séries"],
    },
    {
      type: "category",
      label: "Engineering Science",
      collapsed: true,
      collapsible: true,
      items: [
        "engineering_science/Méca I statique",
        "engineering_science/Méca II dynamique",
        "engineering_science/Méca. Flu Thermo",
        "engineering_science/Transferts thermiques",
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
  ],
};

export default sidebars;
