import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { projects } from '../data/projects'; // Import the projects array

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-md hover:bg-white transition-colors"
      onClick={onClick}
    >
      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 sm:p-2 rounded-full shadow-md hover:bg-white transition-colors"
      onClick={onClick}
    >
      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
    </button>
  );
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects[parseInt(id || '0')];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const [refText, inViewText] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refDetails, inViewDetails] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refGallery, inViewGallery] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-0">
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
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Scopri una selezione dei nostri interventi più rappresentativi.
            Ogni progetto riflette la nostra competenza, l’attenzione alla sicurezza e l’impegno costante per l’eccellenza nel settore dei ponteggi.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 gap-4 mb-8 sm:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Testo */}
          <motion.div 
            ref={refText}
            className="mb-6 sm:mb-8 flex justify-center mx-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={inViewText ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="text-center px-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 border-b-2 border-gray-300 pb-2">{project.title}</h2>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">{project.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {Object.entries(project.details).map(([key, value]) => (
                  <motion.div 
                    key={key}
                    className="text-left"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inViewText ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 * Object.keys(project.details).indexOf(key) }}
                  >
                    <dt className="text-sm font-medium text-green-600 capitalize">
                      {key === 'dove' ? 'Dove' : key}
                    </dt>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900">{value}</dd>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={inViewText ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <video controls className="w-full h-64 sm:h-96 md:h-full object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Galleria immagini */}
          <motion.div 
            ref={refGallery}
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inViewGallery ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Slider {...settings}>
              {project.images.map((image, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <img src={image} alt={`Project image ${index + 1}`} className="w-full h-64 sm:h-96 md:h-[42rem] object-cover rounded-lg" />
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Sezione Social */}
          <motion.div 
            ref={refDetails}
            className="bg-gray-100 py-8 sm:py-12 mb-8 sm:mb-16 rounded-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={inViewDetails ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Scopri di più sui nostri progetti</h2>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Ogni progetto è unico e rappresenta il nostro impegno per la qualità e la sicurezza. 
                Scopri i dettagli e le sfide affrontate in ciascuno dei nostri lavori.
              </p>
              <p className="text-base sm:text-xl text-gray-600 mb-4 sm:mb-6">
                Vuoi scoprire altri progetti e vedere il nostro lavoro in azione? Seguici sui social per esplorare foto, video e aggiornamenti sui nostri interventi più recenti!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                <a 
                  href="https://www.instagram.com/hangponteggi.it/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-pink-500 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/hangponteggi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
                <a 
                  href="https://it.linkedin.com/company/hang-srl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
