# Configuration de l'intégration Notion

Ce guide explique comment configurer l'intégration avec Notion pour enregistrer les inscriptions à la liste d'attente.

## Étape 1 : Créer une intégration Notion

1. Rendez-vous sur [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Cliquez sur **"+ New integration"**
3. Donnez un nom à votre intégration (ex: "Webuild Waitlist")
4. Sélectionnez l'espace de travail (workspace)
5. Cliquez sur **"Submit"**
6. **Copiez le token** (commence par `secret_`) - vous en aurez besoin plus tard

## Étape 2 : Créer une base de données Notion

1. Créez une nouvelle page dans Notion
2. Tapez `/database` et sélectionnez **"Table - Inline"** ou **"Table - Full page"**
3. Configurez les colonnes suivantes :
   - **Nom** : Type `Title` (obligatoire)
   - **Email** : Type `Email` (obligatoire)
   - **Expérience** : Type `Select` avec les options :
     - `Débutant`
     - `Expérimenté`
   - **Date** : Type `Date` (optionnel)

## Étape 3 : Partager la base avec l'intégration

1. Ouvrez votre base de données
2. Cliquez sur les **"..."** en haut à droite
3. Sélectionnez **"Add connections"**
4. Recherchez et sélectionnez votre intégration créée à l'étape 1
5. Cliquez sur **"Confirm"**

## Étape 4 : Récupérer l'ID de la base de données

1. Ouvrez votre base de données dans Notion
2. L'URL ressemble à : `https://www.notion.so/votre-workspace/DATABASE_ID?v=...`
3. L'ID de la base est la partie longue entre `/` et `?` (32 caractères avec des tirets)
4. Exemple : `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

## Étape 5 : Configurer les variables d'environnement

1. Copiez le fichier `.env.example` en `.env` :
   ```bash
   cp .env.example .env
   ```

2. Éditez le fichier `.env` et remplacez les valeurs :
   ```env
   VITE_NOTION_TOKEN=secret_votre_token_ici
   VITE_NOTION_DATABASE_ID=votre_database_id_ici
   ```

3. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```

## ⚠️ Important : Sécurité

- **Ne commitez JAMAIS** le fichier `.env` dans Git (il est déjà dans `.gitignore`)
- Le token Notion sera visible dans le code source compilé (côté client)
- Limitez les permissions de votre intégration Notion uniquement à la base de données nécessaire
- Surveillez l'utilisation de votre API Notion dans les paramètres de l'intégration

## Test de l'intégration

1. Ouvrez votre application
2. Cliquez sur "Rejoindre la liste"
3. Remplissez le formulaire
4. Vérifiez dans votre base Notion que la nouvelle entrée a été créée

## Dépannage

### Erreur : "Configuration manquante"
- Vérifiez que le fichier `.env` existe et contient les bonnes variables
- Redémarrez le serveur après avoir modifié `.env`

### Erreur : "Unauthorized" ou 401
- Vérifiez que le token Notion est correct
- Vérifiez que l'intégration a accès à la base de données

### Erreur : "Object not found" ou 404
- Vérifiez que l'ID de la base de données est correct
- Vérifiez que l'intégration a bien accès à la base

### Les colonnes ne correspondent pas
- Vérifiez que les noms des colonnes dans Notion correspondent exactement à ceux dans le code :
  - `Nom` (Title)
  - `Email` (Email)
  - `Expérience` (Select)
  - `Date` (Date)








