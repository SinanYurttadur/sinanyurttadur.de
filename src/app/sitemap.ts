import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinanyurttadur.de';
  const lastModified = new Date();

  // Static pages for each locale
  const locales = ['de', 'en'];

  const pages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/legal`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]);

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...pages,
  ];
}
