export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin or private areas (if any)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow important pages for SEO
Allow: /projects
Allow: /about-me
Allow: /contact
Allow: /projects/*

# Sitemap location
Sitemap: https://yafiazka.my.id/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Additional directives for better SEO
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}