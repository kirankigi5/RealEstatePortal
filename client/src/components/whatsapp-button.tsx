import whatsappIcon from "@assets/whatsapp-icon_1750710742263.png";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919492684972"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 whatsapp-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-contain"
      />
    </a>
  );
}
