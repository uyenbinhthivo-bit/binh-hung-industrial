import React from "react";
import { CheckCheck, Layers, FileCheck, Building2 } from "lucide-react";

export default function TrustRow() {
  const trustPoints = [
    {
      icon: CheckCheck,
      title: "Làm theo đúng yêu cầu",
      desc: "Cắt theo mét lẻ, ép đầu cốt thủy lực, đột lỗ uốn cong chuẩn theo bản vẽ CAD/PDF.",
    },
    {
      icon: Layers,
      title: "Danh mục đa dạng & Sẵn kho",
      desc: "Đầy đủ quy cách dây bện đồng 4-120mm², lưới inox 1-500 mesh, thanh cái mạ thiếc.",
    },
    {
      icon: FileCheck,
      title: "Báo giá nhanh & Minh bạch",
      desc: "Bảng chào giá chi tiết trong 30 phút, cam kết mác vật liệu chuẩn kèm chứng chỉ CO/CQ.",
    },
    {
      icon: Building2,
      title: "Hỗ trợ khách hàng doanh nghiệp",
      desc: "Chính sách công nợ linh hoạt, giá xuất xưởng ưu đãi cho nhà máy & nhà thầu M&E.",
    },
  ];

  return (
    <section id="loi-the" className="py-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-[#f28c28]/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fff2e5] text-[#d96d10] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10263f] leading-snug group-hover:text-[#f28c28] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
