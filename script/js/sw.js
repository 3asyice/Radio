// /Radio/sw.js
const VERSION = 'v4';
const APP_CACHE   = `fm609-app-${VERSION}`;
const AUDIO_CACHE = `fm609-audio-${VERSION}`;

const CORE = [
 "index.html",
"../script/css/main.css",
"../../assets/00_img/logo.png",
"../../assets/00_img/radio_icon.png",
"../../assets/00h/duraduran_ordinaryworld.mp3",
"../../assets/00h/LolaYoung_Messy.mp3",
"../../assets/00h/M83_Reunion.mp3",
"../../assets/00h/M83_Wait.mp3",
"../../assets/00h/OneRepublic_IfILoseMyself_ftAlesso.mp3",
"../../assets/00h/roxanne_i_dont_wanna_get_hurt.mp3",
"../../assets/00h/Skrillex_Summit_featEllieGoulding.mp3",
"../../assets/00h/TameImpala_LetItHappen.mp3",
"../../assets/00h/TheCivilWars_DusttoDust.mp3",
"../../assets/00h/themidnight_collateral.mp3",
"../../assets/00h/TheMidnight_Memories.mp3",
"../../assets/00h/XAmbassadors_Renegades.mp3",
"../../assets/01h/Adele_RollingintheDeep.mp3",
"../../assets/01h/Adele_SomeoneLikeYou.mp3",
"../../assets/01h/BillyIdol_EyesWithoutAFace.mp3",
"../../assets/01h/BonnieTyler_TotalEclipseoftheHeart_TurnAround.mp3",
"../../assets/01h/Kavinsky_PacificCoastHighway.mp3",
"../../assets/01h/KellyClarkson_BecauseOfYou.mp3",
"../../assets/01h/Queen_UnderPressure.mp3",
"../../assets/01h/SimpleMinds_DontYou_ForgetAboutMe.mp3",
"../../assets/01h/SnowPatrol_OpenYourEyes.mp3",
"../../assets/01h/TheChainsmokers_Coldplay_SomethingJustLikeThis.mp3",
"../../assets/01h/Whereismymind_ThePixiesPianocover.mp3",
"../../assets/02h/BORNSPastLives.mp3",
"../../assets/02h/CharliePuth_WeDontTalkAnymore_featSelenaGomez.mp3",
"../../assets/02h/ChristinaPerri_AThousandYears.mp3",
"../../assets/02h/CrystalCastles_KEROSENE.mp3",
"../../assets/02h/CrystalCastles_TRANSGENDER.mp3",
"../../assets/02h/EdSheeran_ThinkingOutLoud.mp3",
"../../assets/02h/Gotye_SomebodyThatIUsedToKnow_featKimbra.mp3",
"../../assets/02h/JamesBay_LetItGo.mp3",
"../../assets/02h/LukasGraham_7Years.mp3",
"../../assets/02h/MartinGarrix_Bebe Rexha_InTheNameOfLove.mp3",
"../../assets/02h/MemoryReboot.mp3",
"../../assets/02h/MrKitty_AfterDark.mp3",
"../../assets/02h/nobody_lanadelrey_summertimesadness_sxade_synthwave_remix.mp3",
"../../assets/02h/SamSmith_ImNotTheOnlyOne.mp3",
"../../assets/02h/TheKills_SiberianNights_StromboSessions.mp3",
"../../assets/02h/YeahYeahYeahs_SpittingOfftheEdgeoftheWorld.mp3",
"../../assets/03h/Glasvegas_EverybodysGottoLearnSometime.mp3",
"../../assets/03h/HighlySuspect_Lydia.mp3",
"../../assets/03h/HighlySuspect_Lydia.mp3",
"../../assets/03h/JacobsPiano_Interstellar.mp3",
"../../assets/03h/Kavinsky_Nightcall.mp3",
"../../assets/03h/Kavinsky_OddLook_ftTheWeeknd.mp3",
"../../assets/03h/KAVINSKY_VideoGame.mp3"
  // pelo menos 1 faixa offline de fallback:
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(APP_CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => ![APP_CACHE, AUDIO_CACHE].includes(k))
        .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  // Áudio pede Range? responder 206 parcial
  if (req.headers.has('range')) {
    event.respondWith(handleRangeRequest(req));
    return;
  }

  // HTML -> Network First
  if (req.destination === 'document' || url.pathname.endsWith('/')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Estáticos -> Stale-While-Revalidate
  if (['style', 'script', 'image', 'font'].includes(req.destination)) {
    event.respondWith(staleWhileRevalidate(APP_CACHE, req));
    return;
  }

  // Áudio (mp3/ogg/m4a) -> cache com fallback
  if (/\.(mp3|ogg|m4a)$/i.test(url.pathname)) {
    event.respondWith(cacheAudio(req));
    return;
  }

  // Padrão
  event.respondWith(staleWhileRevalidate(APP_CACHE, req));
});

async function networkFirst(request) {
  try {
    const fresh = await fetch(request);
    const cache = await caches.open(APP_CACHE);
    cache.put(request, fresh.clone());
    return fresh;
  } catch {
    const cache = await caches.open(APP_CACHE);
    return (await cache.match(request)) || (await cache.match('index.html'));
  }
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request, { ignoreSearch: true });
  const network = fetch(request).then(resp => {
    cache.put(request, resp.clone());
    return resp;
  }).catch(() => null);
  return cached || network || Response.error();
}

async function cacheAudio(request) {
  const cache = await caches.open(AUDIO_CACHE);
  const cached = await cache.match(request, { ignoreSearch: true });
  if (cached) return cached;
  try {
    const resp = await fetch(request);
    cache.put(request, resp.clone());
    return resp;
  } catch {
    return cache.match('../../assets/00h/OneRepublic_IfILoseMyself_ftAlesso.mp3');
  }
}

async function handleRangeRequest(request) {
  const cache = await caches.open(AUDIO_CACHE);
  let res = await cache.match(request, { ignoreSearch: true });
  if (!res) {
    try {
      res = await fetch(request);
      cache.put(request, res.clone());
    } catch {
      return cache.match('../.."../../assets/03h/HighlySuspect_Lydia.mp3",');
    }
  }
  const buf = await res.arrayBuffer();
  const size = buf.byteLength;
  const range = /bytes=(\d+)-(\d+)?/.exec(request.headers.get('range'));
  const start = Number(range[1]);
  const end = range[2] ? Number(range[2]) : size - 1;
  const chunk = buf.slice(start, end + 1);

  return new Response(chunk, {
    status: 206,
    headers: {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': String(chunk.byteLength),
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg'
    }
  });
}
