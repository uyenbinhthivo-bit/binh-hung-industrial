"use client";

import React from "react";
import { FileUp, PhoneCall, ArrowUpRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function QuoteBanner() {
  const { openQuickQuote } = useQuote();

  return (
    <section id="bao-gia" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#10263f] via-[#143252] to-[#173957] text-white p-8 sm:p-12 shadow-xl border border-slate-700/40">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffd2a5] text-xs font-bold uppercase tracking-wider">
                <FileUp className="w-3.5 h-3.5" />
                Dành cho nhà máy & nhà thầu M&E
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Bạn đã có sẵn bảng danh mục (BOM) cần báo giá?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Đừng mất thời gian tìm kiếm từng mã. Hãy gửi danh mục Excel hoặc bản vẽ quy cách cho chúng tôi. Đội ngũ chuyên viên Binh Hung Industrial sẽ bóc tách và gửi bảng chào giá cạnh tranh nhất trong ngày.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => openQuickQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f28c28] hover:bg-[#d96d10] text-white font-bold text-sm shadow-lg shadow-[#f28c28]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Gửi yêu cầu báo giá dự án
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://zalo.me/0901234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#ffd2a5]" />
                Zalo: 090 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
