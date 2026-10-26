# Ton site : le guide

Ton site vit à deux endroits :

- **GitHub** garde le code et les textes : https://github.com/JustsimpleWeb1/alex-majeau-site
- **Netlify** l'héberge : https://alexandre-majeau.netlify.app/

## Comment ça marche

1. **Tu travailles sur ton ordi**, avec Claude ou avec Codex. Tu vois le site changer en direct pendant que tu ajustes tes textes.
2. **Quand c'est bon pour toi**, tu demandes à l'outil d'envoyer ton travail à Simon. Il crée une demande de mise en ligne sur GitHub, qu'on appelle une pull request.
3. **Simon reçoit un courriel.** Il regarde un aperçu de ton travail, corrige au besoin, puis met le site en ligne.

Tu ne peux pas briser le vrai site : GitHub refuse toute modification qui ne passe pas par Simon. Essaie autant que tu veux.

## Une seule fois : t'installer

1. Accepte l'invitation GitHub de Simon. Elle arrive par courriel et dans tes notifications sur github.com.
2. Installe [GitHub Desktop](https://desktop.github.com) et connecte ton compte GitHub. Fais **File → Clone repository** et choisis `alex-majeau-site`.
3. Installe [Node.js 22](https://nodejs.org) (version LTS).
4. Choisis ton outil et ouvre-le sur le dossier `alex-majeau-site` :
   - **Claude** : l'app Claude, onglet **Code**.
   - **ChatGPT** : l'app **Codex**. Une conversation ChatGPT ordinaire ne peut pas modifier ton site.

Les deux outils lisent les règles du site tout seuls (le fichier `AGENTS.md` et le design system). Tu n'as pas à les leur expliquer.

## À chaque modification

1. Ouvre ton outil sur le dossier `alex-majeau-site`.
2. Écris ce que tu veux changer, en français, comme à une personne. Tu peux copier une des demandes plus bas.
3. Demande-lui de te montrer le rendu. Ajuste autant que tu veux.
4. Quand c'est bon, écris :

> C'est bon. Pousse ma branche et ouvre une pull request pour Simon, avec un résumé de mes changements.

C'est tout. L'outil te donne le lien de la pull request. Netlify y ajoute un lien d'**aperçu** (Deploy Preview), que tu peux aussi ouvrir sur ton téléphone.

Un petit truc : regroupe tes changements dans une seule pull request. Chaque mise en ligne coûte un peu à l'hébergement, alors une demande avec cinq changements vaut mieux que cinq demandes.

## Ce que tu peux changer seul

- Tous les textes de la page, en français et en anglais.
- Les questions fréquentes : en ajouter, en retirer, changer l'ordre.
- Les étapes de la méthode et les raisons « Pourquoi travailler avec moi » : en ajouter ou en retirer.
- Tout ton référencement (voir plus bas).

Le design suit tout seul : l'outil utilise les couleurs, la police et les blocs du site.

**Ce qui passe par Simon** : un nouveau service (chaque service a un petit visuel dessiné sur mesure), une nouvelle section, tes photos. Tu peux quand même le demander à l'outil : il préparera le travail, et Simon ajustera avant la mise en ligne.

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

**Voir et envoyer**

> Lance le site et montre-moi la page sur ordinateur et sur téléphone.

> C'est bon. Pousse ma branche et ouvre une pull request pour Simon, avec un résumé de mes changements.

> Annule mes changements et repars de la dernière version du site.

## Loin de ton ordi

Les deux outils ont aussi une version qui travaille directement sur GitHub, sans ton ordi :

- **Claude** : https://claude.ai/code, ou l'app Claude sur ton téléphone, section Code.
- **ChatGPT** : Codex, dans ChatGPT.

Choisis le dépôt `alex-majeau-site`, écris ta demande en terminant par « puis ouvre une pull request pour Simon ». Tu vois le résultat dans l'aperçu Netlify de la pull request.

## Si quelque chose ne va pas

- **L'outil dit qu'il ne peut pas pousser sur `main`** : c'est normal. Dis-lui de créer une branche et d'ouvrir une pull request.
- **L'aperçu Netlify affiche une erreur** : demande à l'outil « Lance `npm run build` et corrige l'erreur », puis renvoie. Si ça bloque encore, écris à Simon.
- **Tu veux tout recommencer** : demande « Annule mes changements et repars de la dernière version du site ».
- **Une question sur le vrai site** (domaine, mise en ligne, Netlify) : écris à Simon.
