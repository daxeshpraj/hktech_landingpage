import { useEffect, useId, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  APP_SIGNUP_URL,
  submitTrialLead,
  validateTrialLead,
  type FieldErrors,
} from "@/lib/trial";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trialDays: number | null;
};

export function TrialSignupModal({ open, onOpenChange, trialDays }: Props) {
  const formId = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) return;
    setName("");
    setPhone("");
    setEmail("");
    setErrors({});
    setFormError(null);
    setSubmitting(false);
    setSuccess(false);
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting || success) return;

    setFormError(null);
    const validated = validateTrialLead({ name, phone, email });
    if (!validated.ok) {
      setErrors(validated.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const result = await submitTrialLead(validated.payload);
    if (!result.ok) {
      setSubmitting(false);
      setFormError(result.message);
      return;
    }

    setSuccess(true);
    setSubmitting(false);

    const params = [
      "trial=1",
      `name=${encodeURIComponent(validated.payload.name)}`,
      `phone=${encodeURIComponent(validated.payload.phone)}`,
    ];
    if (validated.payload.email) {
      params.push(`email=${encodeURIComponent(validated.payload.email)}`);
    }
    const redirectUrl = `${APP_SIGNUP_URL}?${params.join("&")}`;

    window.setTimeout(() => {
      window.location.assign(redirectUrl);
    }, 1400);
  }

  const title =
    trialDays != null
      ? `Start your ${trialDays}-day free trial`
      : "Start your free trial";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[min(90dvh,640px)] w-[calc(100%-1.5rem)] max-w-md overflow-y-auto rounded-2xl border-border/70 bg-white p-5 shadow-[0_28px_60px_-36px_rgba(15,23,42,0.4)] sm:w-full sm:p-7"
        onOpenAutoFocus={(ev) => {
          // Prefer focusing the first field, not the close button.
          const target = document.getElementById(`${formId}-name`);
          if (target) {
            ev.preventDefault();
            target.focus();
          }
        }}
      >
        {success ? (
          <div className="py-6 text-center sm:py-8">
            <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#2f9e6e]/12 text-[#2f9e6e]">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <DialogHeader className="mt-4 space-y-2 text-center sm:text-center">
              <DialogTitle className="font-display text-xl font-bold tracking-tight text-foreground">
                Thanks! Redirecting you to set up your account...
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Opening the HK Tech portal signup next.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-2 text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2f9e6e]">
                Free trial
              </p>
              <DialogTitle className="font-display text-2xl font-bold tracking-tight text-foreground">
                {title}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                Share a few details and we&apos;ll take you to set up your studio account.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-2 space-y-4" noValidate>
              <div className="space-y-1.5">
                <Label htmlFor={`${formId}-name`} className="text-sm font-medium text-foreground">
                  Name <span className="text-[#2f9e6e]">*</span>
                </Label>
                <Input
                  id={`${formId}-name`}
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Your full name"
                  className={`h-11 rounded-xl border-border/80 bg-surface-2/40 px-3.5 text-base focus-visible:ring-[#2f9e6e] sm:text-sm ${
                    errors.name ? "border-red-400 focus-visible:ring-red-400" : ""
                  }`}
                  disabled={submitting}
                />
                {errors.name && (
                  <p className="text-xs font-medium text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`${formId}-phone`} className="text-sm font-medium text-foreground">
                  Phone <span className="text-[#2f9e6e]">*</span>
                </Label>
                <Input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  placeholder="10-digit mobile / +91…"
                  className={`h-11 rounded-xl border-border/80 bg-surface-2/40 px-3.5 text-base focus-visible:ring-[#2f9e6e] sm:text-sm ${
                    errors.phone ? "border-red-400 focus-visible:ring-red-400" : ""
                  }`}
                  disabled={submitting}
                />
                {errors.phone && (
                  <p className="text-xs font-medium text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor={`${formId}-email`} className="text-sm font-medium text-foreground">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="you@studio.com"
                  className={`h-11 rounded-xl border-border/80 bg-surface-2/40 px-3.5 text-base focus-visible:ring-[#2f9e6e] sm:text-sm ${
                    errors.email ? "border-red-400 focus-visible:ring-red-400" : ""
                  }`}
                  disabled={submitting}
                />
                {errors.email && (
                  <p className="text-xs font-medium text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {formError && (
                <div
                  className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
                  role="alert"
                >
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#2f9e6e] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(47,158,110,0.65)] transition-transform hover:scale-[1.01] hover:bg-[#278a5f] disabled:pointer-events-none disabled:opacity-70"
              >
                {submitting ? "Submitting…" : "Continue to free trial"}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                By continuing you agree to be contacted about your trial setup.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
