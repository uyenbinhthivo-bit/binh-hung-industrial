"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer id="lien-he" className="bg-[#0b1d30] text-[#aebdca] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#f28c28] text-white flex items-center justify-center font-black text-base shadow-md">
                BH
              </div>
              <div>
                <span className="block text-white font-extrabold text-base tracking-tight">
                  BINH HUNG INDUSTRIAL
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#f28c28]">
                  DÂY BỆN ĐỒNG • LƯỚI INOX • ĐỒNG MẠ
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Đơn vị chuyên sâu về gia công và cung ứng <strong>Dây Bện Đồng</strong> tiếp địa, <strong>Lưới Inox</strong> 304/316 lọc công nghiệp và <strong>Đồng Mạ Thiếc</strong> thanh cái cho nhà thầu M&E, xưởng sản xuất tủ bảng điện và nhà máy cơ khí trên toàn quốc.
            </p>

            <div className="space-y-2 text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f28c28] shrink-0 mt-0.5" />
                <span>Kho xưởng: KCN Sóng Thần, Dĩ An, Bình Dương / TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f28c28] shrink-0" />
                <span>Hotline / Zalo kỹ thuật: <strong>090 123 4567</strong> (Phản hồi 24/7)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f28c28] shrink-0" />
                <span>Email tiếp nhận báo giá: kinhdoanh@binhhungindustrial.vn</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Điều hướng
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#danh-muc" className="hover:text-[#f28c28] transition-colors">
                  Danh mục 3 nhóm hàng
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Quy cách & Sản phẩm
                </a>
              </li>
              <li>
                <a href="#loi-the" className="hover:text-[#f28c28] transition-colors">
                  Năng lực gia công
                </a>
              </li>
              <li>
                <a href="#bao-gia" className="hover:text-[#f28c28] transition-colors">
                  Gửi bản vẽ & bảng BOM
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Sản phẩm chủ lực
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Dây đồng bện dẹp & tròn (4 - 120mm²)
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Khớp nối mềm đồng bện máy biến áp
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Lưới Inox 304 / 316 (1 - 500 Mesh)
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Thanh cái đồng C1100 mạ thiếc
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-[#f28c28] transition-colors">
                  Gia công uốn đột theo bản vẽ CAD
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Commitments */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              Cam kết chất lượng
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Đồng OFHC & Inox chuẩn</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Đầy đủ CO/CQ & Hóa đơn VAT</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gia công chính xác theo bản vẽ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {currentYear} <strong>Binh Hung Industrial</strong>. Chuyên Dây Bện Đồng, Lưới Inox & Đồng Mạ.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Chính sách chất lượng</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Hỗ trợ kỹ thuật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
