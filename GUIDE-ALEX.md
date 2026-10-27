# Ton site : le guide

Ton site vit à deux endroits :

- **GitHub** garde le code et les textes : https://github.com/JustsimpleWeb1/alex-majeau-site
- **Netlify** l'héberge. Il y a deux adresses :
  - **ton vrai site** : https://alexandre-majeau.netlify.app/
  - **la prochaine version**, avec les changements acceptés mais pas encore publiés : https://preparation--alexandre-majeau.netlify.app/

## Comment ça marche

1. **Tu modifies sur ton ordi**, avec Claude ou avec Codex. Tu vois le site changer en direct. Rien n'est en ligne.
2. **Tu envoies à Simon.** Une phrase suffit : ton outil crée une demande sur GitHub, qu'on appelle une pull request, avec un aperçu de tes changements.
3. **Simon accepte.** Il reçoit un courriel, regarde l'aperçu, ajuste au besoin, puis ajoute tes changements à la prochaine version.
4. **Simon publie quand c'est prêt.** La prochaine version devient ton vrai site. Plusieurs changements partent ensemble.

Tu ne peux pas briser ton site : GitHub refuse toute modification qui ne passe pas par Simon. Essaie autant que tu veux, les aperçus ne coûtent rien.

**Trois mots à connaître**

- **Branche** : ta copie de travail. Ton site ne bouge pas pendant que tu travailles dessus.
- **Pull request** : ta demande à Simon.
- **Aperçu** : une adresse où voir ton site avec tes changements, même sur ton téléphone.

## Une seule fois : t'installer

1. Accepte l'invitation GitHub de Simon. Elle arrive par courriel et dans tes notifications sur github.com.
2. Installe [GitHub Desktop](https://desktop.github.com) et connecte ton compte GitHub. Fais **File → Clone repository** et choisis `alex-majeau-site`.
3. Installe [Node.js 22](https://nodejs.org) (version LTS).
4. Choisis ton outil et ouvre-le sur le dossier `alex-majeau-site` :
   - **Claude** : l'app Claude, onglet **Code**.
   - **ChatGPT** : l'app **Codex**. Une conversation ChatGPT ordinaire ne peut pas modifier ton site.

Les deux outils lisent les règles du site tout seuls (le fichier `AGENTS.md` et le design system). Tu n'as pas à les leur expliquer.

## À chaque modification

1. Ouvre ton outil sur le dossier `alex-majeau-site`. Il récupère tout seul la prochaine version.
2. Écris ce que tu veux changer, en français, comme à une personne. Tu peux copier une des demandes plus bas.
3. Demande-lui de te montrer le rendu. Ajuste autant que tu veux.
4. Quand c'est bon, écris :

> C'est bon. Pousse ma branche et ouvre une pull request pour Simon, avec un résumé de mes changements.

C'est tout. L'outil te donne le lien de la pull request. Netlify y ajoute un lien d'**aperçu** (Deploy Preview), que tu peux aussi ouvrir sur ton téléphone.

Quand Simon accepte, tes changements apparaissent dans la prochaine version. Ils seront sur ton vrai site à sa prochaine publication.

Envoie autant de demandes que tu veux : une par idée, c'est parfait. Les demandes et les aperçus ne coûtent rien. C'est la publication du vrai site qui coûte un peu à l'hébergement, alors Simon regroupe plusieurs changements avant de publier.

## Ce que tu peux changer seul

- Tous les textes de la page, en français et en anglais.
- Les questions fréquentes : en ajouter, en retirer, changer l'ordre.
- Les étapes de la méthode et les raisons « Pourquoi travailler avec moi » : en ajouter ou en retirer.
- Tout ton référencement (voir plus bas).
- De nouvelles pages (voir « Ajouter une page »).

Le design suit tout seul : l'outil utilise les couleurs, la police et les blocs du site.

Tu peux aussi essayer des changements visuels (voir la section suivante).

**Ce qui passe par Simon** : un nouveau service (chaque service a un petit visuel dessiné sur mesure), tes photos, la police. Tu peux quand même le demander à l'outil : il préparera le travail, et Simon ajustera avant la mise en ligne.

## Essayer un changement visuel

Tu veux voir ta section Résultats autrement, mettre un bloc plus en avant ou changer l'ordre des sections? Essaie.

1. **Demande deux ou trois versions.** Ton outil les monte dans un labo sur ton ordi, chacune à sa propre adresse. Le labo ne part jamais sur Internet.
2. **Compare** sur ordinateur et sur ton téléphone. Demande des ajustements, ou une autre version.
3. **Garde celle que tu préfères.** L'outil l'applique au site et vide le labo.
4. **Envoie-la à Simon**, seule dans sa demande. Garde tes changements de texte pour une autre demande, pour que Simon puisse accepter l'un sans l'autre.

Ce que tu peux faire :

- **Librement** : changer l'ordre des sections, présenter un bloc autrement (en cartes, en liste), mettre autre chose en avant, jouer avec les espacements et les fonds déjà prévus.
- **En le signalant** : une nouvelle couleur, une nouvelle variante d'un bloc, une nouvelle section ou une animation. C'est permis : ton outil l'ajoute au design system et le dit à Simon dans ta demande.
- **Jamais** : ce que le design system interdit, comme une barre de couleur à gauche des citations, une barre de progression ou des numéros décoratifs (01, 02…). Ton outil le sait.

## Ajouter une page

Ton site peut grandir au-delà d'une page : une page par service, par type de boutique ou par question que tes clients se posent. C'est ce qui aide le plus à sortir dans Google sur des recherches précises.

- **Une page = une recherche.** Par exemple « Google Ads pour boutique de vélo ». Deux pages sur le même sujet se nuisent : ton outil vérifie avant d'en créer une.
- **En français et en anglais**, toujours.
- **Le reste se fait tout seul** : le lien entre les deux langues, ce que Google lit, le plan du site et un lien dans le bas de ta page d'accueil.
- **Une demande par page.** Ton outil le signale à Simon, qui décide sur l'aperçu.

Ton outil peut aussi faire du référencement plus technique (données lues par Google, redirections). C'est permis, il le signale à Simon dans ta demande.

## Ton référencement

Il est regroupé dans la section `seo` du fichier des textes. Ces réglages comptent seulement une fois le site lancé officiellement. D'ici là, Google ne le voit pas.

| Élément | Ce que c'est | La règle |
|---|---|---|
| Titre dans Google | Le titre bleu dans les résultats de recherche | 60 caractères au maximum, les mots que tes clients cherchent au début |
| Description dans Google | Le texte gris sous le titre, aussi utilisé sur Facebook et LinkedIn | 155 caractères au maximum, avec une raison de cliquer |
| Image de partage | L'image qui apparaît quand on partage ton site | 1200 × 630 pixels, en JPG |
| Nom, titre, description du service, région | Ce que Google comprend de ton entreprise | Court et précis |
| Noms des 4 services | Aussi affichés dans le pied de page | Quelques mots chacun |
| Compétences | Les outils que tu maîtrises | Un outil par élément |
| Description des photos | Ce que Google et les personnes aveugles « voient » | Une phrase qui décrit la photo |

Les questions fréquentes comptent aussi : Google peut les afficher directement dans ses résultats.

## Demandes prêtes à copier

Remplace ce qui est entre crochets.

**Textes**

> Réécris le grand titre pour parler aux [boutiques de vélo]. Propose-moi trois versions en français et en anglais avant de changer quoi que ce soit.

> Ajoute une question à la FAQ : « [ta question] ». Rédige une réponse courte en français et en anglais, puis montre-moi le rendu.

> Relis tous les textes anglais de la page et corrige ce qui sonne traduit. Montre-moi les changements avant de les appliquer.

> Remplace la citation de Primeau Vélo par celle-ci : « [citation] », de [Prénom Nom], [titre]. Traduis-la en anglais.

> Ajoute une étape à la méthode, après « [étape] » : [ce qui se passe]. En français et en anglais.

**Référencement**

> Vérifie mon référencement : titre et description Google, données pour Google, FAQ et description des photos. Dis-moi ce qui est trop long ou à améliorer, sans rien changer.

> Réécris mon titre et ma description Google pour viser [les boutiques de sport en ligne au Québec]. 60 et 155 caractères au maximum, en français et en anglais. Propose-moi deux versions.

> Ajoute [nom de l'outil] à mes compétences pour Google.

> Voici ma nouvelle image de partage [joins le fichier]. Mets-la au bon format et remplace l'ancienne.

**Pages**

> Je veux une page qui vise la recherche « [Google Ads pour boutique de vélo] ». Vérifie qu'aucune page ne vise déjà cette recherche, propose-moi un plan de la page en français et en anglais, puis crée-la et montre-moi le rendu.

> Quelles pages pourrais-je ajouter pour attirer des [boutiques de sport en ligne] dans Google? Propose-moi cinq idées, une recherche par page, sans rien créer.

**Visuel**

> Montre-moi trois versions de ma section [Résultats] dans le labo : une plus sobre, une qui met les chiffres encore plus en avant, et une en liste. Donne-moi les adresses pour les comparer.

> Essaie la section [FAQ] avant la section [Méthode] dans le labo, et montre-moi le rendu sur téléphone.

> Je garde la version [B]. Applique-la au site, vide le labo, puis ouvre une pull request pour Simon avec seulement ce changement visuel.

**Voir et envoyer**

> Lance le site et montre-moi la page sur ordinateur et sur téléphone.

> C'est bon. Pousse ma branche et ouvre une pull request pour Simon, avec un résumé de mes changements.

> Annule mes changements et repars de la dernière version du site.

## Loin de ton ordi

Les deux outils ont aussi une version qui travaille directement sur GitHub, sans ton ordi :

- **Claude** : https://claude.ai/code, ou l'app Claude sur ton téléphone, section Code.
- **ChatGPT** : Codex, dans ChatGPT.

Choisis le dépôt `alex-majeau-site`, écris ta demande en terminant par « puis ouvre une pull request pour Simon ». Tu vois le résultat dans l'aperçu Netlify de la pull request.

Les essais visuels se font sur ton ordi : en ligne, l'outil ne peut pas te montrer le labo. Demande une seule version à la fois et regarde-la dans l'aperçu.

## Si quelque chose ne va pas

- **L'outil dit qu'il ne peut pas pousser sur `main` ou `preparation`** : c'est normal, c'est la protection. Dis-lui de créer une branche et d'ouvrir une pull request.
- **Ton changement n'est pas sur ton vrai site** : c'est normal tant que Simon n'a pas publié. S'il a accepté ta demande, tu le vois déjà dans la prochaine version.
- **L'aperçu Netlify affiche une erreur** : demande à l'outil « Lance `npm run build` et corrige l'erreur », puis renvoie. Si ça bloque encore, écris à Simon.
- **Tu veux tout recommencer** : demande « Annule mes changements et repars de la dernière version du site ».
- **Une question sur le vrai site** (domaine, mise en ligne, Netlify) : écris à Simon.
