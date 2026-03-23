"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Code2, 
  BookOpen, 
  Search,
  ExternalLink,
  Users,
  Sun,
  Moon,
  Menu,
  X,
  Key,
  Palette,
  HelpCircle
} from "lucide-react";
import "./docs.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHeadings, setActiveHeadings] = useState<{id: string, text: string}[]>([]);

  useEffect(() => {
    // Extract headings from the page for the TOC
    const headings = Array.from(document.querySelectorAll("h2"))
      .map(h => ({
        id: h.id || h.innerText.toLowerCase().replace(/\s+/g, "-"),
        text: h.innerText
      }));
    setActiveHeadings(headings);
    
    // Apply IDs to headings if they don't have them
    document.querySelectorAll("h2").forEach(h => {
      if (!h.id) h.id = h.innerText.toLowerCase().replace(/\s+/g, "-");
    });
  }, [pathname, children]);

  const isActive = (path: string) => pathname === path ? "active" : "";

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("light-mode");
  };

  const navSections = [
    {
      title: "Introduction",
      links: [
        { href: "/docs", label: "Home", icon: <Home size={16} /> },
        { href: "/docs/getting-started", label: "Quick Start", icon: <Zap size={16} /> },
        { href: "/docs/client-experience", label: "Client Experience", icon: <BookOpen size={16} /> },
      ]
    },
    {
      title: "Core Features",
      links: [
        { href: "/docs/delivery", label: "Secure Delivery", icon: <ShieldCheck size={16} /> },
        { href: "/docs/payments", label: "Payments & Invoices", icon: <CreditCard size={16} /> },
        { href: "/docs/branding", label: "Branding & Domains", icon: <Palette size={16} /> },
        { href: "/docs/teams", label: "Team Workspaces", icon: <Users size={16} /> },
      ]
    },
    {
      title: "Developers",
      links: [
        { href: "/docs/api", label: "REST API Reference", icon: <Code2 size={16} /> },
        { href: "/docs/api-keys", label: "Managing Keys", icon: <Key size={16} /> },
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/docs/security", label: "Security & Infrastructure", icon: <ShieldCheck size={16} /> },
        { href: "/docs/troubleshooting", label: "Troubleshooting & FAQ", icon: <HelpCircle size={16} /> },
      ]
    }
  ];

  const filteredSections = navSections.map(section => ({
    ...section,
    links: section.links.filter(link => 
      link.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.links.length > 0);

  return (
    <div className={`docs-root ${isDarkMode ? "dark" : "light"}`}>
      <header className="docs-header">
        <div className="docs-container docs-header-inner">
          <div className="flex items-center gap-4 lg:gap-8">
            <button 
              className="lg:hidden p-2 text-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/docs" className="docs-logo">
              DELIVAMI <span className="text-gold">DOCS</span>
            </Link>
            <div className="hidden md:block relative docs-search-wrapper">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" size={14} />
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="docs-search-bar"
                style={{ paddingLeft: '36px' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 text-sm font-medium">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-gold/50 transition-all text-muted hover:text-gold"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="https://app.delivami.com/dashboard" className="hidden sm:block text-muted hover:text-ivory transition-colors">Dashboard</Link>
            <Link href="https://app.delivami.com/login" className="px-4 py-2 bg-gold text-navy rounded-lg font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
              Log in
            </Link>
          </div>
        </div>
      </header>
      
      <div className="docs-container docs-main">
        <aside className={`docs-sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <nav className="docs-nav">
            {filteredSections.map((section, idx) => (
              <div key={idx} className="docs-nav-section">
                <h3>{section.title}</h3>
                <ul>
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href} 
                        className={isActive(link.href)}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.icon} {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="docs-nav-section mt-12 pt-8 border-t border-white/5">
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="https://support.delivami.com" target="_blank" className="flex items-center gap-3">
                    <ExternalLink size={16} /> Support Center
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        
        <main className="docs-content">
          {children}
        </main>

        <aside className="docs-toc">
          {activeHeadings.length > 0 && (
            <>
              <h4>On this page</h4>
              <ul>
                {activeHeadings.map((h, i) => (
                  <li key={i}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>
      </div>
      
      <footer className="docs-footer">
        <div className="docs-container">
          <p className="font-serif italic text-lg mb-2 text-ivory">Delivami for creators everywhere.</p>
          <p>&copy; {new Date().getFullYear()} Delivami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
