# Notes pour la production

## Problème CORS

L'API Notion bloque les requêtes CORS depuis le navigateur. Le proxy Vite configuré fonctionne **uniquement en développement**.

## Solutions pour la production

### Option 1 : Fonction serverless (recommandée)

#### Vercel Edge Functions

Créez `api/notion.js` :

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { NOTION_TOKEN, NOTION_DATABASE_ID, ...formData } = req.body;

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          // ... vos propriétés
        },
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
```

Puis modifiez `waitlist-modal.jsx` pour appeler `/api/notion` en production.

#### Netlify Functions

Créez `netlify/functions/notion.js` avec un code similaire.

### Option 2 : Backend simple

Créez un serveur Express minimal qui fait le proxy :

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/notion', async (req, res) => {
  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': req.headers.authorization,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(req.body),
  });
  
  const data = await response.json();
  res.json(data);
});

app.listen(3001);
```

### Option 3 : Service proxy public (non recommandé)

Utilisez un service comme `https://cors-anywhere.herokuapp.com/` mais :
- ⚠️ Non sécurisé
- ⚠️ Limité en performance
- ⚠️ Peut être indisponible

## Modification du code pour la production

Dans `waitlist-modal.jsx`, changez :

```javascript
const apiUrl = import.meta.env.DEV 
  ? '/api/notion/v1/pages'
  : '/api/notion';  // Votre endpoint serverless ou backend
```

Et envoyez les données différemment si nécessaire.








