function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </select>
  );
}

export default Select;