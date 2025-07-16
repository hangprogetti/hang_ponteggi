import React, { useEffect, useState, useRef } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Add this import

const ContactPage = () => {
  const location = useLocation();
  const [, setSelectedService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '', // Add this field
    privacy: false, // Add privacy checkbox
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isLoading, setIsLoading] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { 
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const servizio = params.get('servizio');
    if (servizio) {
      setFormData(prev => ({ ...prev, service: servizio }));
    }
    if (location.hash === '#form' && formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop - 100, // Adjust the offset as needed
        behavior: 'smooth'
      });
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send('service_zq67hy3', 'template_q9febpb', formData, 'vBMXCnedQCMzRTDcl')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '', // Reset this field
          privacy: false, // Reset privacy checkbox
        });
        setIsLoading(false);
      }, (error) => {
        console.log('FAILED...', error);
        setFormStatus('error');
        setIsLoading(false);
      });
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-8 sm:mb-16">
        <img 
          src="/assets/img/contatti.jpg" 
          alt="Hero Image" 
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
            Contattaci
          </motion.h1>
          <motion.p 
            className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Siamo qui per rispondere a tutte le tue domande. Contattaci per un 
            preventivo gratuito o per maggiori informazioni sui nostri servizi 
            di ponteggi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div 
            ref={formRef}
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md order-1 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Richiedi un Preventivo</h2>
            {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-3 sm:px-4 py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
                  <p>Messaggio inviato con successo! Riceverai presto nostre notizie.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-3 sm:px-4 py-3 rounded mb-4 sm:mb-6 text-sm sm:text-base">
                  <p>Si è verificato un errore. Riprova più tardi.</p>
                </div>
              )}
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Il tuo nome e cognome"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="La tua email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]*"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  placeholder="Il tuo numero"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">Tipo di Servizio</label>
                <select 
                  name="service"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  value={formData.service}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    handleChange(e);
                  }}
                >
                  <option value="">Seleziona un servizio</option>
                  <option value="Noleggio Ponteggi">Noleggio Ponteggi</option>
                  <option value="Installazione e Montaggio">Installazione e Montaggio</option>
                  <option value="Manutenzione">Manutenzione</option>
                  <option value="Consulenza">Consulenza</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-sm sm:text-base">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
                  placeholder="Scrivi un messaggio"
                ></textarea>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Accetto la{' '}
                  <Link 
                    to="/privacy" 
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>
                  {' '}e la{' '}
                  <Link 
                    to="/cookie" 
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie Policy
                  </Link>
                  {' '}e acconsento al trattamento dei miei dati personali.
                </label>
              </div>
              <button 
              type="submit"
              className="w-full bg-green-600 text-white px-4 sm:px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base font-medium"
              disabled={isLoading}>
                {isLoading ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Informazioni di Contatto</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Telefono</h4>
                    <a 
                      href="tel:+390287186660" 
                      className="text-gray-600 hover:text-green-600 transition-colors block text-sm sm:text-base"
                    >
                      +39 02 871 8660
                    </a>
                    <p className="text-gray-600 text-sm sm:text-base">Lun-Ven: 8:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Email</h4>
                    <a 
                      href="mailto:info@hangponteggi.it" 
                      className="text-gray-600 hover:text-green-600 transition-colors block text-sm sm:text-base"
                    >
                      info@hangponteggi.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Sede Operativa</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Via del Lvaoro, 12</p>
                    <p className="text-gray-600 text-sm sm:text-base">28040 Borgo Ticino (NO)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Sede Legale</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Via S. Sonnino, 57</p>
                    <p className="text-gray-600 text-sm sm:text-base">09127 Cagliari</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">Social</h4>
                    <div className="space-y-1">
                      <a 
                          href="https://www.instagram.com/hangponteggi.it/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors block text-sm sm:text-base"
                        >
                          @hangponteggi.it
                      </a>
                      <a 
                          href="https://www.facebook.com/hangponteggi/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors block text-sm sm:text-base"
                        >
                          facebook/hangponteggi
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Orari di Apertura</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Lunedì - Venerdì</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Sabato</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Domenica</span>
                  <span className="font-medium">Chiuso</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 sm:p-6 lg:p-8 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Emergenze 24/7</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                Per emergenze fuori orario, è disponibile il nostro servizio di 
                assistenza 24/7.
              </p>
              <a 
                href="tel:+390287186660" 
                className="text-base sm:text-lg font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                +39 02 871 8660
              </a>
            </div>
          </motion.div>
        </div>

        {/* Pulsante di chiamata rapida per mobile */}
        <div className="fixed bottom-6 right-6 z-50 lg:hidden">
          <a
            href="tel:+390287186660"
            className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center"
            aria-label="Chiama ora"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


