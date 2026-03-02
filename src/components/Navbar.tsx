import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="py-6 relative z-50">
      <nav className="container-custom flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Counsailor Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">
            Counsailor
          </h1>
        </Link>

        {/* NAV-ITEMS — Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-medium transition-colors ${
                location.pathname === item.to
                  ? "text-orange-primary"
                  : "text-text-primary hover:text-orange-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Getting started + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="btn hidden md:block">Get started</button>
          <button
            className="md:hidden text-text-primary cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-bg-primary shadow-lg border-t border-black/5 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`font-medium text-lg transition-colors ${
                location.pathname === item.to
                  ? "text-orange-primary"
                  : "text-text-primary hover:text-orange-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button className="btn w-fit mt-2">Get started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;