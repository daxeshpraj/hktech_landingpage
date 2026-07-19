import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";

export function CtaBand() {
  return (
    <section className="border-t border-border/50 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand)_12%,white)_0%,#ffffff_55%,color-mix(in_oklab,var(--brand)_8%,#eef6ff)_100%)] py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Grow your interior studio with{" "}
            <span className="text-brand">HK Tech</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Book a free consultation — we’ll walk you through projects, payments and studio
            financials on a live demo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.65)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="size-5" />
            Book a free consultation
          </a>
          <a
            href="https://portal.hktech.in/"
            className="inline-flex items-center rounded-lg border-2 border-brand bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent"
          >
            Log in
          </a>
        </div>
      </div>
    </section>
  );
}
