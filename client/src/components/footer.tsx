import { Facebook, Twitter, Instagram, Home, Mail, MapPin } from "lucide-react";

export default function Footer() {
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
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-emerald-900/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center premium-shadow">
                <img src="/favicon.ico" alt="Sankar Hill County" className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sankar Hill County</h3>
                <p className="text-gray-300 font-medium"><span className="text-xs text-gray-400">by</span> <span className="text-blue-400 font-bold text-lg">Dwaraka Developers</span></p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              Creating premium living spaces that blend luxury, comfort, and nature. 
              Your dream home awaits at Sankar Hill County - where excellence meets elegance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 premium-shadow"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 premium-shadow"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 premium-shadow"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-white">Contact Info</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  NTR Colony, Vinukonda<br />
                  Andhra Pradesh - 522 647
                </div>
              </div>
              <div className="space-y-2">
                <a href="tel:+919492684972" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-5 h-5 text-blue-400">📞</span>
                  <span>+91 9492684972</span>
                </a>
                <a href="tel:+918919894236" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-5 h-5 text-blue-400">📞</span>
                  <span>+91 8919894236</span>
                </a>
                <a href="mailto:dwarakadevelopers6@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <span className="w-5 h-5 text-blue-400">✉️</span>
                  <span>dwarakadevelopers6@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-lg">
              © 2025 Sankar Hill County. All rights reserved.
            </p>
            <p className="text-gray-400">
              Developed with excellence by <span className="text-blue-400 font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Dwaraka Developers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
