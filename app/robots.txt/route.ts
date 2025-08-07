export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://yafiazka.my.id/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}