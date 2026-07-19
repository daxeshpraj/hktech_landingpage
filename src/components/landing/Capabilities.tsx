import {
  Cable,
  Clock,
  Cpu,
  ExternalLink,
  HardDrive,
  Headset,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Server,
  Webcam,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { WA_HREF, WhatsAppIcon } from "@/components/landing/FloatingWhatsApp";

const OFFICE_ADDRESS = "Solaris Business Hub, 438, Ahmedabad, Gujarat 380013";
const PHONE_DISPLAY = "+91 91737 74441";
const PHONE_HREF = "tel:+919173774441";
const MAPS_QUERY =
  "HK Tech - Hardware & Software Services Provider Ahmedabad, Solaris Business Hub, 438, Ahmedabad, Gujarat 380013";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&output=embed`;
const MAPS_OPEN = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const CAPABILITY_CHIPS: { title: string; icon: LucideIcon }[] = [
  { title: "Hardware sales & support", icon: MonitorSmartphone },
  { title: "Software sales & support", icon: Cpu },
  { title: "IT infrastructure", icon: Server },
  { title: "Networking solutions", icon: Network },
  { title: "Surveillance systems", icon: Webcam },
  { title: "AMC & technical support", icon: Headset },
];

const STACK: { label: string; icon: LucideIcon }[] = [
  { label: "Servers & workstations", icon: HardDrive },
  { label: "Laptops & desktops", icon: MonitorSmartphone },
  { label: "Networking", icon: Cable },
  { label: "Surveillance", icon: Webcam },
  { label: "On-site / AMC", icon: Wrench },
];

export function Capabilities() {
  return (
    <section className="relative border-t border-border/50 bg-surface-2/40">
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div id="about" className="scroll-mt-28">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                About HK Tech
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                HK Tech — your{" "}
                <span className="text-brand">hardware &amp; software</span>{" "}
                solution partner
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                HK Tech is a one-stop IT solutions provider. From the devices on your desk to the
                software that runs your studio — including our purpose-built CRM for interior design
                practices — we design, deploy and support the full stack.
              </p>
            </div>

            <div className="rounded-2xl border border-border/70 bg-white p-6 card-soft sm:p-7">
              <p className="font-display text-lg font-semibold tracking-tight text-brand">
                “Committed to a better services.”
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Based in Ahmedabad, we help individuals and businesses choose the right technology,
                implement it cleanly, and keep it running.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-border/70 pt-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="mt-1 font-semibold text-foreground">Hardware + Software + Infra</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Office</dt>
                  <dd className="mt-1 font-semibold text-foreground">Solaris Business Hub, 438</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Product</dt>
                  <dd className="mt-1 font-semibold text-foreground">Studio CRM on crm.hktech.in</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Support</dt>
                  <dd className="mt-1 font-semibold text-foreground">Sales · Setup · AMC</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITY_CHIPS.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white px-4 py-3.5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-brand/20 bg-accent text-brand">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-sm font-semibold text-foreground">{title}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {STACK.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3.5 py-1.5 text-xs font-medium text-foreground/80"
              >
                <Icon className="size-3.5 text-brand" strokeWidth={1.75} aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          id="contact"
          className="mt-14 scroll-mt-28 rounded-2xl border border-border/70 bg-white p-6 card-soft sm:rounded-[1.75rem] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Contact us</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Visit or reach{" "}
                <span className="text-brand">HK Tech</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hardware, software and studio CRM support from our Ahmedabad office — or message us
                anytime on WhatsApp.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex gap-3">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-brand/20 bg-accent text-brand">
                    <MapPin className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Address
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-brand/20 bg-accent text-brand">
                    <Phone className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="mt-1 block text-sm font-semibold text-brand hover:text-foreground"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-brand/20 bg-accent text-brand">
                    <Clock className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Hours
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">Open 24 hours</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(37,211,102,0.65)] transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
                <a
                  href={MAPS_OPEN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2/80 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-brand/30 hover:bg-white"
                >
                  Open in Google Maps
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/70 bg-surface-2 shadow-sm">
              <iframe
                title="HK Tech office — Solaris Business Hub, Ahmedabad"
                src={MAPS_EMBED}
                className="h-[280px] w-full border-0 sm:h-[340px] lg:h-full lg:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
