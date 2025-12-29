export default function About() {
    const locations = [
        { name: 'West Wing', desc: 'The Gulag Administration headquarters' },
        { name: 'North Wing', desc: 'The Copper Cutters Guild operations' },
        { name: 'South Wing', desc: 'The Pot Growers Guild cultivation' },
        { name: 'East Wing', desc: 'The Bootleggers Guild distillery' },
        { name: 'The Yard', desc: 'Socializing and faction recruitment' },
        { name: 'The Commissary', desc: 'Trade, commerce, and resource exchange' },
    ];

    const keyFigures = [
        { name: 'The Warden', title: 'Gulag Administration', color: '#D4AF37' },
        { name: 'Eric', title: 'Copper Cutters Founder', color: '#B87333' },
        { name: 'House of Haack', title: 'Pot Growers Leadership', color: '#22C55E' },
        { name: 'Sheriff BeardedBro', title: 'Bootleggers Co-Founder', color: '#F97316' },
    ];

    return (
        <section id="world" className="relative py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Left Content */}
                    <div>
                        <span className="section-heading">THE WORLD</span>
                        <h2 className="section-title mt-4 mb-6">Welcome to The Gulag</h2>

                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                <span className="text-[#2ec7b5] font-semibold">Dimension GG4.261T</span> — known as
                                The Gulag — is the harshest environment in The Grande Narrative. Here, former
                                administrative members are sentenced for redemption, and new arrivals must
                                prove their worth.
                            </p>
                            <p>
                                Within these walls, three powerful guilds compete for resources and influence.
                                The Gulag Administration maintains order through democratic governance, while
                                convicts work towards redemption through enterprise and community contribution.
                            </p>
                        </div>

                        {/* Lore Card */}
                        <div className="mt-8 p-6 glass-panel rounded-2xl border-l-4 border-[#2ec7b5]">
                            <p className="text-sm text-gray-400 italic">
                                &ldquo;In The Gulag, every sentence is an opportunity. The walls that confine you
                                also protect the seeds of your future empire. Choose wisely. Build relentlessly.
                                The path to redemption is paved with copper, cultivated with care, and
                                distilled through determination.&rdquo;
                            </p>
                            <p className="text-xs text-[#2ec7b5] mt-3 font-mono">— The Warden</p>
                        </div>
                    </div>

                    {/* Right Content - Locations */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">
                            GULAG TERRITORIES
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {locations.map((location) => (
                                <div key={location.name} className="card group">
                                    <h4 className="text-sm font-bold text-[#2ec7b5] mb-2 group-hover:text-white transition-colors">
                                        {location.name}
                                    </h4>
                                    <p className="text-xs text-gray-400">{location.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="glass-panel rounded-2xl p-6 mt-6">
                            <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">
                                SIMULATION METRICS
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Active Factions', desc: '6 competing powers' },
                                    { label: 'Guild Economy', desc: 'Copper, Crops, Spirits' },
                                    { label: 'Governance', desc: 'Democratic elections' },
                                    { label: 'Ownership', desc: 'NFT-backed assets' },
                                ].map((metric) => (
                                    <div key={metric.label} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-[#2ec7b5] rounded-full mt-2" />
                                        <div>
                                            <span className="text-sm font-semibold text-white">{metric.label}</span>
                                            <p className="text-xs text-gray-500">{metric.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Figures Section */}
                <div className="border-t border-white/10 pt-16">
                    <div className="text-center mb-12">
                        <span className="section-heading">KEY FIGURES</span>
                        <h2 className="section-title mt-4">The Powers That Be</h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Leaders and founders who shape the destiny of The Gulag.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {keyFigures.map((figure) => (
                            <div key={figure.name} className="group text-center">
                                <div
                                    className="relative w-24 h-24 mx-auto rounded-full mb-4 border-2 transition-all duration-300 group-hover:scale-110 flex items-center justify-center glass-panel"
                                    style={{ borderColor: figure.color }}
                                >
                                    <span className="text-2xl font-bold" style={{ color: figure.color }}>
                                        {figure.name.charAt(0)}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-white">{figure.name}</h4>
                                <p className="text-xs font-mono mt-1 px-4" style={{ color: figure.color }}>{figure.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
