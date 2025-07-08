import { ChevronRight, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/services'; // Importa i servizi

const HomePage = () => {
  return (
    <>
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/video/video_hero.mp4"
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Ponteggi sicuri e certificati per ogni esigenza edilizia
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-5xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Siamo un’azienda italiana giovane, dinamica e in continua espansione, specializzata nella fornitura, noleggio e installazione di ponteggio, coperture provvisorie e montacarichi da cantiere in tutta la penisola italiana.
Operiamo con competenza e flessibilità in ambito infrastrutturale, civile e industriale offrendo soluzioni personalizzate e tecnologicamente avanzate per soddisfare le esigenze di sicurezza, efficienza e rapidità di ogni progetto.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link 
                to="/contatti" 
                className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 flex items-center justify-center"
              >
                Richiedi Preventivo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/chi-siamo" 
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-green-600 text-center"
              >
                Scopri di Più
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Benvenuti in HANG Ponteggi
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Da anni, <span className="text-green-600 font-bold">HANG</span> Ponteggi rappresenta un punto di riferimento a livello nazionale nel settore dell’installazione e del noleggio di ponteggi.
La nostra esperienza pluriennale si fonda su un percorso di crescita costante , caratterizzato da progetti complessi, soluzioni tecnologicamente avanzate e un’attenzione rigorosa agli standard di sicurezza.
Ogni intervento è il risultato di competenza tecnica , affidabilità operativa e un forte orientamento alla soddisfazione del cliente.
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Award className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Professionalità</h3>
                <p className="text-gray-600">
                  Un team di tecnici altamente qualificati e di personale altamente formato, in grado di garantire installazioni versatili, sicure, 
                  conformi alle normative vigenti e realizzate secondo i più elevati standard di qualità.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <Shield className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Sicurezza</h3>
                <p className="text-gray-600">
                  Adottiamo esclusivamente materiali certificati secondo le normative europee di riferimento, selezionati per garantire massima resistenza , 
                  affidabilità e durata nel tempo, in collaborazione con i più noti marchi del settore.
                  Ogni fase del nostro lavoro è condotta nel rigoroso rispetto delle normative di sicurezza vigenti, 
                  con procedure operative costantemente aggiornate per assicurare la tutela di operatori, clienti e ambienti di lavoro.
                </p>
              </motion.div>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <CheckCircle className="h-12 w-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-4">Affidabilità</h3>
                <p className="text-gray-600">
                  Rispettiamo scrupolosamente le tempistiche concordate e gli impegni assunti, 
                  assicurando un servizio puntuale, efficiente e di elevata qualità in ogni fase del progetto, dalla fase preventiva fino a quella esecutiva.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              I nostri servizi
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link 
              to="/servizi" 
              className="text-green-600 text-xl font-semibold hover:text-green-700 flex items-center justify-center"
            >
              Scopri tutti i servizi
              <ChevronRight className="ml-1 h-5 w-5 mt-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;