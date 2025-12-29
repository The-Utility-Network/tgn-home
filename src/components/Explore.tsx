'use client';

import Link from 'next/link';
import { Map, Swords, Gem } from 'lucide-react';

const exploreLinks = [
    {
        title: 'Realms & Territories',
        description: 'Explore the wings, halls, and territories of The Gulag',
        href: '/locations',
        Icon: Map,
        color: '#2ec7b5',
    },
    {
        title: 'Guild Disciplines',
        description: 'Discover the activities and trades that drive the economy',
        href: '/industries',
        Icon: Swords,
        color: '#f2a65a',
    },
    {
        title: 'Why TGN?',
        description: 'See how we compare to traditional gaming platforms',
        href: '/comparisons',
        Icon: Gem,
        color: '#22C55E',
    },
];

export default function Explore() {
    return (
        <section id="explore" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-heading">DEEP DIVE</span>
                    <h2 className="section-title mt-4">
                        Explore The<br />Grande Narrative
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
                        Dive deeper into the world, mechanics, and community that make TGN unique.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {exploreLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group glass-panel p-8 rounded-3xl border border-white/10 hover:border-opacity-50 transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl -mr-24 -mt-24 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: link.color }}
                            />

                            {/* Icon */}
                            <link.Icon
                                className="w-12 h-12 mb-6"
                                style={{ color: link.color }}
                                strokeWidth={1.5}
                            />

                            {/* Content */}
                            <h3
                                className="text-2xl font-bold mb-3"
                                style={{ color: link.color }}
                            >
                                {link.title}
                            </h3>
                            <p className="text-gray-400 mb-6">
                                {link.description}
                            </p>

                            {/* Arrow */}
                            <div className="flex items-center gap-2 text-sm font-mono text-gray-500 group-hover:text-white transition-colors">
                                EXPLORE
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
