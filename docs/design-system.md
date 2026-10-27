# Design system du site d'Alexandre Majeau

Direction « Haute visibilité », accent azur (retenue le 2026-09-29). Le design est fixé ici. Le contenu, lui, change librement.

## Le principe

- **Le contenu** vit dans `src/content/site.json` : textes, FAQ, étapes, raisons, référencement. Chaque texte a une clé `_fr` et une clé `_en`.
- **Le design** vit dans `src/styles/site.css` (jetons et styles) et `src/components/` (une section par fichier).
- Changer, ajouter ou retirer du contenu ne demande **aucun** changement de design : la page se construit à partir de `site.json`.
- Toute nouveauté visuelle réutilise les jetons et les composants ci-dessous. Si un essai en demande un nouveau, il entre d'abord dans ce document (voir « Essais visuels »).

## Jetons

Définis une seule fois dans `:root`, en tête de `src/styles/site.css`. Toujours les appeler par leur nom (`var(--carbon)`), jamais en recopiant la valeur.

### Couleurs

| Jeton | Valeur | Rôle |
|---|---|---|
| `--paper` | `#F2F0EA` | Fond principal |
| `--paper-2` | `#E9E6DD` | Fond des sections alternées (services, méthode, FAQ) |
| `--surface` | `#FFFFFF` | Fond des cartes |
| `--carbon` / `--ink` | `#101311` | Texte principal, bordures fortes, fond des panneaux sombres |
| `--carbon-2` | `#1B201D` | Fond des emplacements photo |
| `--ink-2` | `#454B47` | Texte courant secondaire |
| `--muted` | `#5A5F5B` | Étiquettes, notes |
| `--line` | `#DCD8CE` | Filets et bordures discrètes sur fond clair |
| `--line-dark` | `#2C322E` | Filets sur fond sombre |
| `--on-dark` / `--on-dark-2` | `#F2F0EA` / `#A9AFAB` | Texte sur fond sombre |
| `--hivis` | `#3AA8FF` | Accent azur : boutons principaux, pastilles, surlignage du grand titre |
| `--hivis-deep` | `#1C86E0` | Soulignement des liens fléchés |

Contrastes calculés (norme : 4,5 pour le texte, 3 pour les éléments graphiques) :

| Paire | Ratio |
|---|---|
| `--carbon` sur `--paper` | 16,41 |
| `--ink-2` sur `--paper` | 7,84 |
| `--muted` sur `--paper` / `--paper-2` / `--surface` | 5,72 / 5,22 / 6,52 |
| `--carbon` sur `--hivis` (texte des boutons) | 7,32 |
| `--on-dark` / `--on-dark-2` sur `--carbon` | 16,41 / 8,37 |
| `--hivis` sur `--carbon` (anneau de focus sur fond sombre) | 7,32 |
| `--hivis-deep` sur `--paper` (soulignement) | 3,33 |
| `--hivis` sur `--paper` | **2,24 : jamais pour du texte** |

**Règle de l'azur** : l'azur est un fond, jamais une couleur de texte sur fond clair. Sur l'azur, le texte est toujours `--carbon`.

### Typographie

| Usage | Réglage |
|---|---|
| Police | `--f-sans` (Archivo variable) partout; `--f-mono` (IBM Plex Mono) pour les étiquettes et les chiffres de maquette |
| Grand titre (h1) | Classe `.display` : largeur 125 %, graisse 800, interlignage 0,98 |
| Titre de section (h2) | 30 à 48 px selon l'écran, largeur 118 %, graisse 800 |
| Sous-titre (h3) | 21 px, largeur 105 %, graisse 700 |
| Texte courant | 17 px, interlignage 1,6; 16 px dans les cartes et listes |
| Étiquette | Classe `.label` : mono 12 px, majuscules, espacée, `--muted` |

Un seul h1 par page (le grand titre). Chaque section commence par un h2.

### Espacements, rayons, mouvement

- Espacements sur une grille de 8 px : `--s1` (8) à `--s8` (128). Les sections ont `var(--s7) 0` de marge haut et bas, `var(--s6) 0` sur mobile.
- Rayons : `--r-card` (8 px) pour les cartes et photos, `--r-inner` et `--r-btn` (4 px) pour les boutons et pastilles.
- Mouvement : courbe `--ease`, durées `--t-fast`, `--t-mid`, `--t-slow`. Les apparitions au défilement passent par l'attribut `data-reveal`, qui respecte « réduire les animations ».

## Registre de composants

Inventorier ici avant de créer. Réutiliser par défaut. Un nouveau composant seulement pour un besoin nommé, et il entre dans ce registre.

| Composant | Classe | Où | Contenu dans `site.json` |
|---|---|---|---|
| Conteneur | `.wrap` | Toutes les sections | : |
| En-tête de section | `.sec-head` + `h2` | Toutes les sections | `title` de la section |
| Étiquette | `.label` | Cartes de services, résultats | Texte court |
| Bouton principal | `.btn .btn-hi` | Haut de page, résultats, réservation | `cta.primary` (une seule action : réserver un appel) |
| Bouton secondaire | `.btn .btn-line` | Haut de page | : |
| Lien fléché | `.link-arrow` | À propos | : |
| Carte de service | `.svc` | Services | Titre et texte des 4 services |
| Panneau sombre | `.panel .on-dark` | Résultats | Chiffres, citation |
| Étapes | `.steps` | Méthode | `method.steps` (liste) |
| Raisons | `.reasons` | À propos | `about.reasons` (liste) |
| Faits | `.facts` | À propos | `fact1`, `fact2` |
| Question fréquente | `details` dans `.faq` | FAQ | `faq.items` (liste) |
| Emplacement photo | `.shot` | Haut de page, À propos | Description dans `seo` |

### Ce qui se construit tout seul

- **Questions fréquentes** : ajouter, retirer ou réordonner un élément de `faq.items`. Google lit aussi ces questions.
- **Étapes de la méthode** : ajouter un élément à `method.steps` (`when`, `title`, `text`). Les quatre premières ont chacune leur pictogramme; les suivantes prennent le pictogramme de validation.
- **Raisons « Pourquoi travailler avec moi »** : ajouter un élément à `about.reasons` (`title`, `text`).
- **Chiffres des résultats** : `num1`/`num2` (nombre entier, animé), avec `before` et `after` pour le format, par langue : `+` et `%` pour une hausse, `$` avant le nombre en anglais et après en français pour un montant.
- **Tous les textes et le référencement** : modifier la valeur dans `site.json`, en français et en anglais.

## Essais visuels : trois niveaux de liberté

Alex peut essayer des changements visuels. Il compare ses versions dans le labo local (`docs/essais/LISEZ-MOI.md`), puis envoie celle qu'il garde, **une demande par idée visuelle**, séparée des changements de texte. Simon décide sur l'aperçu.

**Libre**, à l'intérieur du système :

- changer l'ordre des sections dans `Home.astro`, ou l'ordre des éléments d'une section;
- remplacer un composant par un autre du registre (une liste en cartes, des cartes en liste);
- choisir d'autres valeurs parmi les jetons existants : espacements `--s1` à `--s8`, tailles de texte du tableau, fond `--paper` ou `--paper-2`, panneau sombre ou clair;
- changer quel élément est mis en avant (bouton principal, chiffre, citation).

**Permis, mais signalé** : ce qui ajoute au système.

- une nouvelle variante d'un composant, un nouveau jeton (couleur, taille, rayon), une nouvelle section, une nouvelle animation;
- la même demande met `docs/design-system.md` à jour (jeton avec son contraste calculé, ou entrée au registre de composants);
- la description de la demande le dit clairement, pour que Simon décide en connaissance de cause.

**Interdit** : tout ce qui est dans « Interdits » plus bas.

**Reste chez Simon** :

- **un nouveau service** : chaque carte de service a une petite maquette dessinée sur mesure (Shopping, recherche, publication, graphique);
- **les photos** : à fournir en JPG, au moins 1600 px de large;
- **la police** : Archivo et IBM Plex Mono sont chargées pour tout le site.

## Ajouter une section

Une nouvelle section suit ce gabarit, ses textes vont dans `site.json` sous une nouvelle clé, et elle s'ajoute dans `src/components/Home.astro` à sa place dans la page :

```astro
<section class="nom" id="ancre" aria-labelledby="ancre-titre">
  <div class="wrap">
    <div class="sec-head" data-reveal><h2 id="ancre-titre">{t.nom.title}</h2></div>
    <!-- contenu composé avec les composants du registre -->
  </div>
</section>
```

Dans `site.css`, la section reçoit seulement `padding: var(--s7) 0;` et, si elle alterne, `background: var(--paper-2); border-top: 1px solid var(--line);`.

## Interdits

- Bordure d'accent à gauche (citations, encadrés, annonces).
- Barre de progression ou jauge de défilement.
- Numérotation décorative (01, 02…) : des pictogrammes à la place.
- Couleur, police, taille ou rayon hors des jetons; code couleur écrit en dur (`#...`) dans un nouveau style.
- Styles dans l'attribut `style=""` pour du nouveau contenu.
- Texte azur sur fond clair.
- Texte écrit directement dans un composant : il va dans `site.json` (contenu) ou dans `src/i18n/fr.ts` et `en.ts` (interface).

## Écarts relevés (non corrigés, à décider par Simon)

Comparaison avec les règles JSW (`jsw-ui`). Aucun n'est bloquant.

- **Utile** : les maquettes animées (services, rapport mensuel) ont des couleurs écrites en dur dans leurs SVG au lieu des jetons. Sans effet visible, mais à reprendre si la palette change.
- **Optionnel** : deux rayons (8 px et 4 px) au lieu d'un rayon unique.
- **Optionnel** : les noms des jetons (`--hivis`, `--paper`…) diffèrent des noms standard JSW (`--accent`, `--canvas`…). Les renommer ne change rien à l'écran.
