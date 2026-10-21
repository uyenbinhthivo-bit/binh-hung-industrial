import React from "react";
import { Phone, Clock, ShieldCheck, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#10263f] text-[#d6e0e9] text-xs border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            Vật tư công nghiệp chính hãng 100%
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline text-[#aebdca]">
            Giải pháp cung ứng thiết bị cho nhà máy & xưởng sản xuất
          </span>
        </div>

        <div className="flex items-center gap-5 text-[#c4d4e3]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#f28c28]" />
            <span>Thứ 2 - Thứ 7: 8:00 - 17:30</span>
          </div>
          <a
            href="tel:0901234567"
            className="flex items-center gap-1.5 hover:text-[#f28c28] transition-colors font-medium text-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#f28c28]" />
            <span>Hotline: 090 123 4567</span>
          </a>
          <a
            href="mailto:kinhdoanh@binhhungindustrial.vn"
            className="hidden lg:flex items-center gap-1.5 hover:text-[#f28c28] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#f28c28]" />
            <span>kinhdoanh@binhhungindustrial.vn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
