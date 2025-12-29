import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPARISONS } from '@/data/seo';
import { Metadata } from 'next';
import { Users, BookOpen, Key, Gamepad2, Megaphone, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Why TGN | The Grande Narrative',
    description: 'Discover what makes The Grande Narrative different. Community-first gaming, narrative ownership, and democratic governance set us apart from traditional platforms.',
};

const categoryConfig: Record<string, { color: string; Icon: React.ComponentType<{ className?: string; strokeWidth?: number }> }> = {
    'Community': { color: '#2ec7b5', Icon: Users },
    'Narrative': { color: '#f2a65a', Icon: BookOpen },
    'Ownership': { color: '#22C55E', Icon: Key },
    'Gameplay': { color: '#B87333', Icon: Gamepad2 },
    'Web3 Marketing': { color: '#9333EA', Icon: Megaphone },
    'Influencer': { color: '#EC4899', Icon: UserCheck },
};

const categoryDescriptions: Record<string, string> = {
    'Community': 'How we build and nurture genuine communities',
    'Narrative': 'Storytelling that matters and lasts',
    'Ownership': 'True stakeholder participation',
    'Gameplay': 'Engagement that creates lasting impact',
    'Web3 Marketing': 'Organic growth over paid promotion',
    'Influencer': 'Authentic advocacy from believers',
};

export default function ComparisonsPage() {
    const categories = ['Community', 'Narrative', 'Ownership', 'Gameplay', 'Web3 Marketing', 'Influencer'];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black">
            <Navbar themeColor="#2ec7b5" />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">THE TGN DIFFERENCE</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
                        Why The Grande <br />Narrative?
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Community-first design. Narrative ownership. Democratic governance.
                        See how TGN reimagines what gaming communities can be—and why traditional approaches fall short.
                    </p>
                </div>

                {/* Category Pills Navigation */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => {
                        const config = categoryConfig[category];
                        return (
                            <a
                                key={category}
                                href={`#${category.toLowerCase().replace(' ', '-')}`}
                                className="px-4 py-2 rounded-full border text-sm font-mono transition-all hover:scale-105 flex items-center gap-2"
                                style={{
                                    borderColor: config.color,
                                    color: config.color,
                                }}
                            >
                                <config.Icon className="w-4 h-4" strokeWidth={1.5} />
                                {category}
                            </a>
                        );
                    })}
                </div>

                <div className="space-y-24">
                    {categories.map((category) => {
                        const config = categoryConfig[category];
                        return (
                            <section key={category} id={category.toLowerCase().replace(' ', '-')}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div
                                        className="p-2 rounded-lg"
                                        style={{ backgroundColor: `${config.color}20`, color: config.color }}
                                    >
                                        <config.Icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-3xl font-bold" style={{ color: config.color }}>
                                        {category}
                                    </h3>
                                </div>
                                <p className="text-gray-400 mb-8 border-b border-white/10 pb-8">
                                    {categoryDescriptions[category]}
                                </p>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {COMPARISONS.filter(c => c.category === category).map((comp) => (
                                        <Link
                                            key={comp.slug}
                                            href={`/comparisons/${comp.slug}`}
                                            className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-[#2ec7b5]/30 flex flex-col group"
                                        >
                                            <div className="mb-4">
                                                <span className="text-xs font-mono text-gray-500 uppercase">VS Alternative</span>
                                                <h4 className="text-xl font-bold group-hover:text-[#2ec7b5] transition-colors">{comp.competitor}</h4>
                                                <p className="text-sm text-gray-500 italic mt-1">{comp.tagline}</p>
                                            </div>

                                            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                                                {comp.description}
                                            </p>

                                            <div className="p-4 rounded-xl border" style={{ backgroundColor: `${config.color}10`, borderColor: `${config.color}30` }}>
                                                <span className="text-xs font-bold block mb-1" style={{ color: config.color }}>TGN Advantage</span>
                                                <p className="text-sm text-gray-300 line-clamp-2">
                                                    {comp.tgnAdvantage}
                                                </p>
                                            </div>

                                            <div className="mt-6 flex items-center text-sm font-mono text-gray-500 group-hover:text-[#2ec7b5] transition-colors">
                                                LEARN MORE <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        );
                    })}
                </div>
            </main>

            <Footer />
        </div>
    );
}
