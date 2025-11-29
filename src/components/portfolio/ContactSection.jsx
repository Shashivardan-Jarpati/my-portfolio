import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Download, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shashivardhan1602@gmail.com",
    href: "mailto:shashivardhan1602@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9550791910",
    href: "tel:+919550791910"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jarpati-shashivardan",
    href: "https://www.linkedin.com/in/jarpati-shashivardan/"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Telangana, India",
    href: null
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || '#'}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 transition-all ${
                      item.href ? 'hover:bg-slate-800/50 hover:border-violet-500/30 cursor-pointer' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Download Resume CTA */}
            <a
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6929ae9773d6792bf45c3f68/6102ae8dd_Shashivardan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:from-violet-500 hover:to-purple-500 transition-all hover:scale-[1.02] shadow-lg shadow-violet-500/25"
            >
              <Download className="w-5 h-5" />
              Download My Resume
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-slate-800/50">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 rounded-xl h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                  <Input
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 rounded-xl h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500 rounded-xl resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || submitted}
                  className={`w-full h-14 text-lg font-medium rounded-xl transition-all ${
                    submitted 
                      ? 'bg-green-600 hover:bg-green-600' 
                      : 'bg-violet-600 hover:bg-violet-500'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : submitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}