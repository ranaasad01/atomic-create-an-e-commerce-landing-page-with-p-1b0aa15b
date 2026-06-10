"use client";

import { useCart } from "@/lib/cart-context";
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useState } from "react";

export default function OrderSummary() {
  const { totalPrice, totalItems, clearCart } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  const shipping = totalPrice >= 50 ? 0 : 5.99;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  const handleCheckout = () => {
    setCheckedOut(true);
    clearCart();
  };

  if (checkedOut) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">🎉</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Order Placed!</h3>
        <p className="text-slate-500 text-sm">
          Thank you for your purchase. You&apos;ll receive a confirmation email shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-5">Order Summary</h2>

      <div className="space-y-3 text-sm mb-5">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})</span>
          <span className="font-medium text-slate-900">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping</span>
          <span className={shipping === 0 ? "text-emerald-600 font-medium" : "font-medium text-slate-900"}>
            {shipping === 0 ? "FREE" : "$" + shipping.toFixed(2)}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-indigo-600 bg-indigo-50 rounded-lg px-3 py-2">
            Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
          </p>
        )}
        <div className="flex justify-between text-slate-600">
          <span>Estimated Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-slate-900 text-base">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
        <span>🔒</span>
        <span>Secure SSL encrypted checkout</span>
      </div>

      {/* Payment icons */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {["Visa", "MC", "Amex", "PayPal"].map((brand) => (
          <span
            key={brand}
            className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded font-medium"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
