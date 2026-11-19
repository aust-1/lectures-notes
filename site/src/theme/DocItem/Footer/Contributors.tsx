import Translate from "@docusaurus/Translate";
import React, { JSX } from "react";
import styles from "./contributors.module.scss";

/** Contributeur d'une note : calculé au build (scripts/git-contributors.mjs) ou ajouté dans le frontmatter */
export type Contributor = { name: string; url?: string };

/** Initiales affichées à la place d'un avatar : rien n'est chargé depuis un service tiers */
function initials(name: string): string {
  const words = name.split(/[\s._-]+/).filter((word) => /^\p{L}/u.test(word));
  const letters = words.length > 1 ? [words[0], words[words.length - 1]] : words;
  return letters.map((word) => word[0].toUpperCase()).join("") || "?";
}

export default function Contributors({ contributors }: { contributors: Contributor[] }): JSX.Element | null {
  if (contributors.length === 0) {
    return null;
  }

  return (
    <div className={styles.contributors}>
      <p className={styles.title}>
        <Translate id="theme.DocItem.Footer.Contributors" description="The name of the contributors header">
          Contributeurs
        </Translate>
      </p>

      <ul className={styles.wrapper}>
        {contributors.map(({ name, url }) => {
          const content = (
            <figure>
              <span className={styles.avatar} aria-hidden="true">
                {initials(name)}
              </span>
              <figcaption className={styles.caption} title={name}>
                {name}
              </figcaption>
            </figure>
          );
          return (
            <li key={name} className={styles.contributor}>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
