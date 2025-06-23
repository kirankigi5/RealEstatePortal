import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header/Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.amenities': 'Amenities',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.subtitle': 'Premium Luxury Living',
    'hero.title': 'Sankar Hill County',
    'hero.description': 'A Premium Gated Township by Dwaraka Developers',
    'hero.cta': 'Explore Projects',
    
    // About Section
    'about.title': 'About',
    'about.highlight': 'Sankar Hill County',
    'about.description1': 'Sankar Hill County is a prestigious DTCP-approved gated community located in Ramalingeswara Nagar, NTR Colony, Vinukonda. Developed by Dwaraka Developers, the township features luxury apartments, open plots, landscaped parks, and a wide range of premium lifestyle amenities.',
    'about.description2': 'Our vision is to elevate your standard of living through thoughtfully designed spaces that blend modern comfort with natural beauty, creating a harmonious living environment for families.',
    'about.badge1': 'DTCP Approved',
    'about.badge2': 'Gated Community',
    'about.badge3': 'Premium Amenities',
    
    // Projects Section
    'projects.title': 'Our',
    'projects.highlight': 'Premium Projects',
    'projects.viewDetails': 'View Details',
    'projects.callNow': 'Call Now',
    'projects.whatsapp': 'WhatsApp',
    'projects.close': 'Close',
    'projects.projectImage': 'Project Image',
    'projects.floorPlan': 'Floor Plan',
    'projects.projectDetails': 'Project Details',
    'projects.type': 'Type:',
    'projects.area': 'Area:',
    
    // Amenities Section
    'amenities.title': 'Premium',
    'amenities.highlight': 'Amenities',
    
    // Gallery Section
    'gallery.title': 'Project',
    'gallery.highlight': 'Gallery',
    
    // Contact Section
    'contact.title': 'Get In',
    'contact.highlight': 'Touch',
    'contact.visitUs': 'Visit Us',
    'contact.callUs': 'Call Us',
    'contact.name': 'Name',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.interest': 'Interest',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    
    // Master Layout
    'layout.title': 'Master',
    'layout.highlight': 'Layout',
    'layout.residential': 'Residential Blocks',
    'layout.openSpaces': 'Open Spaces',
    'layout.security': 'Security & Safety',
    
    // Common
    'common.close': 'Close'
  },
  te: {
    // Header/Navigation
    'nav.home': 'హోమ్',
    'nav.projects': 'ప్రాజెక్టులు',
    'nav.amenities': 'సౌకర్యాలు',
    'nav.gallery': 'గ్యాలరీ',
    'nav.contact': 'సంప్రదింపులు',
    
    // Hero Section
    'hero.subtitle': 'ప్రీమియం లగ్జరీ లివింగ్',
    'hero.title': 'శంకర్ హిల్ కౌంటీ',
    'hero.description': 'ద్వారకా డెవలపర్స్ చేత ప్రీమియం గేటెడ్ టౌన్‌షిప్',
    'hero.cta': 'ప్రాజెక్టులను అన్వేషించండి',
    
    // About Section
    'about.title': 'గురించి',
    'about.highlight': 'శంకర్ హిల్ కౌంటీ',
    'about.description1': 'శంకర్ హిల్ కౌంటీ విను కొండ, ఎన్.టి.ఆర్ కాలనీ, రామలింగేశ్వర నగర్‌లో ఉన్న ప్రతిష్టాత్మక DTCP ఆమోదిత గేటెడ్ కమ్యూనిటీ. ద్వారకా డెవలపర్స్ అభివృద్ధి చేసిన ఈ టౌన్‌షిప్‌లో లగ్జరీ అపార్ట్‌మెంట్లు, ఓపెన్ ప్లాట్లు, ల్యాండ్‌స్కేప్డ్ పార్కులు మరియు ప్రీమియం లైఫ్‌స్టైల్ అమెనిటీలు ఉన్నాయి.',
    'about.description2': 'ఆధునిక సౌకర్యాలను సహజ అందంతో మిళితం చేసే ఆలోచనాపూర్వక రూపకల్పన చేసిన స్థలాల ద్వారా మీ జీవన ప్రమాణాలను పెంచడం మా లక్ష్యం.',
    'about.badge1': 'DTCP ఆమోదం',
    'about.badge2': 'గేటెడ్ కమ్యూనిటీ',
    'about.badge3': 'ప్రీమియం అమెనిటీలు',
    
    // Projects Section
    'projects.title': 'మా',
    'projects.highlight': 'ప్రీమియం ప్రాజెక్టులు',
    'projects.viewDetails': 'వివరాలు చూడండి',
    'projects.callNow': 'ఇప్పుడే కాల్ చేయండి',
    'projects.whatsapp': 'వాట్సాప్',
    'projects.close': 'మూసివేయండి',
    'projects.projectImage': 'ప్రాజెక్ట్ చిత్రం',
    'projects.floorPlan': 'ఫ్లోర్ ప్లాన్',
    'projects.projectDetails': 'ప్రాజెక్ట్ వివరాలు',
    'projects.type': 'రకం:',
    'projects.area': 'వైశాల్యం:',
    
    // Amenities Section
    'amenities.title': 'ప్రీమియం',
    'amenities.highlight': 'సౌకర్యాలు',
    
    // Gallery Section
    'gallery.title': 'ప్రాజెక్ట్',
    'gallery.highlight': 'గ్యాలరీ',
    
    // Contact Section
    'contact.title': 'సంప్రదించండి',
    'contact.highlight': '',
    'contact.visitUs': 'మాను సందర్శించండి',
    'contact.callUs': 'మాకు కాల్ చేయండి',
    'contact.name': 'పేరు',
    'contact.phone': 'ఫోన్',
    'contact.email': 'ఇమెయిల్',
    'contact.interest': 'ఆసక్తి',
    'contact.message': 'సందేశం',
    'contact.send': 'సందేశం పంపండి',
    
    // Master Layout
    'layout.title': 'మాస్టర్',
    'layout.highlight': 'లేఅవుట్',
    'layout.residential': 'రెసిడెన్షియల్ బ్లాక్‌లు',
    'layout.openSpaces': 'ఓపెన్ స్పేసెస్',
    'layout.security': 'భద్రత మరియు సురక్షితత్వం',
    
    // Common
    'common.close': 'మూసివేయండి'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'te' : 'en');
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}