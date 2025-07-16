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

const PrivacyPage = () => {
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
          alt="Privacy Policy" 
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Informazioni sulla privacy e protezione dei dati personali
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
              href="https://www.iubenda.com/privacy-policy/61234114" 
              className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium" 
              title="Privacy Policy"
            >
              Visualizza Privacy Policy Completa
            </a>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Informazioni sulla Privacy
            </h2>
            <p className="text-gray-600 mb-6">
              HANG Ponteggi è impegnata nella protezione della privacy e dei dati personali 
              dei propri clienti e visitatori del sito web. La nostra privacy policy completa 
              è disponibile tramite il servizio Iubenda e descrive nel dettaglio come 
              raccogliamo, utilizziamo e proteggiamo le vostre informazioni personali.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Principi fondamentali
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Trasparenza nel trattamento dei dati</li>
              <li>Raccolta dati limitata alle finalità specifiche</li>
              <li>Sicurezza e protezione delle informazioni</li>
              <li>Rispetto dei diritti dell'interessato</li>
              <li>Conformità al GDPR e normative italiane</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              I tuoi diritti
            </h3>
            <p className="text-gray-600 mb-4">
              Hai il diritto di accedere, rettificare, cancellare o limitare il trattamento 
              dei tuoi dati personali. Per esercitare questi diritti o per qualsiasi domanda 
              relativa alla privacy, puoi contattarci all'indirizzo email: 
              <a href="mailto:info@hangponteggi.it" className="text-blue-600 hover:text-blue-800 ml-1">
                info@hangponteggi.it
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage;
