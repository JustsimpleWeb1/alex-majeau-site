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

- **Textes modifiables et référencement** : `src/content/site.json` (bilingue, clés `_fr` et `_en`), aussi éditable dans Pages CMS (`.pages.yml`). Image de partage : `public/images/og-image.jpg`. Guide d'Alex : `GUIDE-ALEX.md`.
- **Textes d'interface** : `src/i18n/fr.ts` et `src/i18n/en.ts` (mêmes clés dans les deux fichiers).
- **Sections** : `src/components/` (une par section, le texte vient des dictionnaires).
- **Styles** : `src/styles/site.css` (repris tel quel du prototype).
- **Interactions** : `src/scripts/site.js`.
- **Réglages** : `src/site.config.ts` (courriel, LinkedIn, indexation).
- **Domaine** : variable d'environnement `SITE_URL` (sinon `https://alex-majeau.netlify.app`).

## Déploiement

Netlify : `netlify.toml` est prêt (build `npm run build`, dossier `dist`, Node 22).
Vercel fonctionne aussi tel quel (préréglage Astro, site statique).

## Avant le lancement officiel

- [ ] Domaine choisi, `SITE_URL` réglé, courriel à jour dans `site.config.ts`
- [ ] Photos d'Alex (hero et section À propos)
- [ ] Prix `[X] $` de la FAQ
- [ ] Citation et permission écrite de Primeau Vélo
- [ ] Choix de la niche par Alex, texte anglais validé
- [ ] Vrai calendrier (Cal.com) à la place du formulaire de démonstration
- [ ] Politique de confidentialité (Loi 25) et gestion des témoins
- [ ] `indexable: true` dans `site.config.ts` (retire le noindex et ouvre robots.txt)
