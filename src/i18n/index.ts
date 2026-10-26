import { fr as frUi } from './fr';
import { en as enUi } from './en';
import frContent from '../content/fr.json';
import enContent from '../content/en.json';

export type Lang = 'fr' | 'en';
// Le français sert de référence : l'anglais doit avoir exactement les mêmes clés.
export type UiDict = typeof frUi;
export type Content = typeof frContent;
// Dictionnaire complet d'une langue : textes d'interface (fr.ts, en.ts)
// et textes modifiables dans l'éditeur Pages CMS (src/content/*.json).
export type Dict = {
  [K in keyof UiDict | keyof Content]: (K extends keyof UiDict ? UiDict[K] : {}) &
    (K extends keyof Content ? Content[K] : {});
};

const merge = (ui: UiDict, content: Content): Dict => {
  const out: Record<string, unknown> = { ...ui };
  for (const [k, v] of Object.entries(content)) out[k] = { ...(out[k] as object), ...v };
  return out as Dict;
};

export const dictionaries: Record<Lang, Dict> = {
  fr: merge(frUi, frContent),
  en: merge(enUi, enContent),
};
export const paths: Record<Lang, string> = { fr: '/', en: '/en/' };
export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');
