function DepositTypeToggle({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        Deposit Type
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="FD">Fixed Deposit</option>
        <option value="RD">Recurring Deposit</option>
      </select>
    </div>
  );
}

export default DepositTypeToggle;