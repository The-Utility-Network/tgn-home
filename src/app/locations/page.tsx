import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicIcon from '@/components/DynamicIcon';
import { LOCATIONS, LOCATION_TYPE_ICONS } from '@/data/seo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Realms & Territories | The Grande Narrative',
    description: 'Explore the wings, halls, and common areas of Dimension GG4.261T. Discover the territories controlled by each faction in The Gulag.',
};

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#2ec7b5] selection:text-black">
            <Navbar themeColor="#2ec7b5" />

            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-heading">DIMENSION GG4.261T</span>
                    <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 pb-2">
                        Realms & <br />Territories
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        From the administrative heights of The West Wing to the bustling markets of The Commissary,
                        explore the territories where factions build their legacies.
                    </p>
                </div>

                {/* Grid of Locations */}
                <div className="grid md:grid-cols-2 gap-6">
                    {LOCATIONS.map((loc) => (
                        <Link
                            key={loc.slug}
                            href={`/locations/${loc.slug}`}
                            className="group glass-panel p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 block border border-white/5 hover:border-[#2ec7b5]/30"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-[#2ec7b5]/10">
                                    <DynamicIcon
                                        name={LOCATION_TYPE_ICONS[loc.type]}
                                        className="w-6 h-6 text-[#2ec7b5]"
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold group-hover:text-[#2ec7b5] transition-colors">
                                            {loc.name}
                                        </h3>
                                        <span className="text-xs font-mono text-gray-500 uppercase">
                                            {loc.type.replace('-', ' ')}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                                        {loc.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {loc.wing} Wing
                                        </span>
                                        {loc.controlledBy && (
                                            <span className="text-xs text-[#2ec7b5] font-mono">
                                                {loc.controlledBy}
                                            </span>
                                        )}
                                    </div>
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
