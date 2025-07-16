import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Dichiarazione per TypeScript
declare global {
  interface Window {
    iubenda?: {
      parse: () => void;
    };
  }
}

const CookiePage = () => {
  useEffect(() => {
    // Assicuriamoci che lo script Iubenda sia caricato
    if (window.iubenda) {
      window.iubenda.parse();
    }
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-8 sm:mb-16">
        <img 
          src="/assets/img/hero.jpg" 
          alt="Cookie Policy" 
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full flex-col px-4">
          <motion.h1 
            className="text-2xl sm:text-4xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Informazioni sui cookie utilizzati dal nostro sito web
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <a 
              href="https://www.iubenda.com/privacy-policy/61234114/cookie-policy" 
              className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium" 
              title="Cookie Policy"
            >
              Visualizza Cookie Policy Completa
            </a>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Informazioni sui Cookie
            </h2>
            <p className="text-gray-600 mb-6">
              Il nostro sito web utilizza cookie per migliorare l'esperienza di navigazione 
              e fornire servizi personalizzati. I cookie sono piccoli file di testo che 
              vengono memorizzati sul tuo dispositivo quando visiti il nostro sito.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Tipi di cookie utilizzati
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li><strong>Cookie tecnici:</strong> Necessari per il funzionamento del sito</li>
              <li><strong>Cookie di prestazione:</strong> Per analizzare l'utilizzo del sito</li>
              <li><strong>Cookie di funzionalità:</strong> Per ricordare le tue preferenze</li>
              <li><strong>Cookie di marketing:</strong> Per personalizzare i contenuti pubblicitari</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Gestione dei cookie
            </h3>
            <p className="text-gray-600 mb-4">
              Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser. 
              Tieni presente che disabilitare alcuni cookie potrebbe influire sulle funzionalità 
              del sito web.
            </p>

            <p className="text-gray-600 mb-4">
              Per maggiori informazioni sui cookie e sulla loro gestione, consulta la nostra 
              cookie policy completa utilizzando il link sopra.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Contatti:</strong> Per domande sui cookie o sulla nostra politica di privacy, 
                contattaci all'indirizzo: 
                <a href="mailto:info@hangponteggi.it" className="text-blue-600 hover:text-blue-800 ml-1">
                  info@hangponteggi.it
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePage;
