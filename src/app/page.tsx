import { Hero } from "@/components/marketing/Hero";
import { ProductMockup } from "@/components/marketing/ProductMockup";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Features } from "@/components/marketing/Features";
import { WhoItsFor, FinalCTA } from "@/components/marketing/MarketingSections";

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <ProductMockup />
      
      <div className="h-[1px] bg-[linear-gradient(90deg,transparent,var(--color-border-gold),transparent)]" />
      <ProblemSection />
      
      <div className="h-[1px] bg-[linear-gradient(90deg,transparent,var(--color-border-gold),transparent)]" />
      <HowItWorks />
      
      <div className="h-[1px] bg-[linear-gradient(90deg,transparent,var(--color-border-gold),transparent)]" />
      <Features />
      
      <div className="h-[1px] bg-[linear-gradient(90deg,transparent,var(--color-border-gold),transparent)]" />
      <WhoItsFor />
      
      <FinalCTA />
    </>
  );
}
