import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Brain, Shield, Ambulance } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Deep Learning Fraud Detection",
    shortTitle: "Credit Card Fraud Detection",
    tagline: "Protecting financial transactions with AI",
    description: "A sophisticated deep learning ensemble model with data resampling techniques for detecting fraudulent credit card transactions.",
    fullDescription: `Built an advanced autoencoder-based fraud detection system that significantly improves the identification of fraudulent credit card transactions while maintaining the integrity and security of financial operations.

Key Achievements:
• Implemented autoencoder neural networks for anomaly detection
• Applied data resampling techniques to handle class imbalance
• Achieved high precision in identifying fraudulent patterns
• Contributed to financial transaction security research`,
    technologies: ["Python", "TensorFlow", "Deep Learning", "Data Resampling", "Neural Networks"],
    icon: Brain,
    color: "violet",
    impact: "Enhanced fraud detection accuracy"
  },
  {
    id: 2,
    title: "Privacy-Preserving ML",
    shortTitle: "Secure Machine Learning",
    tagline: "Learning from data without compromising privacy",
    description: "Implementation of privacy-preserving machine learning techniques ensuring data security while training models.",
    fullDescription: `Developed a privacy-preserving machine learning framework that enables models to learn from sensitive data without exposing individual information.

Technical Implementation:
• Differential Privacy: Adding calibrated noise to protect individual records
• Federated Learning: Training models across decentralized data sources
• Homomorphic Encryption: Performing computations on encrypted data
• Secure Multi-party Computation: Collaborative learning without data sharing

This project demonstrates how organizations can leverage AI while maintaining strict data privacy compliance.`,
    technologies: ["Python", "Federated Learning", "Differential Privacy", "Cryptography", "PyTorch"],
    icon: Shield,
    color: "purple",
    impact: "Enabled secure data collaboration"
  },
  {
    id: 3,
    title: "Ambulance Service Platform",
    shortTitle: "Emergency Response System",
    tagline: "Revolutionizing emergency medical services",
    description: "Comprehensive research and system design for modernizing ambulance service provision through technology.",
    fullDescription: `Conducted extensive research on ambulance service provision, analyzing the complex landscape of emergency medical services and proposing technological innovations.

Research Areas:
• Technological Innovation: GPS tracking, real-time dispatch optimization
• Workforce Management: Efficient resource allocation and scheduling
• Regulatory Frameworks: Compliance with healthcare regulations
• Patient-Centered Care: Improving response times and service quality

The project emphasizes the importance of integrating modern technology with healthcare services to save more lives.`,
    technologies: ["System Design", "Research", "Healthcare Tech", "Data Analysis", "Documentation"],
    icon: Ambulance,
    color: "pink",
    impact: "Improved emergency response efficiency"
  }
];

const colorMap = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    text: "text-violet-400",
    hover: "hover:border-violet-500/40",
    gradient: "from-violet-600/20 to-violet-600/5"
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hover: "hover:border-purple-500/40",
    gradient: "from-purple-600/20 to-purple-600/5"
  },
  pink: {
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    text: "text-pink-400",
    hover: "hover:border-pink-500/40",
    gradient: "from-pink-600/20 to-pink-600/5"
  }
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects & Research
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Exploring the frontiers of AI, security, and healthcare technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <div 
                key={project.id}
                className={`group bg-gradient-to-br ${colors.gradient} rounded-3xl p-6 border ${colors.border} ${colors.hover} transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-${project.color}-500/10`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <project.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm ${colors.text} mb-3`}>{project.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2.5 py-1 rounded-lg bg-slate-800/50 text-slate-500 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm text-slate-400 group-hover:text-violet-400 transition-colors">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-slate-900 border-slate-800 max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className={`w-14 h-14 rounded-2xl ${colorMap[selectedProject.color].bg} border ${colorMap[selectedProject.color].border} flex items-center justify-center mb-4`}>
                  <selectedProject.icon className={`w-7 h-7 ${colorMap[selectedProject.color].text}`} />
                </div>
                <DialogTitle className="text-2xl text-white">{selectedProject.title}</DialogTitle>
                <p className={`${colorMap[selectedProject.color].text}`}>{selectedProject.tagline}</p>
              </DialogHeader>

              <div className="space-y-6">
                <div className="prose prose-invert prose-sm max-w-none">
                  {selectedProject.fullDescription.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-400 whitespace-pre-line">{para}</p>
                  ))}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`px-3 py-1.5 rounded-lg ${colorMap[selectedProject.color].bg} ${colorMap[selectedProject.color].text} text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-xl ${colorMap[selectedProject.color].bg} border ${colorMap[selectedProject.color].border}`}>
                  <p className="text-sm text-slate-400">
                    <span className="font-medium text-white">Impact:</span> {selectedProject.impact}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}