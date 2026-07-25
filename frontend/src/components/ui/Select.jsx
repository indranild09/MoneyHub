function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 outline-none transition"
    >
      {children}
    </select>
  );
}

export default Select;