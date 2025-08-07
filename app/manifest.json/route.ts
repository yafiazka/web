export async function GET() {
  const manifest = {
    name: "Yafi Azka - Frontend Developer Portfolio",
    short_name: "Yafi Azka",
    description: "Yafi Azka's professional portfolio showcasing frontend development expertise in React, Next.js, and Flutter",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "en-US",
    orientation: "portrait-primary"
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}