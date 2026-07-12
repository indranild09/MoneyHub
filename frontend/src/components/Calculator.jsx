function Calculator() {
  return (
    <section className="max-w-7xl mx-auto px-6 -mt-16">
      <div className="bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold mb-8">
          Calculate Your Returns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Bank
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Select Bank</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Investment Type
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Fixed Deposit</option>
              <option>Recurring Deposit</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Customer Type
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Regular</option>
              <option>Senior Citizen</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Amount
            </label>

            <input
              type="number"
              placeholder="100000"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Tenure (Months)
            </label>

            <input
              type="number"
              placeholder="12"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="flex items-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded-lg font-semibold">
              Calculate
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Calculator;