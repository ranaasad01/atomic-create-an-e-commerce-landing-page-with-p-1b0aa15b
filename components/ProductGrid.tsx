"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import CategoryTabs from "./CategoryTabs";

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-1">
            Our Collection
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900">Featured Products</h2>
        </div>
        <p className="text-slate-500 text-sm">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>

      {/* Category tabs */}
      <div className="mb-8">
        <CategoryTabs selected={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg font-medium">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}
