"use client";

import Link from "next/link";
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Summer Sale — Up to 45% Off
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Shop the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                Latest Trends
              </span>
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-md leading-relaxed">
              Discover thousands of products across electronics, fashion, footwear, and accessories — all at unbeatable prices with free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
              >
                View Deals
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-indigo-200">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span>4.9/5 from 50k+ reviews</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Free returns</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-emerald-400">✓</span>
                <span>Secure checkout</span>
              </div>
            </div>
          </div>

          {/* Hero image grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-square bg-white/10">
                <img
                  src="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg"
                  alt="Wireless Headphones"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video bg-white/10">
                <img
                  src="https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF894,1000_QL80_.jpg"
                  alt="Leather Watch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden aspect-video bg-white/10">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa0bd45abac541d29ff40b492e15cfa4_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg"
                  alt="Running Sneakers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square bg-white/10">
                <img
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/aa0bd45abac541d29ff40b492e15cfa4_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg"
                  alt="Merino Sweater"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
            <div>
              <div className="text-2xl font-bold">50k+</div>
              <div className="text-xs text-indigo-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-xs text-indigo-200">Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold">99%</div>
              <div className="text-xs text-indigo-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Free</div>
              <div className="text-xs text-indigo-200">Shipping $50+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
