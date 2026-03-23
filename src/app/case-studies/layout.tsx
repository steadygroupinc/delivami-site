import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Creative Roles | Success Stories - Delivami",
  description: "Explore how African creators are using Delivami to deliver excellence. Read success stories from Video Editors, Photographers, and discover the emerging creative roles of 2026.",
  keywords: ["creative roles 2026", "video content creators", "UI/UX design Africa", "AI content creation", "digital delivery platform"],
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
