'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Hammer, Swords } from 'lucide-react';

// Theme color
const THEME_COLOR = '#2ec7b5';

const cards = [
    {
        id: 'community',
        title: 'Community Factions',
        description: 'Explore the harsh yet structured world of The Gulag, where convicted factions turn confinement into productivity and economic power.',
        href: '/whitepaper/community',
        color: '#CD7F32', // Copper color
        gradient: 'from-[#CD7F32] to-[#4CAF50]',
        Icon: Hammer
    },
    {
        id: 'admin',
        title: 'Administrative Factions',
        description: 'Discover the pillars of governance, security, and order. Learn how The Army, CIU, and Sheriff\'s Department maintain the peace.',
        href: '/whitepaper/admin',
        color: '#F44336', // Red color
        gradient: 'from-[#F44336] to-[#3F51B5]',
        Icon: Swords
    }
];

export default function WhitepaperLanding() {
    return (
        <main className="bg-black text-white min-h-screen relative font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
            <Navbar themeColor={THEME_COLOR} />

            <div className="flex-1 flex flex-col items-center justify-center relative px-6 py-24">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/artifacts/creative_revolution_bg.png')" }}
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl w-full">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
                        >
                            WHITE
                            <span
                                className="bg-gradient-to-r from-[#2ec7b5] to-blue-500 bg-clip-text text-transparent"
                            >
                                PAPERS
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                        >
                            Select a document to retrieve classified information about The Utility Company's internal structure.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <Link
                                    href={card.href}
                                    className="group block relative h-full rounded-3xl overflow-hidden border border-white/10 p-1 transition-all duration-300 hover:scale-[1.02] hover:border-white/30"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                    <div className="relative h-full bg-black/40 backdrop-blur-sm rounded-[20px] p-8 md:p-12 border border-white/5 flex flex-col items-center text-center">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 shadow-2xl border border-white/10"
                                            style={{ backgroundColor: `${card.color}20` }}
                                        >
                                            <card.Icon className="w-10 h-10" style={{ color: card.color }} strokeWidth={1.5} />
                                        </div>

                                        <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                                        <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                                            {card.description}
                                        </p>

                                        <span
                                            className="inline-flex items-center gap-2 text-sm font-mono tracking-widest uppercase transition-colors"
                                            style={{ color: card.color }}
                                        >
                                            Access File
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
