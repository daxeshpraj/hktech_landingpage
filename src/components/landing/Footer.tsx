import logo from "@/assets/Logo.png";
import { WA_HREF } from "@/components/landing/FloatingWhatsApp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img
            src={logo}
            alt="HK Tech"
            width={140}
            height={44}
            className="h-8 w-auto object-contain"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            CRM for interior design studios — plus end-to-end hardware &amp; software services from
            Ahmedabad.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Product</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#product" className="hover:text-brand">
                Platform
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-brand">
                Core features
              </a>
            </li>
            <li>
              <a href="https://portal.hktech.in/app/" className="font-semibold text-brand hover:text-foreground">
                Log in
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#about" className="hover:text-brand">
                About HK Tech
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-brand">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-brand">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="tel:+919173774441" className="hover:text-brand">
                +91 91737 74441
              </a>
            </li>
            <li>
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                WhatsApp
              </a>
            </li>
            <li>Solaris Business Hub, 438</li>
            <li>Ahmedabad, Gujarat 380013</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <span>© 2026 HK Tech. All rights reserved.</span>
          <a href="https://hktech.in/" className="hover:text-brand">
            hktech.in
          </a>
        </div>
      </div>
    </footer>
  );
}
