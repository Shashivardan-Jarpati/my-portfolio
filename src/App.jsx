import React, { useEffect, useState } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Apply theme
    localStorage.setItem("portfolio-theme", theme);

    let effectiveTheme = theme;
    if (theme === "system") {
      effectiveTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList.toggle(
      "light-theme",
      effectiveTheme === "light"
    );
  }, [theme]);

  useEffect(() => {
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Custom Scrollbar Styles & Theme Support */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
          background: #334155;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #475569;
        }

        /* Selection Colors */
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: white;
        }

        /* Smooth animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Light Theme Overrides */
        .light-theme {
          --bg-primary: #f8fafc;
          --bg-secondary: #f1f5f9;
          --text-primary: #0f172a;
          --text-secondary: #475569;
          --border-color: #e2e8f0;
        }

        .light-theme .bg-slate-950 {
          background-color: #f8fafc !important;
        }
        .light-theme .bg-slate-900 {
          background-color: #f1f5f9 !important;
        }
        .light-theme .bg-slate-900\\/50 {
          background-color: rgba(241, 245, 249, 0.5) !important;
        }
        .light-theme .bg-slate-800 {
          background-color: #e2e8f0 !important;
        }
        .light-theme .bg-slate-800\\/50 {
          background-color: rgba(226, 232, 240, 0.5) !important;
        }
        .light-theme .bg-slate-800\\/30 {
          background-color: rgba(226, 232, 240, 0.3) !important;
        }
        .light-theme .text-white {
          color: #0f172a !important;
        }
        .light-theme .text-slate-400 {
          color: #64748b !important;
        }
        .light-theme .text-slate-500 {
          color: #64748b !important;
        }
        .light-theme .text-slate-300 {
          color: #475569 !important;
        }
        .light-theme .border-slate-800 {
          border-color: #e2e8f0 !important;
        }
        .light-theme .border-slate-800\\/50 {
          border-color: rgba(226, 232, 240, 0.5) !important;
        }
        .light-theme .border-slate-700 {
          border-color: #cbd5e1 !important;
        }
        .light-theme .border-slate-700\\/50 {
          border-color: rgba(203, 213, 225, 0.5) !important;
        }
        .light-theme .from-slate-900 {
          --tw-gradient-from: #f1f5f9 !important;
        }
        .light-theme .to-slate-900\\/50 {
          --tw-gradient-to: rgba(241, 245, 249, 0.5) !important;
        }
        .light-theme ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .light-theme ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
        }
      `}</style>

      {/* Navigation */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;