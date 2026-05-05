// Utilitaires pour Google Analytics

/**
 * Initialise Google Analytics avec l'ID fourni
 */
export const initGA = (gaId) => {
  if (!gaId || typeof window === 'undefined') return;

  // Le script est déjà chargé dans index.html
  // On configure juste l'ID
  if (window.gtag) {
    window.gtag('config', gaId);
  }
};

/**
 * Track un événement Google Analytics
 * @param {string} eventName - Nom de l'événement
 * @param {object} eventParams - Paramètres de l'événement
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, eventParams);
};

/**
 * Track un clic sur un bouton CTA
 */
export const trackCTA = (location) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: location,
    value: 1
  });
};

/**
 * Track une soumission du formulaire waitlist
 */
export const trackWaitlistSubmit = (data) => {
  trackEvent('waitlist_submit', {
    event_category: 'conversion',
    event_label: 'waitlist_form',
    has_store: data.shopifyUrl ? 'yes' : 'no',
    value: 1
  });
};

/**
 * Track une vue de section
 */
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: sectionName,
    value: 1
  });
};








