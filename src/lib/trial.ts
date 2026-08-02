/** CRM backend (external) — public trial lead-capture endpoints. */
export const TRIAL_API_BASE = "https://portal.hktech.in/api";
export const TRIAL_INFO_URL = `${TRIAL_API_BASE}/trial-info`;
export const TRIAL_LEADS_URL = `${TRIAL_API_BASE}/trial-leads`;

/** Portal app — register flow is in-app at /app/ (no separate signup path). */
export const APP_SIGNUP_URL = "https://portal.hktech.in/app/";

export type TrialInfo = {
  trial_days: number;
};

export type TrialLeadPayload = {
  name: string;
  phone: string;
  email: string;
};

export type FieldErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

/** Indian mobile: 10 digits starting 6–9, optional +91 / 91 / 0 prefix. */
export function normalizeIndianPhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  let mobile = digits;
  if (mobile.length === 12 && mobile.startsWith("91")) {
    mobile = mobile.slice(2);
  } else if (mobile.length === 11 && mobile.startsWith("0")) {
    mobile = mobile.slice(1);
  }
  if (!/^[6-9]\d{9}$/.test(mobile)) return null;
  return mobile;
}

export function isValidEmail(raw: string): boolean {
  // Basic format check — empty is handled by callers (email is optional).
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

export function validateTrialLead(input: {
  name: string;
  phone: string;
  email: string;
}): { ok: true; payload: TrialLeadPayload } | { ok: false; errors: FieldErrors } {
  const errors: FieldErrors = {};
  const name = input.name.trim();
  const phoneRaw = input.phone.trim();
  const email = input.email.trim();

  if (!name) {
    errors.name = "Name is required";
  }

  const phone = normalizeIndianPhone(phoneRaw);
  if (!phoneRaw) {
    errors.phone = "Phone is required";
  } else if (!phone) {
    errors.phone = "Enter a valid 10-digit Indian mobile number";
  }

  if (email && !isValidEmail(email)) {
    errors.email = "Enter a valid email address";
  }

  if (errors.name || errors.phone || errors.email) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    payload: {
      name,
      phone: phone!,
      email,
    },
  };
}

/**
 * Fetch trial length. Never throws — returns null on any failure/timeout
 * so the landing page never depends on the CRM API being up.
 */
export async function fetchTrialDays(signal?: AbortSignal): Promise<number | null> {
  try {
    const res = await fetch(TRIAL_INFO_URL, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal,
      // Avoid stale cached day counts if the constant changes server-side.
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Partial<TrialInfo>;
    const days = Number(data.trial_days);
    if (!Number.isFinite(days) || days <= 0) return null;
    return Math.floor(days);
  } catch {
    return null;
  }
}

export type SubmitTrialLeadResult =
  | { ok: true }
  | { ok: false; message: string; status?: number };

/**
 * POST a trial lead. Never throws — returns a result object for the UI.
 */
export async function submitTrialLead(
  payload: TrialLeadPayload,
  signal?: AbortSignal,
): Promise<SubmitTrialLeadResult> {
  try {
    const res = await fetch(TRIAL_LEADS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal,
    });

    if (res.status === 201 || res.ok) {
      return { ok: true };
    }

    let message = "Something went wrong. Please try again.";
    if (res.status === 400) {
      message = "Please check your details and try again.";
      try {
        const body = (await res.json()) as { detail?: unknown; message?: string };
        if (typeof body.message === "string" && body.message.trim()) {
          message = body.message;
        } else if (typeof body.detail === "string" && body.detail.trim()) {
          message = body.detail;
        } else if (Array.isArray(body.detail) && body.detail[0]?.msg) {
          message = String(body.detail[0].msg);
        }
      } catch {
        // keep default 400 message
      }
    } else if (res.status === 404 || res.status >= 500) {
      message = "Couldn't reach the server. Check your connection and try again.";
    }

    return { ok: false, message, status: res.status };
  } catch {
    return {
      ok: false,
      message: "Couldn't reach the server. Check your connection and try again.",
    };
  }
}
