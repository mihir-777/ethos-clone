"use client";

import Image from "next/image";
import { useState } from "react";

const watches = [
    {
        id: 1,
        brand: "Rolex",
        model: "Land-Dweller",
        image: "/assets/1.webp",
        description: "The ultimate tool watch for extreme conditions"
    },
    {
        id: 2,
        brand: "Rolex",
        model: "Submariner",
        image: "/assets/2.webp",
        description: "The iconic diver's watch since 1953"
    },
    {
        id: 3,
        brand: "Rolex",
        model: "GMT-Master II",
        image: "/assets/3.webp",
        description: "The perfect companion for world travelers"
    },
    {
        id: 4,
        brand: "Rolex",
        model: "Daytona",
        image: "/assets/4.webp",
        description: "The legendary chronograph for racing enthusiasts"
    },
    {
        id: 5,
        brand: "Rolex",
        model: "Datejust",
        image: "/assets/5.webp",
        description: "The quintessential classic dress watch"
    }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToWatch = (index: number) => {
        setCurrentIndex(index);
        const container = document.getElementById("watch-carousel");
        if (container) {
            const scrollAmount = container.offsetWidth * index;
            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
            <div
                id="watch-carousel"
                className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onScroll={(e) => {
                    const container = e.currentTarget;
                    const index = Math.round(container.scrollLeft / container.offsetWidth);
                    setCurrentIndex(index);
                }}
            >
                {watches.map((watch) => (
                    <div
                        key={watch.id}
                        className="min-w-full h-full flex items-center justify-between px-20 snap-center"
                    >
                        <div className="flex-1 flex items-center justify-center">
                            <div className="relative w-[600px] h-[400px]">
                                <Image
                                    src={watch.image}
                                    alt={`${watch.brand} ${watch.model}`}
                                    fill
                                    className="object-contain"
                                    priority={watch.id === 1}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-start justify-center pl-12">
                            <div className="text-sm font-medium text-gray-400 mb-2">{watch.brand}</div>
                            <h1 className="text-6xl font-bold text-white mb-4">{watch.model}</h1>
                            <p className="text-gray-400 text-lg mb-8 max-w-md">{watch.description}</p>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                                Discover
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {watches.map((watch, index) => (
                    <button
                        key={watch.id}
                        onClick={() => scrollToWatch(index)}
                        className={`w-8 h-1 rounded transition-colors ${currentIndex === index ? "bg-red-600" : "bg-gray-600 hover:bg-gray-500"
                            }`}
                        aria-label={`Go to ${watch.model}`}
                    />
                ))}
            </div>

            <div className="absolute bottom-4 left-4 text-xs text-gray-500">
                https://www.ethoswatches.com/rolex/
            </div>
        </div>
    );
}
