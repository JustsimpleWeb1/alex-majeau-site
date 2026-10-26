# Ton site : le guide

Ton site vit à deux endroits :

- **GitHub** garde le code et les textes : https://github.com/JustsimpleWeb1/alex-majeau-site
- **Netlify** l'héberge : https://alexandre-majeau.netlify.app/

Tu n'as jamais à publier à la main. Dès qu'une modification arrive sur la branche `main` de GitHub, Netlify remet le site en ligne tout seul en une minute.

## Quel outil pour quoi

| Tu veux… | Utilise | D'où |
|---|---|---|
| Changer un texte ou ton référencement | Pages CMS | N'importe où, même ton téléphone |
| Faire réécrire un texte, ajouter une section ou des photos | Claude Code | Ton ordi |
| Demander une modification loin de ton ordi | Claude Code sur le web | Navigateur ou app Claude |

## Une seule fois : t'installer

1. Accepte l'invitation GitHub de Simon. Elle arrive par courriel et dans tes notifications sur github.com.
2. Installe [GitHub Desktop](https://desktop.github.com) et connecte ton compte GitHub. Fais ensuite **File → Clone repository** et choisis `alex-majeau-site`.
3. Installe [Node.js 22](https://nodejs.org) (version LTS).
4. Ouvre l'app Claude, onglet **Code**, sur le dossier `alex-majeau-site`.

Pages CMS et Claude Code sur le web ne demandent rien d'installer. Ils te demandent seulement de te connecter avec GitHub la première fois.

## Changer un texte avec Pages CMS

1. Va sur https://app.pagescms.org et connecte-toi avec GitHub.
2. Ouvre **alex-majeau-site**, branche **main**, puis **Textes du site**.
3. Les textes sont rangés par section, dans l'ordre de la page. Chaque texte a deux cases : **(FR)**, puis **(EN)** juste en dessous. Change les deux.
4. Clique sur **Save** une seule fois, quand tu as fini toutes tes modifications.
5. Attends une minute et recharge ton site.

Pages CMS ne montre pas d'aperçu : tu vois le résultat sur ton site une minute après avoir enregistré. Si c'est mal sorti, corrige et enregistre de nouveau.

Bon à savoir :

- **Grand titre** : coupé en trois champs. Celui du milieu est la partie surlignée en bleu.
- **Chiffres des résultats** : le nombre seulement (`300`). Le `+` et le `%` s'ajoutent tout seuls.
- **Citation** : sans guillemets. Ils s'ajoutent tout seuls.
- **Questions fréquentes** : tu peux en ajouter, en retirer et changer l'ordre.

## Ton référencement

Tout est dans la première section de Pages CMS, **Référencement Google**. Ces réglages comptent seulement une fois le site lancé officiellement. D'ici là, Google ne le voit pas.

| Champ | Ce que c'est | La règle |
|---|---|---|
| Titre dans Google | Le titre bleu dans les résultats de recherche | 60 caractères au maximum, les mots que tes clients cherchent au début |
| Description dans Google | Le texte gris sous le titre, aussi utilisé sur Facebook et LinkedIn | 155 caractères au maximum, avec une raison de cliquer |
| Image de partage | L'image qui apparaît quand on partage ton site | 1200 × 630 pixels, en JPG. Clique sur l'image pour en téléverser une autre |
| Nom, titre, description du service, région | Ce que Google comprend de ton entreprise | Court et précis |
| Services 1 à 4 | Le nom de tes services, aussi dans le pied de page | Quelques mots chacun |
| Tes compétences | Les outils que tu maîtrises | Un outil par ligne, en français et en anglais |
| Description des photos | Ce que Google et les personnes aveugles « voient » | Une phrase qui décrit la photo |

Les questions fréquentes comptent aussi : Google peut les afficher directement dans ses résultats.

## Modifier ton site avec Claude Code

Tu écris à Claude en français, comme à une personne. Il récupère la dernière version du site, crée une branche, fait les changements et t'affiche le site à côté de la conversation. Tu peux lui demander des ajustements autant que tu veux.

Termine toujours ta demande par « puis ouvre une pull request ». Ensuite :

1. Dans la pull request, Netlify ajoute un lien d'**aperçu** (Deploy Preview). Regarde la page sur ordinateur et sur téléphone.
2. Si tout est beau, dis à Claude « fusionne la pull request », ou clique sur **Merge** dans GitHub. Ton site se met à jour.

Claude connaît déjà les règles du site : elles sont dans le fichier `CLAUDE.md` du dossier, et il le lit tout seul.

## Demandes prêtes à copier

Remplace ce qui est entre crochets, puis colle la demande dans Claude.

**Textes**

> Réécris le grand titre pour parler aux [boutiques de vélo]. Propose-moi trois versions en français et en anglais avant de changer quoi que ce soit.

> Ajoute une question à la FAQ : « [ta question] ». Rédige une réponse courte en français et en anglais, puis ouvre une pull request.

> Relis tous les textes anglais de la page et corrige ce qui sonne traduit. Montre-moi les changements avant de les appliquer.

> Remplace la citation de Primeau Vélo par celle-ci : « [citation] », de [Prénom Nom], [titre]. Traduis-la en anglais, puis ouvre une pull request.

**Référencement**

> Vérifie mon référencement : titre et description Google, données pour Google, FAQ et description des photos. Dis-moi ce qui est trop long ou à améliorer, sans rien changer.

> Réécris mon titre et ma description Google pour viser [les boutiques de sport en ligne au Québec]. 60 et 155 caractères au maximum, en français et en anglais. Propose-moi deux versions.

> Ajoute [nom de l'outil] à mes compétences pour Google, puis ouvre une pull request.

> Voici ma nouvelle image de partage [joins le fichier]. Mets-la au bon format et remplace l'ancienne, puis ouvre une pull request.

**Page**

> Voici mes deux photos [joins les fichiers]. Mets la première en haut de page et la deuxième dans À propos, écris leur description pour Google, puis montre-moi le rendu.

> Ajoute une section sur [sujet] après la section Résultats, dans le même style que le reste du site. Montre-moi le rendu sur ordinateur et sur téléphone.

**Vérifier ou annuler**

> Lance le site et montre-moi la page sur ordinateur et sur téléphone.

> Annule le dernier changement et remets le site comme avant.

## Loin de ton ordi : Claude Code sur le web

1. Va sur https://claude.ai/code, ou dans l'app Claude sur ton téléphone, section Code.
2. Choisis le dépôt `alex-majeau-site`.
3. Colle une des demandes ci-dessus, en terminant par « puis ouvre une pull request ».
4. Ouvre l'aperçu Netlify dans la pull request. Si c'est bon, fusionne.

## Gérer ton site au quotidien

- **Une modification à la fois.** Évite de changer un texte dans Pages CMS pendant que Claude travaille sur le même texte.
- **Toujours le français et l'anglais.** Les deux versions doivent dire la même chose.
- **Simon peut travailler en même temps que toi.** Chacun a sa branche, et GitHub réunit vos travaux au moment de fusionner.
- **Visibilité dans Google** : le réglage `indexable` se change seulement avec Simon.

## Si quelque chose se brise

- **Un texte est mal sorti** : corrige-le dans Pages CMS.
- **La page est cassée après une modification** : demande à Claude « annule le dernier changement et remets le site comme avant ». Il annule la modification sur `main`, et Netlify remet l'ancienne version en ligne.
- **Le site ne se met plus à jour du tout** : écris à Simon. L'hébergement, le domaine et les réglages Netlify restent chez lui.
