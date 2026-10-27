# Site d'Alexandre Majeau

Site d'une page, bilingue (français à `/`, anglais à `/en/`), en Astro 7 statique.
Converti depuis le prototype `../prototype-hifi-A-azur.html` (même rendu, vérifié au caractère près).

## Commandes

```bash
npm install
npm run dev        # développement, http://localhost:4321
npm run build      # génère dist/
npm run preview    # sert dist/ en local
```

## Où modifier quoi

- **Textes modifiables et référencement** : `src/content/site.json` (bilingue, clés `_fr` et `_en`). Image de partage : `public/images/og-image.jpg`.
- **Design system** : `docs/design-system.md`. **Règles pour Claude et Codex** : `AGENTS.md`. **Guide d'Alex** : `GUIDE-ALEX.md`.
- **Textes d'interface** : `src/i18n/fr.ts` et `src/i18n/en.ts` (mêmes clés dans les deux fichiers).
- **Sections** : `src/components/` (une par section, le texte vient des dictionnaires).
- **Styles** : `src/styles/site.css` (repris tel quel du prototype).
- **Interactions** : `src/scripts/site.js`.
- **Réglages** : `src/site.config.ts` (courriel, LinkedIn, indexation).
- **Domaine** : variable d'environnement `SITE_URL` (sinon `https://alex-majeau.netlify.app`).

## Déploiement

Netlify : `netlify.toml` est prêt (build `npm run build`, dossier `dist`, Node 22). Vercel fonctionne aussi tel quel (préréglage Astro, site statique).

| Branche | Rôle | Adresse | Coût Netlify |
|---|---|---|---|
| `preparation` (par défaut) | Prochaine version : les changements acceptés | https://preparation--alexandre-majeau.netlify.app/ | Gratuit |
| `main` | Vrai site | https://alexandre-majeau.netlify.app/ | 15 crédits par publication |
| Pull request | Aperçu d'une demande | Lien « Deploy Preview » dans la pull request | Gratuit |

Les deux branches sont verrouillées par la règle GitHub « main et preparation : Simon seulement » : seul l'administrateur du dépôt peut les mettre à jour ou y fusionner une pull request.

## Marche à suivre pour Simon

1. **Une demande d'Alex arrive** (courriel de GitHub). Elle vise `preparation`.
2. **Regarder l'aperçu** : lien « Deploy Preview » dans la pull request. Pour corriger, pousser sur la branche d'Alex ou demander la correction dans un commentaire.
3. **Accepter** : sur la pull request, cocher « Merge without waiting for requirements to be met (bypass rules) », puis **Merge pull request** et **Confirm merge**. Gratuit : la prochaine version se met à jour.
4. **Publier quand c'est prêt** : ouvrir une pull request de `preparation` vers `main` (sur GitHub : *Pull requests → New → base `main`, compare `preparation`*), vérifier l'aperçu, puis fusionner de la même façon. C'est la seule étape qui coûte (15 crédits).

Ne pas supprimer la branche `preparation` après la publication : elle sert à la suite.

## Avant le lancement officiel

- [ ] Domaine choisi, `SITE_URL` réglé, courriel à jour dans `site.config.ts`
- [ ] Photos d'Alex (hero et section À propos)
- [ ] Prix `[X] $` de la FAQ
- [ ] Citation et permission écrite de Primeau Vélo
- [ ] Choix de la niche par Alex, texte anglais validé
- [ ] Vrai calendrier (Cal.com) à la place du formulaire de démonstration
- [ ] Politique de confidentialité (Loi 25) et gestion des témoins
- [ ] `indexable: true` dans `site.config.ts` (retire le noindex et ouvre robots.txt)
