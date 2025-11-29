export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 transition text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}