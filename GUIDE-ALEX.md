# Ton site : le guide

Ton site vit à deux endroits :

- **GitHub** garde le code et les textes : https://github.com/JustsimpleWeb1/alex-majeau-site
- **Netlify** l'héberge : https://alexandre-majeau.netlify.app/

Tu n'as jamais à publier à la main. Dès qu'une modification arrive sur la branche `main` de GitHub, Netlify remet le site en ligne tout seul en une minute.

## Quel outil pour quoi

| Tu veux… | Utilise | D'où |
|---|---|---|
| Changer un texte vite fait | Pages CMS | N'importe où, même ton téléphone |
| Modifier la page, une section, le SEO, en voyant le rendu | Claude Code | Ton ordi |
| Demander une modification loin de ton ordi | Claude Code sur le web | Navigateur ou app Claude |

## Une seule fois : t'installer

1. Accepte l'invitation GitHub de Simon. Elle arrive par courriel et dans tes notifications sur github.com.
2. Installe [GitHub Desktop](https://desktop.github.com) et connecte ton compte GitHub. Fais ensuite **File → Clone repository** et choisis `alex-majeau-site`.
3. Installe [Node.js 22](https://nodejs.org) (version LTS).
4. Ouvre l'app Claude, onglet **Code**, sur le dossier `alex-majeau-site`.

Pages CMS et Claude Code sur le web ne demandent rien d'installer. Ils te demandent seulement de te connecter avec GitHub la première fois.

## Changer un texte avec Pages CMS

1. Va sur https://app.pagescms.org et connecte-toi avec GitHub.
2. Ouvre **alex-majeau-site**, branche **main**.
3. Ouvre **Textes du site (français)**, modifie, puis clique sur **Save**.
4. Fais la même chose dans **Textes du site (anglais)**.
5. Attends une minute et recharge ton site.

Pages CMS ne montre pas d'aperçu : tu vois le résultat sur ton site une minute après avoir enregistré. Si c'est mal sorti, corrige et enregistre de nouveau.

Bon à savoir :

- **Grand titre** : coupé en trois champs. Celui du milieu est la partie surlignée en bleu.
- **Chiffres des résultats** : le nombre seulement (`300`). Le `+` et le `%` s'ajoutent tout seuls.
- **Citation** : sans guillemets. Ils s'ajoutent tout seuls.
- **Questions fréquentes** : tu peux en ajouter, en retirer et changer l'ordre.
- **Titre et description dans Google** : en haut, dans « Référencement Google ».

Les photos, les petites maquettes animées, ton courriel et ton calendrier ne sont pas dans Pages CMS. Pour ça, passe par Claude Code.

## Modifier ton site avec Claude Code

Tu écris à Claude en français, comme à une personne. Par exemple :

> Ajoute une question à la FAQ sur les délais, en français et en anglais. Montre-moi le rendu, puis ouvre une pull request.

Claude va récupérer la dernière version du site, créer une branche, faire les changements et t'afficher le site à côté de la conversation. Tu peux lui demander des ajustements autant que tu veux. Quand c'est bon, il ouvre une pull request sur GitHub.

Ensuite :

1. Dans la pull request, Netlify ajoute un lien d'**aperçu** (Deploy Preview). Regarde la page sur ordinateur et sur téléphone.
2. Si tout est beau, dis à Claude « fusionne la pull request », ou clique sur **Merge** dans GitHub. Ton site se met à jour.

Claude connaît déjà les règles du site : elles sont dans le fichier `CLAUDE.md` du dossier, et il le lit tout seul.

## Loin de ton ordi : Claude Code sur le web

1. Va sur https://claude.ai/code, ou dans l'app Claude sur ton téléphone, section Code.
2. Choisis le dépôt `alex-majeau-site`.
3. Demande ta modification comme d'habitude, et demande-lui d'ouvrir une pull request.
4. Ouvre l'aperçu Netlify dans la pull request. Si c'est bon, fusionne.

## Gérer ton site au quotidien

- **Une modification à la fois.** Évite de changer un texte dans Pages CMS pendant que Claude travaille sur le même texte.
- **Toujours le français et l'anglais.** Les deux versions doivent dire la même chose.
- **Simon peut travailler en même temps que toi.** Chacun a sa branche, et GitHub réunit vos travaux au moment de fusionner.
- **Un nouveau texte à modifier dans Pages CMS ?** Demande à Claude de l'ajouter à l'éditeur.
- **Visibilité dans Google** : le réglage `indexable` se change seulement avec Simon.

## Si quelque chose se brise

- **Un texte est mal sorti** : corrige-le dans Pages CMS.
- **La page est cassée après une modification** : demande à Claude « annule le dernier changement et remets le site comme avant ». Il annule la modification sur `main`, et Netlify remet l'ancienne version en ligne.
- **Le site ne se met plus à jour du tout** : écris à Simon. L'hébergement, le domaine et les réglages Netlify restent chez lui.
