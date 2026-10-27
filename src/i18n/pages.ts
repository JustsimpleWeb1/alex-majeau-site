import { type Lang, pick } from './index';

// Pages ajoutées (src/content/pages/*.json), dans l'ordre des noms de fichiers.
const files = import.meta.glob<Record<string, unknown>>('../content/pages/*.json', { eager: true, import: 'default' });

// Lien de chaque page dans une langue : son libellé court (`menu`) et son adresse.
export const addedPages = (lang: Lang) =>
  Object.keys(files).sort().map((file) => {
    const raw = files[file];
    return { menu: String((pick(raw, lang) as { menu: string }).menu), path: String(raw[`path_${lang}`]) };
  });
