import Link from 'next/link';
import Image from 'next/image';

const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'World', href: '#world' },
    { label: 'Factions', href: '#factions' },
    { label: 'Gameplay', href: '#gameplay' },
    { label: 'Lore', href: '#lore' },
];

const ecosystemLinks = [
    { label: 'TGN Portal', href: 'https://portal.thegrandenarrative.com' },
    { label: 'The Utility Company', href: 'https://theutilitycompany.co' },
    { label: 'DigiBazaar', href: 'https://digibazaar.io' },
    { label: 'Osiris Protocol', href: 'https://osiris.theutilitycompany.co' },
];

const communityLinks = [
    { label: 'Discord', href: 'https://discord.gg/scHwVByn9m' },
    { label: 'Twitter/X', href: 'https://twitter.com/The_Utility_Co' },
    { label: 'Blog', href: 'https://medium.com/@theutilityco' },
];

export default function Footer() {
    return (
        <footer className="relative py-12 md:py-16 px-4 md:px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/Medallions/TGN.png"
                                    alt="The Grande Narrative"
                                    fill
                                    className="object-contain drop-shadow-[0_0_8px_rgba(46,199,181,0.4)]"
                                />
                            </div>
                            <div>
                                <span className="text-white font-bold">The Grande Narrative</span>
                                <p className="text-xs text-gray-500">Dimension GG4.261T</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            <span className="text-[#2ec7b5] font-semibold">Enter the Simulation.</span> An immersive MMXRPG where worldbuilding, automation, and ownership collide.
                        </p>
                        <a
                            href="https://discord.gg/scHwVByn9m"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2ec7b5] text-sm hover:underline"
                        >
                            Join Discord →
                        </a>
                        <a
                            href="https://portal.thegrandenarrative.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 px-4 py-2 bg-[#2ec7b5] text-black text-sm font-bold rounded hover:opacity-90 transition-opacity"
                        >
                            Enter Portal →
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">NAVIGATE</h4>
                        <ul className="space-y-2">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ecosystem */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">ECOSYSTEM</h4>
                        <ul className="space-y-2">
                            {ecosystemLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1"
                                    >
                                        {link.label}
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 00-2 2v10a2 2 002 2h10a2 2 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-xs font-mono tracking-wider text-gray-500 mt-6 mb-4">COMMUNITY</h4>
                        <ul className="space-y-2">
                            {communityLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-sm hover:text-[#2ec7b5] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Factions Quick Links */}
                    <div>
                        <h4 className="text-xs font-mono tracking-wider text-gray-500 mb-4">FACTIONS</h4>
                        <div className="space-y-3">
                            {[
                                { name: 'TUC Army', color: '#DC2626' },
                                { name: 'Central Intelligence Utility', color: '#6B21A8' },
                                { name: 'Sheriff\'s Department', color: '#ffe5b4' },
                                { name: 'Copper Cutters Guild', color: '#B87333' },
                                { name: 'Pot Growers Guild', color: '#22C55E' },
                                { name: 'Bootleggers Guild', color: '#f2a65a' },
                            ].map((faction) => (
                                <div key={faction.name} className="flex items-center gap-2">
                                    <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: faction.color }}
                                    />
                                    <span className="text-gray-400 text-xs">{faction.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} The Utility Company LLC. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>Developed by</span>
                        <a
                            href="https://theutilitycompany.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2ec7b5] hover:underline font-mono"
                        >
                            The Utility Company
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
