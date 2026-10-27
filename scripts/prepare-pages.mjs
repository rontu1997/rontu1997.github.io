import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const html = new URL('index.html', dist);
const source = readFileSync(html);

// GitHub Pages serves these directory indexes on direct visits and refreshes.
const routes = [
  'about',
  'research',
  'projects',
  'projects/agentic-ai-scientific-rd',
  'projects/cloud-scientific-tool-containers',
  'projects/polymer-framework-builder',
  'publications',
  'software',
  'contact',
];

for (const route of routes) {
  const directory = new URL(`${route}/`, dist);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL('index.html', directory), source);
}

// Unknown routes can still reach React's own not-found page.
copyFileSync(html, new URL('404.html', dist));
console.log(`Prepared ${routes.length} direct routes and a 404 fallback for GitHub Pages.`);
