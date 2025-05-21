import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects'; // Import the projects array

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0.5">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Testo */}
          <motion.div 
            ref={refText}
            className="col-span-1 md:col-span-5 mb-8 flex justify-center mx-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={inViewText ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-300 pb-2">{project.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(project.details).map(([key, value]) => (
                  <motion.div 
                    key={key}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inViewText ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 * Object.keys(project.details).indexOf(key) }}
                  >
                    <dt className="text-sm font-medium text-green-600 capitalize">
                      {key === 'dove' ? 'Dove' : key}
                    </dt>
                    <dd className="mt-1 text-lg text-gray-900">{value}</dd>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div 
            className="col-span-1 md:col-span-5 mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={inViewText ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <video controls className="w-full h-full object-cover rounded-lg">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* New Section */}
          <motion.div 
            ref={refDetails}
            className="bg-gray-100 py-12 mb-16 col-span-1 md:col-span-5"
            initial={{ opacity: 0, y: 100 }}
            animate={inViewDetails ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Scopri di più sui nostri progetti</h2>
              <p className="text-xl text-gray-600 mb-6">
                Ogni progetto è unico e rappresenta il nostro impegno per la qualità e la sicurezza. 
                Scopri i dettagli e le sfide affrontate in ciascuno dei nostri lavori.
              </p>
            </div>
          </motion.div>

          {/* Galleria immagini */}
          <motion.div 
            ref={refGallery}
            className="col-span-1 md:col-span-5 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inViewGallery ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <Slider {...settings}>
              {project.images.map((image, index) => (
                <div key={index} className="px-4">
                  <img src={image} alt={`Project image ${index + 1}`} className="w-full h-[34rem] object-cover rounded-lg" />
                </div>
              ))}
            </Slider>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
