import Hero from "../components/home/Hero";
import LatestRates from "../components/LatestRates";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl mb-4">🏦</div>
            <h3 className="text-xl font-bold">80+ Banks</h3>
            <p className="mt-3 text-slate-600">
              Compare FD & RD interest rates across leading Indian banks.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold">Real Calculations</h3>
            <p className="mt-3 text-slate-600">
              Accurate maturity calculations using current interest rates.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold">Instant Comparison</h3>
            <p className="mt-3 text-slate-600">
              Compare returns from multiple banks in seconds.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold">Reliable</h3>
            <p className="mt-3 text-slate-600">
              Built with enterprise-grade architecture and scalable APIs.
            </p>
          </div>

        </div>
      </section>

      <LatestRates />

      <Footer />
    </>
  );
}

export default Home;