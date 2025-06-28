import { Building, Sun, Shield } from "lucide-react";
import { useLanguage } from "../contexts/language-context";
import layoutImage from "@assets/layout-full_1750707641457.png";

export default function MasterLayout() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/drone_masterlayout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white" data-aos="fade-up">
          {t('layout.title')} <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{t('layout.highlight')}</span>
        </h2>
        
        <div className="max-w-lg mx-auto mb-16" data-aos="zoom-in">
          <img 
            src={layoutImage} 
            alt="Sankar Hill County Layout Plan - Plot distribution and township design" 
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{t('layout.residential')}</h3>
            <p className="text-gray-300">
              Thoughtfully designed residential blocks with optimal spacing and privacy
            </p>
          </div>
          
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{t('layout.openSpaces')}</h3>
            <p className="text-gray-300">
              Abundant green spaces and recreational areas for a healthy lifestyle
            </p>
          </div>
          
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{t('layout.security')}</h3>
            <p className="text-gray-300">
              24/7 security with gated community features for complete peace of mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}