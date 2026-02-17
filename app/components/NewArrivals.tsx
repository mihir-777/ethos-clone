"use client";

import Image from "next/image";

const newArrivals = [
    {
        id: 1,
        brand: "ALPINA",
        model: "SEASTRONG",
        price: "₹ 2,39,000",
        image: "/assets/1.webp"
    },
    {
        id: 2,
        brand: "ALPINA",
        model: "ALPINER",
        price: "₹ 4,18,700",
        image: "/assets/2.webp"
    },
    {
        id: 3,
        brand: "ALPINA",
        model: "ALPINER",
        price: "₹ 2,87,000",
        image: "/assets/3.webp"
    },
    {
        id: 4,
        brand: "ALPINA",
        model: "ALPINER",
        price: "₹ 1,15,000",
        image: "/assets/4.webp"
    },
    {
        id: 5,
        brand: "ALPINA",
        model: "ALPINER",
        price: "₹ 1,13,000",
        image: "/assets/5.webp"
    }
];

export default function NewArrivals() {
    return (
        <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-3xl font-bold text-black tracking-tight">NEW ARRIVALS</h2>
                    <button className="text-sm font-semibold text-black hover:text-gray-600 transition-colors flex items-center gap-2 group">
                        VIEW ALL
                        <span className="transform group-hover:translate-x-1 transition-transform">&gt;</span>
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {newArrivals.map((watch) => (
                        <div
                            key={watch.id}
                            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-white overflow-hidden border-b border-gray-100">
                                <Image
                                    src={watch.image}
                                    alt={`${watch.brand} ${watch.model}`}
                                    fill
                                    className="object-contain p-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                                />
                            </div>

                            <div className="p-5 text-center">
                                <h3 className="text-xs font-bold text-black mb-2 tracking-widest uppercase">
                                    {watch.brand}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 font-medium">
                                    {watch.model}
                                </p>
                                <p className="text-base font-bold text-black">
                                    {watch.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
