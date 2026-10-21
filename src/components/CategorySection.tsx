"use client";

import React from "react";
import { ArrowRight, Cable, Grid, Sparkles, Wrench } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function CategorySection() {
  const { selectedCategory, setSelectedCategory } = useQuote();

  const categories = [
    {
      id: "day-ben-dong",
      name: "Dây Bện Đồng",
      desc: "Dây bện dẹp, bện tròn, sợi tiếp địa, khớp nối mềm triệt tiêu rung chấn máy biến áp",
      icon: Cable,
      specsSummary: "Tiết diện 4mm² - 120mm² • OFHC 99.9%",
    },
    {
      id: "luoi-inox",
      name: "Lưới Inox",
      desc: "Lưới đan ô vuông Inox 304/316, lưới hàn công nghiệp, lưới dập giãn hình thoi",
      icon: Grid,
      specsSummary: "Cỡ ô 1 - 500 Mesh • Inox 304 / 316",
    },
    {
      id: "dong-ma",
      name: "Đồng Mạ & Thanh Cái",
      desc: "Thanh cái đồng C1100 mạ thiếc, dây đồng mạ niken chịu nhiệt 400°C, cuộn đồng mạ",
      icon: Sparkles,
      specsSummary: "Mạ thiếc 3-12µm • IACS ≥ 98%",
    },
    {
      id: "all",
      name: "Gia Công Theo Bản Vẽ",
      desc: "Bấm đầu cosse thủy lực, cắt uốn đột lỗ thanh cái đồng theo sơ đồ tủ bảng điện",
      icon: Wrench,
      specsSummary: "Gia công chính xác • Cắt đoạn lẻ",
    },
  ];

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    const el = document.getElementById("san-pham");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="danh-muc" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-extrabold tracking-widest text-[#d96d10] uppercase mb-1.5">
              DANH MỤC VẬT TƯ TIÊU BIỂU
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10263f] tracking-tight">
              3 Nhóm vật tư chủ lực của Binh Hung Industrial
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Sản xuất & cung ứng chuẩn quy cách kỹ thuật, đầy đủ chứng chỉ chất lượng xuất xưởng CO/CQ, đáp ứng tiêu chuẩn ngành điện & công nghiệp nặng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between h-full bg-white group cursor-pointer ${
                  isSelected
                    ? "border-[#f28c28] ring-2 ring-[#f28c28]/20 shadow-md"
                    : "border-slate-200/90 hover:border-[#f28c28]/50 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#fff2e5] text-[#d96d10] flex items-center justify-center mb-4 group-hover:bg-[#f28c28] group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-[#10263f] group-hover:text-[#f28c28] transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[11px] text-[#d96d10] font-bold">
                    {cat.specsSummary}
                  </span>
                  <span className="text-[#f28c28] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Xem hàng <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
