"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Loader2, CheckCircle2, Users } from "lucide-react";

const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  creatorType: z.string().min(1, "Please select what you do"),
});

type WaitlistValues = z.infer<typeof waitlistSchema>;

export function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [signupCount, setSignupCount] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      creatorType: "video_editor",
    }
  });

  // Fetch signup count for social proof
  useEffect(() => {
    fetch("/api/waitlist/count")
      .then(res => res.json())
      .then(data => setSignupCount(data.count))
      .catch(() => setSignupCount(null));
  }, [submitted]);

  const onSubmit = async (data: WaitlistValues) => {
    setServerError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to join waitlist");
      }

      setSubmitted(true);
    } catch (err: any) {
      setServerError(err.message);
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
        <div className="w-full max-w-[480px] mx-auto">
          <form
            className="animate-fade-up flex flex-col gap-4 w-full"
            style={{ animationDelay: "0.3s" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col items-start gap-1">
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="Email address"
                  className={errors.email ? "border-red-500/50" : ""}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-medium pl-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start gap-1">
                <Select
                  {...register("creatorType")}
                  disabled={isSubmitting}
                  className={errors.creatorType ? "border-red-500/50" : ""}
                >
                  <option value="" disabled className="bg-navy">What type of creative are you?</option>
                  <option value="video_editor" className="bg-navy">Video Editor</option>
                  <option value="photographer" className="bg-navy">Photographer</option>
                  <option value="motion_designer" className="bg-navy">Motion Designer</option>
                  <option value="graphic_designer" className="bg-navy">Graphic Designer</option>
                  <option value="creative_agency" className="bg-navy">Creative Agency</option>
                  <option value="other" className="bg-navy">Other</option>
                </Select>
                {errors.creatorType && (
                  <span className="text-[10px] text-red-400 font-medium pl-1">
                    {errors.creatorType.message}
                  </span>
                )}
              </div>
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full group font-bold text-base h-12"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Join Waitlist"
              )}
            </Button>
          </form>

          {signupCount !== null && (
            <div className="mt-4 flex items-center justify-center gap-2 text-muted text-[13px] animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Users size={14} className="text-gold opacity-70" />
              <span>Join <strong className="text-ivory">{signupCount}</strong> creators waiting for Delivami</span>
            </div>
          )}

          {serverError && (
            <p className="text-[11px] text-red-400 mt-2 font-medium">
              {serverError}
            </p>
          )}
        </div>
      ) : (
        <div className="animate-fade-up p-[24px_32px] bg-[rgba(76,175,80,0.08)] border border-[rgba(76,175,80,0.25)] rounded-[18px] text-[#81c784] text-[15px] w-full max-w-[480px] mx-auto flex flex-col items-center justify-center gap-3">
          <CheckCircle2 size={24} />
          <div className="flex flex-col gap-1">
             <span className="font-bold text-ivory">You&apos;re on the list!</span>
             <span className="opacity-90">Check your email for confirmation. We&apos;ll be in touch.</span>
          </div>
        </div>
      )}

      <p
        className="animate-fade-up text-[12px] text-muted opacity-60 mt-6 tracking-[0.3px]"
        style={{ animationDelay: "0.5s" }}
      >
        Free to join · No credit card · Built for Africans
      </p>

      <div
        className="animate-fade-up flex flex-wrap items-center justify-center gap-5 mt-14"
        style={{ animationDelay: "0.6s" }}
      >
        {/* Trust Badges */}
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-50">
            <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5Z" fill="var(--color-gold)" opacity=".6" />
          </svg>
          <span className="text-[12px] text-muted tracking-[0.5px]">
            <strong className="text-ivory font-semibold">Free</strong> to join
          </span>
        </div>
        <div className="w-[1px] h-[20px] bg-border-dim hidden sm:block" />
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-50">
            <circle cx="7" cy="7" r="2.5" stroke="var(--color-muted)" strokeWidth="1.2" />
            <path d="M2 12C2 9.8 4.2 8 7 8C9.8 8 12 9.8 12 12" stroke="var(--color-muted)" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[12px] text-muted tracking-[0.5px]">
            Paystack & <strong className="text-ivory font-semibold">MoMo</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
