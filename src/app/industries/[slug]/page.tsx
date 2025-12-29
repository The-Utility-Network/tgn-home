import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicIcon from '@/components/DynamicIcon';
import Link from 'next/link';
import { Metadata } from 'next';
import { Users, Sparkles, Star } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return INDUSTRIES.map((ind) => ({
        slug: ind.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = INDUSTRIES.find((ind) => ind.slug === slug);

    if (!industry) {
        return { title: 'Discipline Not Found' };
    }

    return {
        title: `${industry.title} | The Grande Narrative`,
        description: industry.description,
    };
}

export default async function IndustryPage({ params }: Props) {
    const { slug } = await params;
    const industry = INDUSTRIES.find((ind) => ind.slug === slug);

    if (!industry) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black font-sans">
            <Navbar themeColor="#2ec7b5" />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link href="/industries" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Guild Disciplines
                    </Link>
                </div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    <div>
                        <span className="section-heading text-[#2ec7b5]">GUILD DISCIPLINE</span>
                        <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-8 leading-tight">
                            {industry.title}
                        </h1>
                        <p className="text-2xl text-gray-300 leading-relaxed font-light">
                            {industry.description}
                        </p>
                    </div>

                    {/* Faction Affinity & Rewards */}
                    <div className="space-y-6">
                        <div className="glass-panel p-6 rounded-3xl border border-white/10">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Faction Affinity</h3>
                            <div className="flex flex-wrap gap-3">
                                {industry.factionAffinity.map(faction => (
                                    <span key={faction} className="px-4 py-2 bg-[#2ec7b5]/10 border border-[#2ec7b5]/30 rounded-full text-sm text-[#2ec7b5] font-semibold">
                                        {faction}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="glass-panel p-6 rounded-3xl border border-[#f2a65a]/20 bg-[#f2a65a]/5">
                            <h3 className="text-sm font-bold text-[#f2a65a] uppercase tracking-wider mb-4">Rewards & Recognition</h3>
                            <ul className="space-y-2">
                                {industry.rewards.map((reward, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <Star className="w-4 h-4 text-[#f2a65a] flex-shrink-0" strokeWidth={1.5} />
                                        {reward}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Origin Story */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#f2a65a]" />
                        Origin Story
                    </h2>
                    <div className="glass-panel p-10 rounded-3xl border border-[#f2a65a]/20 bg-gradient-to-br from-[#f2a65a]/5 to-transparent">
                        <p className="text-xl text-gray-300 leading-relaxed italic">
                            &ldquo;{industry.originStory}&rdquo;
                        </p>
                    </div>
                </div>

                {/* Guild Narrative */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#2ec7b5]" />
                        The Guild Story
                    </h2>
                    <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {industry.guildNarrative}
                        </p>
                    </div>
                </div>

                {/* Pillars */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#22C55E]" />
                        Core Pillars
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industry.pillars.map((pillar, index) => (
                            <div key={index} className="glass-panel p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors group">
                                <DynamicIcon
                                    name={pillar.icon}
                                    className="w-10 h-10 mx-auto mb-4 text-[#2ec7b5] group-hover:scale-110 transition-transform"
                                    strokeWidth={1.5}
                                />
                                <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                                <p className="text-sm text-gray-400">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community & UGC */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-[#2ec7b5]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#2ec7b5]/20 transition-colors duration-700" />
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <Users className="w-6 h-6 text-[#2ec7b5]" strokeWidth={1.5} /> Community Mechanics
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                            {industry.communityMechanics}
                        </p>
                    </div>

                    <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-32 bg-[#9333EA]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#9333EA]/20 transition-colors duration-700" />
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
                            <Sparkles className="w-6 h-6 text-[#9333EA]" strokeWidth={1.5} /> UGC Opportunities
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                            {industry.ugcOpportunities}
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-[#2ec7b5]/10 to-transparent p-12 rounded-3xl border border-[#2ec7b5]/20">
                    <h2 className="text-3xl font-bold mb-4">Ready to Master {industry.title}?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Find your calling and shape the future of The Grande Narrative.
                    </p>
                    <a
                        href="https://discord.gg/scHwVByn9m"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[#2ec7b5] text-black font-bold rounded-full hover:opacity-90 transition-opacity inline-block"
                    >
                        Join Discord
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
