import { Building, Sun, Shield } from "lucide-react";

export default function MasterLayout() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
          Master Layout <span className="text-green-600">Plan</span>
        </h2>
        
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Aerial view of residential township layout" 
              className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center pb-8">
              <p className="text-white text-xl font-semibold">Click to view detailed layout plan</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-sky-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Plots</h3>
              <p className="text-gray-600">Spacious open plots for custom home construction</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Green Spaces</h3>
              <p className="text-gray-600">Landscaped parks and recreational areas</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Security</h3>
              <p className="text-gray-600">24/7 gated community security system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
