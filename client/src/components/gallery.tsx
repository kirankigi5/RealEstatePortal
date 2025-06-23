import balajiImage from "@assets/balaji_1750707641456.png";
import anjaniImage from "@assets/anjani_1750707641455.jpg";
import lakshmiImage from "@assets/lakshmi_1750707641456.jpg";
import gokulamImage from "@assets/gokulam_1750707641456.jpg";
import sripadaImage from "@assets/sripada_1750707641458.jpg";
import sankarImage from "@assets/sankar_1750707641457.jpg";

const galleryImages = [
  {
    src: balajiImage,
    alt: "Balaji Residency - 2 BHK apartments with modern design",
    title: "Balaji Residency"
  },
  {
    src: anjaniImage,
    alt: "Anjani Nivas - 3 BHK apartments with contemporary styling",
    title: "Anjani Nivas"
  },
  {
    src: lakshmiImage,
    alt: "Lakshmi Nilayam - Luxury plots for gated community",
    title: "Lakshmi Nilayam"
  },
  {
    src: gokulamImage,
    alt: "Gokulam - 3 BHK apartments with modern amenities",
    title: "Gokulam"
  },
  {
    src: sripadaImage,
    alt: "Sripada Enclave - Premium 3 BHK flats with luxury finishes",
    title: "Sripada Enclave"
  },
  {
    src: sankarImage,
    alt: "Sankar Nilayam - Spacious 3 BHK flats for families",
    title: "Sankar Nilayam"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
          Project <span className="text-sky-500">Gallery</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Take a visual tour of our beautifully crafted spaces and premium amenities that define luxury living.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow group" 
              data-aos="fade-up" 
              data-aos-delay={100 * (index + 1)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover image-hover-effect"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
