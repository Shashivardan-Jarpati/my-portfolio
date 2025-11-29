import React from 'react';
import { Award, ExternalLink, Cloud, Brain, Database, Code, Network } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    icon: Brain,
    color: "amber",
    featured: true
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    icon: Brain,
    color: "violet",
    featured: true
  },
  {
    title: "Data Science Professional",
    issuer: "Oracle Cloud Infrastructure",
    icon: Database,
    color: "purple",
    featured: true
  },
  {
    title: "Introduction to AI Concepts",
    issuer: "Microsoft",
    icon: Brain,
    color: "cyan"
  },
  {
    title: "AI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    icon: Brain,
    color: "pink"
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    icon: Cloud,
    color: "amber"
  },
  {
    title: "AWS Networking Basics",
    issuer: "Amazon Web Services",
    icon: Network,
    color: "amber"
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Forage - JPMorgan Chase & Co.",
    icon: Code,
    color: "emerald"
  },
  {
    title: "GenAI Powered Data Analytics",
    issuer: "Forage",
    icon: Database,
    color: "violet"
  }
];

const colorMap = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    shadow: "shadow-amber-500/20"
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    shadow: "shadow-violet-500/20"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    shadow: "shadow-purple-500/20"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    shadow: "shadow-cyan-500/20"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    shadow: "shadow-pink-500/20"
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    shadow: "shadow-emerald-500/20"
  }
};

export default function CertificationsSection() {
  const featured = certifications.filter(c => c.featured);
  const others = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="py-24 md:py-32 bg-slate-900/50 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in AI, ML, Cloud, and Software Engineering
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              9+
            </div>
            <div className="text-slate-500 text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              3
            </div>
            <div className="text-slate-500 text-sm">AWS Credentials</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              3
            </div>
            <div className="text-slate-500 text-sm">Oracle Certified</div>
          </div>
        </div>

        {/* Featured Certifications */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Featured</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {featured.map((cert, index) => {
              const colors = colorMap[cert.color];
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-2xl p-6 border ${colors.border} hover:shadow-lg ${colors.shadow} transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <cert.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-violet-300 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-slate-500 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800/50">
                    <div className="flex items-center gap-2">
                      <Award className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-xs text-slate-500">Professional Certification</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">All Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {others.map((cert, index) => {
              const colors = colorMap[cert.color];
              return (
                <div 
                  key={index}
                  className={`group flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
                >
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                    <cert.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-white text-sm truncate">{cert.title}</h4>
                    <p className="text-slate-500 text-xs truncate">{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}