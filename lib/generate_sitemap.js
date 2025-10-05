// scripts/generate-sitemap.js

const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

(async () => {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/quiz', changefreq: 'monthly', priority: 0.7 },
    // Add more static or dynamic routes here
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'https://techstackadvisor.info' });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  fs.writeFileSync('public/sitemap.xml', xml);

  console.log('[DONE]: Sitemap generated');
})();
