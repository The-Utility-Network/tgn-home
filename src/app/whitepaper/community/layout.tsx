import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Community Factions | The Gulag Whitepaper | The Utility Company',
    description: 'A detailed whitepaper on The Gulag Discord Community within The Utility Company. Explore the structure, governance, and narrative of the Copper Cutters, Pot Growers, and Bootleggers guilds.',
    keywords: ['Community Factions', 'Gulag', 'Discord Community', 'Guilds', 'Copper Cutters', 'Pot Growers', 'Bootleggers', 'Redemption', 'Gamified Society', 'The Utility Company'],
    openGraph: {
        title: 'Community Factions | The Gulag Whitepaper',
        description: 'Discover the story of the Gulag Community. Learn how convicted factions turn confinement into productivity and economic power.',
        type: 'website',
        locale: 'en_US',
        siteName: 'The Utility Company',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Community Factions Whitepaper',
        description: 'The definitive guide to The Gulag Community, its guilds, and the road to redemption.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
