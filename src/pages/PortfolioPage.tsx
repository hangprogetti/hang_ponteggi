import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects'; // Import projects from projects.ts

const PortfolioPage = () => {
  return (
    <div className="pt-0"> {/* Changed from py-20 to pt-0 */}
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden mb-16">
        <img 
          src="/assets/img/progetti.jpg" 
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
            I Nostri Progetti
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Esplora alcuni dei nostri progetti più significativi. Ogni lavoro 
            rappresenta il nostro impegno per l'eccellenza e la sicurezza nel 
            settore dei ponteggi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-center border-b border-gray-200 pb-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Link to={`/progetto/${index}`} className="w-full md:w-1/2">
                <img 
                  src={project.prjectImage} 
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </Link>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-md text-gray-600">{project.shortDescription}</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-green-600 capitalize">
                        {key === 'dove' ? 'Dove' : key}
                      </dt>
                      <dd className="mt-1 text-lg text-gray-900">{value}</dd>
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/progetto/${index}`} 
                  className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 text-center mr-4"
                >
                  Vedi Dettagli
                </Link>
                <Link 
                  to="/contatti" 
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center"
                >
                  Richiedi un Progetto Simile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vuoi vedere altri progetti?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contattaci per scoprire altri lavori realizzati nel tuo settore 
            o nella tua zona.
          </p>
          <Link 
            to="/contatti" 
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Contattaci
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;