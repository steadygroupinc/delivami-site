import type { Metadata } from "next";
import { 
  Video, 
  Layout, 
  Box, 
  PenTool, 
  Zap, 
  Cpu, 
  Framer, 
  Code 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creative Roles 2026 | Future of Creative Work - Delivami",
  description: "Explore the most in-demand creative roles in 2026. From AI Content Creation to UX Design, see how the creative landscape is evolving with Delivami.",
  openGraph: {
    title: "Creative Roles 2026 | Future of Creative Work",
    description: "The definitive guide to the next generation of creative careers in Africa and beyond.",
    type: "website",
  },
};

const ROLES = [
  {
    title: "Video Content Creator",
    description: "Specialist in high-engagement short-form video for platforms like TikTok and Instagram. Mastering the art of the scroll-stop.",
    icon: Video,
    category: "Content",
  },
  {
    title: "UX/UI Designer",
    description: "Crafting the logical flow and visual surface of digital products. Ensuring every interaction feels intuitive and premium.",
    icon: Layout,
    category: "Design",
  },
  {
    title: "Product Designer",
    description: "Bridging innovation and functionality. Designing holistic solutions that solve real-world problems for the African market.",
    icon: Box,
    category: "Design",
  },
  {
    title: "Content Strategist",
    description: "Developing the persuasive voice and informative content that defines modern brands in a digital-first world.",
    icon: PenTool,
    category: "Content",
  },
  {
    title: "AI Content Creator",
    description: "Leveraging generative AI tools to rapidly produce and iterate on high-quality media assets with unprecedented scale.",
    icon: Zap,
    category: "AI & Future",
  },
  {
    title: "AI Prompt Engineer",
    description: "Mastering the art of precise input to unlock the full potential of creative AI models. The new literacy of the 21st century.",
    icon: Cpu,
    category: "AI & Future",
  },
  {
    title: "AR/VR Experience Designer",
    description: "Building immersive environments that redefine how users interact with virtual spaces and augmented reality.",
    icon: Framer,
    category: "AI & Future",
  },
  {
    title: "Creative Technologist",
    description: "The ultimate bridge between storytelling and cutting-edge software capabilities. Coding with a designer's eye.",
    icon: Code,
    category: "AI & Future",
  },
];

export default function CreativeJobsPage() {
  return (
    <>
      <main className="min-h-screen bg-navy text-ivory selection:bg-gold selection:text-navy">
        {/* Hero Section */}
        <section className="relative pt-[180px] pb-[100px] px-6 md:px-[60px] overflow-hidden">
          <div className="hero-glow absolute inset-0 pointer-events-none" />
          <div className="hero-grid absolute inset-0 opacity-20 pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto relative z-10 text-center">
            <p className="animate-fade-up text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-6 inline-block px-4 py-1 border border-gold/20 rounded-full bg-gold/5 backdrop-blur-sm">
              Future of Work
            </p>
            <h1 className="animate-fade-up font-serif text-[clamp(48px,8vw,100px)] font-bold leading-[0.95] tracking-[-3px] mb-8 [animation-delay:100ms]">
              Creative Roles <br />
              <em className="italic text-gold">of 2026.</em>
            </h1>
            <p className="animate-fade-up text-[18px] text-muted leading-relaxed max-w-[640px] mx-auto font-light [animation-delay:200ms]">
              The creative landscape is evolving faster than ever. We've curated the most essential roles for the next generation of African creators.
            </p>
          </div>
        </section>

        {/* Roles Grid */}
        <section className="pb-[140px] px-6 md:px-[60px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROLES.map((role, index) => (
              <div 
                key={role.title}
                className="animate-fade-up group relative p-8 bg-navy-mid border border-border-dim rounded-[24px] transition-all duration-500 hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                <div className="mb-6 w-12 h-12 bg-gold-glow border border-gold/10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                   <role.icon className="w-6 h-6 text-gold transition-colors group-hover:text-navy" />
                </div>
                
                <p className="text-[10px] tracking-[2px] uppercase text-gold/60 font-medium mb-2">
                  {role.category}
                </p>
                <h3 className="text-[20px] font-bold text-ivory mb-4 group-hover:text-gold transition-colors">
                  {role.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed font-light">
                  {role.description}
                </p>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[24px] pointer-events-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Join the Movement CTA */}
        <section className="py-[120px] px-6 md:px-[60px] relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
            <div className="max-w-[800px] mx-auto relative z-10">
                <h2 className="font-serif text-[42px] font-bold mb-6">Ready to lead the change?</h2>
                <p className="text-muted text-[16px] mb-10 max-w-[500px] mx-auto font-light">
                    Delivami is building the tools that empower these next-generation roles. Get early access and start delivering like a pro.
                </p>
                <a 
                    href="/#cta" 
                    className="inline-flex items-center gap-3 p-[16px_32px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-bold rounded-full transition-all hover:shadow-[0_8px_32px_rgba(212,175,55,0.3)] hover:-translate-y-0.5"
                >
                    Get Early Access
                    <Zap className="w-4 h-4" />
                </a>
            </div>
        </section>
      </main>
    </>
  );
}
