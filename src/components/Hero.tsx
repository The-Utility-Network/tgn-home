import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-24">
            <div className="max-w-5xl mx-auto text-center z-10">
                {/* TGN Logo */}
                <div className="flex justify-center mb-8 md:mb-12 opacity-0 animate-fadeInUp">
                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-20 sm:h-24 md:h-32 lg:h-40">
                        <Image
                            src="/tgnlogo.png"
                            alt="The Grande Narrative"
                            fill
                            className="object-contain drop-shadow-[0_0_40px_rgba(46,199,181,1)]"
                        />
                    </div>
                </div>

                {/* System Label */}
                <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fadeInUp stagger-1">
                    <span className="w-2 h-2 bg-[#2ec7b5] rounded-full animate-pulse" />
                    <span className="text-xs font-mono tracking-[0.3em] text-[#2ec7b5]">
                        MMXRPG // METAVERSE ENGINE
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fadeInUp stagger-2">
                    <span className="block text-white">ENTER THE SIMULATION.</span>
                    <span className="block bg-gradient-to-r from-[#2ec7b5] to-[#4dd4c4] bg-clip-text text-transparent">
                        SHAPE YOUR DESTINY.
                    </span>
                </h1>

                {/* Mission Statement */}
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fadeInUp stagger-3">
                    Welcome to <span className="text-[#2ec7b5] font-semibold">Dimension GG4.261T</span> — The Grande Narrative
                    fuses worldbuilding, automation, and ownership into a living, evolving simulation.
                    Choose your faction. Build your legacy. Shape the future.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp stagger-4">
                    <a
                        href="https://portal.thegrandenarrative.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm tracking-wider"
                    >
                        ENTER PORTAL
                    </a>
                    <Link href="#world" className="btn-secondary text-sm tracking-wider">
                        EXPLORE THE WORLD
                    </Link>
                    <Link href="#factions" className="btn-secondary text-sm tracking-wider">
                        CHOOSE FACTION
                    </Link>
                </div>

                {/* Stats Row */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fadeInUp stagger-5">
                    {[
                        { value: '6', label: 'FACTIONS' },
                        { value: '4', label: 'TERRITORIES' },
                        { value: '3', label: 'GUILDS' },
                        { value: '∞', label: 'POSSIBILITIES' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs font-mono tracking-wider text-gray-500">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp stagger-6">
                <Link href="#pillars" className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#2ec7b5] transition-colors">
                    <span className="text-xs font-mono tracking-wider">SCROLL</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
