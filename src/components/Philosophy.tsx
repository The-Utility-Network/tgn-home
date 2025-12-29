'use client';

export default function Philosophy() {
    const quotes = [
        {
            text: "In The Gulag, every sentence is an opportunity. The walls that confine you also protect the seeds of your future empire.",
            author: "The Warden",
            role: "Gulag Administration"
        },
        {
            text: "We don't just mine copper — we forge the backbone of civilization. Every wire, every circuit, every connection starts here.",
            author: "Eric",
            role: "Copper Cutters Founder"
        },
        {
            text: "From the soil comes sustenance, from sustenance comes strength, and from strength comes freedom.",
            author: "House of Haack",
            role: "Pot Growers Guild"
        },
    ];

    return (
        <section id="lore" className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="section-heading">THE LORE</span>
                    <h2 className="section-title mt-4">Wisdom From The Gulag</h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        The voices of those who shaped Dimension GG4.261T.
                        Their words echo through the halls of The Gulag.
                    </p>
                </div>

                {/* Quotes Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {quotes.map((quote, index) => (
                        <div
                            key={quote.author}
                            className="glass-panel p-8 rounded-2xl border-l-4 border-[#2ec7b5]/50"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <svg className="w-8 h-8 text-[#2ec7b5]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            <p className="text-gray-300 italic leading-relaxed mb-6">
                                &ldquo;{quote.text}&rdquo;
                            </p>

                            <div className="border-t border-white/10 pt-4">
                                <p className="text-white font-bold">{quote.author}</p>
                                <p className="text-xs text-[#2ec7b5] font-mono">{quote.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Narrative */}
                <div className="glass-panel p-12 rounded-2xl text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-6">The Grande Narrative</h3>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            <span className="text-[#2ec7b5] font-semibold">The Grande Narrative</span> is more than a game —
                            it is a gamified metaverse engine for storytelling, economy-building, and civilization design.
                        </p>
                        <p>
                            Powered by real-world infrastructure, Web3 architecture, and Industrial Automation as a Service (I3AS),
                            it bridges the gap between virtual worlds and tangible value creation.
                        </p>
                        <p>
                            Developed by <span className="text-white font-semibold">The Utility Company</span>,
                            The Grande Narrative represents the future of community-driven gaming — where every player
                            owns their journey, and every choice echoes across dimensions.
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-xs font-mono tracking-wider text-gray-500">
                            DIMENSION GG4.261T • ESTABLISHED 2023 • POWERED BY I3AS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
