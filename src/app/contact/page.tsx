"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/MarketingSections";
import "./contact.css";

function RevealContact({ label, value, href }: { label: string, value: string, href: string }) {
  const [revealed, setRevealed] = useState(false);
  
  return (
    <div>
      <p className="text-muted text-[13px] uppercase tracking-wide mb-1 font-semibold">{label}</p>
      {revealed ? (
        <a href={href} className="text-gold font-medium hover:opacity-80 transition-opacity">
          {value}
        </a>
      ) : (
        <button 
          onClick={() => setRevealed(true)}
          className="text-gold/60 text-[13px] hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4"
        >
          Click to reveal
        </button>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-shell">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="contact-hero">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-gold tracking-[3px] uppercase font-bold mb-8">
            Contact Delivami
          </div>
          <h1 className="contact-h1">
            Let’s start a <br/> <em className="italic">conversation.</em>
          </h1>
          <p className="text-muted text-[17px] font-light max-w-[600px] mx-auto leading-relaxed">
            Have questions about Delivami? Need a custom solution? We’re here to help you professionalize your creative business.
          </p>
        </section>

        {/* CONTACT GRID */}
        <div className="contact-grid">
          <div className="space-y-12">
            <div>
              <h3 className="text-ivory font-bold text-[20px] mb-4">Direct Connect</h3>
              <div className="space-y-6">
                <RevealContact 
                  label="General Inquiries" 
                  value="hello@delivami.com" 
                  href="mailto:hello@delivami.com" 
                />
                <RevealContact 
                  label="Technical Support" 
                  value="support@delivami.com" 
                  href="mailto:support@delivami.com" 
                />
                <RevealContact 
                  label="Phone Support" 
                  value="+233 20 000 0000" 
                  href="tel:+233200000000" 
                />
              </div>
            </div>

            <div>
              <h3 className="text-ivory font-bold text-[20px] mb-4">Global Presence</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-muted">Accra, GH</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-muted">London, UK</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-muted">New York, US</span>
              </div>
            </div>

            <div className="bg-gold/5 border border-gold/10 p-6 rounded-2xl">
              <h4 className="text-gold text-[14px] font-bold mb-2">Support & Ticketing</h4>
              <p className="text-muted text-[13px] mb-4">Our team reviews every inquiry personally. Average response time: 24 hours.</p>
              <a 
                href="https://support.delivamin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[12px] font-bold px-4 py-2 bg-gold text-navy rounded-lg hover:bg-goldd transition-colors"
              >
                Open a Ticket
              </a>
            </div>
          </div>

          <div className="contact-card" id="contact-form">
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="contact-input-group">
                    <label className="contact-label">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ama Mensah"
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-input-group">
                    <label className="contact-label">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="ama@creative.co"
                      className="contact-input"
                    />
                  </div>
                </div>
                
                <div className="contact-input-group">
                  <label className="contact-label">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="contact-select"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnerships</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div className="contact-input-group">
                  <label className="contact-label">Message</label>
                  <textarea 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help your business thrive?"
                    className="contact-textarea"
                  />
                </div>

                <button 
                  disabled={loading}
                  type="submit" 
                  className="contact-btn"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="text-ivory text-[28px] font-bold mb-3">Message Received</h3>
                <p className="text-muted font-light">Thank you for reaching out! We&apos;ll be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-gold text-[14px] font-medium hover:underline">Send another message</button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ SECTION */}
        <section className="faq-sec">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[42px] font-bold text-center mb-16">Frequently Asked <em className="text-gold">Questions</em></h2>
            <div className="faq-grid">
              <div className="faq-item">
                <p className="faq-q">What is the average response time?</p>
                <p className="faq-a">We aim to respond to all inquiries within 24 hours. Priority 24/7 support is available for our Enterprise plan members.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Is my content secure?</p>
                <p className="faq-a">Yes. Your deliveries are shared via private links, and you can gate files behind payment so clients can only download after clearing their invoice.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">How do I get paid?</p>
                <p className="faq-a">We support local mobile money and bank transfers. Payouts are sent directly to your account within 24-48 hours.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Can my clients pay in their local currency?</p>
                <p className="faq-a">Yes. We support secure payments in various African currencies (GHS, NGN, KES, ZAR, etc.) and stable currencies like USD. We handle the conversion automatically.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Do I need a credit card to get started?</p>
                <p className="faq-a">No. Our Free plan is genuinely free forever with no credit card required. You only need a payment method if you decide to upgrade.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">What is the "Secure Client Portal"?</p>
                <p className="faq-a">It's a professional area where your clients can see every project you've delivered, track progress, and pay pending invoices in one place.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">What file types are supported?</p>
                <p className="faq-a">Everything from high-res photos and documents to adaptive video streaming for a premium client viewing experience.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Do my clients need an account?</p>
                <p className="faq-a">No. Your clients access their project portal via a direct link you share—no sign-up or login required for them.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Can I add more storage to my plan?</p>
                <p className="faq-a">Absolutely. If you run out of space, premium plans can add extra storage in 50GB increments to accommodate your growing business.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">What happens after my 14-day free trial?</p>
                <p className="faq-a">If you don't choose to upgrade, your account will move to our Free plan. You won't lose your work, but premium features will be adjusted to Free limits.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Do you offer custom integrations?</p>
                <p className="faq-a">Yes. We work closely with agencies and studios to build deep integrations with their existing workflows. Reach out to discuss your needs.</p>
              </div>
              <div className="faq-item">
                <p className="faq-q">Where are you located?</p>
                <p className="faq-a">Our primary headquarters is in Accra, Ghana, with distributed teams operating in London and New York to support our global user base.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Admin Link - Discretely hidden */}
      <div className="pb-10 text-center opacity-10 hover:opacity-50 transition-opacity">
        <Link href="/contact/messages?admin=true" className="text-[11px] text-muted decoration-none">System Submissions View</Link>
      </div>
    </div>
  );
}
