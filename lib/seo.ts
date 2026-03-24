import type { Metadata } from "next";

const FALLBACK_SITE_URL = "http://localhost:3000";

function normalizeSiteUrl(rawUrl?: string) {
  const candidate = rawUrl?.trim() || FALLBACK_SITE_URL;

  try {
    return new URL(candidate);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL,
);

export const siteConfig = {
  name: "CodeAI",
  shortName: "CodeAI",
  creator: "CodeAI",
  locale: "en_US",
  url: siteUrl.toString().replace(/\/$/, ""),
  title: "CodeAI | AI Code Explainer for Developers",
  description:
    "Understand unfamiliar code faster with AI-powered, step-by-step explanations, language detection, complexity insights, and saved history.",
  keywords: [
    "AI code explainer",
    "code explanation tool",
    "developer productivity",
    "Next.js AI app",
    "OpenAI code analysis",
    "programming education",
    "code understanding",
    "Better Auth",
    "Prisma PostgreSQL",
  ],
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | CodeAI",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  publisher: siteConfig.creator,
  category: "technology",
  keywords: [...siteConfig.keywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/icon.png",
        alt: "CodeAI logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export function createNoIndexMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en-US",
};

export const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
};
