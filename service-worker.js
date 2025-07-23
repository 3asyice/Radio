self.addEventListener("install", (e) => {
  console.log("Service Worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker ativado.");
});

self.addEventListener("fetch", (event) => {
  // Aqui você pode personalizar o comportamento offline, se desejar
});
