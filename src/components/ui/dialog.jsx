import React from "react";

export function Dialog({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 text-white p-6 rounded-lg max-w-lg w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="mb-3 text-xl font-semibold">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-2xl font-bold mb-1">{children}</h2>;
}