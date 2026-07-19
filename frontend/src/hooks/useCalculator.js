import { useState } from "react";
import toast from "react-hot-toast";

import { calculateReturns } from "../api/calculator.api";

export default function useCalculator() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const calculate = async (payload) => {
    try {
      setLoading(true);
      setResult(null);

      const data = await calculateReturns(payload);

      setResult(data);

      toast.success("Calculation completed successfully!");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
  };

  return {
    loading,
    result,
    calculate,
    reset,
  };
}