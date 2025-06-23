import { Button } from "@/components/ui/button";

import balajiImage from "@assets/balaji_1750707641456.png";
import anjaniImage from "@assets/anjani_1750707641455.jpg";
import lakshmiImage from "@assets/lakshmi_1750707641456.jpg";
import gokulamImage from "@assets/gokulam_1750707641456.jpg";
import sripadaImage from "@assets/sripada_1750707641458.jpg";
import sankarImage from "@assets/sankar_1750707641457.jpg";

const projects = [
  {
    name: "Balaji Residency",
    type: "2 BHK Apartments",
    description: "Brighten your Life in a Prestigious Home... DTCP approved with modern amenities and excellent ventilation.",
    image: balajiImage,
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Anjani Nivas",
    type: "3 BHK Apartments",
    description: "Elevate your Lifestyle... Premium 3BHK apartments with contemporary design by Atharva Infra.",
    image: anjaniImage,
    gradient: "from-green-600 to-sky-500",
    typeColor: "text-green-600"
  },
  {
    name: "Lakshmi Nilayam",
    type: "2 & 3 BHK Plots",
    description: "Luxury Plots for Gated Community - Versatile options with 2 & 3BHK configurations by Dwaraka Developers.",
    image: lakshmiImage,
    gradient: "gold-gradient",
    typeColor: "text-amber-500"
  },
  {
    name: "Gokulam",
    type: "3 BHK Apartments",
    description: "Add Luxury to your Life... Beautiful 3BHK apartments with modern amenities by Vasavi Builders.",
    image: gokulamImage,
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Sripada Enclave",
    type: "3 BHK Premium Flats",
    description: "Add Luxury to your Life... Premium 3BHK flats with high-end specifications by Munukuru Infra.",
    image: sripadaImage,
    gradient: "from-green-600 to-amber-500",
    typeColor: "text-green-600"
  },
  {
    name: "Sankar Nilayam",
    type: "3 BHK Spacious Flats",
    description: "Extra spacious 3BHK flats designed for large families with premium comfort by Ista Homes.",
    image: sankarImage,
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
