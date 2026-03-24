"use client";

import { useState } from "react";
import {
  Mail,
  Building,
  User,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";

const contactTypes = [
  { value: "investor", label: "Investor Inquiry" },
  { value: "partnership", label: "Partnership / Business" },
  { value: "media", label: "Media / Press" },
  { value: "research", label: "Research Collaboration" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "investor",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <div className="section-subtitle mb-4">Get in Touch</div>
            <h1 className="section-title mb-6">
              Let&apos;s Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Whether you are an investor, potential partner, researcher, or
              just curious about LENR we want to hear from you.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  detail: "contact@newfireenergy.com",
                  sub: "We respond within 24 hours",
                },
                {
                  icon: Building,
                  title: "Office",
                  detail: "30 N. Gould St. Suite R",
                  sub: "Casper, Wyoming 82609",
                },
                {
                  icon: User,
                  title: "Phone",
                  detail: "+1 813 778 1209",
                  sub: "Steve Previch, CEO",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-plasma-500/10 border border-plasma-400/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-plasma-400" />
                    </div>
                    <div>
                      <div className="text-white/50 text-xs font-medium uppercase tracking-wide mb-0.5">
                        {item.title}
                      </div>
                      <div className="text-white font-medium">{item.detail}</div>
                      <div className="text-white/35 text-sm">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Investor fast track */}
            <div className="mt-10 p-5 glass-card border-fire-400/20 bg-fire-400/5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-fire-400 animate-pulse" />
                Accredited Investor Fast Track
              </h3>
              <p className="text-white/50 text-sm mb-3">
                Verified accredited investors can access our data room,
                financial model, and schedule a direct call with our CEO within
                48 hours.
              </p>
              <p className="text-fire-300 text-sm font-medium">
                Select &ldquo;Investor Inquiry&rdquo; in the form to get started.
              </p>
            </div>
          </div>

          {/* Right side Form */}
          <div className="glass-card p-8">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-white/50">
                  Thank you for reaching out. A member of our team will be in
                  touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="font-display text-xl font-bold text-white mb-6">
                  <MessageSquare className="w-5 h-5 text-plasma-400 inline mr-2" />
                  Send a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-plasma-400/50 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs font-medium uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-plasma-400/50 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium uppercase tracking-wide mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-plasma-400/50 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium uppercase tracking-wide mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-plasma-400/50 rounded-xl text-white outline-none transition-all duration-200 text-sm appearance-none cursor-pointer"
                  >
                    {contactTypes.map((t) => (
                      <option
                        key={t.value}
                        value={t.value}
                        className="bg-navy-800"
                      >
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/50 text-xs font-medium uppercase tracking-wide mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about yourself and what you are looking for..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.09] hover:border-white/[0.15] focus:border-plasma-400/50 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200 text-sm resize-none"
                  />
                </div>

                <p className="text-white/25 text-xs">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="/privacy"
                    className="text-plasma-400/60 hover:text-plasma-400"
                  >
                    Privacy Policy
                  </a>
                  . This does not constitute a securities offering.
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
