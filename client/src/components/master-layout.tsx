import { useState } from "react";
import { Building, Sun, Shield, X } from "lucide-react";
import layoutImage from "@assets/layout-full_1750707641457.png";

export default function MasterLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white" data-aos="fade-up">
          Master <span className="text-amber-500">Layout</span>
        </h2>
        
        <div className="max-w-2xl mx-auto" data-aos="zoom-in">
          <div 
            className="relative group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={layoutImage} 
              alt="Sankar Hill County Layout Plan - Plot distribution and township design" 
              className="w-full rounded-2xl shadow-2xl image-hover-effect"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-8">
              <p className="text-white text-xl font-semibold">Click to view detailed layout plan</p>
            </div>
          </div>
          
          {/* Modal for expanded layout view */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="relative max-w-6xl max-h-[90vh] overflow-auto">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img 
                  src={layoutImage} 
                  alt="Sankar Hill County Layout Plan - Detailed View" 
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="200">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Residential Blocks</h3>
            <p className="text-gray-300">
              Thoughtfully designed residential blocks with optimal spacing and privacy
            </p>
          </div>
          
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="300">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Open Spaces</h3>
            <p className="text-gray-300">
              Abundant green spaces and recreational areas for a healthy lifestyle
            </p>
          </div>
          
          <div className="text-center p-6 dark-card-bg rounded-2xl premium-shadow" data-aos="fade-up" data-aos-delay="400">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Security & Safety</h3>
            <p className="text-gray-300">
              24/7 security with gated community features for complete peace of mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
