/** Public marketing / CRM site origin used for canonical URLs, OG, and sitemap. */
export const SITE_URL = "https://crm.hktech.in";
export const SITE_NAME = "HK Tech";
export const SITE_TITLE =
  "HK Tech — CRM for Interior Designers | Leads, BOQ, Quotation & Studio Financials";
export const SITE_DESCRIPTION =
  "HK Tech is the all-in-one CRM for interior design studios in India. Manage leads, BOQ, quotations, projects, agency, staff, payments and studio financials from Ahmedabad — on crm.hktech.in.";
export const SITE_KEYWORDS = [
  "interior designer CRM",
  "interior design studio software",
  "BOQ software for interior designers",
  "quotation software interior design",
  "lead management for interior designers",
  "studio financials",
  "turnkey project management",
  "HK Tech",
  "Ahmedabad",
  "crm.hktech.in",
].join(", ");

export const CONTACT = {
  phone: "+919173774441",
  phoneDisplay: "+91 91737 74441",
  whatsapp: "https://wa.me/919173774441",
  address: {
    street: "Solaris Business Hub, 438",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380013",
    country: "IN",
  },
  mapQuery:
    "HK Tech - Hardware & Software Services Provider Ahmedabad, Solaris Business Hub, 438, Ahmedabad, Gujarat 380013",
} as const;

export const APP_LOGIN_URL = "https://portal.hktech.in/app/";
export const OG_IMAGE_PATH = "/og-image.png";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}
