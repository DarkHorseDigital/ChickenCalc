const CACHE_NAME = 'chicken-calc-v1';
const ASSETS = [
  '/ChickenCalc/',
  '/ChickenCalc/index.html',
  '/ChickenCalc/manifest.json',
  '/ChickenCalc/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
