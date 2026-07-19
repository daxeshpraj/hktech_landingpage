import { Check } from "lucide-react";
import clientPayments from "@/assets/feature-client-payments.png";
import agencyPayments from "@/assets/feature-agency-payments.png";
import looseExpenses from "@/assets/feature-loose-expenses.png";
import projectTasks from "@/assets/feature-project-tasks.png";

type Highlight = {
  id: string;
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter?: string;
  body: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const HIGHLIGHTS: Highlight[] = [
  {
    id: "project-tasks",
    eyebrow: "Execution on site",
    titleBefore: "Project ",
    titleAccent: "Execution & Tasks",
    body: "Break every interior job into assignable tasks — owner, due date, progress and status — so nothing slips between design and handover.",
    points: [
      "Task board linked to each project",
      "Assignees and clear due dates",
      "Progress % with status badges",
    ],
    image: projectTasks,
    imageAlt:
      "HK Tech Project Execution & Tasks screen showing a project task board with assignee, due date, progress and status",
  },
  {
    id: "client-payments",
    eyebrow: "Client money in",
    titleBefore: "Client ",
    titleAccent: "Payments Received",
    body: "See every project's contract value, amount received and what's still outstanding — colour-coded so collections stay honest.",
    points: [
      "Project-wise payment ledger",
      "Received vs outstanding at a glance",
      "Partial / status badges per job",
    ],
    image: clientPayments,
    imageAlt:
      "HK Tech Client Payments Received screen showing project-wise ledger with contract, received, outstanding and status",
    reverse: true,
  },
  {
    id: "agency-payments",
    eyebrow: "Vendor money out",
    titleBefore: "Agency ",
    titleAccent: "Payments Entry",
    body: "Log and filter every rupee paid to vendors — by project, vendor and payment mode — so purchase books never drift.",
    points: [
      "Filter by project, vendor & mode",
      "Linked to agencies and jobs",
      "Bank transfer, cash and more",
    ],
    image: agencyPayments,
    imageAlt:
      "HK Tech Agency Payments Entry screen with filters and a table of vendor payments by date, project, mode and amount",
  },
  {
    id: "loose-expenses",
    eyebrow: "Misc project costs",
    titleBefore: "Loose ",
    titleAccent: "Agency Expenses",
    body: "Capture one-time materials and miscellaneous costs against the right project — searchable, categorised, auditable.",
    points: [
      "Material & misc categories",
      "Search vendor, project or note",
      "Who added it, and when",
    ],
    image: looseExpenses,
    imageAlt:
      "HK Tech Loose Agency Expenses screen listing one-time project expenses with category badges and rupee amounts",
    reverse: true,
  },
];

export function FeatureHighlights() {
  return (
    <section id="features" className="scroll-mt-28 bg-surface-2/30 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Explore our core features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Execution and{" "}
            <span className="text-brand">money</span> — side by side
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Task tracking, client collections, vendor payouts and loose expenses — the screens
            studios open every day.
          </p>
        </div>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div className={item.reverse ? "lg:order-2" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {item.titleBefore}
                  <span className="text-brand">{item.titleAccent}</span>
                  {item.titleAfter}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((label) => (
                    <li key={label} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-brand">
                        <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`relative ${item.reverse ? "lg:order-1" : ""}`}>
                <div
                  aria-hidden
                  className="absolute -inset-4 -z-10 rounded-[2rem] bg-[radial-gradient(60%_70%_at_50%_45%,color-mix(in_oklab,var(--brand)_18%,transparent)_0%,transparent_70%)] blur-2xl"
                />
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-white p-2 shadow-[0_28px_60px_-36px_rgba(15,23,42,0.35)] sm:rounded-[1.75rem] sm:p-2.5">
                  <div className="overflow-hidden rounded-xl border border-border/60 bg-white sm:rounded-[1.35rem]">
                    <div className="flex items-center gap-1.5 border-b border-border/50 bg-surface-2/80 px-4 py-2">
                      <span className="size-2 rounded-full bg-foreground/15" />
                      <span className="size-2 rounded-full bg-foreground/15" />
                      <span className="size-2 rounded-full bg-foreground/15" />
                      <span className="ml-2 truncate text-[10px] font-medium text-muted-foreground">
                        crm.hktech.in · {item.titleAccent}
                      </span>
                    </div>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      width={1400}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
