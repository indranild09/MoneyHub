import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Calculator", href: "#calculator" },
    { label: "Latest Rates", href: "#rates" },
    { label: "Compare", href: "#compare" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-bold text-xl">
            ₹
          </div>

          <div>
            <h1 className="text-white font-bold text-xl">
              MoneyHub
            </h1>

            <p className="text-xs text-slate-400">
              Compare • Invest • Grow
            </p>
          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* GitHub Button */}

        <div className="hidden md:flex items-center gap-4">
          <button className="rounded-xl bg-cyan-500 px-5 py-2.5 text-white font-semibold hover:bg-cyan-400 transition">
            GitHub
          </button>
        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-white/10">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}

            <button className="rounded-xl bg-cyan-500 py-3 font-semibold">
              GitHub
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Navbar;