import { fr } from './fr';
import { en } from './en';

export type Lang = 'fr' | 'en';
// Le français sert de référence : l'anglais doit avoir exactement les mêmes clés.
export type Dict = typeof fr;

export const dictionaries: Record<Lang, Dict> = { fr, en };
export const paths: Record<Lang, string> = { fr: '/', en: '/en/' };
export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr');
