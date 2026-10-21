"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, PhoneCall, FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

export default function Header() {
  const { totalItems, setIsQuoteModalOpen, searchQuery, setSearchQuery } = useQuote();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("san-pham");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "TRANG CHỦ", href: "#" },
    { label: "DANH MỤC VẬT TƯ", href: "#danh-muc" },
    { label: "SẢN PHẨM NỔI BẬT", href: "#san-pham" },
    { label: "VÌ SAO CHỌN CHÚNG TÔI", href: "#loi-the" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3.5 sm:py-4">
          {/* Brand Logo */}
          <Link href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f28c28] to-[#d96d10] text-white flex items-center justify-center font-black text-lg tracking-tight shadow-md shadow-[#f28c28]/25 group-hover:scale-105 transition-transform">
              BH
            </div>
            <div>
              <span className="block text-slate-900 font-extrabold text-base sm:text-lg leading-tight tracking-tight">
                BINH HUNG INDUSTRIAL
              </span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-[#f28c28]">
                DÂY BỆN ĐỒNG • LƯỚI INOX • ĐỒNG MẠ
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-lg items-center relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm dây đồng bện, lưới inox 304, thanh cái mạ thiếc..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-11 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#f28c28] focus:ring-2 focus:ring-[#f28c28]/20 transition-all"
              />
              <button
                type="submit"
                aria-label="Tìm kiếm sản phẩm"
                className="absolute right-1 top-1 bottom-1 w-9 bg-[#f28c28] hover:bg-[#d96d10] text-white rounded-md flex items-center justify-center transition-colors shadow-xs"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Contact quick view */}
          <div className="hidden lg:flex items-center gap-3 pl-2 text-right">
            <div className="w-9 h-9 rounded-full bg-[#fff2e5] text-[#d96d10] flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] text-slate-500 font-medium leading-none">Hỗ trợ kỹ thuật & Báo giá</div>
              <a href="tel:0901234567" className="text-sm font-bold text-[#10263f] hover:text-[#f28c28] transition-colors leading-normal">
                090 123 4567
              </a>
            </div>
          </div>

          {/* RFQ Cart / Quote CTA Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="relative inline-flex items-center gap-2 bg-[#f28c28] hover:bg-[#d96d10] text-white font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Báo giá</span>
              <span className="sm:hidden">Báo giá</span>
              {totalItems > 0 && (
                <span className="bg-white text-[#d96d10] font-black text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
              <ArrowUpRight className="w-4 h-4 hidden sm:inline" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm vật tư, mã hàng, thương hiệu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-3.5 pr-10 py-2 rounded-lg border border-slate-300 bg-slate-50 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#f28c28]"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 w-8 bg-[#f28c28] text-white rounded-md flex items-center justify-center"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Main Navigation Bar */}
      <nav className="border-t border-slate-100 bg-slate-50/70 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 py-2.5 text-xs font-bold tracking-wider text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#f28c28] transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f28c28] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="text-xs font-semibold text-[#d96d10] flex items-center gap-1.5">
              <span>⚡ Gia công cắt đoạn, ép cosse & uốn đột thanh cái theo bản vẽ kỹ thuật</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2.5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#f28c28] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuoteModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#f28c28] text-white font-bold py-2.5 px-4 rounded-lg text-sm"
            >
              <FileText className="w-4 h-4" />
              Yêu cầu báo giá nhanh ({totalItems})
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
