self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("gym-team-cache").then(function(cache) {
      return cache.addAll([
        "/gym-team/"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
