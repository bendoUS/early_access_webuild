# Configuration Google Analytics

## Étape 1 : Créer une propriété Google Analytics

1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Créez un compte ou connectez-vous
3. Créez une nouvelle propriété (ou utilisez une existante)
4. Choisissez **GA4** (Google Analytics 4)
5. Copiez votre **ID de mesure** (format: `G-XXXXXXXXXX`)

## Étape 2 : Configurer l'ID dans votre projet

1. Ouvrez votre fichier `.env`
2. Ajoutez votre ID Google Analytics :
   ```env
   VITE_GA_ID=G-XXXXXXXXXX
   ```
   Remplacez `G-XXXXXXXXXX` par votre ID réel

3. Redémarrez le serveur de développement :
   ```bash
   npm run dev
   ```

## Événements trackés automatiquement

Le projet track automatiquement :

### 1. Clics sur les boutons CTA
- **Événement** : `cta_click`
- **Catégorie** : `engagement`
- **Labels** :
  - `waitlist_button_click` - Clic sur un bouton "Rejoindre la liste"
  - `waitlist_modal_open` - Ouverture du modal

### 2. Soumission du formulaire waitlist
- **Événement** : `waitlist_submit`
- **Catégorie** : `conversion`
- **Données** :
  - `experience` : "Expérimenté" ou "Débutant"
  - `email` : Email de l'utilisateur (anonymisé pour la confidentialité)

## Utilisation dans le code

### Track un événement personnalisé

```javascript
import { trackEvent, trackCTA } from '@/utils/analytics';

// Track un événement personnalisé
trackEvent('custom_event', {
  event_category: 'engagement',
  event_label: 'section_view',
  value: 1
});

// Track un clic CTA
trackCTA('hero_button');
```

### Fonctions disponibles

- `trackEvent(eventName, eventParams)` - Track un événement générique
- `trackCTA(location)` - Track un clic sur un bouton CTA
- `trackWaitlistSubmit(data)` - Track une soumission du formulaire
- `trackSectionView(sectionName)` - Track une vue de section

## Vérification

1. Ouvrez votre site en développement
2. Ouvrez les DevTools (F12) → Onglet **Network**
3. Filtrez par "google-analytics" ou "gtag"
4. Vous devriez voir des requêtes vers Google Analytics
5. Dans Google Analytics, allez dans **Rapports** → **Temps réel** pour voir les événements

## Production

⚠️ **Important** : N'oubliez pas de configurer `VITE_GA_ID` sur votre plateforme de déploiement :

### Vercel
1. Settings → Environment Variables
2. Ajoutez `VITE_GA_ID` avec votre ID

### Netlify
1. Site settings → Environment variables
2. Ajoutez `VITE_GA_ID` avec votre ID

### Autres plateformes
Configurez `VITE_GA_ID` selon la documentation de votre plateforme.

## Désactiver Google Analytics

Si vous ne voulez pas utiliser Google Analytics :
- Laissez `VITE_GA_ID` vide dans `.env`
- Le code Google Analytics ne sera pas chargé

## Notes

- Les données sont trackées de manière anonyme
- Conforme au RGPD (pas de cookies personnels sans consentement)
- Compatible avec GA4 (Google Analytics 4)








