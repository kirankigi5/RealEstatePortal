import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Award, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useTheme } from "../contexts/theme-context";
import { useLanguage } from "../contexts/language-context";

export default function Contact() {
  const { toast } = useToast();
  const { theme } = useTheme();
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className={`py-20 ${theme === 'dark' ? 'dark-theme-bg' : 'bg-white dark:bg-gray-900'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800 dark:text-white'}`} data-aos="fade-up">
          {t('contact.title')} <span className="text-amber-500">{t('contact.highlight')}</span>
        </h2>
        <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300'}`} data-aos="fade-up" data-aos-delay="100">
          {t('contact.description')}
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="dark-card-bg rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ramalingeswara Nagar, Sankar Hill County,<br />
                    NTR Colony, Vinukonda - 522 647
                  </p>
                </div>
              </div>
            </div>

            <div className="dark-card-bg rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <div className="space-y-2">
                    <a href="tel:+919492684972" className="block text-gray-300 hover:text-amber-500 font-medium transition-colors">
                      +91 9492684972
                    </a>
                    <a href="tel:+918919894236" className="block text-gray-300 hover:text-amber-500 font-medium transition-colors">
                      +91 8919894236
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark-card-bg rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Office Hours</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Monday - Sunday<br />
                    <span className="font-semibold text-amber-400">9:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map on the right */}
          <div data-aos="fade-left" className="flex flex-col h-full justify-center">
            <div className="dark-card-bg rounded-3xl p-0 premium-shadow overflow-hidden">
              <iframe
                src="https://www.google.com/maps?&q=15.8234567890123,79.7345678901234&output=embed&t=k" width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl w-full"
                title="Sankar Hill County Location"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/DtNpzqRd1sos2Qud7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-500 hover:text-sky-600 font-medium"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
