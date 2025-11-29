import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  Brain,
  Shield,
  Ambulance,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "Medical Emergency Prediction",
    icon: <Ambulance className="w-6 h-6 text-rose-400" />,
    description:
      "ML model to predict emergency department visits using historical health data.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Secure ML Pipeline",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    description:
      "End-to-end ML pipeline with data validation, monitoring, and secure deployment.",
    tech: ["FastAPI", "Docker", "MLflow"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "AI Powered Insights",
    icon: <Brain className="w-6 h-6 text-violet-400" />,
    description:
      "Analytics dashboard leveraging ML models to surface actionable business insights.",
    tech: ["React", "Vite", "Tailwind"],
    github: "https://github.com/",
    demo: "#",
  },
];

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState(null);

  return (
    <section id="projects" className="px-4 md:px-16 lg:px-24 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
          <ChevronRight className="text-violet-400" />
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="border border-slate-800 bg-slate-900/40 rounded-xl p-5 flex flex-col justify-between hover:border-violet-500/70 transition"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/70">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400 transition"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400 transition"
                  >
                    <ExternalLink size={22} />
                  </a>
                </div>

                <Button
                  variant="outline"
                  className="text-xs px-3 py-1 border-slate-600"
                  onClick={() => setOpenProject(idx)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details dialog */}
      <Dialog open={openProject !== null} onClose={() => setOpenProject(null)}>
        {openProject !== null && (
          <>
            <DialogHeader>
              <DialogTitle>{projects[openProject].title}</DialogTitle>
            </DialogHeader>
            <DialogContent>
              <p className="text-sm text-slate-200 mb-4">
                {projects[openProject].description}
              </p>
              <div className="flex gap-4">
                <a
                  href={projects[openProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-violet-400"
                >
                  <Github size={18} />
                  Code
                </a>
                <a
                  href={projects[openProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-violet-400"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}
