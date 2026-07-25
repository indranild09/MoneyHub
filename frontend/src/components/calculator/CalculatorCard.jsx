import { useState } from "react";
import ComparisonTable from "./ComparisonTable";
import BankDropdown from "./BankDropdown";
import DepositTypeToggle from "./DepositTypeToggle";
import AmountInput from "./AmountInput";
import TenureInput from "./TenureInput";
import CustomerType from "./CustomerType";
import CalculateButton from "./CalculateButton";
import CalculatorResult from "./CalculatorResult";
import toast from "react-hot-toast";
import useCalculator from "../../hooks/useCalculator";

function CalculatorCard() {
  const [bank, setBank] = useState("");
  const [depositType, setDepositType] = useState("FD");
  const [customerType, setCustomerType] = useState("Regular");
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");
const {
  loading,
  result,
  comparison,
  calculate,
  compare,
} = useCalculator();
const handleCompare = async () => {
  if (!amount || !months) {
    toast.error("Please fill all required fields.");
    return;
  }

  await compare({
    depositType,
    customerType:
      customerType === "Regular"
        ? "GENERAL"
        : "SENIOR",
    amount: Number(amount),
    months: Number(months),
  });
};
const handleCalculate = async () => {
  if (!bank || !amount || !months) {
    toast.error("Please fill all required fields.");
    return;
  }

  await calculate({
    bank,
    depositType,
    customerType:
      customerType === "Regular"
        ? "GENERAL"
        : "SENIOR",
    amount: Number(amount),
    months: Number(months),
  });
};
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white p-8">

      <h2 className="text-2xl font-bold">
        Quick Calculator
      </h2>

      <p className="text-slate-500 mt-2">
        Compare returns instantly.
      </p>

      <div className="mt-8 space-y-5">

        <BankDropdown
          value={bank}
          onChange={setBank}
        />

        <DepositTypeToggle
          value={depositType}
          onChange={setDepositType}
        />

        <AmountInput
          value={amount}
          onChange={setAmount}
        />

        <TenureInput
          value={months}
          onChange={setMonths}
        />

        <CustomerType
          value={customerType}
          onChange={setCustomerType}
        />

        <CalculateButton
          onClick={handleCalculate}
          loading={loading}
        />

        <button
  onClick={handleCompare}
  disabled={loading}
  className="w-full rounded-xl border border-blue-600 bg-white py-3 px-4 font-semibold text-blue-600 transition hover:bg-blue-50 disabled:opacity-50"
>
  {loading ? "Comparing..." : "Compare All Banks"}
</button>

      </div>

      <CalculatorResult result={result} />
      <ComparisonTable comparison={comparison} />
    </div>
  );
}

export default CalculatorCard;