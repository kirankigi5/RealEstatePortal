import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'te';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// TypeScript fix: Explicitly type the translations object
const translations: Record<Language, Record<string, string>> = {
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
    'amenities.clubhouse': 'Club House',
    'amenities.playground': "Children's Park",
    'amenities.function': 'Function Hall',
    'amenities.gym': 'Gym',
    'amenities.guest': 'Guest Rooms',
    'amenities.pool': 'Swimming Pool',
    'amenities.theater': 'Mini Theater',
    'amenities.yoga': 'Yoga Zone',
    'amenities.solar': 'Solar Lights',
    'amenities.water': 'Water Plant',
    'amenities.security': 'Security',
    'amenities.power': 'Power Backup',
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
    'contact.description': 'Ready to make Sankar Hill County your new home? Contact our expert team for site visits, detailed information, and exclusive offers.',
    'contact.officeHours': 'Office Hours',
    'contact.mondayToSunday': 'Monday - Sunday',
    'contact.timing': '9:00 AM - 7:00 PM',
    'contact.viewOnMaps': 'View on Google Maps',
    'contact.sendMessage': 'Send us a Message',
    'contact.fullName': 'Full Name',
    'contact.yourName': 'Your Name',
    'contact.phoneNumber': 'Phone Number',
    'contact.yourNumber': '+91 Your Number',
    'contact.emailAddress': 'Email Address',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.interestedIn': 'Interested In',
    'contact.selectProject': 'Select Project Type',
    'contact.messagePlaceholder': 'Tell us about your requirements...',
    // Master Layout
    'layout.title': 'Master',
    'layout.highlight': 'Layout',
    'layout.residential': 'Residential Blocks',
    'layout.openSpaces': 'Open Spaces',
    'layout.security': 'Security & Safety',
    // Common
    'common.close': 'Close',
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': '© 2025 Sankar Hill County. All rights reserved.',
    'footer.developed': 'Developed with excellence by Dwaraka Developers',
    'footer.description': 'Creating premium living spaces that blend luxury, comfort, and nature. Your dream home awaits at Sankar Hill County - where excellence meets elegance.',
    // Hero Stats
    'hero.yearsExperience': 'Years Experience',
    'hero.happyFamilies': 'Happy Families',
    'hero.dtcpApproved': 'DTCP Approved',
    'hero.getInTouch': 'Get in Touch',
    'hero.viewProjects': 'View Projects'
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
    'about.title': 'శంకర్ హిల్ కౌంటీ',
    'about.highlight': 'గురించి',
    'about.description1': 'శంకర్ హిల్ కౌంటీ వినుకొండ, ఎన్.టి.ఆర్ కాలనీ, రామలింగేశ్వర నగర్‌లో ఉన్న ప్రతిష్టాత్మక DTCP ఆమోదిత గేటెడ్ కమ్యూనిటీ. ద్వారకా డెవలపర్స్ అభివృద్ధి చేసిన ఈ టౌన్‌షిప్‌లో లగ్జరీ అపార్ట్‌మెంట్లు, ఓపెన్ ప్లాట్లు, ల్యాండ్‌స్కేప్డ్ పార్కులు మరియు ప్రీమియం లైఫ్‌స్టైల్ అమెనిటీలు ఉన్నాయి.',
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
    'amenities.clubhouse': 'క్లబ్ హౌస్',
    'amenities.playground': 'పిల్లల ఆట స్థలం',
    'amenities.function': 'ఫంక్షన్ హాల్',
    'amenities.gym': 'జిమ్',
    'amenities.guest': 'అతిథి గదులు',
    'amenities.pool': 'స్విమ్మింగ్ పూల్',
    'amenities.theater': 'మినీ థియేటర్',
    'amenities.yoga': 'యోగా జోన్',
    'amenities.solar': 'సోలార్ లైట్లు',
    'amenities.water': 'వాటర్ ప్లాంట్',
    'amenities.security': 'భద్రత',
    'amenities.power': 'పవర్ బ్యాకప్',
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
    'contact.description': 'శంకర్ హిల్ కౌంటీని మీ కొత్త ఇల్లుగా మార్చుకోవాలనుకుంటున్నారా? సైట్ విజిట్లు, వివరమైన సమాచారం మరియు ప్రత్యేక ఆఫర్ల కోసం మా నిపుణుల బృందాన్ని సంప్రదించండి.',
    'contact.officeHours': 'కార్యాలయ సమయం',
    'contact.mondayToSunday': 'సోమవారం - ఆదివారం',
    'contact.timing': 'ఉదయం 9:00 - సాయంత్రం 7:00',
    'contact.viewOnMaps': 'గూగుల్ మ్యాప్స్‌లో చూడండి',
    'contact.sendMessage': 'మాకు సందేశం పంపండి',
    'contact.fullName': 'పూర్తి పేరు',
    'contact.yourName': 'మీ పేరు',
    'contact.phoneNumber': 'ఫోన్ నంబర్',
    'contact.yourNumber': '+91 మీ నంబర్',
    'contact.emailAddress': 'ఇమెయిల్ చిరునామా',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.interestedIn': 'ఆసక్తి ఉన్న ప్రాజెక్ట్',
    'contact.selectProject': 'ప్రాజెక్ట్ రకం ఎంచుకోండి',
    'contact.messagePlaceholder': 'మీ అవసరాల గురించి మాకు చెప్పండి...',
    // Master Layout
    'layout.title': 'మాస్టర్',
    'layout.highlight': 'లేఅవుట్',
    'layout.residential': 'రెసిడెన్షియల్ బ్లాక్‌లు',
    'layout.openSpaces': 'ఓపెన్ స్పేసెస్',
    'layout.security': 'భద్రత మరియు సురక్షితత్వం',
    // Common
    'common.close': 'మూసివేయండి',
    // Footer
    'footer.quickLinks': 'త్వరిత లింకులు',
    'footer.contactInfo': 'సంప్రదింపు వివరాలు',
    'footer.copyright': '© 2025 శంకర్ హిల్ కౌంటీ. అన్ని హక్కులు కలిగి ఉంది.',
    'footer.developed': 'ద్వారకా డెవలపర్స్ చేత అద్భుతంగా అభివృద్ధి చేయబడింది',
    'footer.description': 'లగ్జరీ, సౌకర్యం మరియు ప్రకృతిని మిళితం చేసే ప్రీమియం జీవన స్థలాలను సృష్టించడం. మీ కలల ఇల్లు శంకర్ హిల్ కౌంటీలో మిమ్మల్ని వేచి ఉంది - ఇక్కడ శ్రేష్ఠత మరియు మనోహరత కలుస్తాయి.',
    // Hero Stats
    'hero.yearsExperience': 'సంవత్సరాల అనుభవం',
    'hero.happyFamilies': 'సంతోషకరమైన కుటుంబాలు',
    'hero.dtcpApproved': 'DTCP ఆమోదం',
    'hero.getInTouch': 'సంప్రదించండి',
    'hero.viewProjects': 'ప్రాజెక్టులను చూడండి'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('te'); // Default to Telugu

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      // Set Telugu as default for new users
      setLanguage('te');
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
