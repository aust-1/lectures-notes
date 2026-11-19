// Contributeurs de chaque note, calculés au build depuis l'historique git (git log --follow),
// au lieu d'appeler l'API GitHub depuis le navigateur de chaque visiteur.
//
// - Avec git et l'historique (dev local, CI) : calcul direct.
// - Sans git (build Docker : ni .git ni binaire git dans l'image) : lecture de
//   site/.git-contributors.json, généré par la CI avant le build de l'image avec
//   « node site/scripts/git-contributors.mjs ».
// Les identités d'une même personne sont regroupées par le .mailmap du dépôt.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** @typedef {{ name: string; url?: string }} Contributor */

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(siteDir, "docs");
export const contributorsFile = path.join(siteDir, ".git-contributors.json");

// 12345+login@users.noreply.github.com ou login@users.noreply.github.com
const NOREPLY = /^(?:\d+\+)?([^@]+)@users\.noreply\.github\.com$/i;

/** @param {string} dir @returns {string[]} chemins relatifs à site/ (« docs/maths/algebra.md ») */
function listDocs(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listDocs(full);
    return /\.mdx?$/.test(entry.name) ? [path.relative(siteDir, full).split(path.sep).join("/")] : [];
  });
}

/** @param {string} file @returns {Contributor[]} du plus ancien au plus récent */
function contributorsOf(file) {
  const log = execFileSync("git", ["log", "--follow", "--reverse", "--format=%aN%x09%aE", "--", file], {
    cwd: siteDir,
    encoding: "utf8",
  });
  /** @type {Map<string, Contributor>} */
  const contributors = new Map();
  for (const line of log.split("\n")) {
    if (!line) continue;
    const [name, email = ""] = line.split("\t");
    const login = NOREPLY.exec(email)?.[1];
    const key = (login ?? name).toLowerCase();
    if (!contributors.has(key)) {
      contributors.set(key, login ? { name, url: `https://github.com/${login}` } : { name });
    }
  }
  return [...contributors.values()];
}

/** @returns {Record<string, Contributor[]> | null} null si git ou l'historique est indisponible */
export function computeGitContributors() {
  try {
    execFileSync("git", ["rev-parse", "--is-inside-work-tree"], { cwd: siteDir, stdio: "ignore" });
  } catch {
    return null;
  }
  return Object.fromEntries(listDocs(docsDir).map((file) => [file, contributorsOf(file)]));
}

/** @returns {Record<string, Contributor[]>} contributeurs par fichier (« docs/… »), vide si inconnu */
export function loadGitContributors() {
  const computed = computeGitContributors();
  if (computed) return computed;
  if (existsSync(contributorsFile)) return JSON.parse(readFileSync(contributorsFile, "utf8"));
  console.warn("[git-contributors] ni historique git ni .git-contributors.json : contributeurs non affichés");
  return {};
}

// Utilisé par la CI avant le build Docker : node site/scripts/git-contributors.mjs
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const data = computeGitContributors();
  if (!data) {
    console.error("git-contributors : pas de dépôt git");
    process.exit(1);
  }
  writeFileSync(contributorsFile, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`git-contributors : ${Object.keys(data).length} notes -> ${path.relative(process.cwd(), contributorsFile)}`);
}
