export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-3 py-2 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${className}`}
      {...props}
    />
  );
}