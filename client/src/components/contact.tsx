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
      // Use latest deployed Google Apps Script Web App URL (GET method)
      const url = new URL("https://script.google.com/macros/s/AKfycbwX5DmMZ7Hxq7zBR_f8ffYPhVxVIPRQtEIE9jw-j5W8uhxSza0vpeALnVHUvTnLiaRH/exec");
      Object.entries(data).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
      const response = await fetch(url.toString(), {
        method: "GET",
      });
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
      console.error("Contact form error:", error);
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
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-white" data-aos="fade-up">
          {t('contact.title')} <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{t('contact.highlight')}</span>
        </h2>
        <p className="text-center mb-16 max-w-2xl mx-auto text-slate-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
          {t('contact.description')}
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Visit Us</h3>
                  <p className="leading-relaxed text-slate-600 dark:text-gray-300">
                    Ramalingeswara Nagar, Sankar Hill County,<br />
                    NTR Colony, Vinukonda - 522 647
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Call Us</h3>
                  <div className="space-y-2">
                    <a href="tel:+919492684972" className="block font-medium transition-colors text-slate-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                      +91 9492684972
                    </a>
                    <a href="tel:+918919894236" className="block font-medium transition-colors text-slate-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                      +91 8919894236
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Email Us</h3>
                  <a href="mailto:dwarakadevelopers6@gmail.com" className="font-medium transition-colors text-slate-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400">
                    dwarakadevelopers6@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">Office Hours</h3>
                  <p className="leading-relaxed text-slate-600 dark:text-gray-300">
                    Monday - Sunday<br />
                    <span className="font-semibold text-amber-500">9:00 AM - 7:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.8234567890123!2d79.7345678901234!3d15.8234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzI0LjQiTiA3OcKwNDQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-lg"
                title="Sankar Hill County Location"
              />
              <div className="mt-4 text-center">
                <a 
                  href="https://maps.app.goo.gl/DtNpzqRd1sos2Qud7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 premium-shadow" data-aos="fade-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Send us a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 Your Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-gray-300">
                  Interested In
                </label>
                <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2bhk">2 BHK Apartments</SelectItem>
                    <SelectItem value="3bhk">3 BHK Apartments</SelectItem>
                    <SelectItem value="plots">Open Plots</SelectItem>
                    <SelectItem value="all">All Projects</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 premium-shadow border-0 flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>{contactMutation.isPending ? "Sending..." : "Send Message"}</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
