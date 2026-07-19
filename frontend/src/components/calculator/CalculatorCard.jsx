import { useState } from "react";

import BankDropdown from "./BankDropdown";
import DepositTypeToggle from "./DepositTypeToggle";
import AmountInput from "./AmountInput";
import TenureInput from "./TenureInput";
import CustomerType from "./CustomerType";
import CalculateButton from "./CalculateButton";
import CalculatorResult from "./CalculatorResult";

import { calculateReturns } from "../../api/calculator.api";

function CalculatorCard() {
  const [bank, setBank] = useState("");
  const [depositType, setDepositType] = useState("FD");
  const [customerType, setCustomerType] = useState("Regular");
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
  if (!bank || !amount || !months) {
    alert("Please fill all required fields.");
    return;
  }

  try {
    const result = await calculateReturns({
      bank,
      depositType: depositType === "FD" ? "FD" : "RD",
      customerType:
        customerType === "Regular" ? "GENERAL" : "SENIOR",
      amount: Number(amount),
      months: Number(months),
    });

    setResult(result);
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Something went wrong."
    );
  }
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
        />

      </div>

      <CalculatorResult result={result} />

    </div>
  );
}

export default CalculatorCard;