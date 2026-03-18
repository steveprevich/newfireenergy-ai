"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-700/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="section-subtitle mb-4">Stay Updated</div>
        <h2 className="section-title mb-4">
          Follow the{" "}
          <span className="gradient-text">LENR Revolution</span>
        </h2>
        <p className="text-white/50 text-lg mb-10">
          Get quarterly investor updates, technology milestones, and exclusive
          research briefings delivered to your inbox.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-3 text-teal-400 text-lg font-semibold">
            <CheckCircle className="w-6 h-6" />
            You&apos;re on the list! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-white/[0.05] border border-white/[0.10] hover:border-white/[0.20] focus:border-plasma-400/50 rounded-xl text-white placeholder-white/30 outline-none transition-all duration-200 backdrop-blur-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary shrink-0 px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
              {status !== "loading" && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        )}

        <p className="mt-4 text-white/25 text-xs">
          No spam. Unsubscribe anytime. Your information is never shared.
        </p>
      </div>
    </section>
  );
}
