// app/sitemap.xml/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://academialacocina.com';
  const baseUrl1 = 'http://academialacocina.com';

  const pages = [
    '/',
  ];

  const urls = pages
    .map((path) => {
      return `
        <url>
          <loc>${baseUrl}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>${baseUrl1}/${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
