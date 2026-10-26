# Site d'Alexandre Majeau : règles pour l'agent (Claude, Codex ou autre)

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro statique. Hébergé sur Netlify : chaque pull request reçoit un aperçu, et la branche `main` est le vrai site.

## Le circuit de travail

1. Commencer depuis la dernière version de `main` (`git pull`), puis créer une branche au nom clair (`alex/faq-delais`, `alex/seo-titre`).
2. Faire les changements, lancer `npm run dev` et montrer le rendu (http://localhost:4321 et `/en/`) sur ordinateur et sur téléphone.
3. Lancer `npm run build` : il doit passer sans erreur.
4. Faire le commit, pousser la branche et ouvrir une pull request vers `main` avec un résumé clair des changements, en français.
5. **Ne jamais pousser sur `main` et ne jamais fusionner une pull request.** C'est Simon (Just Simple Web) qui vérifie l'aperçu et met en ligne. GitHub bloque `main` de toute façon.

## Où sont les choses

- `src/content/site.json` : tout le contenu modifiable et le référencement. Un seul fichier bilingue : chaque texte a une clé `nom_fr` et une clé `nom_en`. `src/i18n/index.ts` choisit la langue.
- `src/i18n/fr.ts` et `en.ts` : textes d'interface (étiquettes, maquettes animées, formulaire), mêmes clés dans les deux.
- `src/components/` : une section par fichier, dans l'ordre de `Home.astro`. `src/layouts/Base.astro` : balises `<head>`, hreflang, JSON-LD.
- `src/styles/site.css` : jetons et styles. `src/scripts/site.js` : interactions.
- `src/site.config.ts` : courriel, LinkedIn et indexation.
- `docs/design-system.md` : **le design system. Le lire avant tout changement visuel ou toute nouvelle section.**

## Règles

- **Contenu d'abord.** Un changement de texte, de FAQ, d'étape ou de référencement se fait dans `site.json`, jamais dans un composant.
- **Toujours le français ET l'anglais** : les deux clés `_fr` et `_en`, et les mêmes clés dans `fr.ts`/`en.ts`.
- **Design system** : seulement les jetons et les composants de `docs/design-system.md`. Aucune nouvelle couleur, police, taille ou rayon, aucun code couleur en dur. Si un besoin sort du système, le dire dans la pull request au lieu d'inventer.
- **Référencement** : titre Google de 60 caractères au maximum, description de 155 au maximum, image de partage de 1200 × 630 en JPG dans `public/images/`. Le JSON-LD de `Base.astro` se remplit à partir de `site.json` (section `seo` et FAQ) : ne pas y écrire de texte en dur.
- Ne pas passer `indexable` à `true` dans `site.config.ts` : c'est le lancement officiel, décidé avec Simon.
- Interdits de design : bordure d'accent à gauche, barre de progression, numérotation décorative (01, 02…).
- Textes : phrases courtes, bénéfice client d'abord, pas de tournure « X, pas Y », appels à l'action directs.
