"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from "@/lib/cart-context";
import { useCart } from "@/lib/cart-context";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-0.5">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-sm font-bold text-slate-900">${product.price.toFixed(2)}</p>
      </div>

      {/* Quantity + Remove */}
      <div className="flex flex-col items-end justify-between gap-2">
        <button
          onClick={() => removeItem(product.id)}
          className="text-slate-400 hover:text-rose-500 transition-colors p-1"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-2 py-1">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors text-slate-600"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm font-semibold text-slate-900 w-5 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors text-slate-600"
            aria-label="Increase quantity"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
        <p className="text-sm font-bold text-indigo-600">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
