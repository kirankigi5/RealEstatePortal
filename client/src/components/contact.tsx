import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Award, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
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
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800" data-aos="fade-up">
          Get in <span className="text-green-600">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Ready to make Sankar Hill County your new home? Contact our expert team for site visits, detailed information, and exclusive offers.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="bg-white rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 sapphire-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ramalingeswara Nagar, Sankar Hill County,<br />
                    NTR Colony, Vinukonda - 522 647
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 emerald-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                  <div className="space-y-2">
                    <a href="tel:+919492684972" className="block text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                      +91 9492684972
                    </a>
                    <a href="tel:+918919894236" className="block text-gray-600 hover:text-emerald-600 font-medium transition-colors">
                      +91 8919894236
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 premium-shadow card-hover">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 gold-gradient rounded-2xl flex items-center justify-center flex-shrink-0 premium-shadow">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Office Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Sunday<br />
                    <span className="font-semibold text-gray-700">9:00 AM - 7:00 PM</span>
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
                  className="inline-flex items-center text-sky-500 hover:text-sky-600 font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 premium-shadow" data-aos="fade-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 premium-gradient rounded-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold premium-text">Send us a Message</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
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
                className="w-full premium-gradient text-white py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 premium-shadow border-0 flex items-center justify-center space-x-3"
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
