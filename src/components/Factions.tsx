'use client';

import { useState } from 'react';
import { Swords, Eye, Pickaxe, Leaf, Wine, Shield } from 'lucide-react';

const factions = [
    {
        name: 'TUC Army',
        role: 'Military Force',
        description: 'The enforcement arm of The Utility Company. Disciplined, loyal, and ready to defend the community against all threats.',
        Icon: Swords,
        color: '#DC2626',
        members: '500+',
        influence: 'High',
    },
    {
        name: 'Central Intelligence Utility',
        role: 'Intelligence Agency',
        description: 'The eyes and ears of The Gulag. Operating in shadows, gathering intelligence, and ensuring stability through knowledge.',
        Icon: Eye,
        color: '#6B21A8',
        members: '150+',
        influence: 'Very High',
    },
    {
        name: "Sheriff's Department",
        role: 'Law Enforcement',
        description: 'Keepers of order and justice. Where the Administration makes laws, the Sheriffs ensure they are followed.',
        Icon: Shield,
        color: '#ffe5b4',
        members: '200+',
        influence: 'High',
    },
    {
        name: 'Copper Cutters Guild',
        role: 'Resource Extraction',
        description: 'Masters of the mines. The Copper Cutters control the flow of resources that power The Gulag\'s entire economy.',
        Icon: Pickaxe,
        color: '#B87333',
        members: '300+',
        influence: 'Very High',
    },
    {
        name: 'Pot Growers Guild',
        role: 'Agricultural Production',
        description: 'Cultivators of abundance. Under the House of Haack, they feed The Gulag and fund their growing influence.',
        Icon: Leaf,
        color: '#22C55E',
        members: '250+',
        influence: 'High',
    },
    {
        name: 'Bootleggers Guild',
        role: 'Spirits & Trade',
        description: 'Craftsmen and rebels. Their spirits flow through every celebration, and their council speaks for the people.',
        Icon: Wine,
        color: '#f2a65a',
        members: '175+',
        influence: 'Medium-High',
    },
];

export default function Factions() {
    const [activeFaction, setActiveFaction] = useState(0);

    return (
        <section id="factions" className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-heading">CHOOSE YOUR PATH</span>
                    <h2 className="section-title mt-4">
                        The Factions
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
                        Six powerful factions vie for influence in The Gulag. Each offers a unique path to power, community, and purpose.
                    </p>
                </div>

                {/* Faction Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {factions.map((faction, index) => (
                        <button
                            key={faction.name}
                            onClick={() => setActiveFaction(index)}
                            className={`card-faction text-left p-6 transition-all duration-300 ${activeFaction === index
                                ? 'ring-2 scale-[1.02]'
                                : 'hover:bg-white/5'
                                }`}
                            style={{
                                borderColor: activeFaction === index ? faction.color : 'rgba(255,255,255,0.1)',
                                boxShadow: activeFaction === index ? `0 0 30px ${faction.color}30` : 'none',
                                '--tw-ring-color': faction.color,
                            } as React.CSSProperties}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="p-3 rounded-xl"
                                    style={{ backgroundColor: `${faction.color}20` }}
                                >
                                    <faction.Icon
                                        className="w-8 h-8"
                                        style={{ color: faction.color }}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-1">{faction.name}</h3>
                                    <span
                                        className="text-xs font-mono uppercase tracking-wider"
                                        style={{ color: faction.color }}
                                    >
                                        {faction.role}
                                    </span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mt-4 line-clamp-2">
                                {faction.description}
                            </p>

                            <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                                <div>
                                    <span className="text-xs text-gray-500">Members</span>
                                    <p className="font-bold">{faction.members}</p>
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500">Influence</span>
                                    <p className="font-bold" style={{ color: faction.color }}>{faction.influence}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
