# Configuration serveur pour production

## Fichiers de configuration créés

Les fichiers de configuration suivants ont été créés dans le dossier `dist/` :

### 1. `.htaccess` (Apache)
- ✅ Redirection des routes vers `index.html` (SPA routing)
- ✅ Compression Gzip
- ✅ Cache des assets statiques
- ✅ Sécurité basique

**Utilisation** : Copiez simplement le fichier `.htaccess` dans votre répertoire web Apache.

### 2. `nginx.conf` (Nginx)
- ✅ Configuration complète pour Nginx
- ✅ Compression Gzip
- ✅ Cache des assets
- ✅ Redirection SPA

**Utilisation** : 
- Copiez le contenu dans votre configuration Nginx
- Ou incluez le fichier dans votre configuration principale
- Modifiez `server_name` et `root` selon votre configuration

### 3. `web.config` (IIS - Windows Server)
- ✅ Redirection des routes pour IIS
- ✅ Configuration des MIME types

**Utilisation** : Copiez le fichier `web.config` dans votre répertoire IIS.

## Instructions par serveur

### Apache (.htaccess)

1. **Le fichier `.htaccess` est déjà dans `dist/`**
2. Assurez-vous que `mod_rewrite` est activé sur votre serveur :
   ```bash
   # Sur Ubuntu/Debian
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
3. Upload le contenu de `dist/` sur votre serveur
4. Le `.htaccess` sera automatiquement lu

### Nginx

1. Ouvrez votre configuration Nginx (généralement `/etc/nginx/sites-available/default`)
2. Copiez le contenu de `nginx.conf` dans votre bloc `server`
3. Modifiez :
   - `server_name` : votre domaine
   - `root` : chemin vers votre dossier `dist`
4. Redémarrez Nginx :
   ```bash
   sudo nginx -t  # Vérifier la configuration
   sudo systemctl restart nginx
   ```

### IIS (Windows Server)

1. Copiez le fichier `web.config` dans votre répertoire IIS
2. Assurez-vous que le module "URL Rewrite" est installé sur IIS
3. Redémarrez IIS si nécessaire

## Vérification

Après déploiement, testez :

1. ✅ Accès à la page d'accueil : `https://votre-domaine.com`
2. ✅ Navigation directe vers une section : `https://votre-domaine.com/#features`
3. ✅ Actualisation de la page (F5) ne doit pas donner d'erreur 404
4. ✅ Les images se chargent correctement
5. ✅ Le formulaire fonctionne

## Problèmes courants

### Erreur 404 sur actualisation
- **Cause** : La redirection vers `index.html` ne fonctionne pas
- **Solution** : Vérifiez que `.htaccess` est bien uploadé (fichiers commençant par `.` sont parfois cachés)

### Les images ne se chargent pas
- **Cause** : Mauvais chemin ou permissions
- **Solution** : Vérifiez que le dossier `images/` et `logo/` sont bien dans `dist/`

### Le formulaire ne fonctionne pas
- **Cause** : Variable d'environnement non configurée
- **Solution** : Vérifiez que `VITE_GOOGLE_SCRIPT_URL` est bien définie dans votre environnement de production

## Notes importantes

⚠️ **Le fichier `.htaccess` est déjà dans `dist/`** - Il sera automatiquement uploadé avec le reste des fichiers.

⚠️ **Pour Nginx** : Le fichier `nginx.conf` est un exemple - vous devez l'intégrer dans votre configuration Nginx existante.

⚠️ **Variables d'environnement** : Sur un serveur classique, vous devrez peut-être créer un fichier `.env` ou configurer les variables différemment (selon votre hébergeur).








