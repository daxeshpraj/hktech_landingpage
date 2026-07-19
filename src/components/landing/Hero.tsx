import dashboardHero from "@/assets/dashboard-hero.png";
import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--brand)_8%,white)_0%,#ffffff_70%)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[15%] top-[-20%] h-[70%] w-[50%] rotate-[18deg] bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--brand)_16%,white)_45%,transparent_100%)] opacity-70 blur-3xl animate-beam-drift" />
        <div className="absolute -right-[10%] bottom-0 size-80 rounded-full bg-brand/[0.08] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand shadow-sm">
            Built for interior design studios across India
          </div>

          <h1 className="mt-5 max-w-xl text-balance font-display text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
            Grow your{" "}
            <span className="text-brand">interior design</span> studio with one CRM
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Best-fit CRM for interior designers — leads, BOQ, quotations, projects, agency, staff,
            client collections, vendor payouts and studio financials in one workspace.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.65)] transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="size-5" />
              Book Demo
            </a>
            <a
              href="tel:+919173774441"
              className="inline-flex items-center rounded-lg border-2 border-brand bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent"
            >
              Contact now
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_70%_at_50%_40%,color-mix(in_oklab,var(--brand)_22%,transparent)_0%,transparent_70%)] blur-2xl"
          />
          <div className="animate-float-soft overflow-hidden rounded-2xl border border-border/70 bg-white p-2 shadow-[0_32px_70px_-36px_rgba(15,23,42,0.4)] sm:rounded-3xl sm:p-2.5">
            <div className="overflow-hidden rounded-xl border border-border/60 bg-surface sm:rounded-2xl">
              <div className="flex items-center gap-1.5 border-b border-border/50 bg-surface-2/80 px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="size-2.5 rounded-full bg-foreground/15" />
                <span className="ml-3 text-[11px] font-medium text-muted-foreground">
                  crm.hktech.in
                </span>
              </div>
              <img
                src={dashboardHero}
                alt="HK Tech studio dashboard showing Business Overview with revenue, expenses and net profit"
                width={1600}
                height={1000}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-border/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
            <p className="font-display text-sm font-semibold text-foreground">
              Simplify your interior studio operations
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Projects, payments and profit — visible in one glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
