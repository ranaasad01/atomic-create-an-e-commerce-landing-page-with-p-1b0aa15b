"use client";

import { categories } from "@/lib/products";

type Props = {
  selected: string;
  onChange: (cat: string) => void;
};

export default function CategoryTabs({ selected, onChange }: Props) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            "flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
            (selected === cat
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200")
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
