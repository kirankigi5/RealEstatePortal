import { useState, useEffect } from "react";
import { Menu, X, Home, Building2, MapPin, Phone, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

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
        isScrolled ? 'dark-card-bg shadow-2xl' : 'dark-theme-bg shadow-xl'
      }`} 
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center premium-shadow">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Sankar Hill County</h1>
              <p className="text-sm text-gray-300 font-medium">by Dwaraka Developers</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Building2 className="w-4 h-4" />
              <span>{t('nav.projects')}</span>
            </button>
            <button 
              onClick={() => scrollToSection('amenities')} 
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>{t('nav.amenities')}</span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold hover:scale-105"
            >
              <MapPin className="w-4 h-4" />
              <span>{t('nav.gallery')}</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>{t('nav.contact')}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10 flex items-center space-x-1"
              aria-label="Toggle language"
            >
              <Languages size={18} className="md:hidden" />
              <Languages size={20} className="hidden md:block" />
              <span className="text-xs md:text-sm font-medium">{language.toUpperCase()}</span>
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="md:hidden" /> : <Moon size={18} className="md:hidden" />}
              {theme === 'dark' ? <Sun size={20} className="hidden md:block" /> : <Moon size={20} className="hidden md:block" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-amber-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-amber-500/20 dark-card-bg rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-amber-500/10"
              >
                <Building2 className="w-5 h-5" />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('amenities')} 
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-amber-500/10"
              >
                <Home className="w-5 h-5" />
                <span>Amenities</span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-amber-500/10"
              >
                <MapPin className="w-5 h-5" />
                <span>Gallery</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-500 transition-all duration-300 font-semibold text-left px-4 py-3 rounded-xl hover:bg-amber-500/10"
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
