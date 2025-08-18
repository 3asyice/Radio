const CACHE_NAME = "fm609-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "../script/css/main.css",
  "../../assets/00_img/logo.png",
  "../../assets/00_img/radio_icon.png",
  "../../assets/00h/M83_Wait.mp3", // exemplo de música offline
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
