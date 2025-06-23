import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
                <p className={`${project.typeColor} font-semibold mb-1`}>{project.type}</p>
                <p className="text-gray-500 text-sm mb-3">Area: {project.area}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      className={`w-full bg-gradient-to-r ${project.gradient} text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform border-0`}
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
                        {project.name} - {project.type}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Project Image */}
                      <div className="w-full">
                        <img 
                          src={project.image} 
                          alt={`${project.name} exterior view`}
                          className="w-full rounded-lg shadow-lg"
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
                            className="w-full rounded-lg shadow-lg"
                          />
                        </div>
                      )}
                      
                      {/* Contact Information */}
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Interested in this project?</h4>
                        <p className="text-gray-600 mb-4">Contact our expert team for site visits and detailed information.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a 
                            href="tel:+919492684972" 
                            className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-sky-600 transition-colors"
                          >
                            Call Now: +91 9492684972
                          </a>
                          <a 
                            href="https://wa.me/919492684972" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
                          >
                            WhatsApp
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
