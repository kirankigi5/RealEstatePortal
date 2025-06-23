import { ChevronDown, Star, Award, Shield } from "lucide-react";

export default function Hero() {
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dark-theme-bg">
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
          <span className="text-white font-semibold">Premium Luxury Living</span>
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-wide">
          Sankar Hill County
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="h-px bg-white/50 w-16"></div>
          <p className="text-xl md:text-3xl text-white font-light italic">
            A Premium Gated Township by Dwaraka Developers
          </p>
          <div className="h-px bg-white/50 w-16"></div>
        </div>
        
        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Experience luxury living in Vinukonda's most prestigious DTCP-approved gated community with world-class amenities and architectural excellence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button 
            onClick={() => scrollToSection('contact')}
            className="gold-gradient text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 premium-shadow flex items-center space-x-2"
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
