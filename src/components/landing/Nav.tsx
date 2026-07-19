import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/Logo.png";
import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";

const FEATURE_LINKS = [
  { label: "Lead Management", href: "#product" },
  { label: "BOQ & Quotation", href: "#product" },
  { label: "Project Tasks", href: "#project-tasks" },
  { label: "Client Payments", href: "#client-payments" },
  { label: "Agency Payments", href: "#agency-payments" },
  { label: "Loose Expenses", href: "#loose-expenses" },
  { label: "All modules", href: "#product" },
] as const;

const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SECTION_IDS = [
  "product",
  "features",
  "faq",
  "about",
  "contact",
  "project-tasks",
  "client-payments",
  "agency-payments",
  "loose-expenses",
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const id = visible.target.id;
        if (
          id === "project-tasks" ||
          id === "client-payments" ||
          id === "agency-payments" ||
          id === "loose-expenses"
        ) {
          setActive("features");
        } else {
          setActive(id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive =
      active === id ||
      (id === "product" && active === "product") ||
      (href === "#features" && active === "features");
    return `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "text-brand"
        : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
    }`;
  };

  return (
    <>
      <div className="bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs font-medium sm:px-6 sm:text-sm">
          <a
            href="tel:+919173774441"
            className="inline-flex items-center gap-2 opacity-95 transition-opacity hover:opacity-100"
          >
            <Phone className="size-3.5" aria-hidden />
            +91 91737 74441
          </a>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 opacity-95 transition-opacity hover:opacity-100"
          >
            <WhatsAppIcon className="size-3.5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6">
          <a href="#" className="flex shrink-0 items-center" aria-label="HK Tech home">
            <img
              src={logo}
              alt="HK Tech"
              width={200}
              height={64}
              className="h-9 w-auto max-w-[150px] object-contain object-left sm:h-10 sm:max-w-[170px]"
            />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            <a href="#product" className={linkClass("#product")}>
              Product
            </a>

            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                type="button"
                className={`${linkClass("#features")} inline-flex items-center gap-1`}
                aria-expanded={featuresOpen}
                onClick={() => setFeaturesOpen((v) => !v)}
              >
                Features
                <ChevronDown
                  className={`size-3.5 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {featuresOpen && (
                <div className="absolute left-0 top-full z-50 min-w-[220px] pt-2">
                  <div className="rounded-2xl border border-border/70 bg-white p-2 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]">
                    {FEATURE_LINKS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-brand"
                        onClick={() => setFeaturesOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Product").map((item) => (
              <a key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://portal.hktech.in/"
              className="inline-flex shrink-0 items-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition-transform hover:scale-[1.02] sm:px-5"
            >
              Log in
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-lg border border-border text-foreground lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border/60 bg-white lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              <a href="#product" className={linkClass("#product")} onClick={() => setOpen(false)}>
                Product
              </a>
              <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-brand">
                Features
              </p>
              {FEATURE_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              {NAV_LINKS.filter((l) => l.label !== "Product").map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkClass(item.href)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
