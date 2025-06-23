import { Trophy, Users, Building, Shield } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <div className="premium-gradient text-white rounded-3xl py-16 px-8 max-w-4xl mx-auto premium-shadow">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-4">20+</h2>
          <p className="text-2xl md:text-3xl font-light mb-12">Years of Excellence in Real Estate</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-white/90" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-lg opacity-90">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building className="w-8 h-8 text-white/90" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">15+</div>
              <div className="text-lg opacity-90">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield className="w-8 h-8 text-white/90" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-lg opacity-90">DTCP Approved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
