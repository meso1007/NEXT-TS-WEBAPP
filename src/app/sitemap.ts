import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.miraimessage.net/', // トップページのURL
      lastModified: '2025-09-01T10:00:00+09:00', // 最終更新日
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.miraimessage.net/contact', // ContactページのURL
      lastModified: '2025-09-01T10:00:00+09:00',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}