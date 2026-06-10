"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

type Props = {
  product: Product;
};

const badgeStyles: Record<string, string> = {
  sale: "bg-rose-500 text-white",
  featured: "bg-amber-400 text-slate-900",
  new: "bg-emerald-500 text-white",
};

const badgeLabels: Record<string, string> = {
  sale: "Sale",
  featured: "Featured",
  new: "New",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={
            "w-3.5 h-3.5 " +
            (star <= Math.round(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-slate-200 fill-slate-200")
          }
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badge */}
        {product.badge && (
          <span
            className={
              "absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide " +
              badgeStyles[product.badge]
            }
          >
            {badgeLabels[product.badge]}
          </span>
        )}
        {/* Discount */}
        {discount && (
          <span className="absolute top-3 right-3 bg-rose-100 text-rose-600 text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 mb-3 line-clamp-2 flex-1">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className={
              "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 " +
              (added
                ? "bg-emerald-500 text-white"
                : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95")
            }
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
