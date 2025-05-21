import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-green-600" : "text-gray-600 hover:text-green-600";
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={handleLinkClick}>
              <img src="/assets/img/logo.png" alt="HANG Logo" className="h-36 w-38" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className={isActive('/')} onClick={handleLinkClick}>Home</Link>
            <Link to="/chi-siamo" className={isActive('/chi-siamo')} onClick={handleLinkClick}>Chi Siamo</Link>
            <Link to="/servizi" className={isActive('/servizi')} onClick={handleLinkClick}>Servizi</Link>
            <Link to="/portfolio" className={isActive('/portfolio')} onClick={handleLinkClick}>Portfolio</Link>
            <Link to="/contatti" className={isActive('/contatti')} onClick={handleLinkClick}>Contatti</Link>
            <Link 
              to="/contatti" 
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              onClick={handleLinkClick}
            >
              Preventivo Gratuito
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/chi-siamo" 
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={handleLinkClick}
            >
              Chi Siamo
            </Link>
            <Link 
              to="/servizi" 
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={handleLinkClick}
            >
              Servizi
            </Link>
            <Link 
              to="/portfolio" 
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
            <Link 
              to="/contatti" 
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={handleLinkClick}
            >
              Contatti
            </Link>
            <Link 
              to="/contatti" 
              className="block w-full mt-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-center"
              onClick={handleLinkClick}
            >
              Preventivo Gratuito
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;