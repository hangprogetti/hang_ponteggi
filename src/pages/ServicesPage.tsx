import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services.ts'; // Import the services constant

const ServicesPage = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden mb-16">
        <img 
          src="/assets/img/servizi.jpg" 
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
            I Nostri Servizi
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Offriamo soluzioni complete per ogni esigenza di ponteggio, 
            dalla progettazione alla manutenzione. La nostra esperienza 
            garantisce sicurezza e qualità in ogni fase del progetto.
          </motion.p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <motion.div 
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-xl text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/contatti?servizio=${encodeURIComponent(service.title)}#form`} 
                    className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
                  >
                    Richiedi Preventivo
                  </Link>
                </div>
              </motion.div>
              <div className="w-full border-t border-gray-300 mt-8"></div>
            </React.Fragment>
          ))}
        </div>

        <motion.div 
          className="mt-20 bg-gray-50 rounded-lg p-8 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hai un progetto specifico in mente?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per una consulenza gratuita e un preventivo personalizzato.
          </p>
          <Link 
            to="/contatti" 
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 mb-4"
          >
            Parliamo del tuo Progetto
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;