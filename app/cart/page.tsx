"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, Sparkles } from 'lucide-react';
import { useCart } from "@/lib/cart-context";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { state, totalItems } = useCart();

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-slate-900">Your Cart</h1>
            {totalItems > 0 && (
              <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {state.items.length === 0 ? (
          /* Empty cart state */
          <div className="text-center py-24">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Looks like you haven&apos;t added anything yet. Browse our collection and find something you love!
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-700 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Browse Products
            </Link>

            {/* Featured categories */}
            <div className="mt-16">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Shop by Category</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {[
                  { name: "Electronics", emoji: "🎧", color: "bg-blue-50 text-blue-700" },
                  { name: "Clothing", emoji: "👕", color: "bg-purple-50 text-purple-700" },
                  { name: "Footwear", emoji: "👟", color: "bg-orange-50 text-orange-700" },
                  { name: "Accessories", emoji: "⌚", color: "bg-emerald-50 text-emerald-700" },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href="/#products"
                    className={"rounded-2xl p-5 text-center hover:scale-105 transition-transform " + cat.color}
                  >
                    <div className="text-3xl mb-2">{cat.emoji}</div>
                    <div className="text-sm font-semibold">{cat.name}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Cart with items */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold text-slate-900">Cart Items</h2>
                  <Link
                    href="/#products"
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                  >
                    + Add more items
                  </Link>
                </div>
                <div>
                  {state.items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Promo / trust section */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { icon: "🚚", title: "Free Shipping", desc: "On orders over $50" },
                  { icon: "↩️", title: "Easy Returns", desc: "30-day hassle-free returns" },
                  { icon: "🔒", title: "Secure Payment", desc: "256-bit SSL encryption" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-slate-100 p-4 flex items-start gap-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
