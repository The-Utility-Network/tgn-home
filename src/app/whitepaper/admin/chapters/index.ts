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
