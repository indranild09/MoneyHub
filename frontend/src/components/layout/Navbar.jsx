import { Link } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          <span className="text-slate-900">Money</span>
          <span className="text-blue-600">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">

          <Link
            to="/"
            className="hover:text-blue-600 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition duration-200"
          >
            FD Rates
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition duration-200"
          >
            RD Rates
          </Link>

          <Link
            to="/compare"
            className="hover:text-blue-600 transition duration-200"
          >
            Compare
          </Link>

          <Link
            to="/"
            className="hover:text-blue-600 transition duration-200"
          >
            Calculators
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button className="hidden md:flex w-11 h-11 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100 transition">
            <FiSearch size={20} />
          </button>

          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold shadow-md">
            Login
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200">
            <FiMenu size={22} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;