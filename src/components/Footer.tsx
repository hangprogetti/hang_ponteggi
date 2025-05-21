import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-8">
              <img src="/assets/img/logo3.png" alt="HANG Logo" className="h-30 w-32" />
            </div>
            <p className="text-gray-400">
              Leader nel settore dei ponteggi con oltre 20 anni di esperienza. 
              Sicurezza e qualità al primo posto.
            </p>
            <div className="mt-8">
              <a 
                href="https://www.instagram.com/hangponteggi.it/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-becool-200"
              >
                <Instagram className="h-8 w-8 mr-4" />
              </a>
              <a 
                href="https://www.facebook.com/hangponteggi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-becool-200"
              >
                <Facebook className="h-8 w-8 mr-4" />
              </a>
              <a 
                href="https://it.linkedin.com/company/hang-srl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-white hover:text-becool-200"
              >
                <Linkedin className="h-8 w-8 mr-2" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
               <li>
                <Link to="/servizi" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                  Noleggio Ponteggi
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                  Installazione e Montaggio
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                 Manutenzione
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/chi-siamo" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-gray-400 hover:text-white" onClick={scrollToTop}>
                  Lavora con noi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Via dei Ponteggi, 123</li>
              <li className="text-gray-400">20100 Milano (MI)</li>
              <li className="text-gray-400">Tel: +39 02 1234567</li>
              <li className="text-gray-400">Email: info@hangponteggi.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 HANG Ponteggi. Tutti i diritti riservati.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">Termini</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;