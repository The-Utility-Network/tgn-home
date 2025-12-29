'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Dynamically import Community art components
const GenesisArt = dynamic(() => import('./art/GenesisArt'), { ssr: false });
const NetworkArt = dynamic(() => import('./art/NetworkArt'), { ssr: false });
const GrowthArt = dynamic(() => import('./art/GrowthArt'), { ssr: false });
const ProcessArt = dynamic(() => import('./art/ProcessArt'), { ssr: false });
const RhizomeArt = dynamic(() => import('./art/RhizomeArt'), { ssr: false });
const EconomicsArt = dynamic(() => import('./art/EconomicsArt'), { ssr: false });
const PoliticsArt = dynamic(() => import('./art/PoliticsArt'), { ssr: false });
const ReligionArt = dynamic(() => import('./art/ReligionArt'), { ssr: false });
const HorizonArt = dynamic(() => import('./art/HorizonArt'), { ssr: false });
const ShieldArt = dynamic(() => import('./art/ShieldArt'), { ssr: false });
const DataArt = dynamic(() => import('./art/DataArt'), { ssr: false });
const HammerArt = dynamic(() => import('./art/HammerArt'), { ssr: false });
const BadgeArt = dynamic(() => import('./art/BadgeArt'), { ssr: false });

// Dynamically import Admin art components (unique)
const AdminGenesisArt = dynamic(() => import('./art/AdminGenesisArt'), { ssr: false });
const DiscordOverviewArt = dynamic(() => import('./art/DiscordOverviewArt'), { ssr: false });
const Web3ArchitectureArt = dynamic(() => import('./art/Web3ArchitectureArt'), { ssr: false });
const ModerationArt = dynamic(() => import('./art/ModerationArt'), { ssr: false });
const ArmyArt = dynamic(() => import('./art/ArmyArt'), { ssr: false });
const CIUArt = dynamic(() => import('./art/CIUArt'), { ssr: false });
const SheriffArt = dynamic(() => import('./art/SheriffArt'), { ssr: false });
const CodeOfConductArt = dynamic(() => import('./art/CodeOfConductArt'), { ssr: false });
const ElectionsArt = dynamic(() => import('./art/ElectionsArt'), { ssr: false });
const AdminConclusionArt = dynamic(() => import('./art/AdminConclusionArt'), { ssr: false });

interface ChapterArtProps {
    chapterNumber: number;
    color: string;
    chapterId?: string;
}

type ArtComponent = ComponentType<{ color: string }>;

// Map of chapter IDs to art components - Community Section
const communityIdMap: Record<string, ArtComponent> = {
    'introduction-the-utility-company-and-the-gulag-discord-community': GenesisArt,
    'factions-intro': PoliticsArt,
    'the-gulag-administration-governance-of-the-discord-community': ProcessArt,
    'copper-cutters': HammerArt,
    'pot-growers': GrowthArt,
    'bootleggers': RhizomeArt,
    'the-grand-narrative-building-strong-wealthy-guilds-in-the-gulag': NetworkArt,
    'code-of-conduct-rules-and-regulations-for-community-engagement': BadgeArt,
    'conclusion': HorizonArt,
};

// Map of chapter IDs to art components - Admin Section (unique animations)
const adminIdMap: Record<string, ArtComponent> = {
    'introduction': AdminGenesisArt,
    'the-utility-company-discord-a-brief-overview': DiscordOverviewArt,
    'web3-architecture-and-industrial-automation-as-a-service': Web3ArchitectureArt,
    'the-need-for-discord-moderation-and-engagement': ModerationArt,
    'tuc-army': ArmyArt,
    'ciu': CIUArt,
    'sheriff-department': SheriffArt,
    'code-of-conduct': CodeOfConductArt,
    'elections': ElectionsArt,
    'conclusion-admin': AdminConclusionArt,
};

// Combined map
const idMap: Record<string, ArtComponent> = {
    ...communityIdMap,
    ...adminIdMap,
};

// Fallback rotation of art components
const artComponents: ArtComponent[] = [
    GenesisArt,
    NetworkArt,
    GrowthArt,
    ProcessArt,
    RhizomeArt,
    EconomicsArt,
    PoliticsArt,
    ReligionArt,
    HorizonArt,
    ShieldArt,
    DataArt,
    HammerArt,
    BadgeArt
];

export default function ChapterArt({ chapterNumber, chapterId, color }: ChapterArtProps) {
    let ArtComponent: ArtComponent = GenesisArt;

    if (chapterId && idMap[chapterId]) {
        ArtComponent = idMap[chapterId];
    } else {
        // Fallback rotation
        ArtComponent = artComponents[(chapterNumber - 1) % artComponents.length] || GenesisArt;
    }

    return (
        <motion.div
            className="w-full h-64 md:h-80 flex items-center justify-center mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full max-w-xl relative">
                {/* Background Glow for Holographic feel */}
                <div
                    className="absolute inset-0 blur-3xl opacity-20"
                    style={{ backgroundColor: color }}
                />
                <ArtComponent color={color} />
            </div>
        </motion.div>
    );
}
