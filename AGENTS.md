# Site d'Alexandre Majeau : brief pour l'agent (Claude, Codex ou autre)

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro statique, hébergé sur Netlify.
Tu travailles avec **Alex**, le propriétaire du site. Il n'est pas développeur : parle-lui en français simple, sans jargon, et montre-lui le rendu plutôt que le code.

## Les deux branches protégées

- `preparation` : **la prochaine version** (branche par défaut). Tout travail part d'ici et revient ici par pull request. Aperçu : https://preparation--alexandre-majeau.netlify.app/
- `main` : **le vrai site**, https://alexandre-majeau.netlify.app/. Seul Simon (Just Simple Web) y publie, en regroupant plusieurs changements. Chaque publication coûte des crédits Netlify.

Personne d'autre que Simon ne peut pousser ou fusionner sur ces deux branches : GitHub le bloque.

## Le circuit, à chaque demande d'Alex

1. **Partir de la prochaine version** : `git checkout preparation && git pull`, puis créer une branche au nom clair (`alex/faq-delais`, `alex/seo-titre`). Si Alex a une branche en cours non envoyée, lui demander s'il continue dessus.
2. **Faire le changement** selon la carte plus bas, ou par le labo pour un changement visuel (section « Essais visuels »). Quand la demande dit « propose », proposer d'abord et attendre son choix.
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
- pour un changement visuel : la version gardée, et chaque ajout au système (variante, jeton, section, animation) avec la ligne ajoutée à `docs/design-system.md`;
- pour une nouvelle page : la recherche visée, les deux adresses, le titre et la description Google;
- pour du SEO technique : ce qui change, l'effet attendu et l'écart éventuel sur l'accueil;
- ce qui demande Simon (photo, nouveau service), s'il y en a.

## Essais visuels

Quand Alex veut changer l'apparence (disposition, mise en avant, couleurs, espacements), lire `docs/design-system.md` puis suivre `docs/essais/LISEZ-MOI.md` :

1. **Labo local** : monter deux ou trois versions dans `src/essais/` et `src/pages/essais/` (ignorés par git, jamais envoyés), à partir de `docs/essais/gabarit-version.astro`. Donner à Alex les adresses `http://localhost:4321/essais/...` et le laisser comparer, sur ordinateur et téléphone.
2. **Version gardée** : la reporter dans le vrai composant et dans `src/styles/site.css`, avec les jetons. Vider le labo.
3. **Trois niveaux** (détail dans le design system) :
   - libre : réordonner, changer de composant du registre, choisir d'autres jetons existants, changer ce qui est mis en avant;
   - permis mais signalé : nouvelle variante, nouveau jeton, nouvelle section, nouvelle animation. Mettre `docs/design-system.md` à jour **dans la même pull request** (jeton avec son contraste calculé, ou entrée au registre) et le dire dans la description;
   - interdit : la liste « Interdits » du design system.
4. **Une pull request par idée visuelle**, séparée des changements de texte, pour que Simon puisse accepter l'une et refuser l'autre. Branche `alex/visuel-...`.

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
| Une nouvelle page | Un fichier bilingue dans `src/content/pages/`, d'après `docs/pages/exemple-page.json` (voir « Nouvelles pages et SEO technique ») |

Les étiquettes d'interface (formulaire, maquettes animées) sont dans `src/i18n/fr.ts` et `en.ts`, avec les mêmes clés dans les deux.

## Nouvelles pages et SEO technique

Permis, mais signalé : la pull request le dit clairement, et Simon décide sur l'aperçu.

**Nouvelle page** (mode d'emploi : `docs/pages/LISEZ-MOI.md`)

1. **Une intention de recherche par page.** Demander à Alex quelle recherche la page vise. Vérifier qu'aucune autre page, accueil compris, ne vise la même; sinon, proposer d'enrichir la page existante.
2. **Français et anglais**, avec un vrai texte dans chaque langue. Adresses courtes en minuscules et tirets, l'anglaise sous `/en/`.
3. Titre Google de 60 caractères au maximum, description de 155 au maximum, un seul grand titre, au moins deux blocs utiles.
4. Le reste se fait tout seul : liens entre les langues (`hreflang`), adresse canonique, données Google (`WebPage`, `FAQPage`), plan du site, lien dans le pied de page. Ne rien écrire à la main pour ça.
5. Une pull request par nouvelle page.

**SEO technique** : données Google de `src/layouts/Base.astro`, `astro.config.mjs`, redirections dans `netlify.toml`.

- Les données Google se remplissent toujours à partir de `site.json` ou du fichier de la page : jamais de texte écrit dans `Base.astro`.
- Ne pas changer le rendu ni les données de l'accueil sans le dire. Comparer le HTML construit avant et après (`dist/index.html`, `dist/en/index.html`) et décrire l'écart dans la pull request.
- Une redirection (ancienne adresse vers nouvelle) va dans `netlify.toml`, en 301, et se signale.
- Une pull request séparée des textes, avec l'effet attendu sur Google.

## À ne pas toucher sans Simon

- Un nouveau service (chaque service a un visuel dessiné sur mesure), les photos, la police : préparer le travail si Alex le demande, et le signaler dans la pull request.
- `indexable` dans `src/site.config.ts` et `src/pages/robots.txt.ts` : le site reste invisible pour Google jusqu'au lancement officiel, décidé avec Simon.
- `package.json`, les dépendances et les réglages de build de `netlify.toml`.

## Règles de contenu et de design

- Textes : phrases courtes, bénéfice client d'abord, pas de tournure « X, pas Y », appels à l'action directs.
- Chiffres : seulement des chiffres vérifiables. Si Alex en donne un nouveau, lui demander d'où il vient et le noter dans la pull request.
- Interdits de design : bordure d'accent à gauche, barre de progression, numérotation décorative (01, 02…), code couleur écrit en dur, `style=""` dans le vrai site, texte azur sur fond clair.
