import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MasterLayout from "@/components/master-layout";
import Projects from "@/components/projects";
import Amenities from "@/components/amenities";
import Gallery from "@/components/gallery";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import LanguageSelector from "@/components/language-selector";
import { useTheme } from "../contexts/theme-context";

export default function Home() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark-theme-bg text-white' : 'light-theme-bg bg-white text-gray-900'}`}>
      <LanguageSelector />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Amenities />
      <Gallery />
      <MasterLayout />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
