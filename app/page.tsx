"use client";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import NewArrivals from "./components/NewArrivals";
import ShopByBrand from "./components/ShopByBrand";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Navigation />
      <Hero />
      <Blog />
      <NewArrivals />
      <ShopByBrand />
      <Footer />
    </div>
  );
}
