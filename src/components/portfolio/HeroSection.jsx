import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const roles = [
  "AI & ML Engineer",
  "Cloud Enthusiast",
  "Problem Solver",
  "Data Science Explorer"
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background with Glowing Orbs */}
      <div className="absolute inset-0 bg-slate-950 overflow-hidden">
        {/* Left side glowing orb */}
        <div 
          className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px]"
          style={{ animation: 'pulseGlow 4s ease-in-out infinite' }}
        />
        {/* Right side glowing orb */}
        <div 
          className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-purple-600/25 rounded-full blur-[100px]"
          style={{ animation: 'pulseGlow 5s ease-in-out infinite 1s' }}
        />
        {/* Center subtle glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-[80px]"
          style={{ animation: 'pulseGlow 6s ease-in-out infinite 0.5s' }}
        />
        {/* Additional accent orbs */}
        <div 
          className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-violet-500/15 rounded-full blur-[80px]"
          style={{ animation: 'pulseGlow 7s ease-in-out infinite 2s' }}
        />
      </div>
      
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-slate-400 text-sm">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shashivardan
          </span>
        </h1>

        {/* Animated Role */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-6">
          <span className="text-2xl md:text-3xl text-slate-400 font-light">
            {displayText}
            <span className="inline-block w-0.5 h-7 bg-violet-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Bio */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building intelligent solutions with AI & Machine Learning. 
          Passionate about creating secure, privacy-preserving systems that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-violet-600 hover:bg-violet-500 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:scale-105"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/jarpati-shashivardan/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/Shashivardan-Jarpati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:shashivardhan1602@gmail.com"
            className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-violet-400 transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}