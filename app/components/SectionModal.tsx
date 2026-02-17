"use client";

import { useState } from "react";

const sections = {
    brands: {
        title: "Our Brands",
        items: [
            { name: "Rolex", description: "The crown of watchmaking excellence" },
            { name: "Omega", description: "Precision and elegance since 1848" },
            { name: "TAG Heuer", description: "Swiss avant-garde since 1860" },
            { name: "Cartier", description: "The jeweler of kings" },
            { name: "IWC", description: "Prodigious watchmaking since 1868" },
            { name: "Breitling", description: "Instruments for professionals" }
        ]
    },
    rolex: {
        title: "Rolex Collection",
        items: [
            { name: "Submariner", description: "The iconic diver's watch" },
            { name: "GMT-Master II", description: "For world travelers" },
            { name: "Daytona", description: "The legendary chronograph" },
            { name: "Datejust", description: "The classic dress watch" },
            { name: "Day-Date", description: "The president's watch" },
            { name: "Explorer", description: "Built for adventure" }
        ]
    },
    finder: {
        title: "Watch Finder",
        items: [
            { name: "By Brand", description: "Browse watches by manufacturer" },
            { name: "By Price Range", description: "Find watches within your budget" },
            { name: "By Style", description: "Dress, sport, or casual watches" },
            { name: "By Movement", description: "Automatic, quartz, or manual" }
        ]
    },
    preowned: {
        title: "Pre-Owned Watches",
        items: [
            { name: "Certified Pre-Owned", description: "Authenticated luxury timepieces" },
            { name: "Vintage Collection", description: "Timeless classics from decades past" },
            { name: "Limited Editions", description: "Rare and exclusive pieces" },
            { name: "Trade-In Program", description: "Exchange your watch for credit" }
        ]
    },
    jewellery: {
        title: "Fine Jewellery",
        items: [
            { name: "Diamond Collections", description: "Exquisite diamond jewelry" },
            { name: "Gold & Platinum", description: "Precious metal masterpieces" },
            { name: "Engagement Rings", description: "Symbols of eternal love" },
            { name: "Custom Design", description: "Bespoke jewelry creation" }
        ]
    },
    lifestyle: {
        title: "Lifestyle",
        items: [
            { name: "Watch Accessories", description: "Premium straps and cases" },
            { name: "Care Products", description: "Maintain your timepiece" },
            { name: "Gift Ideas", description: "Perfect presents for watch lovers" },
            { name: "Collector's Items", description: "Exclusive memorabilia" }
        ]
    },
    service: {
        title: "Repair & Service",
        items: [
            { name: "Watch Servicing", description: "Expert maintenance and care" },
            { name: "Battery Replacement", description: "Quick and professional service" },
            { name: "Strap Replacement", description: "Wide selection of straps" },
            { name: "Polishing & Restoration", description: "Restore your watch's shine" },
            { name: "Warranty Services", description: "Authorized service center" }
        ]
    },
    boutiques: {
        title: "Our Boutiques",
        items: [
            { name: "Mumbai - Bandra", description: "Linking Road, Bandra West" },
            { name: "Delhi - Connaught Place", description: "Inner Circle, CP" },
            { name: "Bangalore - UB City", description: "Vittal Mallya Road" },
            { name: "Hyderabad - Jubilee Hills", description: "Road No. 36" },
            { name: "Chennai - Express Avenue", description: "Royapettah" }
        ]
    },
    guide: {
        title: "The Watch Guide",
        items: [
            { name: "Buying Guide", description: "How to choose the perfect watch" },
            { name: "Watch Care", description: "Maintaining your timepiece" },
            { name: "Movement Types", description: "Understanding watch mechanics" },
            { name: "Watch Terminology", description: "Essential watch vocabulary" }
        ]
    },
    offers: {
        title: "Special Offers",
        items: [
            { name: "Limited Time Deals", description: "Exclusive discounts on select models" },
            { name: "New Arrivals", description: "Latest additions to our collection" },
            { name: "Clearance Sale", description: "End of season special prices" },
            { name: "Bundle Offers", description: "Watch + accessories packages" }
        ]
    }
};

type SectionKey = keyof typeof sections | null;

interface SectionModalProps {
    section: SectionKey;
    onClose: () => void;
}

function SectionModal({ section, onClose }: SectionModalProps) {
    if (!section) return null;

    const data = sections[section];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8" onClick={onClose}>
            <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 border border-gray-700" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-white">{data.title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
                        ✕
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.items.map((item, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionModal;
export type { SectionKey };
