import { notFound } from 'next/navigation';
import { LOCATIONS, LOCATION_TYPE_ICONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicIcon from '@/components/DynamicIcon';
import Link from 'next/link';
import { Metadata } from 'next';
import { Sparkles, CloudFog, Star } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return LOCATIONS.map((loc) => ({
        slug: loc.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = LOCATIONS.find((loc) => loc.slug === slug);

    if (!location) {
        return { title: 'Territory Not Found' };
    }

    return {
        title: `${location.name} | The Grande Narrative`,
        description: location.description,
    };
}

export default async function LocationPage({ params }: Props) {
    const { slug } = await params;
    const location = LOCATIONS.find((loc) => loc.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black font-sans">
            <Navbar themeColor="#2ec7b5" />

            {/* Hero Section */}
            <div className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-12">
                        <Link href="/locations" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                            ← Back to Realms & Territories
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#2ec7b5] mb-6">
                                <DynamicIcon
                                    name={LOCATION_TYPE_ICONS[location.type]}
                                    className="w-5 h-5"
                                    strokeWidth={1.5}
                                />
                                <span className="uppercase">{location.type.replace('-', ' ')}</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
                                {location.name}
                            </h1>
                            <p className="text-2xl text-gray-300 leading-relaxed font-light mb-8">
                                {location.description}
                            </p>

                            {location.controlledBy && (
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ec7b5]/10 border border-[#2ec7b5]/30 rounded-full">
                                    <span className="text-sm font-mono text-[#2ec7b5]">
                                        Controlled by: {location.controlledBy}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Stats Card */}
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 lg:mt-12">
                            <div className="mb-6">
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</div>
                                <div className="text-xl font-bold">{location.wing} Wing</div>
                            </div>
                            <div className="mb-6">
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Dimension</div>
                                <div className="text-xl font-bold font-mono text-[#2ec7b5]">GG4.261T</div>
                            </div>
                            <div className="mb-6">
                                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Type</div>
                                <div className="text-xl font-bold capitalize">{location.type.replace('-', ' ')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="px-6 pb-24 max-w-7xl mx-auto">
                {/* Lore Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#2ec7b5]" />
                        The Story
                    </h2>
                    <div className="glass-panel p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
                        <p className="text-xl text-gray-300 leading-relaxed italic">
                            &ldquo;{location.lore}&rdquo;
                        </p>
                    </div>
                </div>

                {/* Atmosphere & Secrets */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-panel p-8 rounded-3xl border border-white/5">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                            <CloudFog className="w-6 h-6 text-gray-400" strokeWidth={1.5} /> Atmosphere
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {location.atmosphere}
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl border border-[#f2a65a]/20 bg-[#f2a65a]/5">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-[#f2a65a]">
                            <Sparkles className="w-6 h-6" strokeWidth={1.5} /> Secrets
                        </h3>
                        <p className="text-gray-300 leading-relaxed italic">
                            {location.secrets}
                        </p>
                    </div>
                </div>

                {/* Community Features */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                        <span className="w-12 h-1 bg-[#22C55E]" />
                        Community Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {location.communityFeatures.map((feature, index) => (
                            <div key={index} className="glass-panel p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                <Star className="w-5 h-5 text-[#2ec7b5] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                                <p className="text-gray-200">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-[#2ec7b5]/10 to-transparent p-12 rounded-3xl border border-[#2ec7b5]/20">
                    <h2 className="text-3xl font-bold mb-4">Ready to Explore {location.name}?</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join the community and become part of The Grande Narrative. Your story starts here.
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
