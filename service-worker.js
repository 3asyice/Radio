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


// notification 
if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'Rádio FM609',
    artist: 'Transmissão ao vivo',
    album: 'FM609 Playlist',
    artwork: [
      { src: 'capa.jpg', sizes: '512x512', type: 'image/jpeg' }
    ]
  });

  navigator.mediaSession.setActionHandler('play', () => {
    audio.play();
  });
  navigator.mediaSession.setActionHandler('pause', () => {
    audio.pause();
  });
}
