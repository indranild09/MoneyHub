function AmountInput({ value, onChange }) {
  return (
    <div>
      <label className="block mb-2 font-semibold">
        Deposit Amount
      </label>

      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="100000"
        className="w-full rounded-xl border border-slate-300 p-4"
      />
    </div>
  );
}

export default AmountInput;