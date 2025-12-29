
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
import { factionsImportanceChapter } from './chapters/02-factions-importance';
import { gulagAdministrationChapter } from './chapters/03-gulag-administration';
import { copperCuttersChapter } from './chapters/04-copper-cutters';
import { potGrowersChapter } from './chapters/05-pot-growers';
import { bootleggersChapter } from './chapters/06-bootleggers';
import { grandNarrativeChapter } from './chapters/07-grand-narrative';
import { codeOfConductChapter } from './chapters/08-code-of-conduct';
import { conclusionChapter } from './chapters/09-conclusion';

export const chapters: ChapterData[] = [
    introductionChapter,
    factionsImportanceChapter,
    gulagAdministrationChapter,
    copperCuttersChapter,
    potGrowersChapter,
    bootleggersChapter,
    grandNarrativeChapter,
    codeOfConductChapter,
    conclusionChapter,
];
