import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import About from "@/components/about";
import MasterLayout from "@/components/master-layout";
import Projects from "@/components/projects";
import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <MasterLayout />
      <Projects />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
