"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600">
            <Sparkles className="w-5 h-5" />
            ShopWave
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/#products" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Products
            </Link>
            <Link href="/#newsletter" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Deals
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#products"
            className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/#newsletter"
            className="block text-sm font-medium text-slate-700 hover:text-indigo-600 py-2"
            onClick={() => setMobileOpen(false)}
          >
            Deals
          </Link>
        </div>
      )}
    </header>
  );
}