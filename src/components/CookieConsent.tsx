import React from 'react';
import { useIubenda } from '../hooks/useIubenda';

// Estende l'interfaccia Window per includere _iub
declare global {
  interface Window {
    _iub: any;
  }
}

const CookieConsent: React.FC = () => {
  const { isLoaded, openPreferenceCenter } = useIubenda();

  // Il banner dei cookie sarà gestito automaticamente da Iubenda
  // Questo componente può essere utilizzato per aggiungere funzionalità aggiuntive

  return (
    <>
      {/* Il banner dei cookie sarà gestito automaticamente da Iubenda */}
      {/* Questo pulsante può essere utilizzato per riaprire le preferenze */}
      {isLoaded && (
        <button
          onClick={openPreferenceCenter}
          className="hidden" // Nascosto di default, può essere mostrato se necessario
          aria-label="Gestisci preferenze cookie"
          title="Gestisci preferenze cookie"
        >
          Gestisci Cookie
        </button>
      )}
    </>
  );
};

export default CookieConsent;
