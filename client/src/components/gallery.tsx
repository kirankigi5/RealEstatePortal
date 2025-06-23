const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern apartment exterior with balconies",
    title: "Balaji Residency"
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Luxury swimming pool area",
    title: "Swimming Pool"
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Beautiful landscaped garden",
    title: "Landscaped Gardens"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern clubhouse interior",
    title: "Club House"
  },
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Children's playground area",
    title: "Children's Park"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern fitness center",
    title: "Fitness Center"
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
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
