function LatestRates() {

  const rates = [
    { bank: "SBI", rate: "6.70%" },
    { bank: "HDFC", rate: "6.85%" },
    { bank: "Axis", rate: "6.90%" },
    { bank: "IDFC FIRST", rate: "7.25%" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Latest FD Interest Rates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {rates.map((bank) => (
          <div
            key={bank.bank}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold">
              {bank.bank}
            </h3>

            <p className="text-3xl text-blue-600 mt-4">
              {bank.rate}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default LatestRates;