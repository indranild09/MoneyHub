import CalculatorCard from "../calculator/CalculatorCard";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="text-white">

            <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300 border border-cyan-400/20">
              India's Smart FD & RD Calculator
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight">
              Compare
              <span className="text-cyan-400"> Bank Returns </span>
              in Seconds
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8">
              Instantly calculate FD and RD maturity amounts, compare returns
              from multiple banks, and choose the best investment option—all in
              one place.
            </p>

            <button className="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition">
              Start Calculating
            </button>

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">80+</h2>
                <p className="text-slate-400">Banks</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
                <p className="text-slate-400">Accurate</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">24×7</h2>
                <p className="text-slate-400">Available</p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
            <CalculatorCard />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;