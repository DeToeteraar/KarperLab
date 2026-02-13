import { MetadataRoute } from 'next';

// De 'sitemap' helpt Google om alle pagina's op je website te vinden.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.karperlab.nl',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
