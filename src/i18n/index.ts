import { fr as frUi } from './fr';
import { en as enUi } from './en';
import siteContent from '../content/site.json';

export type Lang = 'fr' | 'en';
// Le français sert de référence : l'anglais doit avoir exactement les mêmes clés.
export type UiDict = typeof frUi;

// src/content/site.json (éditeur Pages CMS) est bilingue : chaque texte a une clé
// `nom_fr` et une clé `nom_en`, et les listes simples ont des objets { fr, en }.
// Pick<T> donne la forme d'une seule langue : `nom_fr` devient `nom`.
type Pick<T> = T extends { fr: infer F; en: unknown }
  ? F
  : T extends (infer U)[]
    ? Pick<U>[]
    : T extends object
      ? { [K in keyof T as K extends `${infer B}_fr` ? B : K extends `${string}_en` ? never : K]: Pick<T[K]> }
      : T;
export type Content = Pick<typeof siteContent>;

const pick = (value: unknown, lang: Lang): unknown => {
  if (Array.isArray(value)) return value.map((v) => pick(v, lang));
  if (value === null || typeof value !== 'object') return value;
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj);
  if (keys.length === 2 && 'fr' in obj && 'en' in obj) return obj[lang];
  const out: Record<string, unknown> = {};
  for (const k of keys) {
    const m = k.match(/^(.*)_(fr|en)$/);
    if (m) {
      if (m[2] === lang) out[m[1]] = obj[k];
    } else out[k] = pick(obj[k], lang);
  }
  return out;
};

// Dictionnaire complet d'une langue : textes d'interface (fr.ts, en.ts)
// et textes modifiables dans l'éditeur Pages CMS (src/content/site.json).
export type Dict = {
  [K in keyof UiDict | keyof Content]: (K extends keyof UiDict ? UiDict[K] : {}) &
    (K extends keyof Content ? Content[K] : {});
};

const merge = (ui: UiDict, lang: Lang): Dict => {
  const content = pick(siteContent, lang) as Content;
  const out: Record<string, unknown> = { ...ui };
  for (const [k, v] of Object.entries(content)) out[k] = { ...(out[k] as object), ...v };
  return out as Dict;
};

export const dictionaries: Record<Lang, Dict> = {
  fr: merge(frUi, 'fr'),
  en: merge(enUi, 'en'),
};
export const paths: Record<Lang, string> = { fr: '/', en: '/en/' };
export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');
