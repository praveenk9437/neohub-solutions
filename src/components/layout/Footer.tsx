import { Mail, MapPin, Phone, ExternalLink, Share2, Globe } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI & Generative AI", href: "/services/#ai-genai" },
    { label: "Data & Analytics", href: "/services/#data-analytics" },
    { label: "Cloud Services", href: "/services/#cloud-services" },
    { label: "Enterprise Applications", href: "/services/#enterprise-apps" },
    { label: "Digital Transformation", href: "/services/#digital-transformation" },
    { label: "Managed Services", href: "/services/#managed-services" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/#healthcare" },
    { label: "Insurance", href: "/industries/#insurance" },
    { label: "Financial Services", href: "/industries/#financial-services" },
    { label: "Manufacturing", href: "/industries/#manufacturing" },
    { label: "Retail", href: "/industries/#retail" },
    { label: "Public Sector", href: "/industries/#public-sector" },
  ],
  Company: [
    { label: "About Us", href: "/about/" },
    { label: "Insights", href: "/insights/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact", href: "/contact/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neo-black border-t border-neo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo1.jpeg" alt="Neohub Solutions" className="h-14 w-auto" />
            </a>
            <p className="text-neo-muted text-sm leading-relaxed mb-6 max-w-xs">
              Empowering enterprises with intelligent technology solutions that transform operations, drive growth, and create measurable business value.
            </p>
            <div className="space-y-3">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-neo-subtle hover:text-neo-muted transition-colors text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-neo-orange flex-shrink-0" />
                <span>5000 Centregreen Way, Suite 500<br />Cary, NC 27513</span>
              </a>
              <a href="mailto:sales@neohubsolutions.com" className="flex items-center gap-3 text-neo-subtle hover:text-neo-muted transition-colors text-sm">
                <Mail className="w-4 h-4 text-neo-orange flex-shrink-0" />
                <span>sales@neohubsolutions.com</span>
              </a>
              <a href="tel:+12512090501" className="flex items-center gap-3 text-neo-subtle hover:text-neo-muted transition-colors text-sm">
                <Phone className="w-4 h-4 text-neo-orange flex-shrink-0" />
                <span>+1 (251) 209-0501</span>
              </a>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: ExternalLink, href: "https://linkedin.com/company/neohubsolutions", label: "LinkedIn" },
                { icon: Share2, href: "https://twitter.com/neohubsolutions", label: "Twitter" },
                { icon: Globe, href: "https://neohubsolutions.com", label: "Website" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-neo-border flex items-center justify-center text-neo-subtle hover:text-neo-orange hover:border-neo-orange/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-neo-text font-semibold text-sm tracking-wider uppercase mb-4">{group}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neo-subtle hover:text-neo-orange transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neo-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neo-subtle text-sm">
            © {new Date().getFullYear()} Neohub Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy/" className="text-neo-subtle hover:text-neo-muted transition-colors">Privacy Policy</a>
            <a href="/terms/" className="text-neo-subtle hover:text-neo-muted transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
