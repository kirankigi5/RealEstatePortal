import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919492684972', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors whatsapp-pulse z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </button>
  );
}
