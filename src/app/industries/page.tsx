import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicIcon from '@/components/DynamicIcon';
import { INDUSTRIES } from '@/data/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guild Disciplines | The Grande Narrative',
    description: 'Discover the activities and disciplines that drive community engagement in The Grande Narrative. From governance to distillation, find your calling.',
};

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black">
            <Navbar themeColor="#2ec7b5" />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">FACTION ACTIVITIES</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
                        Guild <br />Disciplines
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Every faction has its calling. From democratic governance to clandestine distilleries,
                        discover the disciplines that shape life in The Gulag.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {INDUSTRIES.map((ind) => (
                        <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="group glass-panel p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-[#2ec7b5]/30 relative overflow-hidden"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2ec7b5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#2ec7b5] transition-colors">
                                    {ind.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {ind.factionAffinity.join(' • ')}
                                </p>
                                <p className="text-gray-400 mb-6 line-clamp-2">
                                    {ind.description}
                                </p>

                                {/* Pillars */}
                                <div className="grid grid-cols-4 gap-3">
                                    {ind.pillars.map((pillar, i) => (
                                        <div key={i} className="text-center p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                            <DynamicIcon
                                                name={pillar.icon}
                                                className="w-5 h-5 mx-auto mb-1 text-[#2ec7b5]"
                                                strokeWidth={1.5}
                                            />
                                            <span className="text-xs text-gray-500">{pillar.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
