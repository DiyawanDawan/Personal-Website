import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

// Get the current directory in an ES module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Correct the path to the public directory
const publicDir = path.join(__dirname, 'public');

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
const sitemap = new SitemapStream({ hostname: 'https://awancode.netlify.app' });

const routes = [
  '/',
  '/proyek',
  '/services',
  '/chertification',
  '/proyek/:id',
  '*'
];

routes.forEach(route => {
  sitemap.write({ url: route, changefreq: 'daily', priority: 0.7 });
});

sitemap.end();
streamToPromise(sitemap)
  .then(data => {
    // Write the sitemap.xml file to the correct path
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), data);
    console.log('Sitemap generated successfully!');
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
  });