// Cache hors ligne : réseau d'abord (sans cache HTTP) pour recevoir les mises à jour, cache seulement sans connexion.
const CACHE = 'muscu-v15';
const FILES = ['./', './index.html', './manifest.json', './version.txt', './icon-180.png', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.endsWith('version.txt')) return;
  const fresh = new Request(url.origin + url.pathname + url.search, {cache: 'no-cache', credentials: 'same-origin'});
  e.respondWith(
    fetch(fresh).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req.mode === 'navigate' ? './' : req, copy)); }
      return r;
    }).catch(() => caches.match(req).then(r => r || caches.match('./')).then(r => r || caches.match('./index.html')))
  );
});
