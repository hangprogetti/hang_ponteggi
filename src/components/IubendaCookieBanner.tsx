import { useEffect, useState } from "react";

const IubendaCookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [experienceEnabled, setExperienceEnabled] = useState(false);

  useEffect(() => {
    // Verifica se l'utente ha già dato il consenso
    const hasConsent = localStorage.getItem('iubenda-cookie-consent');
    if (!hasConsent) {
      setShowBanner(true);
    }

    // Creazione dinamica degli script
    const iubScript1 = document.createElement("script");
    iubScript1.type = "text/javascript";
    iubScript1.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {
        "siteId": 4162284,
        "cookiePolicyId": 87924712,
        "lang": "it",
        "storage": {"useSiteId": true}
      };
    `;
    document.body.appendChild(iubScript1);

    const iubScript2 = document.createElement("script");
    iubScript2.src = "https://cs.iubenda.com/autoblocking/4162284.js";
    iubScript2.type = "text/javascript";
    document.body.appendChild(iubScript2);

    const iubScript3 = document.createElement("script");
    iubScript3.src = "https://cdn.iubenda.com/cs/iubenda_cs.js";
    iubScript3.type = "text/javascript";
    iubScript3.charset = "UTF-8";
    iubScript3.async = true;
    document.body.appendChild(iubScript3);

    return () => {
      try {
        if (document.body.contains(iubScript1)) {
          document.body.removeChild(iubScript1);
        }
        if (document.body.contains(iubScript2)) {
          document.body.removeChild(iubScript2);
        }
        if (document.body.contains(iubScript3)) {
          document.body.removeChild(iubScript3);
        }
      } catch (error) {
        console.warn('Errore durante la rimozione degli script Iubenda:', error);
      }
    };
  }, []);

  const handleRejectAll = () => {
    localStorage.setItem('iubenda-cookie-consent', 'rejected');
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    localStorage.setItem('iubenda-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleLearnMore = () => {
    window.open('https://www.iubenda.com/privacy-policy/87924712', '_blank');
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="relative bg-black text-white p-4 sm:p-6 rounded-lg max-w-md mx-4 my-4 sm:my-0 shadow-2xl w-full sm:w-auto max-h-screen overflow-y-auto">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 text-xl font-bold z-10"
        >
          ×
        </button>

        <div className="mb-4 sm:mb-6 pr-8">
          <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            Noi (<strong>www.hangpontgeggi.it</strong>) e terze parti selezionate (2) 
            raccogliamo informazioni personali come specificato nella{' '}
            <button 
              onClick={handleLearnMore}
              className="text-blue-400 underline hover:text-blue-300"
            >
              privacy policy
            </button>
            {' '}e utilizziamo cookie o tecnologie simili per 
            finalità tecniche e, con il tuo consenso, anche per le finalità di 
            esperienza come specificato nella{' '}
            <button 
              onClick={handleLearnMore}
              className="text-blue-400 underline hover:text-blue-300"
            >
              cookie policy
            </button>.
          </p>
          
          <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
            Puoi liberamente prestare, rifiutare o revocare il tuo consenso, 
            in qualsiasi momento, accedendo al pannello delle preferenze. 
            Il rifiuto del consenso può rendere non disponibili le relative funzioni.
          </p>
          
          <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6">
            Usa il pulsante "Accetta tutto" per acconsentire. Usa il pulsante 
            "Rifiuta tutto" o chiudi questa informativa per continuare senza accettare.
          </p>

          {/* Experience toggle */}
          <div className="flex items-center mb-4 sm:mb-6">
            <button
              onClick={() => setExperienceEnabled(!experienceEnabled)}
              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors focus:outline-none ${
                experienceEnabled ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                  experienceEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="ml-3 text-xs sm:text-sm">Esperienza</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <button
              onClick={handleRejectAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Rifiuta tutto
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Accetta tutto
            </button>
          </div>
          
          <button
            onClick={handleLearnMore}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            Scopri di più
          </button>
        </div>

        {/* Iubenda branding */}
        <div className="mt-3 sm:mt-4 text-center">
          <span className="text-xs text-gray-400">
            Created with{' '}
            <button 
              onClick={() => window.open('https://www.iubenda.com', '_blank')}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              iubenda
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IubendaCookieBanner;
