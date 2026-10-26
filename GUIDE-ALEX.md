# Modifier ton site : le guide

Tu as deux façons de modifier ton site :

- **Les textes** se modifient dans un éditeur en ligne, sans toucher au code. C'est fait en deux minutes.
- **La structure et le SEO** (sections, balises, données structurées) se travaillent avec Claude Code.

Quand une modification arrive sur la branche `main`, Netlify remet le site en ligne tout seul en une ou deux minutes : https://alexandre-majeau.netlify.app/

## Avant de commencer

1. Accepte l'invitation GitHub de Simon pour le dépôt `JustsimpleWeb1/alex-majeau-site`. Elle arrive par courriel et sur github.com, dans tes notifications.
2. C'est tout pour les textes. Pour Claude Code, voir plus bas.

## Modifier un texte

1. Va sur https://app.pagescms.org et connecte-toi avec ton compte GitHub.
2. Choisis le dépôt **alex-majeau-site**, puis la branche **main**.
3. Ouvre **Textes du site (français)**. Les textes sont rangés par section, dans l'ordre de la page.
4. Modifie ce que tu veux, puis clique sur **Save**.
5. Fais la même chose dans **Textes du site (anglais)**, pour que les deux versions disent la même chose.
6. Attends une ou deux minutes et recharge ton site.

Bon à savoir :

- **Grand titre** : il est coupé en trois champs. Le champ du milieu est la partie surlignée en bleu.
- **Chiffres des résultats** : écris le nombre seulement (`300`). Le `+` et le `%` s'ajoutent tout seuls.
- **Citation** : écris-la sans guillemets. Ils s'ajoutent tout seuls.
- **Questions fréquentes** : tu peux en ajouter, en retirer et changer leur ordre.
- **Titre et description dans Google** : ils sont en haut, dans « Référencement Google ».

L'éditeur ne couvre pas les petites maquettes animées (la recherche Google, la publication Facebook, le rapport), les photos, ton courriel ni ton calendrier. Pour ça, passe par Claude Code ou écris à Simon.

## Travailler la structure et le SEO avec Claude Code

### Une seule fois

1. Installe [GitHub Desktop](https://desktop.github.com) et connecte-le à ton compte GitHub.
2. Dans GitHub Desktop : **File → Clone repository**, choisis `alex-majeau-site`.
3. Installe [Node.js 22](https://nodejs.org) (version LTS).
4. Ouvre Claude Code (l'application Claude, onglet Code) sur le dossier `alex-majeau-site`. Claude lit le fichier `CLAUDE.md` du dossier : il connaît déjà les règles du site.

### À chaque chantier

1. Dans GitHub Desktop, clique sur **Fetch origin** pour partir de la dernière version.
2. Demande à Claude de créer une branche, par exemple : « Crée une branche seo-balises-faq ».
3. Explique ce que tu veux changer. Demande-lui ensuite de lancer le site en local (`npm run dev`) pour le voir sur http://localhost:4321.
4. Quand c'est bon, demande-lui de faire le commit, de pousser la branche et d'ouvrir une pull request.
5. Netlify ajoute à la pull request un lien d'**aperçu** (Deploy Preview). Vérifie la page sur ordinateur et sur téléphone.
6. Si tout est beau, fusionne la pull request (**Merge**) : le site se met à jour.

### Les règles à garder

- Toujours le français ET l'anglais.
- Le site reste invisible pour Google tant que le lancement officiel n'est pas fait avec Simon. Ne touche pas au réglage `indexable`.
- Si tu ajoutes un texte modifiable, demande à Claude de l'ajouter aussi à l'éditeur (`.pages.yml`).

## Si quelque chose se brise

- **Un texte est mal sorti** : corrige-le dans l'éditeur, tout simplement.
- **Le site ne se met plus à jour, ou une page est cassée** : écris à Simon. Netlify garde toutes les versions précédentes, et on peut remettre la dernière bonne en un clic.
