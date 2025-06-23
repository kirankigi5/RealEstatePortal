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

const amenities = [
  { icon: Building, name: "Club House", description: "Community center for social gatherings", color: "bg-sky-500" },
  { icon: Sun, name: "Children's Park", description: "Safe play area for kids", color: "bg-green-600" },
  { icon: Calendar, name: "Function Hall", description: "Event space for celebrations", color: "bg-amber-500" },
  { icon: Zap, name: "Gym", description: "Modern fitness equipment", color: "bg-sky-500" },
  { icon: Bed, name: "Guest Rooms", description: "Accommodation for visitors", color: "bg-green-600" },
  { icon: Waves, name: "Swimming Pool", description: "Refreshing aquatic recreation", color: "bg-amber-500" },
  { icon: Video, name: "Mini Theater", description: "Private movie screening", color: "bg-sky-500" },
  { icon: Heart, name: "Yoga Zone", description: "Peaceful meditation space", color: "bg-green-600" },
  { icon: Lightbulb, name: "Solar Lights", description: "Eco-friendly illumination", color: "bg-amber-500" },
  { icon: Droplets, name: "Water Plant", description: "Pure water treatment facility", color: "bg-sky-500" },
  { icon: Shield, name: "Security", description: "24/7 gated community protection", color: "bg-green-600" },
  { icon: Battery, name: "Power Backup", description: "Uninterrupted electricity supply", color: "bg-amber-500" }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
          Premium <span className="text-green-600">Amenities</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Experience a lifestyle that combines comfort, convenience, and luxury with our comprehensive range of world-class amenities.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div 
                key={amenity.name}
                className={`text-center p-8 bg-white rounded-3xl premium-shadow card-hover float-animation`} 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 1)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 ${amenity.color} rounded-2xl flex items-center justify-center mx-auto mb-6 premium-shadow`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{amenity.name}</h3>
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
