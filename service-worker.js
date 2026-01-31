const CACHE_VERSION = 'v2.0.0';
const APP_CACHE = `waec-app-${CACHE_VERSION}`;
const DATA_CACHE = `waec-data-${CACHE_VERSION}`;

const APP_ASSETS = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/ai-engine.js',
  './js/achievements.js',
  './js/voice-engine.js',
  './js/analytics.js',
  './js/feedback.js',
  './js/firebase-config.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

const DATA_ASSETS = [
  './data/mathematics.json',
  './data/english.json',
  './data/physics.json',
  './data/chemistry.json',
  './data/biology.json'
];

// External CDN assets to cache
const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js',
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore-compat.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(APP_CACHE).then((cache) => cache.addAll(APP_ASSETS)),
      caches.open(DATA_CACHE).then((cache) => cache.addAll(DATA_ASSETS)),
      // Cache Firebase and CDN assets with error handling
      caches.open(APP_CACHE).then((cache) => 
        Promise.allSettled(
          CDN_ASSETS.map(url => 
            fetch(url).then(response => {
              if (response.ok) {
                return cache.put(url, response);
              }
              console.warn(`Failed to cache CDN asset: ${url}`);
            }).catch(error => {
              console.warn(`Failed to fetch CDN asset ${url}:`, error);
            })
          )
        )
      )
    ]).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !key.includes(CACHE_VERSION))
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

const cacheThenUpdate = async (request) => {
  const cache = await caches.open(DATA_CACHE);
  const cached = await cache.match(request);
  const networkFetch = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);

  return (
    cached ||
    (await networkFetch) ||
    new Response('[]', { headers: { 'Content-Type': 'application/json' } })
  );
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.includes('/data/')) {
    event.respondWith(cacheThenUpdate(request));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then((cached) => cached || fetch(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
