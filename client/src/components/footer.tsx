import { Facebook, Twitter, Instagram } from "lucide-react";

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
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sankar Hill County</h3>
                <p className="text-gray-300 text-sm">by Dwaraka Developers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating premium living spaces that blend luxury, comfort, and nature. 
              Your dream home awaits at Sankar Hill County.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
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
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+91 9492684972</li>
              <li>+91 8919894236</li>
              <li>NTR Colony, Vinukonda</li>
              <li>Andhra Pradesh - 522 647</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Sankar Hill County. All rights reserved. Developed by Dwaraka Developers
          </p>
        </div>
      </div>
    </footer>
  );
}
