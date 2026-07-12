import banks from "../../data/banks";

function BankDropdown({ value, onChange }) {

  return (
    <div>

      <label className="block mb-2 font-semibold text-slate-700">
        Select Bank
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Choose a Bank</option>

        {banks.map((bank) => (
          <option key={bank.id} value={bank.name}>
            {bank.name}
          </option>
        ))}

      </select>

    </div>
  );
}

export default BankDropdown;