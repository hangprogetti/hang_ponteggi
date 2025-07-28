import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services.ts'; // Import the services constant

const ServicesPage = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-8 sm:mb-16">
        <img 
          src="/assets/img/servizi.jpg" 
          alt="Hero Image" 
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full flex-col px-4">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I Nostri Servizi
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center px-2 sm:px-4 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Dalla progettazione alla manutenzione, offriamo soluzioni di ponteggi sospesi su misura, pensate per ogni tipo di esigenza.
            Grazie alla nostra esperienza, garantiamo massima sicurezza e qualità in ogni fase del progetto.
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className={`flex flex-col gap-6 sm:gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center md:text-left">{service.title}</h2>
                  <p className="text-lg sm:text-xl text-gray-600 text-center md:text-left leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 text-sm sm:text-base">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-center md:text-left">
                    <Link 
                      to={`/contatti?servizio=${encodeURIComponent(service.title)}#form`} 
                      className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base font-medium"
                    >
                      Richiedi Preventivo
                    </Link>
                  </div>
                </div>
              </motion.div>
              {index < services.length - 1 && (
                <div className="w-full border-t border-gray-300 mt-8 sm:mt-12"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div 
          className="mt-12 sm:mt-20 bg-gray-50 rounded-lg p-6 sm:p-8 text-center mb-8 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Hai un progetto specifico in mente?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            Contattaci per una consulenza gratuita e un preventivo personalizzato.
          </p>
          <Link 
            to="/contatti" 
            className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base font-medium"
          >
            Parliamo del tuo Progetto
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;