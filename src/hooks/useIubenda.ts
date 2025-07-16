import { useEffect, useState } from 'react';

// Hook personalizzato per gestire Iubenda
export const useIubenda = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkIubenda = () => {
      if (window._iub && window._iub.cs) {
        setIsLoaded(true);
        
        // Controlla se l'utente ha già dato il consenso
        if (window._iub.cs.api && typeof window._iub.cs.api.getConsentGiven === 'function') {
          setHasConsent(window._iub.cs.api.getConsentGiven());
        }
      }
    };

    // Controlla immediatamente
    checkIubenda();

    // Controlla periodicamente fino a quando Iubenda è caricato
    const interval = setInterval(() => {
      if (window._iub && window._iub.cs) {
        clearInterval(interval);
        checkIubenda();
      }
    }, 100);

    // Listener per i cambiamenti del consenso
    window.addEventListener('iubenda_cs_loaded', checkIubenda);
    window.addEventListener('iubenda_consent_given', () => setHasConsent(true));
    window.addEventListener('iubenda_consent_rejected', () => setHasConsent(false));

    return () => {
      clearInterval(interval);
      window.removeEventListener('iubenda_cs_loaded', checkIubenda);
      window.removeEventListener('iubenda_consent_given', () => setHasConsent(true));
      window.removeEventListener('iubenda_consent_rejected', () => setHasConsent(false));
    };
  }, []);

  const openPreferenceCenter = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.openPreferenceCenter();
    }
  };

  const acceptConsent = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.acceptConsent();
    }
  };

  const rejectConsent = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.rejectConsent();
    }
  };

  return {
    isLoaded,
    hasConsent,
    openPreferenceCenter,
    acceptConsent,
    rejectConsent
  };
};
