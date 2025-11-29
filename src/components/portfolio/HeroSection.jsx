import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "AI & ML Engineer",
  "Cloud Enthusiast",
  "Problem Solver",
  "Data Science Explorer",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
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

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-start px-4 md:px-16 lg:px-24 pt-24"
    >
      <p className="text-sm md:text-base text-violet-400 mb-2">
        Hi, my name is
      </p>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
        Shashivardan Jarpati
      </h1>

      <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4">
        <span className="text-violet-400">Data Science Explorer</span> &nbsp;—{" "}
        <span className="border-b border-dotted border-violet-500">
          {displayText}
        </span>
      </h2>

      <p className="max-w-2xl text-slate-400 mb-6">
        I build intelligent solutions with AI &amp; Machine Learning, focusing
        on secure, privacy-preserving systems that solve real-world problems.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Button
          asChild
          className="px-6 py-2 rounded-full text-sm font-medium"
        >
          <a href="#projects">
            View My Work
            <ArrowDown className="inline-block ml-2 h-4 w-4" />
          </a>
        </Button>

        <Button
          variant="outline"
          asChild
          className="px-6 py-2 rounded-full border-slate-600 text-sm font-medium bg-transparent hover:bg-slate-900"
        >
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Shashivardan-Jarpati"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <Github size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/jarpati-shashivardan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-400 transition"
        >
          <Linkedin size={26} />
        </a>
        <a
          href="mailto:shashivardhan1602@gmail.com"
          className="hover:text-violet-400 transition"
        >
          <Mail size={26} />
        </a>
      </div>
    </section>
  );
}
