"use client";

import React from "react";
import { useQuote } from "@/context/QuoteContext";
import { X, Plus, PhoneCall, ShieldCheck, Truck, Layers, Award } from "lucide-react";

export default function ProductDetailModal() {
  const {
    selectedProductForDetail,
    setSelectedProductForDetail,
    addToQuote,
    setIsQuoteModalOpen,
  } = useQuote();

  if (!selectedProductForDetail) return null;

  const product = selectedProductForDetail;

  const handleAddAndClose = () => {
    addToQuote(product, 1);
    setSelectedProductForDetail(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#10263f] text-white">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#ffd2a5] uppercase">
                {product.categoryName}
              </span>
              <div className="text-xs text-slate-300 font-mono">Mã SKU: {product.sku}</div>
            </div>
          </div>
          <button
            onClick={() => setSelectedProductForDetail(null)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold text-[#d96d10] bg-[#fff2e5] border border-[#f28c28]/20">
                {product.tag}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                <Award className="w-3 h-3 text-[#f28c28]" />
                Tiêu chuẩn: {product.standard}
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-[#10263f] leading-snug">
              {product.name}
            </h2>
            <div className="mt-2.5 flex items-start gap-2 p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900">
              <Layers className="w-4 h-4 text-[#d96d10] shrink-0 mt-0.5" />
              <div>
                <strong>Vật liệu & Xử lý:</strong> {product.material}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
              <span>Bảng thông số & Quy cách kỹ thuật</span>
            </h4>
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
              {Object.entries(product.specs).map(([key, val], idx) => (
                <div
                  key={key}
                  className={`flex justify-between p-3.5 ${
                    idx % 2 === 0 ? "bg-slate-50/80" : "bg-white"
                  } border-b border-slate-100 last:border-b-0`}
                >
                  <span className="font-medium text-slate-500">{key}</span>
                  <span className="font-bold text-[#10263f] text-right pl-4">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="text-slate-700 font-medium">Cam kết mác đồng & inox chuẩn kiểm định CO/CQ</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <Truck className="w-4 h-4 text-[#f28c28] shrink-0" />
              <span className="text-slate-700 font-medium">Giao hàng tận nơi toàn quốc - Hỗ trợ cắt đoạn lẻ</span>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100 gap-3">
          <a
            href="tel:0901234567"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#f28c28] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#f28c28]" />
            Tư vấn kỹ thuật: 090 123 4567
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedProductForDetail(null)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Đóng
            </button>
            <button
              onClick={handleAddAndClose}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#f28c28] hover:bg-[#d96d10] text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Plus className="w-4 h-4" />
              Thêm vào danh sách báo giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
