import { Shield, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './AboutPage.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { mapProjects } from '../data/projects';

const AboutPage = () => {
  const greenIcon = new L.Icon({
    iconUrl: '/assets/img/location.png', // Updated icon URL
    iconSize: [31, 31],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
    className: 'text-green-600' // Added class for green color
  });

  return (
    <div className="pt-0">
       {/* Hero Section */}
       <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-8 sm:mb-16">
        <img 
          src="/assets/img/chi_siamo.jpg" 
          alt="Hero Image" 
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full flex-col px-4">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Chi Siamo
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Da oltre due decenni nel settore, oggi HANG Ponteggi rappresenta il punto di riferimento per 
            l'installazione e il noleggio di ponteggi sospesi in tutta Italia. La nostra 
            storia è fatta di progetti sfidanti, soluzioni innovative e un impegno 
            costante per la sicurezza.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Award className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Professionalità</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Un team di tecnici altamente qualificati e di personale altamente formato, in grado di garantire installazioni versatili, sicure, 
              conformi alle normative vigenti e realizzate secondo i più elevati standard di qualità.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Sicurezza</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Adottiamo esclusivamente materiali certificati secondo le normative europee di 
              riferimento, selezionati per garantire massima resistenza, affidabilità e durata nel tempo, in 
              collaborazione con i più noti marchi del settore
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center">Affidabilità</h3>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Rispettiamo scrupolosamente le tempistiche concordate e gli impegni assunti, 
              assicurando un servizio puntuale, efficiente e di elevata qualità in ogni fase del progetto, dalla fase preventiva fino a quella esecutiva.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">La Nostra Storia</h2>
            <p className="text-gray-600 mb-4">
              Fondata nel 2022, HANG Ponteggi nasce dall’unione tra una profonda passione per il settore dell’edilizia e l’ambizione di offrire 
              soluzioni di ponteggi sospesi altamente specializzate, sicure e tecnologicamente avanzate.
            </p>
            <p className="text-gray-600 mb-4">
              Fin dall’inizio, l’azienda ha posto al centro del proprio sviluppo l’innovazione e la crescita professionale, investendo 
              costantemente nella formazione del personale, nell’adozione di tecniche all’avanguardia e nella progettazione di opere 
              provvisionali studiate in base alle esigenze del singolo cantiere.
            </p>
            <p className="text-gray-600 mb-4">
              Nel corso degli anni, questo approccio ci ha permesso di affermarci come partner affidabile e qualificato per alcune 
              delle principali imprese edili italiane, supportandole nella realizzazione di progetti complessi e di rilevanza strategica 
              su tutto il territorio nazionale.
            </p>
            <p className="text-gray-600 mb-4">
             La nostra missione è chiara e immutata: offrire soluzioni di ponteggi sospesi che garantiscano i più elevati standard di sicurezza, 
             qualità esecutiva e professionalità, indipendentemente dalla dimensione o dalla complessità dell’intervento.
            </p>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 order-1 md:order-2">
            <img 
              src="/assets/img/storia2.jpg"
              alt="Storia HANG Ponteggi"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-6 sm:mt-8 mb-6 sm:mb-8"></div>
        {/* Mappa dei progetti */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 text-center">Alcuni dei Nostri Lavori In Tutta Italia</h2>
        <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full mb-8 sm:mb-16 mt-6 sm:mt-8 relative z-0"> {/* Increased height to 500px */}
          <MapContainer center={[44.5, 11.5]} zoom={7} className="h-full w-full rounded-lg shadow-lg leaflet-container">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapProjects.map(project => (
              <Marker key={project.id} position={project.position} icon={greenIcon}>
                <Popup>
                  <h3 className="font-bold text-xs sm:text-sm">{project.name}</h3>
                  <p className="text-xs mt-1">
                    {project.description}
                    {project.showDiscoverLink && (
                      <Link to={`/progetto/${project.id}`} className="link-green-600 ml-1">Scopri</Link>
                    )}
                  </p>
                  <img src={project.imageUrl} alt={project.name} className="w-full h-20 sm:h-28 mt-2 rounded object-cover" />
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
