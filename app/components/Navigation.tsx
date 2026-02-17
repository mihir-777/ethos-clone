"use client";

import Image from "next/image";
import { useState } from "react";

const dropdownData = {
    brands: [
        { name: "Rolex", description: "The crown of watchmaking excellence" },
        { name: "Omega", description: "Precision and elegance since 1848" },
        { name: "TAG Heuer", description: "Swiss avant-garde since 1860" },
        { name: "Cartier", description: "The jeweler of kings" },
        { name: "IWC", description: "Prodigious watchmaking since 1868" },
        { name: "Breitling", description: "Instruments for professionals" }
    ],
    rolex: [
        { name: "Submariner", description: "The iconic diver's watch" },
        { name: "GMT-Master II", description: "For world travelers" },
        { name: "Daytona", description: "The legendary chronograph" },
        { name: "Datejust", description: "The classic dress watch" },
        { name: "Day-Date", description: "The president's watch" },
        { name: "Explorer", description: "Built for adventure" }
    ],
    finder: [
        { name: "By Brand", description: "Browse watches by manufacturer" },
        { name: "By Price Range", description: "Find watches within your budget" },
        { name: "By Style", description: "Dress, sport, or casual watches" },
        { name: "By Movement", description: "Automatic, quartz, or manual" }
    ],
    preowned: [
        { name: "Certified Pre-Owned", description: "Authenticated luxury timepieces" },
        { name: "Vintage Collection", description: "Timeless classics from decades past" },
        { name: "Limited Editions", description: "Rare and exclusive pieces" },
        { name: "Trade-In Program", description: "Exchange your watch for credit" }
    ],
    jewellery: [
        { name: "Diamond Collections", description: "Exquisite diamond jewelry" },
        { name: "Gold & Platinum", description: "Precious metal masterpieces" },
        { name: "Engagement Rings", description: "Symbols of eternal love" },
        { name: "Custom Design", description: "Bespoke jewelry creation" }
    ],
    lifestyle: [
        { name: "Watch Accessories", description: "Premium straps and cases" },
        { name: "Care Products", description: "Maintain your timepiece" },
        { name: "Gift Ideas", description: "Perfect presents for watch lovers" },
        { name: "Collector's Items", description: "Exclusive memorabilia" }
    ],
    service: [
        { name: "Watch Servicing", description: "Expert maintenance and care" },
        { name: "Battery Replacement", description: "Quick and professional service" },
        { name: "Strap Replacement", description: "Wide selection of straps" },
        { name: "Polishing & Restoration", description: "Restore your watch's shine" },
        { name: "Warranty Services", description: "Authorized service center" }
    ],
    boutiques: [
        { name: "Mumbai - Bandra", description: "Linking Road, Bandra West" },
        { name: "Delhi - Connaught Place", description: "Inner Circle, CP" },
        { name: "Bangalore - UB City", description: "Vittal Mallya Road" },
        { name: "Hyderabad - Jubilee Hills", description: "Road No. 36" },
        { name: "Chennai - Express Avenue", description: "Royapettah" }
    ],
    guide: [
        { name: "Buying Guide", description: "How to choose the perfect watch" },
        { name: "Watch Care", description: "Maintaining your timepiece" },
        { name: "Movement Types", description: "Understanding watch mechanics" },
        { name: "Watch Terminology", description: "Essential watch vocabulary" }
    ],
    offers: [
        { name: "Limited Time Deals", description: "Exclusive discounts on select models" },
        { name: "New Arrivals", description: "Latest additions to our collection" },
        { name: "Clearance Sale", description: "End of season special prices" },
        { name: "Bundle Offers", description: "Watch + accessories packages" }
    ]
};

type DropdownKey = keyof typeof dropdownData | null;

export default function Navigation() {
    const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);

    const toggleDropdown = (key: DropdownKey) => {
        setActiveDropdown(activeDropdown === key ? null : key);
    };

    return (
        <nav className="bg-black border-b border-gray-800 relative">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold tracking-tight">
                        <span className="text-white">ethos</span>
                        <span className="text-gray-600 mx-2">|</span>
                        <span className="text-xs font-normal text-gray-400">
                            WATCH<br />BOUTIQUES
                        </span>
                    </div>
                </div>

                <div className="flex-1 flex justify-center">
                    <div className="text-sm italic text-red-500">
                        Monday, February 16, 2026
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Image
                        src="/rolex-logo.svg"
                        alt="Rolex Official Retailer"
                        width={80}
                        height={80}
                        className="object-contain brightness-200"
                    />
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="flex items-center justify-between px-6 py-3">
                    <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
                        <button onClick={() => toggleDropdown('brands')} className="hover:text-white transition-colors">BRANDS</button>
                        <button onClick={() => toggleDropdown('rolex')} className="hover:text-white transition-colors">ROLEX</button>
                        <button onClick={() => toggleDropdown('finder')} className="hover:text-white transition-colors">WATCH FINDER</button>
                        <button onClick={() => toggleDropdown('preowned')} className="hover:text-white transition-colors">PRE-OWNED</button>
                        <button onClick={() => toggleDropdown('jewellery')} className="hover:text-white transition-colors">JEWELLERY</button>
                        <button onClick={() => toggleDropdown('lifestyle')} className="hover:text-white transition-colors">LIFESTYLE</button>
                        <button onClick={() => toggleDropdown('service')} className="hover:text-white transition-colors">REPAIR & SERVICE</button>
                        <button onClick={() => toggleDropdown('boutiques')} className="hover:text-white transition-colors">BOUTIQUES</button>
                        <button onClick={() => toggleDropdown('guide')} className="hover:text-white transition-colors">THE WATCH GUIDE</button>
                        <button onClick={() => toggleDropdown('offers')} className="text-red-500 hover:text-red-400 transition-colors">SPECIAL OFFERS</button>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors">
                        🔍
                    </button>
                </div>
            </div>

            {activeDropdown && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-2xl z-50">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {dropdownData[activeDropdown].map((item, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
                                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
