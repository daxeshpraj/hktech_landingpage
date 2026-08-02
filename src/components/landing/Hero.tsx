import { useEffect, useState } from "react";
import dashboardHero from "@/assets/dashboard-hero.png";
import logo from "@/assets/Logo.png";
import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";
import { TrialSignupModal } from "@/components/landing/TrialSignupModal";
import { fetchTrialDays } from "@/lib/trial";

const DISSOLVE_MASK =
  "linear-gradient(to bottom, transparent 0%, transparent 42%, rgba(0,0,0,0.35) 58%, rgba(0,0,0,0.85) 72%, black 88%)";

export function Hero() {
  const [trialDays, setTrialDays] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);

    fetchTrialDays(controller.signal)
      .then((days) => {
        if (days != null) setTrialDays(days);
      })
      .catch(() => {
        // Intentionally ignore — button falls back to text without a day count.
      })
      .finally(() => {
        window.clearTimeout(timeout);
      });

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const trialLabel =
    trialDays != null ? `Start your ${trialDays}-day free trial` : "Start your free trial";

  return (
    <section className="relative pb-0 pt-10 sm:pt-14">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[20%] top-[-10%] h-[70%] w-[55%] rotate-[18deg] bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--brand)_18%,white)_45%,transparent_100%)] opacity-70 blur-3xl animate-beam-drift" />
        <div
          className="absolute -right-[15%] top-[5%] h-[55%] w-[45%] -rotate-[14deg] bg-[linear-gradient(90deg,transparent_0%,color-mix(in_oklab,var(--brand)_12%,#dbeafe)_50%,transparent_100%)] opacity-60 blur-3xl animate-beam-drift"
          style={{ animationDelay: "2.5s" }}
        />
        <div className="absolute inset-0 bg-hero-dust opacity-40" />
        <div className="absolute left-1/2 top-[18%] h-40 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand)_16%,transparent)_0%,transparent_70%)] blur-2xl" />
        <img
          src={logo}
          alt=""
          className="absolute left-1/2 top-[8%] w-[min(92vw,720px)] -translate-x-1/2 opacity-[0.08] mix-blend-multiply sm:top-[4%] sm:w-[640px] sm:opacity-[0.1]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-amber-50/90 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-sm">
          <span aria-hidden>★</span>
          Built for interior design studios across India
        </div>

        <h1 className="mx-auto mt-7 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Grow your{" "}
          <span className="text-brand-sheen">interior design</span> studio with one CRM
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          All-in-one CRM to manage projects, agency, staff and studio financials — built for modern
          interior design practices.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.7)] transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center rounded-full bg-[#2f9e6e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_-12px_rgba(47,158,110,0.7)] transition-transform hover:scale-[1.03] hover:bg-[#278a5f]"
          >
            {trialLabel}
          </button>
        </div>
      </div>

      {/* Dashboard — lower half dissolves into the Product section below */}
      <div className="relative z-0 mx-auto -mb-20 mt-12 max-w-5xl px-6 sm:-mb-28 sm:mt-16 lg:-mb-36">
        <div
          aria-hidden
          className="absolute left-1/2 top-[28%] -z-10 h-[45%] w-[min(100%,52rem)] -translate-x-1/2 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.06)_0%,transparent_72%)] blur-2xl"
        />

        <div className="relative overflow-hidden rounded-t-[1.75rem] border border-b-0 border-white/90 bg-white/95 p-2 pb-0 shadow-[0_32px_80px_-32px_rgba(15,23,42,0.22)] sm:rounded-t-[2rem] sm:p-2.5 sm:pb-0">
          <div className="relative overflow-hidden rounded-t-[1.25rem] border border-b-0 border-border/60 bg-surface sm:rounded-t-[1.5rem]">
            <div className="flex items-center gap-1.5 border-b border-border/50 bg-surface-2/80 px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="size-2.5 rounded-full bg-foreground/15" />
              <span className="ml-3 text-[11px] font-medium text-muted-foreground">
                crm.hktech.in
              </span>
            </div>

            <div className="relative max-h-[360px] overflow-hidden sm:max-h-[420px] lg:max-h-[460px]">
              <img
                src={dashboardHero}
                alt="HK Tech studio dashboard showing Business Overview with Total Revenue, Project Expenses, General Expenses and Net Profit, plus Project Statistics and Financial Summary"
                width={1600}
                height={1000}
                className="relative z-0 h-auto w-full object-cover object-top"
              />

              {/* Blurred echo — melts the lower half into mist */}
              <img
                src={dashboardHero}
                alt=""
                aria-hidden
                width={1600}
                height={1000}
                className="absolute inset-0 z-10 h-full w-full scale-[1.12] object-cover object-top blur-xl opacity-95 sm:blur-2xl lg:blur-3xl"
                style={{
                  maskImage: DISSOLVE_MASK,
                  WebkitMaskImage: DISSOLVE_MASK,
                }}
              />

              {/* Frost veil */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[62%] bg-gradient-to-b from-transparent via-white/55 to-white"
              />

              {/* Soft bloom at the dissolve edge */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-[-8%] bottom-0 z-30 h-24 bg-gradient-to-t from-white via-white/90 to-transparent blur-lg sm:h-28"
              />
            </div>
          </div>
        </div>

        {/* Ambient tail — seamless handoff into next section */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 -bottom-6 h-20 bg-gradient-to-b from-white/70 to-white blur-md sm:-bottom-8 sm:h-24"
        />
      </div>

      <TrialSignupModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        trialDays={trialDays}
      />
    </section>
  );
}
