# Site d'Alexandre Majeau

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro statique. Hébergé sur Netlify : chaque commit sur `main` remet le site en ligne, et chaque pull request reçoit un aperçu.

## Où sont les choses

- `src/content/fr.json` et `en.json` : les textes modifiables. Alex les édite aussi dans Pages CMS (`.pages.yml`).
- `src/i18n/fr.ts` et `en.ts` : les textes d'interface (étiquettes, maquettes animées, formulaire).
- `src/components/` : une section par fichier. `src/layouts/Base.astro` : balises `<head>`, hreflang, JSON-LD.
- `src/styles/site.css`, `src/scripts/site.js` : styles et interactions.
- `src/site.config.ts` : courriel, LinkedIn et indexation.

## Règles

- Travailler sur une branche et ouvrir une pull request. Ne pas pousser directement sur `main`, sauf pour une correction de texte.
- Lancer `npm run build` avant chaque commit. Le build doit passer.
- Toujours modifier le français ET l'anglais : mêmes clés dans `fr.json`/`en.json` et dans `fr.ts`/`en.ts`.
- Pour ajouter, retirer ou renommer un champ de `src/content/*.json`, mettre à jour `.pages.yml` dans le même commit. Sinon, l'éditeur efface le champ au prochain enregistrement.
- Ne pas passer `indexable` à `true` dans `site.config.ts` : c'est le lancement officiel, décidé avec Simon (Just Simple Web).
- Garder le design actuel : pas de bordure d'accent à gauche, pas de barre de progression, pas de numérotation décorative (01, 02…).
- Textes : phrases courtes, bénéfice client d'abord, pas de tournure « X, pas Y », appels à l'action directs.
