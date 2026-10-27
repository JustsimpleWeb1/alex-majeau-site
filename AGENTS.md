# Site d'Alexandre Majeau : brief pour l'agent (Claude, Codex ou autre)

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro statique, hébergé sur Netlify.
Tu travailles avec **Alex**, le propriétaire du site. Il n'est pas développeur : parle-lui en français simple, sans jargon, et montre-lui le rendu plutôt que le code.

## Les deux branches protégées

- `preparation` : **la prochaine version** (branche par défaut). Tout travail part d'ici et revient ici par pull request. Aperçu : https://preparation--alexandre-majeau.netlify.app/
- `main` : **le vrai site**, https://alexandre-majeau.netlify.app/. Seul Simon (Just Simple Web) y publie, en regroupant plusieurs changements. Chaque publication coûte des crédits Netlify.

Personne d'autre que Simon ne peut pousser ou fusionner sur ces deux branches : GitHub le bloque.

## Le circuit, à chaque demande d'Alex

1. **Partir de la prochaine version** : `git checkout preparation && git pull`, puis créer une branche au nom clair (`alex/faq-delais`, `alex/seo-titre`). Si Alex a une branche en cours non envoyée, lui demander s'il continue dessus.
2. **Faire le changement** selon la carte plus bas. Quand la demande dit « propose », proposer d'abord et attendre son choix.
3. **Montrer le rendu** : `npm run dev`, puis http://localhost:4321 et `/en/`, sur ordinateur et en largeur de téléphone. Laisser Alex ajuster autant qu'il veut.
4. **Vérifier** : `npm run build` doit passer sans erreur.
5. **Envoyer à Simon** quand Alex le demande (« Pousse ma branche et ouvre une pull request pour Simon ») :
   - commit avec un message clair en français;
   - pousser la branche;
   - ouvrir une pull request **vers `preparation`**, jamais vers `main` (`gh pr create --base preparation`);
   - donner le lien à Alex et lui dire que l'aperçu Netlify apparaît dans la pull request après environ une minute.
6. **Ne jamais** pousser ni fusionner sur `preparation` ou `main`, ni ouvrir de pull request vers `main`. Si Alex demande de publier, lui expliquer que c'est Simon qui publie, et qu'il voit déjà ses changements acceptés sur l'aperçu de la prochaine version.

### Description de la pull request

En français, courte, pour Simon :

- ce qui change, section par section;
- confirmation que le français et l'anglais sont faits et que `npm run build` passe;
- ce qui sort du design system ou demande Simon (photo, nouveau service, nouvelle section), s'il y en a.

## Carte des changements

Presque tout se fait dans **`src/content/site.json`**, un seul fichier bilingue : chaque texte a une clé `nom_fr` et une clé `nom_en`. Toujours remplir les deux.

| Alex veut changer | Où |
|---|---|
| Un texte de la page | La section correspondante de `site.json` : `hero`, `services`, `results`, `jargon`, `method`, `about`, `booking`, `footer`, `faq` |
| Le bouton principal | `cta.primary` |
| Une question fréquente (ajouter, retirer, réordonner) | `faq.items` |
| Une étape de la méthode | `method.steps` (`when`, `title`, `text`) |
| Une raison « Pourquoi travailler avec moi » | `about.reasons` (`title`, `text`) |
| Un chiffre des résultats | `results.num1` / `num2` (nombre entier), avec `before` et `after` pour le format par langue (`+` et `%`, ou `10 $` en français et `$10` en anglais) |
| La citation | `results.quote`, `quoteName`, `quoteRole` |
| Le titre ou la description Google | `seo.title` (60 caractères au maximum), `seo.description` (155 au maximum) |
| Ce que Google comprend de lui | `seo` : `serviceName`, `jobTitle`, `serviceDesc`, `area`, `catalog`, `svc1` à `svc4`, `knowsAbout` |
| La description des photos | `seo.heroPhotoAlt`, `seo.aboutPhotoAlt` |
| L'image de partage | Remplacer `public/images/og-image.jpg` (JPG, 1200 × 630) |

Les étiquettes d'interface (formulaire, maquettes animées) sont dans `src/i18n/fr.ts` et `en.ts`, avec les mêmes clés dans les deux.

## À ne pas toucher sans Simon

- Le design : `src/styles/site.css`, `src/components/`, `src/scripts/`. Seulement les jetons et les composants de `docs/design-system.md`, à lire avant tout changement visuel. Aucune nouvelle couleur, police, taille ou rayon, aucun code couleur en dur.
- Un nouveau service (chaque service a un visuel dessiné sur mesure), une nouvelle section, les photos : préparer le travail si Alex le demande, et le signaler dans la pull request.
- `indexable` dans `src/site.config.ts` : il reste à `false` jusqu'au lancement officiel, décidé avec Simon.
- `netlify.toml`, `astro.config.mjs`, `package.json` et les dépendances.
- Le JSON-LD de `src/layouts/Base.astro` : il se remplit à partir de `site.json`, ne pas y écrire de texte.

## Règles de contenu et de design

- Textes : phrases courtes, bénéfice client d'abord, pas de tournure « X, pas Y », appels à l'action directs.
- Chiffres : seulement des chiffres vérifiables. Si Alex en donne un nouveau, lui demander d'où il vient et le noter dans la pull request.
- Interdits de design : bordure d'accent à gauche, barre de progression, numérotation décorative (01, 02…).
