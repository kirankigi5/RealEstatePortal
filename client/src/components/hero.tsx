import { ChevronDown, Star, Award, Shield } from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

export default function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();
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
    <section className="relative w-full h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/drone_morning.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional, for better text readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="flex justify-center items-center mb-4">
          {/* <span className="text-white font-semibold text-base md:text-lg">{t('hero.subtitle')}</span> */}
        </div>
        
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Premium Luxury Living
        </h1> */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-2 text-white drop-shadow-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Sankar Hill County
        </h2>
        <p className="text-lg md:text-2xl mb-2 text-white">
          A Premium Gated Township
        </p>
        <p className="mb-6">
          <span className="text-sm md:text-base text-gray-400">by</span> 
          <span className="text-4xl md:text-5xl font-bold text-amber-400 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent ml-2">Dwaraka Developers</span>
        </p>
        <p className="max-w-2xl mb-8">
          Experience luxury living in Vinukonda's most prestigious DTCP-approved gated community with world-class amenities and architectural excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 premium-shadow flex items-center space-x-2"
          >
            <Award className="w-5 h-5" />
            <span>Get in Touch</span>
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="dark-card-bg text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <Shield className="w-5 h-5" />
            <span>View Projects</span>
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">20+</div>
            <div className="text-sm md:text-base">Years Experience</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">500+</div>
            <div className="text-sm md:text-base">Happy Families</div>
          </div>
          <div className="hidden sm:block h-8 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">100%</div>
            <div className="text-sm md:text-base">DTCP Approved</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
