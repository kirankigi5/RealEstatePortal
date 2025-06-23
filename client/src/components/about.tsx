export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800" data-aos="fade-up">
            About <span className="text-sky-500">Sankar Hill County</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern gated community with landscaped gardens" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div data-aos="fade-left">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sankar Hill County is a prestigious <strong className="text-green-600">DTCP-approved gated community</strong> 
                located in Ramalingeswara Nagar, NTR Colony, Vinukonda. Developed by Dwaraka Developers, 
                the township features luxury apartments, open plots, landscaped parks, and a wide range of 
                premium lifestyle amenities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our vision is to <strong className="text-sky-500">elevate your standard of living</strong> 
                through thoughtfully designed spaces that blend modern comfort with natural beauty, 
                creating a harmonious living environment for families.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium">DTCP Approved</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
                  <span className="text-sm font-medium">Gated Community</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                  <span className="text-sm font-medium">Premium Amenities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
