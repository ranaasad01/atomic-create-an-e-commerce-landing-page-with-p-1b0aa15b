"use client";

import { useState } from "react";
import { Mail, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mb-6">
          <Mail className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Get Exclusive Deals in Your Inbox
        </h2>
        <p className="text-indigo-200 mb-8 text-lg">
          Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and members-only discounts up to 50% off.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl">
            <Check className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">You&apos;re subscribed! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <p className="text-indigo-300 text-xs mt-4">
          No spam, ever. Unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
