const CACHE_NAME = "gymteam-cache-v1";
const assets = [
  "/gym-team/",
  "/gym-team/index.html",
  "/gym-team/manifest.json",
  "/gym-team/launchericon-192x192.png",
  "/gym-team/launchericon-512x512.png"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Activate
self.addEventListener("activate", () => self.clients.claim());

// Cache first then network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
