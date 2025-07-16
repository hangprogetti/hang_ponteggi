import { useEffect } from "react";

const IubendaCookieBanner: React.FC = () => {
  useEffect(() => {
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
    // Cambia da // a https://
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

  return null;
};

export default IubendaCookieBanner;
