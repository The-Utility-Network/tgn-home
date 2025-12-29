'use client';

const pillars = [
    {
        title: 'WORLDBUILDING',
        description: 'Rich lore and faction-based storytelling in Dimension GG4.261T. Every choice shapes the narrative.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'OWNERSHIP',
        description: 'True digital ownership through Web3, DAOs, and NFT technologies. Own your assets, own your future.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
    {
        title: 'GOVERNANCE',
        description: 'Democratic systems, elections, and faction-based power structures. Your voice matters.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'REDEMPTION',
        description: 'Transform from convict to entrepreneur in The Gulag\'s economy. Every sentence is an opportunity.',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

export default function Pillars() {
    return (
        <section id="pillars" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-heading">THE FOUR PILLARS</span>
                    <h2 className="section-title mt-4">Foundations of The Grande Narrative</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        The core principles that define life in Dimension GG4.261T. Every interaction is built upon these foundations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="group glass-panel p-8 rounded-2xl hover:border-[#2ec7b5]/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(46,199,181,0.15)]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-[#2ec7b5] mb-6 group-hover:scale-110 transition-transform duration-300">
                                {pillar.icon}
                            </div>

                            <h3 className="text-sm font-bold text-white mb-3 tracking-wide group-hover:text-[#2ec7b5] transition-colors">
                                {pillar.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
