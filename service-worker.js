const CACHE_NAME = 'quintos2006-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  'img/logo-quintos-2006.png',
  'img/escut-ametlla.png',
  'img/poble-ametlla.jpg',
  'img/fons-web.jpg',
  'img/fons-barra-inferior.jpg',
  // Afegeix més imatges importants si vols
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});