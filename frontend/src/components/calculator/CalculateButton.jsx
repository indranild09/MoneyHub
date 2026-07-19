function CalculateButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-xl bg-blue-600 p-4 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Calculating..." : "Calculate"}
    </button>
  );
}

export default CalculateButton;