import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getThemeIcon = () => {
    if (theme === 'light') return <Sun className="w-4 h-4" />;
    return <Moon className="w-4 h-4" />;
  };

  const scrollToSection = (href) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 py-3" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
          className="text-lg font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
        >
          Jarpati Shashivardan
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? "text-violet-400 bg-violet-500/10"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Theme Toggle & Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-full"
              >
                {getThemeIcon()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-slate-900 border-slate-800">
              <DropdownMenuItem onClick={() => setTheme('light')} className="text-slate-300 hover:text-white focus:text-white focus:bg-slate-800">
                <Sun className="w-4 h-4 mr-2" /> Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')} className="text-slate-300 hover:text-white focus:text-white focus:bg-slate-800">
                <Moon className="w-4 h-4 mr-2" /> Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6929ae9773d6792bf45c3f68/6102ae8dd_Shashivardan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="sm" 
              className="bg-violet-600 hover:bg-violet-500 text-white rounded-full px-5 gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={cn(
                "block w-full text-left px-4 py-3 rounded-xl transition-all",
                activeSection === link.href.slice(1)
                  ? "text-violet-400 bg-violet-500/10"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6929ae9773d6792bf45c3f68/6102ae8dd_Shashivardan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-violet-600 hover:bg-violet-500 text-white rounded-xl mt-2 gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}