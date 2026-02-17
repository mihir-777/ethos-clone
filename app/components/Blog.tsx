"use client";

import Image from "next/image";

const blogPosts = [
    {
        id: 1,
        category: "SPOTLIGHT",
        title: "A Watch Shaped By Speed: The Bianchet BL618 Flying Tourbillon UltraFino Skeleton Monaco",
        excerpt: "Bianchet have introduced the UltraFino Monaco, a new open-worked watch created in partnership with Team Monaco as the team enters the UIM E1 World Championship—the world's first all-electric powerboat racing tournament. Designed in Monaco's national",
        image: "/assets/blog1.webp",
        date: "February 13, 2026"
    },
    {
        id: 2,
        category: "REVIEW",
        title: "Hitting The Target: Oris's Big Crown Pointer Date 'Bullseye'",
        excerpt: "On the radar display in an aircraft cockpit dashboard, everything is subject to the centre. And just like that, the Big Crown Pointer Date aviation watch from Oris, it's all about the centre of the dial, with hours, minutes, seconds, as well as the date",
        image: "/assets/blog2.webp",
        date: "February 13, 2026"
    }
];

export default function Blog() {
    return (
        <section className="w-full bg-[#f5f5f5] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-black mb-12 tracking-wide">LATEST ARTICLES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white overflow-hidden group cursor-pointer">
                            <div className="relative w-full h-[300px] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div className="p-6">
                                <div className="inline-block bg-[#8B0000] text-white text-xs font-bold px-4 py-1.5 mb-4">
                                    {post.category}
                                </div>

                                <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <time className="text-gray-500 text-sm italic">
                                    {post.date}
                                </time>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
