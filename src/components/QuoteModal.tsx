"use client";

import React, { useState } from "react";
import { useQuote } from "@/context/QuoteContext";
import {
  X,
  Trash2,
  Plus,
  Minus,
  Send,
  CheckCircle2,
  MessageSquare,
  Mail,
  Building,
  User,
  Phone,
  FileSpreadsheet,
  AlertCircle,
} from "lucide-react";

export default function QuoteModal() {
  const {
    items,
    updateQuantity,
    removeFromQuote,
    clearQuote,
    isQuoteModalOpen,
    setIsQuoteModalOpen,
  } = useQuote();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    taxId: "",
    address: "",
    notes: "",
  });

  const [customItemText, setCustomItemText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rfqCode, setRfqCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone.trim() || !formData.fullName.trim()) {
      setErrorMsg("Vui lòng điền họ tên và số điện thoại để chúng tôi liên hệ gửi báo giá.");
      return;
    }

    // Generate random RFQ Code
    const code = "RFQ-BH-" + Math.floor(100000 + Math.random() * 900000);
    setRfqCode(code);
    setIsSubmitted(true);
    setErrorMsg("");
  };

  const handleClose = () => {
    setIsQuoteModalOpen(false);
    if (isSubmitted) {
      setIsSubmitted(false);
      clearQuote();
    }
  };

  const prepareTextSummary = () => {
    let summary = `YÊU CẦU BÁO GIÁ - ${formData.company || formData.fullName}\n`;
    summary += `Người liên hệ: ${formData.fullName} - ${formData.phone}\n`;
    if (formData.email) summary += `Email: ${formData.email}\n`;
    summary += `\nDANH MỤC VẬT TƯ CẦN BÁO GIÁ:\n`;

    if (items.length > 0) {
      items.forEach((item, index) => {
        summary += `${index + 1}. [${item.product.sku}] ${item.product.name} - SL: ${item.quantity}\n`;
      });
    } else {
      summary += `(Chưa chọn mã trong web - Yêu cầu báo giá theo mô tả)\n`;
    }

    if (customItemText) {
      summary += `\nMã hàng bổ sung:\n${customItemText}\n`;
    }
    if (formData.notes) {
      summary += `\nGhi chú thêm: ${formData.notes}\n`;
    }
    return summary;
  };

  const handleSendViaMail = () => {
    const subject = encodeURIComponent(`Yêu cầu báo giá vật tư công nghiệp - ${formData.company || formData.fullName}`);
    const body = encodeURIComponent(prepareTextSummary());
    window.location.href = `mailto:kinhdoanh@binhhungindustrial.vn?subject=${subject}&body=${body}`;
  };

  const handleSendViaZalo = () => {
    const text = encodeURIComponent(prepareTextSummary());
    window.open(`https://zalo.me/0901234567?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#10263f] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#f28c28] text-white flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold leading-tight">Yêu cầu báo giá vật tư & thiết bị</h2>
              <span className="text-[11px] text-slate-300">
                Phản hồi bảng chào giá chính thức trong vòng 30 phút
              </span>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Success Screen */
          <div className="p-8 sm:p-12 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700">
                Mã phiếu: {rfqCode}
              </span>
              <h3 className="text-2xl font-black text-[#10263f]">
                Tiếp nhận yêu cầu báo giá thành công!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong className="text-slate-900">{formData.fullName}</strong>. Đội ngũ chuyên viên kỹ thuật của <strong>Binh Hung Industrial</strong> đang xử lý và sẽ gửi bảng chào giá chi tiết tới số điện thoại/email của bạn trong thời gian sớm nhất.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div><strong>Người liên hệ:</strong> {formData.fullName} ({formData.phone})</div>
              {formData.company && <div><strong>Công ty:</strong> {formData.company}</div>}
              {formData.email && <div><strong>Email:</strong> {formData.email}</div>}
              <div><strong>Số lượng sản phẩm yêu cầu:</strong> {items.length} mục</div>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSendViaZalo}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Gửi mã RFQ qua Zalo (090 123 4567)
              </button>
              <button
                onClick={handleClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                Hoàn tất & Tiếp tục xem hàng
              </button>
            </div>
          </div>
        ) : (
          /* Form & Product List */
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            {errorMsg && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* List of selected items */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Danh mục sản phẩm đã chọn ({items.length})
                </h4>
                {items.length > 0 && (
                  <button
                    type="button"
                    onClick={clearQuote}
                    className="text-xs text-rose-600 hover:text-rose-700 font-semibold"
                  >
                    Xóa tất cả
                  </button>
                )}
              </div>

              {items.length > 0 ? (
                <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 max-h-56 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3.5 flex items-center justify-between gap-3 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-mono text-[#d96d10] font-bold">
                          {item.product.sku}
                        </div>
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {item.product.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {item.product.material}
                        </div>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1.5 hover:bg-slate-200 text-slate-600"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1.5 hover:bg-slate-200 text-slate-600"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromQuote(item.product.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-dashed border-slate-300 text-center bg-slate-50/70">
                  <p className="text-xs text-slate-500">
                    Bạn chưa chọn sản phẩm nào trong danh mục. Bạn vẫn có thể điền mã hàng hoặc mô tả yêu cầu ở ô bên dưới!
                  </p>
                </div>
              )}
            </div>

            {/* Custom Extra Items Textarea */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Mã hàng hoặc quy cách khác (nếu có)
              </label>
              <textarea
                rows={2}
                placeholder="VD: Cần 20 đoạn dây đồng bện 25mm² dài 300mm ép 2 đầu cosse M8, 1 cuộn lưới inox 304 ô 40 mesh khổ 1.2m, thanh đồng mạ thiếc 40x5mm..."
                value={customItemText}
                onChange={(e) => setCustomItemText(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs placeholder-slate-400 focus:outline-none focus:border-[#f28c28]"
              />
            </div>

            {/* Customer Information Form */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                2. Thông tin tiếp nhận báo giá
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Họ và tên người liên hệ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#f28c28]"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Số điện thoại / Zalo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="090 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#f28c28]"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Email nhận báo giá
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="muahang@doanhnghiep.vn"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#f28c28]"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">
                    Tên công ty / Xưởng sản xuất
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Công ty TNHH Cơ Khí Chế Tạo..."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#f28c28]"
                    />
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-slate-600 font-semibold mb-1">
                    Ghi chú tiến độ hoặc địa điểm giao hàng
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Cần giao gấp về KCN VSIP 1, Bình Dương trong ngày mai..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#f28c28]"
                  />
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleSendViaZalo}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Gửi qua Zalo
                </button>
                <button
                  type="button"
                  onClick={handleSendViaMail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Gửi qua Email
                </button>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f28c28] hover:bg-[#d96d10] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                Gửi yêu cầu báo giá ngay
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
