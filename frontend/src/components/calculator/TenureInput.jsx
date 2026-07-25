function TenureInput({ value, onChange }) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-700">
        Tenure (Months)
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="12"
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
      />
    </div>
  );
}

export default TenureInput;