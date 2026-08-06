import { Check, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const DISMISS_KEY = "hktech-trial-popup-dismissed";

const HIGHLIGHTS = [
  "Leads, BOQ & quotations in one place",
  "Projects, payments & studio financials",
  "No credit card required to start",
] as const;

type Props = {
  trialDays: number | null;
  onClaim: () => void;
};

export function TrialFlashPopup({ trialDays, onClaim }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // still show if storage blocked
    }

    setOpen(true);
  }, []);

  function persistDismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }

  function handleOpenChange(next: boolean) {
    if (!next) {
      persistDismiss();
      setOpen(false);
    }
  }

  function handleClaim() {
    persistDismiss();
    setOpen(false);
    onClaim();
  }

  const offerLabel =
    trialDays != null ? `${trialDays}-day free trial` : "free trial";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="max-h-[min(92dvh,720px)] w-[calc(100%-1.25rem)] max-w-lg overflow-hidden border-0 bg-transparent p-0 shadow-none sm:w-full [&>button]:hidden"
        aria-describedby={undefined}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[linear-gradient(160deg,#1a5c42_0%,#2f9e6e_48%,#1f6b4d_100%)] text-white shadow-[0_40px_100px_-30px_rgba(15,23,42,0.65)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-banner-shimmer bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.14)_50%,transparent_65%)] bg-[length:200%_100%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-amber-300/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-12 -left-8 size-44 rounded-full bg-white/10 blur-3xl"
          />

          <button
            type="button"
            onClick={() => handleOpenChange(false)}
            className="absolute right-3 top-3 z-20 grid size-10 place-items-center rounded-full bg-black/20 text-white/90 ring-1 ring-white/25 transition-colors hover:bg-black/35 hover:text-white"
            aria-label="Close free trial offer"
          >
            <X className="size-5" />
          </button>

          <div className="relative z-10 px-6 pb-7 pt-8 text-center sm:px-10 sm:pb-9 sm:pt-10">
            <span className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-100 ring-1 ring-white/30">
              <Sparkles className="size-3.5 animate-banner-pulse text-amber-200" aria-hidden />
              Limited offer
            </span>

            <DialogTitle className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Claim your{" "}
              <span className="text-amber-200">{offerLabel}</span>
            </DialogTitle>

            <DialogDescription className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">
              Grow your interior design studio with HK Tech CRM — leads, projects and
              financials in one workspace. Start free today.
            </DialogDescription>

            <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-xl bg-white/10 px-3.5 py-2.5 text-sm font-medium text-white/95 ring-1 ring-white/10"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-amber-200/90 text-[#1a5c42]">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={handleClaim}
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-[#1a5c42] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02] hover:bg-amber-50 sm:text-lg"
            >
              Start {offerLabel} now
            </button>

            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-3 text-sm font-medium text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Maybe later
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
