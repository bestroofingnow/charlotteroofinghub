import { MetadataRoute } from 'next'
import { companies } from '@/data/companies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://charlotteroofinghub.com'

  // Static pages with SEO priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/materials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic company pages - high priority for local SEO
  const companyPages: MetadataRoute.Sitemap = companies.map((company) => ({
    url: `${baseUrl}/companies/${company.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: company.isFeatured ? 0.9 : 0.8,
  }))

  return [...staticPages, ...companyPages]
}
