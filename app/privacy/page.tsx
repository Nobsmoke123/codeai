import type { Metadata } from "next";
import LegalPage from "@/components/layouts/LegalPage";
import { createPageMetadata } from "@/lib/seo";
import { BsCpu, BsDatabaseLock, BsShieldLock } from "react-icons/bs";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "Read how CodeAI collects, uses, stores, and protects account information, submitted code snippets, and generated explanations.",
  "/privacy",
);

const lastUpdated = "March 24, 2026";

const sections = [
  {
    title: "What This Policy Covers",
    paragraphs: [
      "This Privacy Policy explains how CodeAI handles information when you browse the site, create an account, sign in, and use the code explanation features.",
      "It applies to information connected to your account, the code you submit for analysis, generated explanations, and the technical records needed to operate and secure the service.",
    ],
  },
  {
    title: "Information We Collect",
    bullets: [
      "Account and profile details such as your name, email address, profile image, and authentication records.",
      "Session and security information such as timestamps, device context, IP address, and user-agent data when available through the authentication layer.",
      "Code snippets, prompts, generated explanations, saved history, and related metadata such as language detection, model used, token counts, and processing status.",
      "Transactional email activity used to verify accounts and deliver password reset links.",
    ],
  },
  {
    title: "How We Use Information",
    bullets: [
      "To create and secure accounts, authenticate users, and manage active sessions.",
      "To generate AI-powered explanations, save your explanation history, and return results in the product.",
      "To send verification and password reset emails and support core account recovery flows.",
      "To monitor performance, prevent abuse, troubleshoot failures, and keep the service reliable.",
    ],
  },
  {
    title: "AI Processing",
    paragraphs: [
      "When you submit code to CodeAI, that content may be processed by third-party AI providers used to generate explanations. Please avoid submitting secrets, credentials, or highly sensitive code unless you are comfortable with that processing.",
      "Generated results are stored with your account history so you can revisit them later inside the app.",
    ],
  },
  {
    title: "When We Share Information",
    paragraphs: [
      "We do not sell your personal information. We may share information with service providers that help us run the product, such as infrastructure, database, authentication, email delivery, and AI processing providers.",
      "We may also disclose information if required to comply with law, enforce our terms, protect the service, or respond to a legitimate security issue.",
    ],
  },
  {
    title: "Retention and Security",
    paragraphs: [
      "We retain information for as long as it is reasonably needed to operate the service, maintain account history, meet legal obligations, and resolve security or support issues.",
      "CodeAI uses administrative, technical, and organizational safeguards designed to protect your data, but no system can guarantee absolute security.",
    ],
  },
  {
    title: "Your Choices and Policy Updates",
    paragraphs: [
      "You control what code and information you submit to the service. If you do not want certain information processed, do not upload or paste it into CodeAI.",
      "We may update this Privacy Policy from time to time. When we do, we will post the revised version here and update the effective date shown above.",
    ],
  },
];

const highlights = [
  {
    title: "Scope",
    value: "Account, code, and usage data",
    description:
      "The policy covers the information needed to authenticate users, generate explanations, and store explanation history.",
    icon: BsShieldLock,
  },
  {
    title: "Processing",
    value: "AI-assisted explanations",
    description:
      "Submitted snippets may be processed by model providers so CodeAI can return structured explanation results.",
    icon: BsCpu,
  },
  {
    title: "Storage",
    value: "History tied to your account",
    description:
      "Generated explanations and related metadata can be retained so signed-in users can revisit prior analyses.",
    icon: BsDatabaseLock,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy that matches how CodeAI actually works."
      description="CodeAI is built to explain code quickly while keeping the handling of account data, submitted snippets, and saved history transparent. This page outlines the baseline privacy expectations for the product."
      lastUpdated={lastUpdated}
      sections={sections}
      highlights={highlights}
      relatedPage={{
        href: "/terms",
        label: "Read Terms of Service",
      }}
    />
  );
}
