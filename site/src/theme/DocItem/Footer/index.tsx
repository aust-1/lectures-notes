import { useDoc } from "@docusaurus/plugin-content-docs/client";
import type { WrapperProps } from "@docusaurus/types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import React, { JSX } from "react";
import Contributors, { type Contributor } from "./Contributors";

type Props = WrapperProps<typeof FooterType>;

/** additional_contributors du frontmatter : « Nom », { name, url } ou { username, html_url } */
function frontMatterContributors(value: unknown): Contributor[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((entry): Contributor[] => {
    if (typeof entry === "string") return entry ? [{ name: entry }] : [];
    if (entry && typeof entry === "object") {
      const { name, username, url, html_url } = entry as Record<string, unknown>;
      const label = typeof name === "string" ? name : typeof username === "string" ? username : "";
      const link = typeof url === "string" ? url : typeof html_url === "string" ? html_url : undefined;
      return label ? [{ name: label, ...(link ? { url: link } : {}) }] : [];
    }
    return [];
  });
}

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata } = useDoc();
  const { siteConfig } = useDocusaurusContext();
  const { frontMatter } = metadata;

  // Contributeurs git calculés au build (docusaurus.config.ts → customFields), par fichier « docs/… »
  const byFile = (siteConfig.customFields?.gitContributors ?? {}) as Record<string, Contributor[]>;
  const fromGit =
    frontMatter.show_git_contributors !== false ? byFile[metadata.source.replace(/^@site\//, "")] ?? [] : [];

  const contributors = [...fromGit];
  for (const extra of frontMatterContributors(frontMatter.additional_contributors)) {
    if (!contributors.some(({ name }) => name.toLowerCase() === extra.name.toLowerCase())) {
      contributors.push(extra);
    }
  }
  contributors.sort((a, b) => a.name.localeCompare(b.name, "fr"));

  // Méta du document (édition, mise à jour, contributeurs) : le seul aplat bleu de l'écran
  return (
    <div className="er-doc-meta">
      <Footer {...props} />
      <Contributors contributors={contributors} />
    </div>
  );
}
