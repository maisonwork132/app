import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-academy section-spacing-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">Next Phase</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Specialist player development for aspiring footballers. 
              Academy-level coaching in Basildon and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm text-background/70 hover:text-background transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+447586437691"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>07586 437691</span>
              </a>
              <a
                href="https://instagram.com/coach_hward"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@coach_hward</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4" />
                <span>Basildon & surrounding areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-xs text-background/50 text-center">
            © {new Date().getFullYear()} Next Phase Player Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
