# Labo des essais visuels

Pour essayer un changement visuel et comparer des versions avant d'en garder une. Le labo reste sur l'ordi : `src/essais/` et `src/pages/essais/` sont ignorés par git et ne partent jamais sur GitHub ni sur Netlify.

## Monter un essai

1. Copier le composant de la section dans `src/essais/`, une copie par version (`ResultsA.astro`, `ResultsB.astro`). Les chemins d'import restent les mêmes, les dossiers sont au même niveau.
2. Modifier chaque copie. Les styles d'essai vont dans un `<style>` à l'intérieur de la copie, avec les jetons du design system (`var(--carbon)`, `var(--s4)`…).
3. Pour chaque version, copier `docs/essais/gabarit-version.astro` dans `src/pages/essais/<nom>.astro`, changer l'import de la section essayée et le libellé `version`.
4. `npm run dev`, puis donner les adresses : http://localhost:4321/essais/resultats-a, `/essais/resultats-b`… Chaque page montre le site complet avec la variante en place, et une étiquette « Essai » en bas à gauche.

## Appliquer la version gardée

1. Reporter la version choisie dans le vrai composant (`src/components/`) et ses styles dans `src/styles/site.css`, avec les jetons. Aucun `<style>` ni `style=""` dans le vrai site.
2. Mettre `docs/design-system.md` à jour si l'essai a ajouté une variante ou un jeton.
3. Vérifier la vraie page (`/` et `/en/`) sur ordinateur et téléphone, puis `npm run build`.
4. Vider le labo (`src/essais/`, `src/pages/essais/`) avant d'envoyer, pour que le build local reste propre.
