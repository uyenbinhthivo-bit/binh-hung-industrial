"use client";

import React from "react";
import { ArrowRight, FileSpreadsheet, CheckCircle2, Award, Zap, Truck, ShieldCheck, Ruler } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function Hero() {
  const { openQuickQuote } = useQuote();

  return (
    <div className="bg-gradient-to-b from-slate-100 via-slate-50 to-white pt-6 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#10263f] via-[#143252] to-[#173957] text-white shadow-2xl border border-slate-700/50">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f28c28_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#f28c28]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#ffd2a5] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#f28c28] animate-pulse" />
                VẬT TƯ TIẾP ĐỊA & CƠ KHÍ CHÍNH XÁC
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Đúng vật tư.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffad55] to-[#f28c28]">
                  Vững vận hành.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
                Chuyên sản xuất & cung ứng <strong>Dây Bện Đồng</strong> tiếp địa, <strong>Lưới Inox</strong> 304/316 và <strong>Đồng Mạ Thiếc</strong> thanh cái. Gia công bấm đầu cosse, cắt uốn đột lỗ chính xác theo bản vẽ kỹ thuật.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#san-pham"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f28c28] hover:bg-[#d96d10] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#f28c28]/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Xem quy cách & bảng giá
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => openQuickQuote()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base transition-all hover:-translate-y-0.5"
                >
                  <FileSpreadsheet className="w-4 h-4 text-[#ffd2a5]" />
                  Gửi yêu cầu báo giá nhanh
                </button>
              </div>

              {/* Bullet highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f28c28] shrink-0" />
                  <span>Đồng OFHC 99.9% & Inox 304/316</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f28c28] shrink-0" />
                  <span>Gia công theo bản vẽ CAD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#f28c28] shrink-0" />
                  <span>Đầy đủ chứng chỉ CO/CQ & VAT</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual representation */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#f28c28] to-[#173957] rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

                <div className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-2xl text-white space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono tracking-wider text-slate-300">
                    <span className="flex items-center gap-1.5 font-bold text-[#ffd2a5]">
                      <Award className="w-4 h-4 text-[#f28c28]" />
                      BH INDUSTRIAL
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded text-[11px] font-sans font-semibold">
                      SẴN KHO GIAO NGAY
                    </span>
                  </div>

                  <div className="py-2 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#f28c28]/20 to-white/5 border border-white/10 shadow-inner mb-3">
                      <Zap className="w-16 h-16 text-[#f28c28]" />
                    </div>
                    <div className="text-xl font-extrabold text-white">Chất Lượng Kỹ Thuật Đạt Chuẩn</div>
                    <p className="text-xs text-slate-300 mt-1.5 max-w-xs mx-auto">
                      Đối tác cung cấp dây bện đồng và thanh cái tin cậy cho trạm biến áp, tủ điện phân phối và nhà máy công nghiệp.
                    </p>
                  </div>

                  {/* Feature stats mini-cards */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
                      <div className="text-base font-black text-[#ffd2a5]">4 - 120 mm²</div>
                      <div className="text-[11px] text-slate-300">Dây đồng bện tiếp địa</div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/20 border border-white/10 text-center">
                      <div className="text-base font-black text-cyan-300">1 - 500 Mesh</div>
                      <div className="text-[11px] text-slate-300">Lưới Inox 304 / 316</div>
                    </div>
                  </div>

                  {/* Floating tag */}
                  <div className="flex items-center justify-between bg-gradient-to-r from-[#f28c28] to-[#d96d10] text-slate-900 font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-md">
                    <div className="flex items-center gap-1.5 text-white">
                      <Ruler className="w-4 h-4" />
                      <span>Cắt đoạn & Ép cosse theo yêu cầu</span>
                    </div>
                    <span className="text-[10px] bg-white text-[#d96d10] px-2 py-0.5 rounded-full font-black">
                      THEO BẢN VẼ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
