import { 
  Building, 
  Sun, 
  Calendar, 
  Zap, 
  Bed, 
  Waves, 
  Video, 
  Heart, 
  Lightbulb, 
  Droplets, 
  Shield, 
  Battery 
} from "lucide-react";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

const amenities = [
  { icon: Building, key: "clubhouse", description: "Community center for social gatherings", color: "bg-sky-500" },
  { icon: Sun, key: "playground", description: "Safe play area for kids", color: "bg-green-600" },
  { icon: Calendar, key: "function", description: "Event space for celebrations", color: "bg-amber-500" },
  { icon: Zap, key: "gym", description: "Modern fitness equipment", color: "bg-sky-500" },
  { icon: Bed, key: "guest", description: "Accommodation for visitors", color: "bg-green-600" },
  { icon: Waves, key: "pool", description: "Refreshing aquatic recreation", color: "bg-amber-500" },
  { icon: Video, key: "theater", description: "Private movie screening", color: "bg-sky-500" },
  { icon: Heart, key: "yoga", description: "Peaceful meditation space", color: "bg-green-600" },
  { icon: Lightbulb, key: "solar", description: "Eco-friendly illumination", color: "bg-amber-500" },
  { icon: Droplets, key: "water", description: "Pure water treatment facility", color: "bg-sky-500" },
  { icon: Shield, key: "security", description: "24/7 gated community protection", color: "bg-green-600" },
  { icon: Battery, key: "power", description: "Uninterrupted electricity supply", color: "bg-amber-500" }
];

export default function Amenities() {
  const { t } = useLanguage();

  return (
    <section id="amenities" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/drone_park.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" data-aos="fade-up">
          World-Class <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Amenities</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Experience a lifestyle that combines comfort, convenience, and luxury with our comprehensive range of world-class amenities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div 
                key={amenity.key}
                className="text-center p-8 dark-card-bg rounded-3xl premium-shadow card-hover float-animation" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 premium-shadow">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t(`amenities.${amenity.key}`)}</h3>
                <p className="text-gray-300 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
