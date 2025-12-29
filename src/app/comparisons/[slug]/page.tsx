import { notFound } from 'next/navigation';
import { COMPARISONS } from '@/data/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { Users, BookOpen, Key, Gamepad2, Megaphone, UserCheck, X, Check } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return COMPARISONS.map((comp) => ({
        slug: comp.slug,
    }));
}

const categoryConfig: Record<string, { color: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }> = {
    'Community': { color: '#2ec7b5', Icon: Users },
    'Narrative': { color: '#f2a65a', Icon: BookOpen },
    'Ownership': { color: '#22C55E', Icon: Key },
    'Gameplay': { color: '#B87333', Icon: Gamepad2 },
    'Web3 Marketing': { color: '#9333EA', Icon: Megaphone },
    'Influencer': { color: '#EC4899', Icon: UserCheck },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const comparison = COMPARISONS.find((c) => c.slug === slug);

    if (!comparison) {
        return { title: 'Comparison Not Found' };
    }

    return {
        title: `TGN vs ${comparison.competitor} | The Grande Narrative`,
        description: comparison.tgnAdvantage,
    };
}

export default async function ComparisonPage({ params }: Props) {
    const { slug } = await params;
    const comparison = COMPARISONS.find((c) => c.slug === slug);

    if (!comparison) {
        notFound();
    }

    const config = categoryConfig[comparison.category] || categoryConfig['Community'];
    const categoryColor = config.color;

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black font-sans">
            <Navbar themeColor="#2ec7b5" />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link href="/comparisons" className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                        ← Back to Why TGN
                    </Link>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono mb-4" style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}>
                        <config.Icon className="w-4 h-4" strokeWidth={1.5} />
                        {comparison.category.toUpperCase()} COMPARISON
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        TGN <span className="text-gray-600 px-4 text-4xl align-middle">VS</span> {comparison.competitor}
                    </h1>
                    <p className="text-xl text-gray-400 italic">{comparison.tagline}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Competitor Analysis Card */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                        <h2 className="text-2xl font-bold mb-2 text-gray-400">{comparison.competitor}</h2>
                        <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-400 mb-6 uppercase tracking-wide">
                            Traditional Approach
                        </span>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            {comparison.description}
                        </p>
                        <div className="border-t border-white/10 pt-6">
                            <h4 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">Limitations</h4>
                            <ul className="space-y-3">
                                {comparison.limitations.map((limitation, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-400">
                                        <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" strokeWidth={2} />
                                        <span>{limitation}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* TGN Advantage Card */}
                    <div className="glass-panel p-8 rounded-3xl border bg-[#2ec7b5]/[0.02] relative overflow-hidden" style={{ borderColor: `${categoryColor}40` }}>
                        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" style={{ backgroundColor: `${categoryColor}20` }} />

                        <h2 className="text-2xl font-bold mb-2 text-white">The Grande Narrative</h2>
                        <span className="inline-block px-3 py-1 rounded-full text-xs mb-6 uppercase tracking-wide" style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}>
                            Community-First Approach
                        </span>
                        <p className="text-lg text-white leading-relaxed mb-8">
                            {comparison.tgnAdvantage}
                        </p>
                        <section className="border-t pt-6 relative z-10" style={{ borderColor: `${categoryColor}30` }}>
                            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: categoryColor }}>Key Differentiators</h4>
                            <ul className="space-y-3">
                                {comparison.keyDifferentiators.map((diff, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-200">
                                        <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" strokeWidth={2} />
                                        <span>{diff}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-r from-[#2ec7b5]/10 to-transparent p-12 rounded-3xl border border-[#2ec7b5]/20">
                    <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Join a community where you shape the narrative, not just experience it.
                        Where governance is gameplay and every member matters.
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
