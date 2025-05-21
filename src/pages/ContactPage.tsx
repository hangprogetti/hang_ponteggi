import React, { useEffect, useState, useRef } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
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
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    emailjs.send('service_9r3nahq', 'template_vajt9qo', formData, 'OTQNdy3Waw99sviQb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          service: '', // Reset this field
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
      <div className="relative w-full h-[50vh] overflow-hidden mb-16">
        <img 
          src="/assets/img/contatti.jpg" 
          alt="Hero Image" 
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full flex-col">
          <motion.h1 
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contattaci
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
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
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            ref={formRef}
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Richiedi un Preventivo</h2>
            {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Messaggio inviato con successo! Riceverai presto nostre notizie.</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>Si è verificato un errore. Riprova più tardi.</p>
                </div>
              )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2">Nome e Cognome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Il tuo nome e cognome"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="La tua email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]*"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Il tuo numero"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Tipo di Servizio</label>
                <select 
                  name="service"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <label className="block text-gray-700 mb-2">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Scrivi un messaggio"
                ></textarea>
              </div>
              <button 
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
              disabled={isLoading}>
                {isLoading ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Informazioni di Contatto</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">Telefono</h4>
                    <p className="text-gray-600">+39 02 871 8660</p>
                    <p className="text-gray-600">Lun-Ven: 8:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <p className="text-gray-600">info@hangponteggi.it</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">Sede</h4>
                    <p className="text-gray-600">Via dei Ponteggi, 123</p>
                    <p className="text-gray-600">20100 Milano (MI)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">Social</h4>
                    <a 
                        href="https://www.instagram.com/hangponteggi.it/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        @hangponteggi.it
                    </a>
                    <br />
                    <a 
                        href="https://www.facebook.com/hangponteggi/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-700"
                      >
                        facebook/hangponteggi
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Orari di Apertura</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunedì - Venerdì</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sabato</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domenica</span>
                  <span className="font-medium">Chiuso</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Emergenze 24/7</h3>
              <p className="text-gray-600 mb-4">
                Per emergenze fuori orario, è disponibile il nostro servizio di 
                assistenza 24/7.
              </p>
              <p className="text-lg font-semibold text-green-600">
                +39 02 871 8660
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;


