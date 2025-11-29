import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// src/components/ui/dropdown-menu.jsx
import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext(null);

export function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block text-left">{children}</div>
    </DropdownContext.Provider>
  );
}

export function DropdownMenuTrigger({ children, asChild, ...props }) {
  const { open, setOpen } = useContext(DropdownContext);

  const handleClick = () => setOpen(!open);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      ...props,
    });
  }

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, className = "" }) {
  const { open } = useContext(DropdownContext);

  if (!open) return null;

  return (
    <div
      className={`absolute right-0 mt-2 w-40 rounded-md bg-slate-900 border border-slate-700 shadow-lg p-2 z-50 ${className}`}
    >
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, className = "", ...props }) {
  return (
    <button
      className={`block w-full text-left px-2 py-1 rounded hover:bg-slate-800 text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}