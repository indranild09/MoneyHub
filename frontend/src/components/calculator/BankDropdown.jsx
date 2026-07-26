import { useEffect, useState } from "react";
import { getBanks } from "../../api/bank.api";
import SearchableDropdown from "../ui/SearchableDropdown";

function BankDropdown({ value, onChange }) {
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    async function loadBanks() {
      try {
        const data = await getBanks();

        const formattedBanks = data.map((bank) => ({
  value: bank.shortName,
  label: bank.name,
  logoUrl: bank.logoUrl,
  website: bank.website,
  id: bank.id,
}));

        setBanks(formattedBanks);
      } catch (error) {
        console.error(error);
      }
    }

    loadBanks();
  }, []);

  return (
    <div>
      <label className="mb-2 block font-semibold text-slate-700">
        Select Bank
      </label>

      <SearchableDropdown
        options={banks}
        value={value}
        onChange={onChange}
        placeholder="Search a bank..."
      />
    </div>
  );
}

export default BankDropdown;