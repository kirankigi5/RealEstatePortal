import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Balaji Residency",
    type: "2 BHK Apartments",
    description: "Thoughtfully designed 2BHK apartments with modern amenities and excellent ventilation.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Anjani Nivas",
    type: "3 BHK Apartments",
    description: "Spacious 3BHK homes with premium finishes and contemporary design elements.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "from-green-600 to-sky-500",
    typeColor: "text-green-600"
  },
  {
    name: "Lakshmi Nilayam",
    type: "2 & 3 BHK Apartments",
    description: "Versatile housing options with 2 & 3BHK configurations to suit every family size.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "gold-gradient",
    typeColor: "text-amber-500"
  },
  {
    name: "Gokulam",
    type: "2 & 3 BHK Apartments",
    description: "Beautiful apartments surrounded by lush gardens and recreational facilities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Sripada Enclave",
    type: "3 BHK Premium Flats",
    description: "Premium 3BHK flats with high-end specifications and luxury lifestyle amenities.",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "from-green-600 to-amber-500",
    typeColor: "text-green-600"
  },
  {
    name: "Sankar Nilayam",
    type: "3 BHK Spacious Flats",
    description: "Extra spacious 3BHK flats designed for large families with premium comfort.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    gradient: "gold-gradient",
    typeColor: "text-amber-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
          Our <span className="text-sky-500">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Discover our range of thoughtfully designed residential spaces, each crafted to provide the perfect blend of comfort and luxury.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <img 
                src={project.image} 
                alt={`${project.name} - ${project.type}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className={`${project.typeColor} font-semibold mb-3`}>{project.type}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button 
                  className={`w-full bg-gradient-to-r ${project.gradient} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform border-0`}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
