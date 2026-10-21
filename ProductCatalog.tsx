"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import {
  Search,
  Check,
  Plus,
  Info,
  PackageCheck,
  RotateCcw,
  Sparkles,
  Layers,
  ShieldCheck,
  FileText,
} from "lucide-react";

// Distinct visual representations for Binh Hung Industrial product families
function ProductVisual({ type }: { type: Product["iconType"] }) {
  if (type === "copper-braid") {
    // Interwoven copper braid visual
    return (
      <div className="relative w-28 h-20 flex items-center justify-center">
        <svg viewBox="0 0 120 70" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="40%" stopColor="#d97706" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <pattern id="braidPattern" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="8" height="16" fill="url(#copperGrad)" />
              <rect x="8" width="8" height="16" fill="#b45309" opacity="0.85" />
              <line x1="0" y1="0" x2="16" y2="16" stroke="#fef3c7" strokeWidth="0.8" opacity="0.6" />
            </pattern>
          </defs>
          {/* Main braid strip */}
          <rect x="10" y="18" width="100" height="34" rx="6" fill="url(#braidPattern)" stroke="#78350f" strokeWidth="1.5" />
          {/* Terminal ferrule / lug left */}
          <rect x="6" y="15" width="14" height="40" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          <circle cx="13" cy="35" r="4" fill="#64748b" />
          {/* Terminal ferrule / lug right */}
          <rect x="100" y="15" width="14" height="40" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          <circle cx="107" cy="35" r="4" fill="#64748b" />
        </svg>
      </div>
    );
  }

  if (type === "mesh-inox") {
    // Stainless steel wire mesh grid visual
    return (
      <div className="relative w-24 h-20 flex items-center justify-center">
        <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="inoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          {/* Background border */}
          <rect x="10" y="10" width="80" height="60" rx="4" fill="#0f172a" fillOpacity="0.04" stroke="#64748b" strokeWidth="2" />
          {/* Vertical wires */}
          {[22, 34, 46, 58, 70, 82].map((x) => (
            <line key={x} x1={x} y1="10" x2={x} y2="70" stroke="url(#inoxGrad)" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {/* Horizontal wires */}
          {[20, 30, 40, 50, 60].map((y) => (
            <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="url(#inoxGrad)" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {/* Metal shine node highlights */}
          {[22, 46, 70].map((x) =>
            [20, 40, 60].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" fill="#ffffff" />
            ))
          )}
        </svg>
      </div>
    );
  }

  if (type === "plated-copper") {
    // Tin-plated / nickel-plated copper busbar
    return (
      <div className="relative w-28 h-20 flex items-center justify-center">
        <svg viewBox="0 0 120 70" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="silverPlated" x1="0%" y1="0%" x2="100%" y2="30%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="25%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="85%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="copperCore" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          {/* Front busbar plate */}
          <rect x="12" y="16" width="96" height="38" rx="4" fill="url(#silverPlated)" stroke="#475569" strokeWidth="1.2" />
          {/* Exposed edge cross-section showing pure copper core */}
          <rect x="100" y="18" width="6" height="34" rx="2" fill="url(#copperCore)" />
          {/* Precision bolt holes */}
          <circle cx="28" cy="35" r="5.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="50" cy="35" r="5.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
          <circle cx="72" cy="35" r="5.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
          {/* Metallic gloss reflection strip */}
          <line x1="16" y1="22" x2="94" y2="22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </svg>
      </div>
    );
  }

  // Custom CNC fabrication visual
  return (
    <div className="relative w-24 h-20 flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="fabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>
        {/* Bent metal piece */}
        <path d="M15 55 L45 55 L65 25 L85 25" fill="none" stroke="#0369a1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 55 L45 55 L65 25 L85 25" fill="none" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="55" r="3" fill="#ffffff" />
        <circle cx="78" cy="25" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
}

export default function ProductCatalog() {
  const {
    addToQuote,
    openQuickQuote,
    setSelectedProductForDetail,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useQuote();

  // Track which product was just added for feedback animation
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  // Filter products by category and search keyword
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const normalizedSearch = searchQuery.trim().toLowerCase();
      const matchSearch =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.sku.toLowerCase().includes(normalizedSearch) ||
        product.material.toLowerCase().includes(normalizedSearch) ||
        product.categoryName.toLowerCase().includes(normalizedSearch) ||
        product.standard.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddProduct = (product: Product) => {
    addToQuote(product, 1);
    setJustAddedId(product.id);
    setTimeout(() => {
      setJustAddedId((prev) => (prev === product.id ? null : prev));
    }, 1500);
  };

  return (
    <section id="san-pham" className="py-14 bg-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#d96d10] uppercase mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SẢN PHẨM & QUY CÁCH CHỦ LỰC
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10263f] tracking-tight">
              Dây Bện Đồng • Lưới Inox • Đồng Mạ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
            Nguyên liệu đồng OFHC 99.9%, Inox chuẩn mác 304/316 và lớp mạ thiếc/niken đồng đều. Hỗ trợ cắt đoạn, ép đầu cosse và uốn đột lỗ thanh cái theo bản vẽ kỹ thuật.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-7">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-[#10263f] text-white shadow-md scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200 shadow-xs"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search bar inside catalog */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Tìm mesh, tiết diện mm², Inox 304/316, đồng mạ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#f28c28] focus:ring-2 focus:ring-[#f28c28]/20 shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter status summary */}
        {(searchQuery || selectedCategory !== "all") && (
          <div className="mb-5 flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-600 shadow-xs">
            <span>
              Tìm thấy <strong className="text-[#10263f]">{filteredProducts.length}</strong> sản phẩm phù hợp
              {searchQuery && (
                <> với từ khóa &ldquo;<span className="text-[#f28c28] font-bold">{searchQuery}</span>&rdquo;</>
              )}
            </span>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="flex items-center gap-1 text-[#d96d10] font-bold hover:underline"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Đặt lại tất cả
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => {
              const isAdded = justAddedId === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 hover:border-[#f28c28]/60 hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Visual Header */}
                  <div className="relative p-6 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200/70 flex items-center justify-center border-b border-slate-100 h-44 group-hover:from-amber-50/40 group-hover:to-orange-50/30 transition-colors">
                    {/* Badge Tag */}
                    <span
                      className={`absolute top-3 left-3 font-extrabold text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md border shadow-xs ${
                        product.badgeColor || "bg-amber-100 text-amber-800 border-amber-300"
                      }`}
                    >
                      {product.tag}
                    </span>

                    {/* Stock badge */}
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Sẵn hàng
                    </span>

                    {/* Product Family Illustration */}
                    <div className="group-hover:scale-105 transition-transform duration-200">
                      <ProductVisual type={product.iconType} />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Standard */}
                      <div className="flex items-center justify-between text-[11px] mb-1.5 gap-2">
                        <span className="font-bold text-[#d96d10] uppercase tracking-wide truncate">
                          {product.categoryName}
                        </span>
                        <span className="font-mono text-slate-500 text-[10px] bg-slate-100 px-1.5 py-0.5 rounded shrink-0 border border-slate-200">
                          {product.standard}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-bold text-sm text-[#10263f] group-hover:text-[#f28c28] transition-colors leading-snug line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      {/* Material pill */}
                      <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 w-full truncate">
                        <Layers className="w-3 h-3 text-[#f28c28] shrink-0" />
                        <span className="truncate">{product.material}</span>
                      </div>

                      {/* Specs preview (2 rows) */}
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                        {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                          <div key={key} className="flex justify-between text-[11px] text-slate-600">
                            <span className="text-slate-400 truncate pr-2">{key}:</span>
                            <span className="font-semibold text-slate-800 truncate">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProductForDetail(product)}
                        className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-[#10263f] text-xs font-semibold flex items-center justify-center shrink-0 transition-colors"
                        title="Xem quy cách kỹ thuật đầy đủ"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleAddProduct(product)}
                        className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-[#10263f] hover:bg-[#173957] text-white active:scale-95"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Đã thêm ✓</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Thêm vào báo giá</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => openQuickQuote(product)}
                        className="py-2 px-2.5 rounded-lg bg-[#fff2e5] hover:bg-[#f28c28] text-[#d96d10] hover:text-white text-xs font-bold transition-all shrink-0"
                        title="Gửi yêu cầu báo giá ngay cho sản phẩm này"
                      >
                        Báo giá ngay
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <PackageCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">
              Không tìm thấy quy cách phù hợp
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Chúng tôi nhận dệt sợi đồng bện, cắt lưới inox và mạ thanh cái theo mọi kích thước riêng. Vui lòng gửi yêu cầu để nhận báo giá nhanh.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
              >
                Xem tất cả sản phẩm
              </button>
              <button
                onClick={() => openQuickQuote()}
                className="px-4 py-2 rounded-lg bg-[#f28c28] hover:bg-[#d96d10] text-xs font-bold text-white"
              >
                Yêu cầu gia công theo bản vẽ ↗
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
