import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Administrative Factions | The Pillars of Governance | The Utility Company',
    description: 'A comprehensive whitepaper on the Administrative Factions of The Utility Company. Detailed overview of The Army, CIU, and Sheriffs Department, their structures, and roles in maintaining order within the Discord community.',
    keywords: ['Administrative Factions', 'Utility Company', 'Discord Governance', 'Web3 Administration', 'Army', 'CIU', 'Sheriff', 'Moderation', 'Community Management'],
    openGraph: {
        title: 'Administrative Factions | The Pillars of Governance',
        description: 'Explore the administrative backbone of The Utility Company. Learn how The Army, CIU, and Sheriff\'s Department maintain order and foster a thriving community.',
        type: 'website',
        locale: 'en_US',
        siteName: 'The Utility Company',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Administrative Factions Whitepaper',
        description: 'The definitive guide to governance, security, and administration in The Utility Company.',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
