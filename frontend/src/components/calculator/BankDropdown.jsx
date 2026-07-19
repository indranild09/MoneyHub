import { useEffect, useState } from "react";
import { getBanks } from "../../api/bank.api";

function BankDropdown({ value, onChange }) {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    async function loadBanks() {
      try {
        const data = await getBanks();
        setBanks(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadBanks();
  }, []);

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
          <option
            key={bank.id}
            value={bank.shortName}
          >
            {bank.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BankDropdown;