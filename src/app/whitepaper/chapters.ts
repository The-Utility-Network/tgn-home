export interface ChapterData {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    color: string;
    pullQuote: string;
    summary: string;
    sections: ChapterSection[];
}

export interface ChapterSection {
    heading: string;
    content: string;
}

export const chapter1: ChapterData = {
    id: 'genesis',
    number: '01',
    title: 'The Grande Narrative',
    subtitle: 'Genesis of Dimension GG4.261T',
    color: '#00ccff', // Cyan
    pullQuote: 'The narrative is not just a story; it is a mechanism for redemption, automated through code and governed by community.',
    summary: 'An introduction to The Grande Narrative, the MMXRPG set in The Gulag.',
    sections: [
        {
            heading: 'Core Identity',
            content: `The Grande Narrative is a Massively Multiplayer Extended Reality Role-Playing Game (MMXRPG) developed by The Utility Company. It fuses worldbuilding, automation, and ownership into a living, evolving simulation.

**The Setting:** The Gulag (Dimension GG4.261T)
This is not merely a prison; it is a crucible. It is the harshest environment in the metaverse, where former administrative members are sentenced for redemption, and new arrivals must prove their worth to ascend.

**The Developer:** The Utility Company
A conglomerate focused on Industrial Automation as a Service (I3AS), leveraging Web3 architecture and NFT technologies to enable self-reliance.`
        },
        {
            heading: 'Core Pillars',
            content: `1. **Worldbuilding**
Rich lore and faction-based storytelling that evolves with player actions.

2. **Automation**
I3AS (Industrial Automation as a Service) drives the economy, allowing players to build automated systems that generate value.

3. **Ownership**
Web3, DAOs, and NFTs provide true digital ownership of assets, land, and governance rights.

4. **Community**
Democratic governance and faction-based engagement ensure that the players shape the world.`
        }
    ]
};

export const chapter2: ChapterData = {
    id: 'factions',
    number: '02',
    title: 'The Faction System',
    subtitle: 'Order and Chaos in Balance',
    color: '#ff00ff', // Magenta
    pullQuote: 'In the absence of structure, chaos reigns. But too much order stifles the soul. The factions exist to maintain the precarious balance.',
    summary: 'Overview of the opposing forces that shape society within The Gulag.',
    sections: [
        {
            heading: 'The Dual Structure',
            content: `Society in Dimension GG4.261T is divided into two primary categories of factions, each with distinct roles and governance models.

**Administrative Factions**
These groups hold the power to maintain order, enforce rules, and manage the technical infrastructure of the simulation. They represent the "Establishment."

**Community Factions (Guilds)**
These are the engines of the economy. Formed by inmates and entrepreneurs, they extract resources, cultivate goods, and run the underground markets. They represent the "People."`
        },
        {
            heading: 'Governance and Voting',
            content: `The Gulag operates on democratic principles. Leaders are not appointed; they are elected.

**Elections**
Crucial for democratic representation and accountability. Every faction has its own internal governance structure, but the overarching administration relies on the consent of the governed.

**Succession Planning**
Identifying and developing potential leaders to prevent leadership vacuums is a core responsibility of current leadership. Criteria include understanding community values, a track record of contribution, impartiality, and strong communication skills.`
        }
    ]
};

export const chapter3: ChapterData = {
    id: 'community-guilds',
    number: '03',
    title: 'Community Guilds',
    subtitle: 'The Engines of Industry',
    color: '#22C55E', // Green
    pullQuote: 'We till the soil, we mine the rock, we distill the spirit. Without us, the machine stops.',
    summary: 'Detailed operational intel on the three primary guilds.',
    sections: [
        {
            heading: 'The Copper Cutters Guild',
            content: `**Wing:** North Wing
**Founded By:** Agent Eric (Former CIU)
**Mission:** Supply copper needed for other guilds to operate.

The Copper Cutters are the backbone of the industrial machine. Operating deep in the mines of the North Wing, they extract the varying grades of copper essential for automation and infrastructure. Their work is dangerous but vital.`
        },
        {
            heading: 'The Pot Growers Guild',
            content: `**Wing:** South Wing
**Founded By:** Sam The Capitalist / House of Haack
**Mission:** Cultivate high-quality crops for the community.

Originally founded by the first convict, Sam, the PGG has evolved into an agricultural powerhouse under the House of Haack. They represent the path of the entrepreneur—transitioning from "convict" to "capitalist" through hard work and savvy trading.`
        },
        {
            heading: 'The Bootleggers Guild',
            content: `**Wing:** East Wing
**Founded By:** Sheriff BeardedBro & Agent Brew
**Mission:** Produce and distribute liquor within the Gulag.

Operating from a secret distillery in the East Wing, the Bootleggers provide the spirits that keep morale high. Their operations involve smuggling, trading contraband, and navigating the grey areas of Gulag law.`
        }
    ]
};

export const chapter4: ChapterData = {
    id: 'administrative-order',
    number: '04',
    title: 'Administrative Order',
    subtitle: 'Guardians of the Protocol',
    color: '#DC2626', // Red
    pullQuote: 'To serve and protect the simulation is not a job; it is a code used to compile reality itself.',
    summary: 'Breakdown of the forces that keep The Gulag from collapsing into anarchy.',
    sections: [
        {
            heading: 'The Utility Company Army',
            content: `**Role:** Protection, channel moderation, and rule enforcement.
**Structure:** Pyramid hierarchy (Helpers to Generalissimo).
**Annual Cycle:** February (Nominations) -> March (Campaigning) -> April (Election).

The Army is the military arm of The Utility Company. They are responsible for defending the server against raids, enforcing bans, and maintaining the peace during times of unrest.`
        },
        {
            heading: 'Central Intelligence Utility (CIU)',
            content: `**Role:** Data gathering, analysis, and information security.
**Structure:** Director-led with departments for Intelligence Collection, Analysis, and Dissemination.

The CIU is the all-seeing eye. Using machine learning, sentiment analysis, and custom dashboards, they monitor community health and identify threats before they manifest.`
        },
        {
            heading: 'The Sheriff\'s Department',
            content: `**Role:** First line of defense and conflict resolution.
**Hierarchy:** Sheriff -> Captains -> Deputies.

Unlike the Army's brute force, the Sheriff's Department prioritizes mediation. They are the beat cops of the metaverse, fostering community relationships and resolving disputes before they escalate to violence.`
        }
    ]
};

export const chapter5: ChapterData = {
    id: 'gulag-life',
    number: '05',
    title: 'Life in The Gulag',
    subtitle: 'Structure of Confinement',
    color: '#f2a65a', // Amber/Orange
    pullQuote: 'The walls that confine you also protect the seeds of your future empire.',
    summary: 'A guide to the geography and daily operations of Dimension GG4.261T.',
    sections: [
        {
            heading: 'Territorial Layout',
            content: `**West Wing:** The Gulag Administration HQ.
**North Wing:** Copper Cutters Guild Territory.
**South Wing:** Pot Growers Guild Territory.
**East Wing:** Bootleggers Guild Territory.

**Common Areas:**
*   **The Yard:** Socializing, exercising, and general hanging out.
*   **The Commissary:** The central marketplace for buying and selling goods.
*   **Visiting Area:** Interface point for external visitors.
*   **Intake-Release:** Processing center for new arrivals and those who have earned their freedom.`
        },
        {
            heading: 'Code of Conduct',
            content: `Stability requires rules. The Code of Conduct ensures that The Gulag remains a place of redemption, not destruction.

**Prohibited Behavior:**
*   Harassment or bullying
*   Spamming or hate speech
*   Sharing illegal content or private PII

**Enforcement:**
Procedures involve reporting, investigation by the Administration (CIU/Sheriff), and penalties ranging from warnings to permanent bans (exile).`
        }
    ]
};
