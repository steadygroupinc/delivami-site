"use client";

import { useState } from "react";
import { Turnstile } from "../common/Turnstile";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-turnstile-token": turnstileToken,
        },
        body: JSON.stringify({ 
          email,
          creatorType: "waitlist_user",
          region: "global"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-71px)] flex flex-col items-center justify-center p-[60px_24px_40px] md:p-[80px_60px_60px] relative overflow-hidden text-center"
      id="waitlist"
    >
      <div className="hero-glow absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" />
      <div className="hero-glow2 absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none" />
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      <div className="animate-fade-up inline-flex items-center gap-2 p-[5px_14px_5px_6px] bg-gold-glow border border-border-gold rounded-full text-[12px] text-gold tracking-[1px] uppercase font-medium mb-9">
        <div className="w-[22px] h-[22px] bg-gold-glow rounded-full flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="3" fill="var(--color-gold)" />
            <circle
              cx="5"
              cy="5"
              r="4.5"
              stroke="var(--color-gold)"
              strokeWidth="1"
              opacity=".3"
            />
          </svg>
        </div>
        Now accepting early access — Built for Africans
      </div>

      <h1
        className="animate-fade-up font-serif font-bold leading-none tracking-[-2px] text-ivory mb-7 text-[clamp(52px,7.5vw,96px)]"
        style={{ animationDelay: "0.1s" }}
      >
        Your work.
        <br />
        <em className="not-italic italic text-gold">Their approval.</em>
        <br />
        <span className="block text-ivory-dim">One link.</span>
      </h1>

      <p
        className="animate-fade-up text-[clamp(15px,1.8vw,18px)] text-muted leading-[1.75] max-w-[500px] mx-auto mb-12 font-light"
        style={{ animationDelay: "0.2s" }}
      >
        Stop sending Google Drive links over WhatsApp. Delivami gives African
        creatives a professional way to deliver work, collect client approvals,
        and get paid.
      </p>

      {!submitted ? (
        <form
          className="animate-fade-up flex flex-col gap-[10px] w-full max-w-[440px] mx-auto"
          style={{ animationDelay: "0.3s" }}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:flex-row gap-[10px] w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 p-[14px_18px] bg-[rgba(255,255,255,0.04)] border ${error ? "border-red-500" : "border-border-dim"} rounded-[10px] text-ivory font-sans text-[14px] outline-none transition-all duration-250 placeholder-muted focus:border-[rgba(212,175,55,0.4)] focus:bg-gold-glow focus:shadow-[0_0_0_3px_rgba(212,175,55,0.07)]`}
              placeholder="Enter your email address"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`p-[14px_24px] border-none rounded-[10px] bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-dim))] text-navy font-sans text-[14px] font-bold cursor-pointer transition-all duration-250 whitespace-nowrap tracking-[0.2px] hover:-translate-y-[1px] hover:shadow-[0_8px_28px_rgba(212,175,55,0.4)] ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Joining..." : "Get Early Access"}
            </button>
          </div>
          
          <Turnstile 
            onVerify={(token) => setTurnstileToken(token)} 
            options={{ theme: "dark", size: "normal" }}
          />

          {error && (
            <p className="text-red-500 text-[12px] mt-2 font-medium">{error}</p>
          )}
        </form>
      ) : (
        <div className="animate-fade-up p-[14px_24px] bg-[rgba(76,175,80,0.08)] border border-[rgba(76,175,80,0.25)] rounded-[10px] text-[#81c784] text-[14px] w-full max-w-[440px] mx-auto">
          🎉 You&apos;re on the list! We&apos;ll reach out when we launch.
        </div>
      )}

      <p
        className="animate-fade-up text-[12px] text-muted opacity-60 mt-3.5 tracking-[0.3px]"
        style={{ animationDelay: "0.4s" }}
      >
        Free to join · No credit card · Early access when we launch
      </p>

      <div
        className="animate-fade-up flex flex-wrap items-center justify-center gap-5 mt-14"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-50"
          >
            <path
              d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5Z"
              fill="var(--color-gold)"
              opacity=".6"
            />
          </svg>
          <span className="text-[12px] text-muted tracking-[0.5px]">
            <strong className="text-ivory font-semibold">Free</strong> to join
            waitlist
          </span>
        </div>
        <div className="w-[1px] h-[20px] bg-border-dim hidden sm:block" />
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-50"
          >
            <path
              d="M2 7C2 4.2 4.2 2 7 2C9.8 2 12 4.2 12 7C12 9.8 9.8 12 7 12C4.2 12 2 9.8 2 7Z"
              stroke="var(--color-muted)"
              strokeWidth="1.2"
            />
            <path
              d="M5 7L6.5 8.5L9 5.5"
              stroke="var(--color-muted)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[12px] text-muted tracking-[0.5px]">
            Paystack & <strong className="text-ivory font-semibold">MoMo</strong>
          </span>
        </div>
        <div className="w-[1px] h-[20px] bg-border-dim hidden sm:block" />
        <div className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-50"
          >
            <rect
              x="2"
              y="3"
              width="10"
              height="8"
              rx="1.5"
              stroke="var(--color-muted)"
              strokeWidth="1.2"
            />
            <path
              d="M5 3V2M9 3V2"
              stroke="var(--color-muted)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M2 6H12"
              stroke="var(--color-muted)"
              strokeWidth="1.2"
            />
          </svg>
          <span className="text-[12px] text-muted tracking-[0.5px]">
            Launching <strong className="text-ivory font-semibold">Q3 2025</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
