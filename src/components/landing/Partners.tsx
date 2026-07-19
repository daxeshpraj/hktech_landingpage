import {
  Building2,
  Calculator,
  Check,
  ClipboardList,
  ContactRound,
  FileSpreadsheet,
  FolderKanban,
  LayoutDashboard,
  PieChart,
  Receipt,
  ShieldCheck,
  UserCog,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";

const HIGHLIGHTS = [
  "End-to-end lead management — capture, follow up and convert",
  "BOQ and professional quotations for every interior job",
  "Projects, tasks and milestones in one workspace",
  "Collections, payouts, profit-share and live financials",
];

const MODULE_CHIPS: { label: string; icon: LucideIcon }[] = [
  { label: "Leads", icon: ContactRound },
  { label: "BOQ", icon: Calculator },
  { label: "Quotation", icon: FileSpreadsheet },
  { label: "Projects", icon: FolderKanban },
  { label: "Financials", icon: Wallet },
  { label: "Profit share", icon: PieChart },
];

const SIDEBAR_NAV: {
  section?: string;
  items: { label: string; icon: LucideIcon; active?: boolean; badge?: string }[];
}[] = [
  {
    items: [
      { label: "Dashboard", icon: LayoutDashboard, active: true },
      { label: "Leads", icon: ContactRound },
      { label: "Projects", icon: FolderKanban },
      { label: "BOQ", icon: Calculator },
      { label: "Quotation", icon: FileSpreadsheet, badge: "New" },
      { label: "Tasks", icon: ClipboardList },
      { label: "Agency", icon: Building2 },
      { label: "Staff", icon: UserCog },
    ],
  },
  {
    section: "Money",
    items: [
      { label: "Financials", icon: Wallet },
      { label: "Client payments", icon: Receipt },
      { label: "Expenses", icon: Receipt },
    ],
  },
];

const DETAIL_MODULES: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Lead Management",
    body: "End-to-end lead management — capture enquiries, assign follow-ups, track stages and convert winning leads into projects without switching tools.",
    icon: ContactRound,
  },
  {
    title: "BOQ",
    body: "Build accurate bills of quantities for interiors — materials, quantities and rates — so estimates stay consistent from site to quote.",
    icon: Calculator,
  },
  {
    title: "Quotation",
    body: "Create professional client quotations from your BOQ or project scope, ready to share, revise and win the job.",
    icon: FileSpreadsheet,
  },
  {
    title: "Projects",
    body: "Manage every turnkey and consultation project with client, scope, milestones, purchase orders and payments in one place.",
    icon: Users,
  },
  {
    title: "Agency",
    body: "Partner agencies, contractors and vendors with their contact books, rate cards and outstanding payments.",
    icon: Building2,
  },
  {
    title: "Staff & Profit Sharing",
    body: "In-house team, roles and per-project profit-sharing — calculated automatically as projects close.",
    icon: UserCog,
  },
  {
    title: "Expenses & Bills",
    body: "Project and general expenses captured against the right cost centre so margins stay honest.",
    icon: Receipt,
  },
  {
    title: "Roles & Access",
    body: "Sensitive financials stay visible only to the people you choose, with granular role-based access.",
    icon: ShieldCheck,
  },
];

function SidebarMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(70%_70%_at_30%_40%,color-mix(in_oklab,var(--brand)_18%,transparent)_0%,transparent_70%)] blur-2xl"
      />
      <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--brand)_10%,white)_0%,#ffffff_55%)] p-5 shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)] sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
          <div className="border-b border-border/50 px-4 py-3">
            <p className="font-display text-sm font-bold tracking-tight text-foreground">HK Tech</p>
            <p className="text-[11px] text-muted-foreground">Studio CRM</p>
          </div>
          <div className="space-y-4 p-3">
            {SIDEBAR_NAV.map((group, gi) => (
              <div key={group.section ?? gi}>
                {group.section && (
                  <p className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.section}
                  </p>
                )}
                <ul className="space-y-0.5">
                  {group.items.map(({ label, icon: Icon, active, badge }) => (
                    <li key={label}>
                      <div
                        className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm ${
                          active
                            ? "bg-accent font-semibold text-brand"
                            : "text-foreground/80"
                        }`}
                      >
                        <Icon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
                        <span className="flex-1 truncate">{label}</span>
                        {badge && (
                          <span className="rounded-full bg-brand/10 px-1.5 py-0.5 text-[9px] font-semibold text-brand">
                            {badge}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Platform intro — Dzylo-style headline + sidebar visual + modules */
export function Partners() {
  return (
    <section id="product" className="scroll-mt-28 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <SidebarMockup />

          <div className="flex flex-col">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Run Your Entire{" "}
              <span className="text-brand">Interior Business</span> in{" "}
              <span className="text-brand">One Platform</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              HK Tech is an all-in-one CRM built for interior designers and studios. From
              end-to-end lead management to BOQ, quotations, projects, client collections, agency
              payouts, staff profit-sharing and studio financials — HK Tech brings every part of
              your interior business into one powerful platform. With clear ledgers and live
              overviews, you save time, control costs, and deliver projects with confidence.
            </p>

            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-brand">
                    <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {MODULE_CHIPS.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-2/50 px-3 py-1.5 text-xs font-medium text-foreground/85"
                >
                  <Icon className="size-3.5 text-brand" strokeWidth={1.75} aria-hidden />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.65)] transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="size-4" />
                Book Demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-lg border-2 border-brand bg-white px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-accent"
              >
                Explore features
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Studio operations
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The modules behind the dashboard
            </h3>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Beyond the money ledgers — the day-to-day tools that keep projects, people and
              permissions in one place.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DETAIL_MODULES.map(({ title, body, icon: Icon }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border/70 bg-white p-6 transition-all hover:-translate-y-0.5 card-soft sm:p-7"
              >
                <div className="grid size-10 place-items-center rounded-xl border border-brand/20 bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold tracking-tight">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
