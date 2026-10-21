import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import CategorySection from "@/components/CategorySection";
import ProductCatalog from "@/components/ProductCatalog";
import QuoteBanner from "@/components/QuoteBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustRow />
        <CategorySection />
        <ProductCatalog />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}
