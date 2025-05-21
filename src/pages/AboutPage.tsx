import { Shield, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './AboutPage.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AboutPage = () => {
  const projects = [
    { id: 0, position: [45.4642, 9.1900] as [number, number], name: "Restauro Abbazia", description: "Realizzazione di interventi di restauro e consolidamento strutturale delle capriate lignee dell'Abbazia di San Miniato al Monte", imageUrl: "/assets/img/servizi.jpg" },
    { id: 1, position: [41.9028, 12.4964] as [number, number], name: "Installazione Passerella Sospesa", description: 'La realizzazione di una passerella sospesa multidirezionale, progettata per garantire un accesso sicuro e pratico durante gli interventi di manutenzione e lavori sul cordolo est, in direzione Genova.', imageUrl: "/assets/img/progetti.jpg" },
    // ...other projects...
  ];

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
       <div className="relative w-full h-[50vh] overflow-hidden mb-16">
        <img 
          src="/assets/img/chi_siamo.jpg" 
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
            Chi Siamo
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Da oltre due decenni, HANG Ponteggi è il punto di riferimento per 
            l'installazione e il noleggio di ponteggi in tutta Italia. La nostra 
            storia è fatta di progetti sfidanti, soluzioni innovative e un impegno 
            costante per la sicurezza.
          </motion.p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Award className="h-12 w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Professionalità</h3>
            <p className="text-gray-600">
              Team altamente qualificato e certificato per garantire 
              installazioni sicure e a regola d'arte.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Shield className="h-12 w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Sicurezza</h3>
            <p className="text-gray-600">
              Utilizziamo solo materiali certificati e seguiamo rigorosamente 
              tutte le normative di sicurezza.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <CheckCircle className="h-12 w-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Affidabilità</h3>
            <p className="text-gray-600">
              Rispettiamo sempre le tempistiche e gli impegni presi, 
              garantendo un servizio impeccabile.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">La Nostra Storia</h2>
            <p className="text-gray-600 mb-4">
              Fondata nel 2004, <span className="text-green-600 font-bold">HANG</span> Ponteggi nasce dalla passione per l'edilizia e 
              dalla volontà di offrire servizi di ponteggio di alta qualità. Nel 
              corso degli anni, abbiamo costantemente investito in formazione e 
              attrezzature all'avanguardia.
            </p>
            <p className="text-gray-600 mb-4">
              Oggi siamo orgogliosi di essere partner di alcune delle più importanti 
              imprese edili italiane, contribuendo alla realizzazione di progetti 
              significativi in tutto il territorio nazionale.
            </p>
            <p className="text-gray-600">
              La nostra missione rimane invariata: garantire sicurezza, qualità e 
              professionalità in ogni progetto, grande o piccolo che sia.
            </p>
          </div>
          <div className="relative h-96">
            <img 
              src="/assets/img/storia2.jpg"
              alt="Storia HANG Ponteggi"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mt-8 mb-8"></div>
        {/* Mappa dei progetti */}
        <h2 className="text-3xl font-bold text-gray-900 mb-1 text-center">I Nostri Lavori In Tutta Italia</h2>
        <div className="h-[500px] w-full mb-16 mt-8 relative z-0"> {/* Increased height to 500px */}
          <MapContainer center={[42.5, 12.5]} zoom={6} className="h-full w-full rounded-lg shadow-lg leaflet-container">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {projects.map(project => (
              <Marker key={project.id} position={project.position} icon={greenIcon}>
                <Popup>
                  <h3 className="font-bold text-sm">{project.name}</h3>
                  <p className="text-xs mt-1">{project.description} 
                    <Link to={`/progetto/${project.id}`} className="link-green-600 ml-1">Scopri</Link>
                  </p>
                  <img src={project.imageUrl} alt={project.name} className="w-full h-28 mt-2 rounded object-cover" />
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
