import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-white/95 shadow-lg' : 'bg-white shadow-lg'
      }`} 
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Sankar Hill County</h1>
              <p className="text-sm text-gray-600">by Dwaraka Developers</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('amenities')} 
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Amenities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-sky-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('amenities')} 
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Amenities
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
