import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const DISMISS_KEY = "hktech-trial-banner-dismissed";

type Props = {
  trialDays: number | null;
  onClaim: () => void;
};

export function TrialFlashBanner({ trialDays, onClaim }: Props) {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    } catch {
      // sessionStorage may be blocked — still show the banner
    }
    setVisible(true);
    const id = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  if (!visible) return null;

  const offer =
    trialDays != null
      ? `${trialDays}-day free trial`
      : "free trial";

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
    setEntered(false);
    window.setTimeout(() => setVisible(false), 220);
  }

  return (
    <div
      role="region"
      aria-label="Free trial offer"
      className={`relative z-40 overflow-hidden border-b border-white/15 bg-[linear-gradient(105deg,#1f6b4d_0%,#2f9e6e_45%,#247a58_100%)] text-white transition-all duration-300 ease-out ${
        entered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-banner-shimmer bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.18)_50%,transparent_65%)] bg-[length:200%_100%]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-8 top-1/2 size-24 -translate-y-1/2 rounded-full bg-amber-300/20 blur-2xl"
      />

      <div
        className={`relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-2.5 px-4 py-2.5 text-center sm:flex-row sm:gap-4 sm:px-6 sm:py-3 sm:text-left transition-transform duration-500 ease-out ${
          entered ? "translate-y-0" : "-translate-y-3"
        }`}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-amber-100 ring-1 ring-white/25 sm:text-[11px]">
          <Sparkles className="size-3.5 animate-banner-pulse text-amber-200" aria-hidden />
          Limited offer
        </span>

        <p className="text-sm font-semibold leading-snug sm:text-[15px]">
          Start your{" "}
          <span className="font-bold text-amber-100 underline decoration-amber-200/50 decoration-2 underline-offset-2">
            {offer}
          </span>{" "}
          — run your studio CRM with zero commitment.
        </p>

        <button
          type="button"
          onClick={onClaim}
          className="inline-flex shrink-0 items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#1f6b4d] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.04] hover:bg-amber-50 sm:text-sm"
        >
          Claim free trial
        </button>

        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-2 grid size-8 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white sm:static sm:ml-auto"
          aria-label="Dismiss free trial banner"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
