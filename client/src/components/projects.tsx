import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Eye, Home, Ruler, MapPin, Phone, MessageCircle, Star, Award } from "lucide-react";
import { useTheme } from "../contexts/theme-context";

import balajiImage from "@assets/balaji_1750707641456.png";
import anjaniImage from "@assets/anjani_1750707641455.jpg";
import lakshmiImage from "@assets/lakshmi_1750707641456.jpg";
import gokulamImage from "@assets/gokulam_1750707641456.jpg";
import sripadaImage from "@assets/sripada_1750707641458.jpg";
import sankarImage from "@assets/sankar_1750707641457.jpg";

import balajiFloorplan from "@assets/balaji-floorplan_1750707641456.png";
import anjaniFloorplan from "@assets/anjani-floorplan_1750707641455.png";
import lakshmiFloorplan from "@assets/lakshmi-floorplan_1750707641457.png";
import gokulamFloorplan from "@assets/gokulam-floorplan_1750707641456.png";
import sankarFloorplan from "@assets/sankar-floorplan_1750707641457.png";

const projects = [
  {
    name: "Balaji Residency",
    type: "2 BHK Apartments",
    description: "Brighten your Life in a Prestigious Home... DTCP approved with modern amenities and excellent ventilation.",
    image: balajiImage,
    floorplan: balajiFloorplan,
    area: "1421 Sq.ft",
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Anjani Nivas",
    type: "3 BHK Apartments",
    description: "Elevate your Lifestyle... Premium 3BHK apartments with contemporary design by Atharva Infra.",
    image: anjaniImage,
    floorplan: anjaniFloorplan,
    area: "1815 Sq.ft",
    gradient: "from-green-600 to-sky-500",
    typeColor: "text-green-600"
  },
  {
    name: "Lakshmi Nilayam",
    type: "2 & 3 BHK Plots",
    description: "Luxury Plots for Gated Community - Versatile options with 2 & 3BHK configurations by Dwaraka Developers.",
    image: lakshmiImage,
    floorplan: lakshmiFloorplan,
    area: "1365-1883 Sq.ft",
    gradient: "gold-gradient",
    typeColor: "text-amber-500"
  },
  {
    name: "Gokulam",
    type: "3 BHK Apartments",
    description: "Add Luxury to your Life... Beautiful 3BHK apartments with modern amenities by Vasavi Builders.",
    image: gokulamImage,
    floorplan: gokulamFloorplan,
    area: "2100-2171 Sq.ft",
    gradient: "from-sky-500 to-green-600",
    typeColor: "text-sky-500"
  },
  {
    name: "Sripada Enclave",
    type: "3 BHK Premium Flats",
    description: "Add Luxury to your Life... Premium 3BHK flats with high-end specifications by Munukuru Infra.",
    image: sripadaImage,
    floorplan: null, // No floorplan image provided for Sripada
    area: "Premium Configuration",
    gradient: "from-green-600 to-amber-500",
    typeColor: "text-green-600"
  },
  {
    name: "Sankar Nilayam",
    type: "3 BHK Spacious Flats",
    description: "Extra spacious 3BHK flats designed for large families with premium comfort by Ista Homes.",
    image: sankarImage,
    floorplan: sankarFloorplan,
    area: "2030 Sq.ft",
    gradient: "gold-gradient",
    typeColor: "text-amber-500"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 dark-theme-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white" data-aos="fade-up">
          Our <span className="text-amber-500">Projects</span>
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Discover our range of thoughtfully designed residential spaces, each crafted to provide the perfect blend of comfort and luxury.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="dark-card-bg rounded-3xl premium-shadow overflow-hidden card-hover" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.name} - ${project.type}`} 
                  className="w-full h-56 object-cover image-hover-effect"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-700">{project.area}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <Home className="w-4 h-4 text-amber-400" />
                  <p className="text-amber-400 font-semibold">{project.type}</p>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Ruler className="w-4 h-4 text-amber-300" />
                  <p className="text-gray-400 text-sm">Area: {project.area}</p>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full gold-gradient text-white py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 border-0 premium-shadow flex items-center justify-center space-x-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Details</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-bold premium-text mb-2">
                        {project.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-600 font-medium">
                        {project.type} • {project.area} • DTCP Approved
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Project Image */}
                      <div className="w-full">
                        <img 
                          src={project.image} 
                          alt={`${project.name} exterior view`}
                          className="w-full rounded-lg shadow-lg grayscale-hover"
                        />
                      </div>
                      
                      {/* Project Info */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Details</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li><strong>Type:</strong> {project.type}</li>
                            <li><strong>Area:</strong> {project.area}</li>
                            <li><strong>Status:</strong> DTCP Approved</li>
                            <li><strong>Location:</strong> Vinukonda, Andhra Pradesh</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                          <p className="text-gray-600">{project.description}</p>
                        </div>
                      </div>
                      
                      {/* Floor Plan */}
                      {project.floorplan && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Floor Plan</h4>
                          <img 
                            src={project.floorplan} 
                            alt={`${project.name} floor plan`}
                            className="w-full rounded-lg shadow-lg grayscale-hover"
                          />
                        </div>
                      )}
                      
                      {/* Contact Information */}
                      <div className="gold-gradient p-8 rounded-2xl text-white">
                        <div className="flex items-center space-x-3 mb-4">
                          <Award className="w-6 h-6" />
                          <h4 className="text-xl font-bold">Interested in this project?</h4>
                        </div>
                        <p className="text-white/90 mb-6 text-lg">Contact our expert team for site visits, detailed information, and exclusive offers.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <a 
                            href="tel:+919492684972" 
                            className="bg-white text-amber-600 px-6 py-4 rounded-xl font-bold text-center hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 premium-shadow"
                          >
                            <Phone className="w-5 h-5" />
                            <span>Call: +91 9492684972</span>
                          </a>
                          <a 
                            href="https://wa.me/919492684972" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 premium-shadow"
                          >
                            <MessageCircle className="w-5 h-5" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
