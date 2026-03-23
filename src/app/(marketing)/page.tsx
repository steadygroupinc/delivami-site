import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { ProductMockup } from "@/components/marketing/ProductMockup";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Features } from "@/components/marketing/Features";
import { WhoItsFor, FinalCTA, Footer } from "@/components/marketing/MarketingSections";

export default function MarketingPage() {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}
