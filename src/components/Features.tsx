'use client';

const features = [
    {
        title: 'Faction-Based Progression',
        description: 'Climb the ranks within your chosen faction. Earn reputation, unlock privileges, and shape your faction\'s destiny.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        title: 'Democratic Elections',
        description: 'Participate in real governance. Vote for your faction leaders, propose changes, and witness true decentralized democracy.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Living Economy',
        description: 'Trade resources, run businesses, and build wealth. Copper, crops, and spirits fuel The Gulag\'s vibrant marketplace.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Territory Control',
        description: 'Factions compete for control of key territories. Strategic positioning determines access to resources and influence.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
        ),
    },
    {
        title: 'DAO Governance',
        description: 'True decentralization through DAO structures. Proposals, voting, and execution — all on-chain and transparent.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
    {
        title: 'NFT Ownership',
        description: 'Your assets are truly yours. Ranks, achievements, and holdings are tokenized and tradeable across the ecosystem.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section id="gameplay" className="relative py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="section-heading">GAMEPLAY</span>
                    <h2 className="section-title mt-4">How The Simulation Works</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        The Grande Narrative combines immersive roleplay with real Web3 mechanics.
                        Every action has consequences. Every choice shapes the world.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="group glass-panel p-8 rounded-2xl hover:border-[#2ec7b5]/30 transition-all duration-300 transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-[#2ec7b5] mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#2ec7b5] transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 glass-panel rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Enter?</h3>
                    <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                        Join thousands of players already shaping the future of Dimension GG4.261T.
                        Your journey to redemption begins now.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://discord.gg/scHwVByn9m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm tracking-wider"
                        >
                            JOIN DISCORD
                        </a>
                        <a
                            href="https://portal.thegrandenarrative.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-sm tracking-wider"
                        >
                            ENTER PORTAL
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
