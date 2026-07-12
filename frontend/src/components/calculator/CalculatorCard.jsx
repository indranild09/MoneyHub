import { useState } from "react";
import getInterestRate from "../../utils/getInterestRate";
import BankDropdown from "./BankDropdown";
import DepositTypeToggle from "./DepositTypeToggle";
import AmountInput from "./AmountInput";
import TenureInput from "./TenureInput";
import CustomerType from "./CustomerType";
import CalculateButton from "./CalculateButton";
import CalculatorResult from "./CalculatorResult";

import { calculateFD, calculateRD } from "../../utils/calculator";

function CalculatorCard() {
  const [bank, setBank] = useState("");
  const [depositType, setDepositType] = useState("FD");
  const [customerType, setCustomerType] = useState("Regular");
  const [amount, setAmount] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    if (!amount || !months) {
      alert("Please enter amount and tenure");
      return;
    }
const rate = getInterestRate(
  bank,
  depositType,
  customerType,
  Number(months)
);

if (!rate) {
  alert("No interest rate found for this tenure.");
  return;
}
    // Temporary interest rate
    //const rate = customerType === "Senior Citizen" ? 7.5 : 7;

    if (depositType === "Fixed Deposit") {
      setResult(
        calculateFD(
          Number(amount),
          rate,
          Number(months)
        )
      );
    } else {
      setResult(
        calculateRD(
          Number(amount),
          rate,
          Number(months)
        )
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