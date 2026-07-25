import { useState } from "react";
import toast from "react-hot-toast";

import useCalculator from "../../hooks/useCalculator";

import BankDropdown from "./BankDropdown";
import DepositTypeToggle from "./DepositTypeToggle";
import AmountInput from "./AmountInput";
import TenureInput from "./TenureInput";
import CustomerType from "./CustomerType";
import CalculateButton from "./CalculateButton";
import CalculatorResult from "./CalculatorResult";
import ComparisonTable from "./ComparisonTable";

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

  const handleCalculate = async () => {
    if (!bank || !amount || !months) {
      toast.error("Please fill all required fields.");
      return;
    }

    await calculate({
      bank,
      depositType,
      customerType:
        customerType === "Regular" ? "GENERAL" : "SENIOR",
      amount: Number(amount),
      months: Number(months),
    });
  };

  const handleCompare = async () => {
    if (!amount || !months) {
      toast.error("Please fill all required fields.");
      return;
    }

    await compare({
      depositType,
      customerType:
        customerType === "Regular" ? "GENERAL" : "SENIOR",
      amount: Number(amount),
      months: Number(months),
    });
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-2xl backdrop-blur">

      {/* Header */}

      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
          Investment Calculator
        </span>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          FD & RD Calculator
        </h2>

        <p className="mt-3 text-slate-500">
          Calculate maturity amount instantly using the latest bank interest
          rates and compare returns across banks.
        </p>
      </div>

      {/* Form */}

      <div className="space-y-6">

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
          loading={loading}
          onClick={handleCalculate}
        />

        <button
          onClick={handleCompare}
          disabled={loading}
          className="w-full rounded-2xl border border-slate-300 bg-white py-4 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Comparing..." : "Compare All Banks"}
        </button>

      </div>

      {/* Result */}

      {result && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <CalculatorResult result={result} />
        </div>
      )}

      {/* Comparison */}

      {comparison?.length > 0 && (
        <div className="mt-8">
          <ComparisonTable comparison={comparison} />
        </div>
      )}

    </div>
  );
}

export default CalculatorCard;