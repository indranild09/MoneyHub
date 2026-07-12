function CalculatorResult({ result }) {

  if (!result) return null;

  return (
    <div className="mt-8 rounded-2xl bg-slate-100 p-6">

      <h3 className="text-xl font-bold mb-5">
        Estimated Returns
      </h3>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>Interest Earned</span>

          <span className="font-bold text-green-600">
            ₹{result.interest.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Maturity Amount</span>

          <span className="font-bold text-blue-600">
            ₹{result.maturity.toFixed(2)}
          </span>

        </div>

      </div>

    </div>
  );
}

export default CalculatorResult;