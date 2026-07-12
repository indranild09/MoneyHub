import { useState } from "react";

export default function useCalculator() {

  const [bank, setBank] = useState("");

  const [depositType, setDepositType] = useState("FD");

  const [customerType, setCustomerType] = useState("Regular");

  const [amount, setAmount] = useState("");

  const [months, setMonths] = useState("");

  const [result, setResult] = useState(null);

  return {
    bank,
    setBank,
    depositType,
    setDepositType,
    customerType,
    setCustomerType,
    amount,
    setAmount,
    months,
    setMonths,
    result,
    setResult,
  };
}