import { allProjects } from 'contentlayer/generated'

export async function GET() {
  const baseUrl = 'https://yafiazka.my.id'
  
  // Static pages
  const staticPages = [
    '',
    '/projects',
    '/contact',
    '/about-me',
  ]
  
  // Dynamic project pages
  const projectPages = allProjects
    .filter(project => project.published)
    .map(project => `/projects/${project.slug}`)
  
  const allPages = [...staticPages, ...projectPages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'weekly' : page.startsWith('/projects/') ? 'monthly' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : page.startsWith('/projects/') ? '0.8' : '0.9'}</priority>
    </url>`
    )
    .join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}