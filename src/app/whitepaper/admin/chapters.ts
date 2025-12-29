
export interface ChapterSection {
    heading: string;
    content: string;
    image?: string;
}

export interface ChapterData {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    color: string;
    sections: ChapterSection[];
    pullQuote: string;
}

// Import all chapters from modular files
import { introductionChapter } from './chapters/01-introduction';
import { discordOverviewChapter } from './chapters/02-discord-overview';
import { web3ArchitectureChapter } from './chapters/03-web3-architecture';
import { discordModerationChapter } from './chapters/04-discord-moderation';
import { tucArmyChapter } from './chapters/05-tuc-army';
import { centralIntelligenceChapter } from './chapters/06-central-intelligence';
import { sheriffDepartmentChapter } from './chapters/07-sheriff-department';
import { codeOfConductChapter } from './chapters/08-code-of-conduct';
import { electionsChapter } from './chapters/09-elections';
import { conclusionChapter } from './chapters/10-conclusion';

export const chapters: ChapterData[] = [
    introductionChapter,
    discordOverviewChapter,
    web3ArchitectureChapter,
    discordModerationChapter,
    tucArmyChapter,
    centralIntelligenceChapter,
    sheriffDepartmentChapter,
    codeOfConductChapter,
    electionsChapter,
    conclusionChapter,
];
