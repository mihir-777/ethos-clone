"use client";

import { useState } from "react";

const brands = [
  "ROLEX",
  "Alpina",
  "ANGELUS",
  "ARMIN STROM",
  "ARNOLD & SON",
  "BAUME & MERCIER",
  "Bell & Ross",
  "BIANCHET",
  "BOVET",
  "BREITLING",
  "BREMONT",
  "BVLGARI",
  "CARL F. BUCHERER",
  "CHRISTIAN VAN DER KLAAUW",
  "CHRONOSWISS",
  "CIGA Design",
  "CORUM",
  "CVSTOS"
];

export default function ShopByBrand() {
  const [showAll, setShowAll] = useState(false);

  const displayedBrands = showAll ? brands : brands.slice(0, 15);

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-lg font-bold text-black">SHOP BY BRAND</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {displayedBrands.map((brand, index) => (
            <div
              key={index}
              className="border border-gray-200 h-24 flex items-center justify-center hover:border-black transition"
            >
              <span className="text-sm font-medium text-black">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {!showAll && brands.length > 15 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="border border-black px-10 py-2 text-sm"
            >
              MORE
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
