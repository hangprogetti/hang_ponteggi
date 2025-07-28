import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects'; // Import projects from projects.ts

const PortfolioPage = () => {
  return (
    <div className="pt-0"> {/* Changed from py-20 to pt-0 */}
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] sm:h-[50vh] overflow-hidden mb-8 sm:mb-16">
        <img 
          src="/assets/img/progetti.jpg" 
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
            I Nostri Progetti
          </motion.h1>
          <motion.p 
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Scopri una selezione dei nostri interventi più rappresentativi.
            Ogni progetto riflette la nostra competenza, l’attenzione alla sicurezza e l’impegno costante per l’eccellenza nel settore dei ponteggi sospesi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 sm:space-y-20">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row gap-4 sm:gap-8 items-center border-b border-gray-200 pb-6 sm:pb-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <Link to={`/progetto/${index}`} className="w-full md:w-1/2">
                <img 
                  src={project.projectImage} 
                  alt={project.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </Link>
              <div className="w-full md:w-1/2 space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-sm sm:text-md text-gray-600">{project.shortDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {Object.entries(project.details).map(([key, value]) => (
                    <div key={key}>
                      <dt className="text-sm font-medium text-green-600 capitalize">
                        {key === 'dove' ? 'Dove' : key}
                      </dt>
                      <dd className="mt-1 text-base sm:text-lg text-gray-900">{value}</dd>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                  <Link 
                    to={`/progetto/${index}`} 
                    className="inline-block bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 text-center sm:mr-4"
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
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 sm:mt-20 text-center mb-8 sm:mb-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Vuoi vedere altri progetti?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
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