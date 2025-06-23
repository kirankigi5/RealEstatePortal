import { useState, useEffect } from "react";
import { Menu, X, Home, Building2, MapPin, Phone } from "lucide-react";

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
        isScrolled ? 'glass-effect shadow-2xl' : 'bg-white shadow-xl'
      }`} 
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center premium-shadow">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold premium-text">Sankar Hill County</h1>
              <p className="text-sm text-gray-600 font-medium">by Dwaraka Developers</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Building2 className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('amenities')} 
              className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>Amenities</span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="flex items-center space-x-2 text-gray-700 hover:text-amber-600 transition-all duration-300 font-semibold hover:scale-105"
            >
              <MapPin className="w-4 h-4" />
              <span>Gallery</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
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
          <div className="lg:hidden py-6 border-t border-gray-200/50 glass-effect rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-blue-50"
              >
                <Building2 className="w-5 h-5" />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('amenities')} 
                className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-emerald-50"
              >
                <Home className="w-5 h-5" />
                <span>Amenities</span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-amber-50"
              >
                <MapPin className="w-5 h-5" />
                <span>Gallery</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-blue-50"
              >
                <Phone className="w-5 h-5" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
