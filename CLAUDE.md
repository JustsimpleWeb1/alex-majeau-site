# Site d'Alexandre Majeau

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro statique. Hébergé sur Netlify : chaque commit sur `main` remet le site en ligne, et chaque pull request reçoit un aperçu.

## Où sont les choses

- `src/content/site.json` : les textes modifiables et tout le référencement (titre et description Google, image de partage, données structurées, description des photos), en un seul fichier bilingue : chaque texte a une clé `nom_fr` et une clé `nom_en`. Alex l'édite aussi dans Pages CMS (`.pages.yml`). `src/i18n/index.ts` choisit la langue.
- `src/i18n/fr.ts` et `en.ts` : les textes d'interface (étiquettes, maquettes animées, formulaire).
- `src/components/` : une section par fichier. `src/layouts/Base.astro` : balises `<head>`, hreflang, JSON-LD.
- `src/styles/site.css`, `src/scripts/site.js` : styles et interactions.
- `src/site.config.ts` : courriel, LinkedIn et indexation.

## Règles

- Travailler sur une branche et ouvrir une pull request. Ne pas pousser directement sur `main`, sauf pour une correction de texte.
- Lancer `npm run build` avant chaque commit. Le build doit passer.
- Toujours modifier le français ET l'anglais : les deux clés `_fr` et `_en` dans `site.json`, et les mêmes clés dans `fr.ts`/`en.ts`.
- Pour ajouter, retirer ou renommer un champ de `src/content/site.json`, mettre à jour `.pages.yml` dans le même commit. Sinon, l'éditeur efface le champ au prochain enregistrement.
- Référencement : titre Google de 60 caractères au maximum, description de 155 au maximum, image de partage de 1200 × 630 en JPG dans `public/images/`. Le JSON-LD de `Base.astro` se remplit à partir de `site.json` (section `seo` et FAQ) : ne pas y écrire de texte en dur.
- Ne pas passer `indexable` à `true` dans `site.config.ts` : c'est le lancement officiel, décidé avec Simon (Just Simple Web).
- Garder le design actuel : pas de bordure d'accent à gauche, pas de barre de progression, pas de numérotation décorative (01, 02…).
- Textes : phrases courtes, bénéfice client d'abord, pas de tournure « X, pas Y », appels à l'action directs.
