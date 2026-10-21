import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/context/QuoteContext";
import ProductDetailModal from "@/components/ProductDetailModal";
import QuoteModal from "@/components/QuoteModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binh Hung Industrial | Dây Bện Đồng, Lưới Inox & Đồng Mạ",
  description:
    "Chuyên sản xuất & cung ứng Dây Bện Đồng tiếp địa, Lưới Inox 304/316, Thanh Cái Đồng Mạ Thiếc. Gia công bấm đầu cosse & uốn đột theo bản vẽ kỹ thuật.",
  keywords: [
    "dây bện đồng",
    "dây đồng bện tiếp địa",
    "dây đồng bện tròn",
    "khớp nối mềm đồng bện",
    "lưới inox 304",
    "lưới inox 316",
    "lưới lọc mesh",
    "thanh cái đồng mạ thiếc",
    "dây đồng mạ niken",
    "Binh Hung Industrial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased font-sans">
        <QuoteProvider>
          {children}
          <ProductDetailModal />
          <QuoteModal />
        </QuoteProvider>
      </body>
    </html>
  );
}
