import { MetadataRoute } from 'next';
import { LOCATIONS, INDUSTRIES, COMPARISONS } from '@/data/seo';

const BASE_URL = 'https://thegrandenarrative.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/#world',
        '/#factions',
        '/#gameplay',
        '/#lore',
        '/whitepaper',
        '/locations',
        '/industries',
        '/comparisons',
        '/codex',
        '/contact',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }));

    const locationRoutes = LOCATIONS.map((loc) => ({
        url: `${BASE_URL}/locations/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const industryRoutes = INDUSTRIES.map((ind) => ({
        url: `${BASE_URL}/industries/${ind.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const comparisonRoutes = COMPARISONS.map((comp) => ({
        url: `${BASE_URL}/comparisons/${comp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...locationRoutes, ...industryRoutes, ...comparisonRoutes];
}
