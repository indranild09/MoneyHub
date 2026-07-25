import { useState } from "react";
import toast from "react-hot-toast";

import {
  calculateReturns,
  compareReturns,
} from "../api/calculator.api";

export default function useCalculator() {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [comparison, setComparison] = useState([]);

  const calculate = async (payload) => {
  try {
    console.log("Sending payload:", payload);

    setLoading(true);
    setResult(null);

    const data = await calculateReturns(payload);

    console.log("Response:", data);

    setResult(data);

    toast.success("Calculation completed successfully!");
  } catch (error) {
    console.log("Error Response:", error.response);

    toast.error(
      error.response?.data?.message ||
      "Something went wrong."
    );
  } finally {
    setLoading(false);
  }
};

  const compare = async (payload) => {
    try {
      setLoading(true);

      setComparison([]);

      const data = await compareReturns(payload);

      setComparison(data);

      toast.success("Comparison completed successfully!");
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
    setComparison([]);
  };

  return {
    loading,

    result,
    comparison,

    calculate,
    compare,

    reset,
  };
}