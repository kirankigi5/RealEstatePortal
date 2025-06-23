import { ChevronDown } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Sankar Hill County
        </h1>
        <p className="text-xl md:text-2xl text-white mb-4 font-light">
          A Premium Gated Township by Dwaraka Developers
        </p>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Experience luxury living in Vinukonda's most prestigious DTCP-approved gated community
        </p>
        <button 
          onClick={() => scrollToSection('contact')}
          className="gold-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl"
        >
          Get in Touch
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
