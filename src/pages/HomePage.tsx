import { ChevronRight, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services'; // Importa i servizi

const HomePage = () => {
  return (
    <>
      <section className="relative min-h-screen h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/video/video_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Ponteggi sicuri e certificati per ogni esigenza edilizia
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-5xl leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Siamo un'azienda italiana giovane, dinamica e in continua espansione, specializzata nella fornitura, noleggio e installazione di ponteggio, coperture provvisorie e montacarichi da cantiere in tutta la penisola italiana.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0">
                Operiamo con competenza e flessibilità in ambito infrastrutturale, civile e industriale offrendo soluzioni personalizzate e tecnologicamente avanzate per soddisfare le esigenze di sicurezza, efficienza e rapidità di ogni progetto.
              </span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link 
                to="/contatti" 
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-green-700 flex items-center justify-center text-base sm:text-lg font-medium transition-colors duration-200"
              >
                Richiedi Preventivo
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                to="/chi-siamo" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white hover:text-green-600 text-center text-base sm:text-lg font-medium transition-all duration-200"
              >
                Scopri di Più
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Benvenuti in HANG Ponteggi
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Da anni, <span className="text-green-600 font-bold">HANG</span> Ponteggi rappresenta un punto di riferimento a livello nazionale nel settore dell'installazione e del noleggio di ponteggi.
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0">
                La nostra esperienza pluriennale si fonda su un percorso di crescita costante, caratterizzato da progetti complessi, soluzioni tecnologicamente avanzate e un'attenzione rigorosa agli standard di sicurezza.
              </span>
              <br className="hidden sm:block" />
              <span className="block mt-2 sm:inline sm:mt-0">
                Ogni intervento è il risultato di competenza tecnica, affidabilità operativa e un forte orientamento alla soddisfazione del cliente.
              </span>
            </motion.p>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <motion.div 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mx-2 sm:mx-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Professionalità</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Un team di tecnici altamente qualificati e di personale altamente formato, in grado di garantire installazioni versatili, sicure, 
                  conformi alle normative vigenti e realizzate secondo i più elevati standard di qualità.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mx-2 sm:mx-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Sicurezza</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Adottiamo esclusivamente materiali certificati secondo le normative europee di 
                  riferimento, selezionati per garantire massima resistenza, affidabilità e durata nel tempo, in 
                  collaborazione con i più noti marchi del settore
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mx-2 sm:mx-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Affidabilità</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Rispettiamo scrupolosamente le tempistiche concordate e gli impegni assunti, 
                  assicurando un servizio puntuale, efficiente e di elevata qualità in ogni fase del progetto, dalla fase preventiva fino a quella esecutiva.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I nostri servizi
            </motion.h2>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mx-2 sm:mx-0"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-40 sm:h-48 w-full object-cover rounded-md mb-4" 
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link 
              to="/servizi" 
              className="text-green-600 text-lg sm:text-xl font-semibold hover:text-green-700 flex items-center justify-center transition-colors duration-200"
            >
              Scopri tutti i servizi
              <ChevronRight className="ml-1 h-4 w-4 sm:h-5 sm:w-5 mt-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;