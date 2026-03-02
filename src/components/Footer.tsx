import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
];

const Footer = () => {
  return (
    <footer className="bg-green-dark text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Counsailor Logo" className="w-8 h-8 brightness-0 invert" />
              <h3 className="text-xl font-bold">Counsailor</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Your AI-powered mental health companion. Providing accessible, confidential support whenever you need it.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-orange-primary">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/70 hover:text-orange-primary transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-orange-primary">
              Get Started
            </h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Ready to take the first step towards better mental health? Start a conversation with our AI therapist today.
            </p>
            <Link to="/" className="btn w-fit text-sm px-5 py-2.5">
              Talk to Counsailor
            </Link>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Counsailor. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-orange-primary fill-orange-primary" /> for mental wellness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
