function CalculateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700 transition"
    >
      Calculate Returns
    </button>
  );
}

export default CalculateButton;