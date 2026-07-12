import CalculatorCard from "../calculator/CalculatorCard";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">

            {/* Background Blur */}
            <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Section */}
                    <div>

                        <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                            🇮🇳 Compare 80+ Indian Banks
                        </span>

                        <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
                            Find the
                            <span className="text-blue-600"> Highest </span>
                            Deposit Returns.
                        </h1>

                        <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
                            Compare Fixed Deposit and Recurring Deposit interest rates across
                            India's leading banks with live rates and instant calculations.
                        </p>

                        <div className="mt-10 flex gap-4 flex-wrap">

                            <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl text-white font-semibold shadow-lg">
                                Start Comparing
                            </button>

                            <button className="border border-slate-300 hover:bg-white px-8 py-4 rounded-2xl font-semibold">
                                Explore Rates
                            </button>

                        </div>

                        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">80+</h2>
                                <p className="text-slate-500">Banks</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Daily</h2>
                                <p className="text-slate-500">Updates</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">100%</h2>
                                <p className="text-slate-500">Free</p>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">Instant</h2>
                                <p className="text-slate-500">Results</p>
                            </div>

                        </div>

                    </div>

                    {/* Right Section */}



                </div>

            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div>
                    {/* Left Content */}
                </div>

                <div className="flex justify-center">
                    <CalculatorCard />
                </div>

            </div>
        </section>
    );
}

export default Hero;