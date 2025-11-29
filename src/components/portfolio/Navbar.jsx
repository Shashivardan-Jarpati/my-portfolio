import React, { useState, useEffect } from "react";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ theme, setTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "bg-slate-950/80 backdrop-blur border-b border-slate-800" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo */}
        <a href="#home" className="font-semibold text-lg tracking-tight">
          <span className="text-violet-400">Shashi</span>
          <span className="text-slate-100">vardan</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-violet-400 transition"
            >
              {link.name}
            </a>
          ))}

          {/* Theme dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-violet-500 transition flex items-center justify-center">
                {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 w-32">
              <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resume button */}
          <Button
            asChild
            className="ml-3 flex items-center gap-2 text-sm px-4 py-2"
          >
            <a href="/Shashivardan_Resume.pdf" download>
              <Download size={16} />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle simple on mobile */}
          <button
            className="p-2 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center"
            onClick={() =>
              handleThemeChange(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="p-2 rounded-full border border-slate-700"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 flex items-center gap-2 text-sm px-4 py-2 w-full justify-center"
            >
              <a href="/Shashivardan_Resume.pdf" download>
                <Download size={16} />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
