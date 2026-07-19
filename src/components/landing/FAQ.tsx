import { ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";

export const FAQS = [
  {
    q: "Does HK Tech include end-to-end lead management?",
    a: "Yes. Capture enquiries, assign owners, track follow-ups and stages, then convert won leads into projects — then continue into BOQ, quotation, execution and payments in the same CRM.",
  },
  {
    q: "Does HK Tech support BOQ and quotations?",
    a: "Yes. Build bills of quantities for interior jobs and generate professional client quotations from your scope — then track the project, payments and expenses in the same workspace.",
  },
  {
    q: "Is HK Tech built specifically for interior designers?",
    a: "Yes. Unlike generic CRMs, HK Tech is modelled around how interior studios actually run — leads, BOQ, quotations, turnkey and consultation projects, vendor payments, staff profit-sharing, and studio-wide financials in one place.",
  },
  {
    q: "Can I track both turnkey and consultation projects separately?",
    a: "Yes. Project Statistics splits work into Turnkey and Consultation streams so you always see how each side of the studio is performing.",
  },
  {
    q: "Does it show revenue, expenses and net profit in real time?",
    a: "The Business Overview shows Total Revenue, Project Expenses, General Expenses and Net Profit updated live as invoices, bills and payments are recorded.",
  },
  {
    q: "Can I manage my staff, agencies and vendors?",
    a: "Dedicated Agency and Staff modules let you manage partner agencies, in-house team members, roles and profit-sharing — all linked back to the projects they work on.",
  },
  {
    q: "How secure is my studio's data?",
    a: "All data is encrypted in transit and at rest with role-based access, so sensitive financials stay visible only to the people you choose.",
  },
];

export function FAQ() {
  const [sectionOpen, setSectionOpen] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-28 bg-white py-14 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setSectionOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 rounded-2xl border border-border/70 bg-surface-2/40 px-5 py-5 text-left transition-colors hover:border-brand/25 hover:bg-surface-2/70 sm:px-7 sm:py-6"
          aria-expanded={sectionOpen}
          aria-controls="faq-panel"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">FAQ</p>
            <h2
              id="faq-heading"
              className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Frequently asked{" "}
              <span className="text-brand">questions</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {sectionOpen
                ? "Everything you need to know before booking a demo."
                : `${FAQS.length} questions — click to expand`}
            </p>
          </div>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border bg-white text-brand shadow-sm">
            <ChevronDown
              className={`size-5 transition-transform duration-200 ${sectionOpen ? "rotate-180" : ""}`}
              aria-hidden
            />
          </span>
        </button>

        {/* Keep FAQ Q&A in the DOM for SEO even when the panel looks collapsed */}
        <div
          id="faq-panel"
          hidden={!sectionOpen}
          className="mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface card-soft"
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface-2 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold" itemProp="name">
                    {f.q}
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border bg-surface text-brand">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  hidden={!isOpen}
                  className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6"
                >
                  <p itemProp="text">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
