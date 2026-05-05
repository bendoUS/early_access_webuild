# Guide de déploiement en production

## Build terminé ✅

Le projet a été compilé avec succès. Les fichiers optimisés sont dans le dossier `dist/`.

## Fichiers générés

- `dist/index.html` - Page HTML principale
- `dist/assets/index-*.css` - CSS optimisé (36.26 kB)
- `dist/assets/index-*.js` - JavaScript optimisé (466.37 kB, compressé à 146.55 kB)

## Options de déploiement

### 1. Vercel (Recommandé - Gratuit)

1. Installez Vercel CLI :
   ```bash
   npm i -g vercel
   ```

2. Déployez :
   ```bash
   cd waitlist-landing
   vercel
   ```

3. Suivez les instructions
4. Vercel détectera automatiquement Vite et configurera le déploiement

### 2. Netlify (Gratuit)

1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `dist` sur Netlify
3. Ou utilisez Netlify CLI :
   ```bash
   npm i -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### 3. GitHub Pages

1. Installez `gh-pages` :
   ```bash
   npm install --save-dev gh-pages
   ```

2. Ajoutez dans `package.json` :
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```

3. Déployez :
   ```bash
   npm run deploy
   ```

### 4. Serveur web classique (Apache, Nginx)

1. Copiez tout le contenu du dossier `dist/` dans le répertoire web de votre serveur
2. Configurez votre serveur pour servir `index.html` pour toutes les routes (SPA)

**Configuration Nginx** :
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /chemin/vers/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5. Cloudflare Pages (Gratuit)

1. Connectez votre repository GitHub
2. Configurez :
   - Build command : `npm run build`
   - Build output directory : `dist`
3. Déployez automatiquement à chaque push

## Variables d'environnement

⚠️ **IMPORTANT** : Les variables d'environnement doivent être configurées sur la plateforme de déploiement :

### Vercel
1. Allez dans Settings → Environment Variables
2. Ajoutez : `VITE_GOOGLE_SCRIPT_URL` avec votre URL

### Netlify
1. Allez dans Site settings → Environment variables
2. Ajoutez : `VITE_GOOGLE_SCRIPT_URL` avec votre URL

### Autres plateformes
Configurez les variables d'environnement selon leur documentation.

## Vérification après déploiement

1. ✅ Vérifiez que le site se charge correctement
2. ✅ Testez le formulaire de waitlist
3. ✅ Vérifiez que les données arrivent dans Google Sheets
4. ✅ Vérifiez que les images se chargent (logo, images des sections)
5. ✅ Testez sur mobile et desktop

## Optimisations déjà appliquées

- ✅ Code minifié
- ✅ CSS optimisé
- ✅ JavaScript optimisé avec tree-shaking
- ✅ Assets optimisés
- ✅ Gzip compression (146.55 kB pour le JS)

## Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de la plateforme de déploiement
2. Vérifiez la console du navigateur (F12)
3. Vérifiez que les variables d'environnement sont bien configurées








