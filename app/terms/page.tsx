import type { Metadata } from "next";
import LegalPage from "@/components/layouts/LegalPage";
import { createPageMetadata } from "@/lib/seo";
import { BsCheck2Circle, BsFileEarmarkCode, BsShieldCheck } from "react-icons/bs";

export const metadata: Metadata = createPageMetadata(
  "Terms of Service",
  "Review the terms that govern access to CodeAI, including account responsibilities, acceptable use, AI-generated output, and service availability.",
  "/terms",
);

const lastUpdated = "March 24, 2026";

const sections = [
  {
    title: "Acceptance of These Terms",
    paragraphs: [
      "By accessing or using CodeAI, you agree to these Terms of Service. If you do not agree, do not use the service.",
      "You must use CodeAI only in compliance with applicable law and only for purposes that are permitted by these terms.",
    ],
  },
  {
    title: "Accounts and Access",
    bullets: [
      "You are responsible for the accuracy of the information used to create your account.",
      "You are responsible for maintaining the confidentiality of your login credentials and for activity that occurs under your account.",
      "We may suspend or restrict access if we detect abuse, security risks, or violations of these terms.",
    ],
  },
  {
    title: "Acceptable Use",
    bullets: [
      "Do not misuse the service, interfere with its operation, or attempt to gain unauthorized access to accounts, systems, or data.",
      "Do not upload code, prompts, or other content that is unlawful, malicious, infringing, or intended to disrupt the platform.",
      "Do not use CodeAI in a way that could harm other users, the service, or third-party systems.",
    ],
  },
  {
    title: "Your Code and Content",
    paragraphs: [
      "You retain ownership of the code and other content you submit to CodeAI. By using the service, you grant us the limited rights needed to host, process, store, and analyze that content so we can provide explanations and related features.",
      "You represent that you have the right to submit the content you provide and that doing so does not violate the rights of others.",
    ],
  },
  {
    title: "AI-Generated Output",
    paragraphs: [
      "CodeAI uses AI models to generate summaries, steps, and recommendations. Those outputs can be incomplete, inaccurate, or unsuitable for your specific use case.",
      "You are responsible for reviewing any generated explanation before relying on it in development, production, security, or compliance workflows.",
    ],
  },
  {
    title: "Service Availability and Changes",
    paragraphs: [
      "We may update, modify, suspend, or discontinue features at any time. We do not guarantee uninterrupted availability or that the service will always be error free.",
      "We may update these terms from time to time. Continued use of CodeAI after an update takes effect means you accept the revised terms.",
    ],
  },
  {
    title: "Disclaimers and Limits",
    paragraphs: [
      "To the fullest extent permitted by law, CodeAI is provided on an \"as is\" and \"as available\" basis without warranties of any kind.",
      "To the fullest extent permitted by law, we are not liable for indirect, incidental, special, consequential, or exemplary damages arising from your use of the service or reliance on AI-generated output.",
    ],
  },
];

const highlights = [
  {
    title: "Ownership",
    value: "You keep your code",
    description:
      "Submitting code to CodeAI does not transfer ownership, but it does give us the limited rights needed to process it.",
    icon: BsFileEarmarkCode,
  },
  {
    title: "Use",
    value: "Lawful and responsible only",
    description:
      "The service is for legitimate development workflows, not abuse, disruption, or unauthorized access attempts.",
    icon: BsShieldCheck,
  },
  {
    title: "Output",
    value: "Review before you rely",
    description:
      "AI-generated explanations can be useful, but they still need human review before being treated as authoritative.",
    icon: BsCheck2Circle,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="The rules for using CodeAI responsibly."
      description="These terms explain the responsibilities that come with using CodeAI, including account security, acceptable use, how submitted code is processed, and the limits of AI-generated output."
      lastUpdated={lastUpdated}
      sections={sections}
      highlights={highlights}
      relatedPage={{
        href: "/privacy",
        label: "Read Privacy Policy",
      }}
    />
  );
}
