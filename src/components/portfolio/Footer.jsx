import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/jarpati-shashivardan/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Shashivardan-Jarpati", label: "GitHub" },
  { icon: Mail, href: "mailto:shashivardhan1602@gmail.com", label: "Email" }
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div>
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
            >
              Shashivardan
            </a>
            <p className="text-slate-500 text-sm mt-2">
              AI & ML Engineer | Building intelligent solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-500 hover:text-violet-400 text-sm transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <p className="text-slate-500 text-sm text-center">
            © 2025 Shashivardan Jarpati
          </p>
        </div>
      </div>
    </footer>
  );
}