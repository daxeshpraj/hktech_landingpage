import { createFileRoute } from "@tanstack/react-router";
import { Capabilities } from "@/components/landing/Capabilities";
import { CtaBand } from "@/components/landing/CtaBand";
import { FAQ, FAQS } from "@/components/landing/FAQ";
import { FeatureHighlights } from "@/components/landing/FeatureHighlights";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Nav } from "@/components/landing/Nav";
import { Partners } from "@/components/landing/Partners";
import {
  APP_LOGIN_URL,
  CONTACT,
  OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  description: SITE_DESCRIPTION,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: CONTACT.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  sameAs: [CONTACT.whatsapp, "https://hktech.in/", APP_LOGIN_URL],
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HK Tech - Hardware & Software Services Provider Ahmedabad",
  image: absoluteUrl(OG_IMAGE_PATH),
  url: SITE_URL,
  telephone: CONTACT.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: {
    "@type": "City",
    name: "Ahmedabad",
  },
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HK Tech CRM",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CRM",
  operatingSystem: "Web",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    url: SITE_URL,
    availability: "https://schema.org/InStock",
    category: "CRM Software",
  },
  description: SITE_DESCRIPTION,
  featureList: [
    "End-to-end lead management",
    "BOQ",
    "Quotation",
    "Project & task tracking",
    "Client payments",
    "Agency payments",
    "Staff profit sharing",
    "Studio financials",
  ],
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "keywords", content: SITE_KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: absoluteUrl(OG_IMAGE_PATH) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "HK Tech CRM dashboard for interior design studios" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl(OG_IMAGE_PATH) },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "alternate", hrefLang: "en-IN", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationLd) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      { type: "application/ld+json", children: JSON.stringify(softwareLd) },
      { type: "application/ld+json", children: JSON.stringify(websiteLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
});

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-brand/25">
      <Nav />
      <main id="main-content">
        <Hero />
        <Partners />
        <FeatureHighlights />
        <FAQ />
        <Capabilities />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
