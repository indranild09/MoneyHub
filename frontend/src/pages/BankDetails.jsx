import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBankDetails } from "../api/bankDetails.api";

function BankDetails() {
  const { shortName } = useParams();

  const [bank, setBank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBank() {
      try {
        const data = await getBankDetails(shortName);

        setBank(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadBank();
  }, [shortName]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl p-10">
        Loading...
      </div>
    );
  }

  if (!bank) {
    return (
      <div className="mx-auto max-w-7xl p-10">
        Bank not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-5xl font-bold">
        {bank.name}
      </h1>

      <p className="mt-3 text-slate-600">
        Short Name: {bank.shortName}
      </p>

      <a
        href={bank.website}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-cyan-700"
      >
        Visit Official Website
      </a>

    </div>
  );
}

export default BankDetails;