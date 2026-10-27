# Ajouter une page

Une page = **un fichier JSON bilingue** dans `src/content/pages/`. Le site crée tout seul :

- la page en français et en anglais, aux deux adresses du fichier;
- le titre et la description Google, les liens entre les deux langues (`hreflang`) et l'adresse canonique;
- les données Google (`WebPage`, et `FAQPage` si la page a des questions);
- l'entrée dans le plan du site (`sitemap`) et un lien dans la colonne « Le site » du pied de page.

Mise en page fixe : introduction (étiquette, grand titre, phrase d'accroche, bouton de réservation), blocs de texte avec points, FAQ éventuelle, réservation.

## Marche à suivre

1. Copier `docs/pages/exemple-page.json` dans `src/content/pages/<sujet>.json` (le nom du fichier fixe l'ordre dans le pied de page).
2. Remplir chaque champ en français et en anglais.
3. `npm run dev`, puis ouvrir les deux adresses, sur ordinateur et téléphone.
4. `npm run build` : il refuse une adresse mal formée.

## Les champs

| Champ | Rôle | Règle |
|---|---|---|
| `path_fr`, `path_en` | Adresses de la page | Minuscules et tirets, finies par `/`; l'anglaise commence par `/en/`. Ex. `/google-ads-boutiques-velo/` et `/en/google-ads-bike-shops/` |
| `menu` | Lien dans le pied de page | Quelques mots |
| `title` | Titre dans Google | 60 caractères au maximum, mots-clés au début |
| `description` | Texte sous le titre dans Google | 155 caractères au maximum, avec une raison de cliquer |
| `label` | Petite étiquette au-dessus du titre | Facultatif |
| `h1` | Grand titre de la page | Un seul, proche de la recherche visée |
| `lede` | Phrase d'accroche | Bénéfice client, une ou deux phrases |
| `blocks` | Blocs de texte | `title`, `text` (paragraphes séparés par une ligne vide), `points` facultatifs |
| `faq` | Questions de la page | Facultatif; Google peut les afficher |

## Règles de référencement

- **Une intention de recherche par page.** Une page répond à une recherche précise (« Google Ads boutique de vélo »). Avant de créer une page, vérifier qu'aucune autre page, accueil compris, ne vise déjà la même recherche. Deux pages sur le même sujet se nuisent.
- **Toujours en français et en anglais**, avec un vrai texte dans chaque langue, pas une traduction mot à mot.
- **Du contenu utile** : au moins deux blocs qui répondent vraiment à la recherche. Pas de page vide ou recopiée d'une autre.
- **Une demande par nouvelle page**, pour que Simon puisse accepter l'une sans l'autre.
- Le titre, la description et les données Google viennent du fichier JSON : ne jamais écrire de texte dans `src/layouts/Base.astro`.
