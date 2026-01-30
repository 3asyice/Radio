if (window.location.hostname.includes("web.archive.org")) {
  document.querySelectorAll("a[href*='web.archive.org/web/']").forEach(a => {
    let href = a.getAttribute("href");
    
    // ignora se já contém "if_" (modo de exibição)
    if (/^https:\/\/web\.archive\.org\/web\/\d+\//.test(href) && !/if_/.test(href)) {
      // adiciona "if_" após o timestamp
      href = href.replace(/(https:\/\/web\.archive\.org\/web\/\d+)\//, "$1if_/");
      a.setAttribute("href", href);
    }
  });
  console.log("✅ Links ajustados para modo de exibição (if_).");
}

// new code up there

function saveToWayback() {
  var e = document.getElementById("urlInput").value;
  e ? (e = "https://web.archive.org/save/" + encodeURIComponent(e), window.open(e, "_blank")) : alert("Por favor, insira uma URL válida.")
}

function filterItems() {
  const t = document.querySelector(".search-input").value.toLowerCase();
  document.querySelectorAll(".link-item").forEach(e => {
    var s = e.querySelector("a").textContent.toLowerCase(),
      a = e.querySelector(".date").textContent.toLowerCase(),
      i = e.querySelector("hr");
    s.includes(t) || a.includes(t) ? (e.style.display = "", i.style.display = "") : (e.style.display = "none", i.style.display = "none")
  })
}
const linkstwentytwentyfour = document.getElementById("linksScripted").innerHTML = `<div id="links">







  

<div class="link-item"><a href="https://3asyice.github.io/the-end-line/"/>the end line/</a><p class="date">jan 28, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/trtn-rzn-w"/>os 13 porquês/</a><p class="date">jan 28, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/animated-kids"/>desenhos animados/</a><p class="date">jan 25, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/black-mirror-bandersnatch_480"/>bandersnatch movie/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/monsters-inc-2002-vhs-1of-21/"/>spongebob vhs/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/fun-and-fancy-free-1997-vhs"/>vhs animated movies/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/page-chronicles-vol-9-flicks"/>movies collection 7/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/boys_20251027_20251027_1851"/>movies collection 6/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/boys_20251027_20251027_1851"/>the boys season 4/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/boys_20251027_20251027"/>the boys season 3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/boys_20251027_202510"/>the boys season 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/boys_20251027"/>the boys season 1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/spartacus-gods-of-the-arena"/>spartacus gods of the arena/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/spartacus-war-of-the-damned"/>spartacus season 3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/spartacus-vengeance"/>spartacus season 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/spartacus-blood-and-sand"/>spartacus season 1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-end-of-the-fucking-world_202512"/>teotfw series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/bsi-template#review-1767709635"/>movies collection en 5/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-pc-flicks-title#review-1768146701"/>movies collection en 4/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/page-chonicles-2025-violet/"/>movies collection en 3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-pc-flick-title_202601/"/>movies collection en 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-pc-flick-title/"/>movies collection en/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-viking-valhalla"/>vikings valhalla series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-strain"/>the strain series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/alien-1979._202103"/>alien 1,2,3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/deep-purple-videobiography-disk-1-and-2-kut"/>page's music video/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/lady-death-the-motion-picture-anime-o-1-h-16-min"/>x-men collection/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/twilight-zone-3_202510"/>the twilight zone 85 s3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/twilight-zone-6"/>the twilight zone 85 s2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/twilight-zone-3"/>the twilight zone 85 s1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/severance-season-2-reportedly-facing-delays-due-to-concerning-reason"/>severance season 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/severance-spoiler-magazine"/>severance season 1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/tru-det-4"/>true detective season 4/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/true-det-3"/>true detective season 3/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/true-detective-season-2-overview"/>true detective season 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/rbw-1"/>true detective season 1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/american-horror-stories_202511/"/>ahs season 1/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/american-horror-stories-season-02"/>ahs season 2/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/matrix-collection-misc."/>the matrix collection/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-last-of-us-season-01"/>the last of us/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/titans-s-01"/>titans tv series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/x-files_202511"/>x-files series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-umbrella-academy-tv-series"/>the umbrella academy/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/legion-tv-series"/>legion tv series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/wandavision-s-01"/>wandavision series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/peacemaker_202512"/>peacemaker/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-terminal-list"/>the terminal list/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/love-death-and-robots"/>love, death + robots/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/pc-tba_202512"/>dark series en/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/superman-returns-man-of-steel-superman-christopher-reeve_202601"/>superman collection/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-b-c-s"/>better call saul series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-b-b"/>breaking bad series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-dex"/>Dexter series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-starwars-coll"/>star war collection/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-dex-new-bld"/>dexter new blood/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-dex-res"/>dexter resurrection/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1-dex-or-sin_202601"/>dexter original sin/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-sprntrl_202601"/>Supernatural series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-it-welcone"/>It - welcome to derry/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/grimm-2"/>Grim Series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-vikings"/>Vikings Series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-the-twilight-zone"/>The Twilight Zone/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/0-star-trek-animated"/>Star Trek animated series/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/dos_20251021"/>Black Mirror EN/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/azofcoolcomputer0000rail/page/n141/mode/1up"/>book a-z games/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.retrogames.cz/play_171-Genesis.php"/>outrun sega/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://play.highscoregamearcade.com/thegames/e4faa109-6743-11ee-9879-16d64b27c4cb/index.html"/>break invaders/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://dopebox.to/tv/watch-greys-anatomy-online-hd-39545"/>grey's anatomy/</a><p class="date">jan 23, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://m.vk.com/video696059331_456239358"/>the last straight man/</a><p class="date">jan 22, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/official-arctic-monkeys"/>arctic monkeys releases/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://nuforc.org/map/"/>relatórios de ufos/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/video/bastardos-inglorios-2009-2h-33m"/>bastardos inglórios/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/fr/video/blue-valentine-2010"/>blue valentine/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/cisne-negro"/>cisne negro/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/pulp-fiction-tempo-de-violencia"/>pulp fiction/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/o-predador-1987-2"/>o predador (1987)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/o-enigma-de-outro-mundo-1982"/>a coisa (1983)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/nada-de-novo-no-front-2022-todos"/>nada de novo no front/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/batman-o-cavaleiro-das-trevas-2"/>batman cavaleiro das trevas/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/menina-de-ouro-2004-esporte-drama-vini7xg"/>menina de ouro (2004)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/cidade-de-deus-pedroccc"/>cidade de deus (2002)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/blade-runner-o-cacador-de-androides-1982-dublado-pt-br"/>blade runner (1982)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/o-poderoso-chefao-1972"/>o poderoso chefão (1972)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/psicose-psycho-1960"/>Psicose (1960)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/um-corpo-que-cai-vertigo-1958-2h-8m-leg"/>Vertigo (1959)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.dailymotion.com/video/x1e2csj"/>a streetcar named desire/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/a-lista-de-schindler-1993"/>a lista de schindler (1993)/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251224070230id_/https://rad609.bar/page/2025/dez/dreams.html"/>Sonhos de Guilherme/</a><p class="date">jan 21, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/caminhos-da-memoria-2021-dublado"/>caminhos da memória.mp4/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.dailymotion.com/video/x8bliyj"/>Expresso do amanhã.mp4/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/a-maquina-de-lembrancas-2018-dublado"/>a máquina de lembranças/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://dn721500.ca.archive.org/0/items/spin-soldier/Screenrecorder-2026-01-17-00-33-37-639.ia.mp4"/>motivações volume off/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://dn721500.ca.archive.org/0/items/spin-soldier/evento-do-vini.ia.mp4"/>evento do vxni.mp4/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/amnesia"/>amnésia.mp4/</a><p class="date">jan 18, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/30/items/spin-soldier/o_grilo_live_17012026_4.ia.mp4"/>o grilo live ig 4/</a><p class="date">jan 17, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/30/items/spin-soldier/o_grilo_live_17012026_3.ia.mp4"/>o grilo live ig 3/</a><p class="date">jan 17, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/30/items/spin-soldier/o_grilo_live_17012026_2.ia.mp4"/>o grilo live ig 2/</a><p class="date">jan 17, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/30/items/spin-soldier/o_grilo_live_17012026.ia.mp4"/>o grilo live ig/</a><p class="date">jan 17, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/o-grilo-mp3"/>o grilo mp3/</a><p class="date">jan 17, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/BlackMirrorwiki/page/season-3/nosedive.html"/>nosedive 03x01/</a><p class="date">jan 16, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/arsenalg-page-2"/>Arsenal G p2/</a><p class="date">jan 16, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/arsenalg"/>Arsenal G p1/</a><p class="date">jan 16, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Arsenal/"/>Arsenal G/</a><p class="date">jan 16, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/JKLVmvMF_9k?si=4PGx0yw28NFCG8td"/>white rabbit cover/</a><p class="date">jan 13, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/windows-11_202106"/>Windows 11.iso/</a><p class="date">jan 12, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://tubeflix.barramaisbaratovitrine.com/video/62/n%C3%A3o-adianta-fugir-2009-dublado-hd-imdb-4.6?channelName=Tubeflix"/>Não adianta fugir (2009)/</a><p class="date">jan 12, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/linkin-park-storage"/>Linkin Park Álbuns/</a><p class="date">jan 12, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://redecanaistv.fm/assistir-rede-globo-rj-online-24-horas-ao-vivo_89f2ea726.html"/>globo rj/</a><p class="date">jan 11, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/vqBXh4ltga0?si=q2Mn0SxDNIj3BbBO"/>série cosmos viagem no tempo/</a><p class="date">jan 11, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://november61987.com/"/>vecna lives/</a><p class="date">jan 07, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://dn720006.ca.archive.org/0/items/baudrillard.-1970.-the-consumer-society/Baudrillard.1981.Simulacra-and-Simulation.pdf"/>simulacra and simulation/</a><p class="date">jan 06, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/sertanejo-universitario"/>sertanejos universitários/</a><p class="date">jan 04, 2026 </p> <hr> </div>
<div class="link-item"><a href="https://ww3.soap2dayhdz.com/"/>movies and series english/</a><p class="date">dec 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/H2WqfX-WJj4?si=ekDOpczn3BPsNXto"/>Trailer de Filmes/</a><p class="date">dec 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www13.redecanais.in/episodio/stranger-things-5x5-5a-temporada-episodio-5/"/>stranger things volume 2/</a><p class="date">dec 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251223115956id_/https://rad609.bar/arquivos"/>rad609.bar arquivos/</a><p class="date">dec 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.dailymotion.com/video/x9um5s0"/>Heated Rivalry/</a><p class="date">dec 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://m.ok.ru/video/8766871112212"/>Arrival (2016)/</a><p class="date">dec 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/filmes-de-tyler-2"/>Filmes teste 2/</a><p class="date">dec 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/Om8v3lJXQZ8"/>Vídeos Motivacionais YT/</a><p class="date">dec 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251218121238if_/https://colaborae.com.br/blog/2023/07/14/imaginacao-e-visualizacao/"/>imaginação e visualização/</a><p class="date">dec 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251223120638id_/https://rad609.bar/Feed"/>Rádio 609 Feed/</a><p class="date">dec 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251216014502id_/https://rad609.bar"/>Rádio 609/</a><p class="date">dec 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/bugs_20240315"/>Rabbit Tales/</a><p class="date">dec 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/looney-tunes-1994-tbs"/>Looney Tunes (1994)/</a><p class="date">dec 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/dark_serie_br"/>Dark (2017)/</a><p class="date">dec 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/my-vhs-saga-part-66/"/>The blair witch project/</a><p class="date">dec 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/love.-death.and.-robots.-s-01-e-18.-the.-secret.-war.-1080p.-nf.-web-dl.-ddp-5.1.x-264-ntg/"/>Love, Death + Robots/</a><p class="date">dec 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtube.com/playlist?list=PLLN5GPLKgoiRZXZYgbi0C92me4GVTkMfU&si=7uVRV73rt5aqDn2j"/>Skins Dublado/</a><p class="date">dec 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtube.com/playlist?list=PLNFfhWJpF1uictB9GAag8O2UVE5uKbNdf&si=VWTyTnX9mwM3VPXR"/>Skins UK English/</a><p class="date">dec 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/video/mommy-2014"/>Mommy (2014)/</a><p class="date">dec 06, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/1899-serie-br"/>1899/</a><p class="date">dec 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/silo-dublado"/>Silo (2023)/</a><p class="date">dec 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251205050640if_/https://www.radiotapejara.com.br/noticia/95470/soldado-de-19-anos-morre-apos-ser-atingido-por-arvore-durante-atividade-militar-no-rs"/>soldado de 19 anos morre/</a><p class="date">dec 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251202010043if_/https://3asyice.github.io/Spck-Test/assets/video/Odair.mp4"/>Karma Odair José/</a><p class="date">dec 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia800507.us.archive.org/20/items/Historia-de-um-Recruta/Hashtag%EF%BC%9A609%20-%20Gritos%20na%20Avenida%20Liberdade.mp3"/>Áudios Originais de 609 Carvalho/</a><p class="date">nov 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://yout.com/video/?url=https://youtu.be/c-8v5buOeJc"/>Baixar gritos da liberdade/</a><p class="date">nov 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://lelinhtinh.github.io/de4js/"/>de4js desofuscar/</a><p class="date">nov 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/filmes-test"/>Filmes teste/</a><p class="date">nov 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="http://www.playcinevs.info/m/2881"/>Jogo da Imitação/</a><p class="date">nov 17, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/faces-da-morte-1978"/>Faces da Morte (1978)/</a><p class="date">nov 17, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251116145741id_/https://3asyice.github.io/SixOhNine/script/sd/609.html"/>Guilherme de Abreu Carvalho/</a><p class="date">nov 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251116144928id_/https://3asyice.github.io/SixOhNine/script/tree/Josiane.html"/>Josiane Braga de Abreu/</a><p class="date">nov 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251116142505id_/https://3asyice.github.io/SixOhNine/script/tree/Marisa.html"/>Marisa Fernandes Braga/</a><p class="date">nov 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251116142012id_/https://3asyice.github.io/SixOhNine/script/tree/Orides.html"/>Orides Fernandes Braga/</a><p class="date">nov 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251116141735if_/https://3asyice.github.io/SixOhNine/script/tree/Sebastiana.html"/>Sebastiana Cavalheiro Fernandes/</a><p class="date">nov 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.visioncine-1.com.br/watch/vikings"/>Vikings/</a><p class="date">nov 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251112031129id_/https://www.bbc.com/portuguese/internacional-53800200"/>Julia Butterfly Hill/</a><p class="date">nov 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251104111205id_/https://3asyice.github.io/Spck-Test/"/>004 links/</a><p class="date">nov 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251104074354/https://3asyice.github.io/Spck-Test/arquivo/Analise_de_sistemas_Henriq_Z-Library.epub"/>Análise de sistemas.epub/</a><p class="date">nov 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://meta.wikimedia.org/w/index.php?title=User%3AOriginalDarkLotus&redlink=1"/>wikipedia remove it's page/</a><p class="date">nov 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240224081445if_/https://gruporeporter.com.br/historia/"/>rádio repórter Ijuí/</a><p class="date">nov 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251030161354if_/https://3asyice.github.io/Spck-Test/"/>004 atualizado/</a><p class="date">out 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251030125915if_/https://www.historiadomundo.com.br/curiosidades/hallowee.htm"/>o que é o Halloween? 🎃/</a><p class="date">out 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.clipsave.com.br/"/>clipsave.com.br/</a><p class="date">out 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801508.us.archive.org/30/items/spin-soldier/T1_E1_-_27_de_janeiro_de_2013_-_Boate_Kiss_-_A_Trag%C3%A9dia_de_Santa_Maria_online_no_Globoplay_2.mp4"/>27 de Janeiro de 2013/</a><p class="date">out 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/30/items/spin-soldier/rodrigo.ia.mp4"/>rodrigo moura boate kiss/</a><p class="date">out 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251029011107if_/https://3asyice.github.io/Spck-Test/meandthedevil.mp4"/>me and the devil/</a><p class="date">out 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251029010753if_/https://expresso.pt/geracao-e/2025-10-23-pentagono-acusa-netflix-de-produzir-lixo-woke-depois-de-lancamento-da-serie-lgbt--boots-6604215d"/>pentágono crítica a série boots/</a><p class="date">out 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251025063145if_/https://3asyice.github.io/Spck-Test/meandthedevil.mp4"/>me and the devil/</a><p class="date">out 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251024194951if_/https://www.brasilparalelo.com.br/noticias/a-historia-por-tras-de-o-exorcismo-de-emily-rose-o-caso-anneliese-michel"/>Anneliese Michael/</a><p class="date">out 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251022035529if_/https://www.bbc.com/portuguese/internacional-39625619"/>o que é eugenia?/</a><p class="date">out 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.facebook.com/edson.macedo.79274089"/>Edson Macedo Júnior - fb/</a><p class="date">out 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.instagram.com/edsonm_jr"/>Edson Macedo Júnior - ig/</a><p class="date">out 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251020043427if_/https://g1.globo.com/sc/santa-catarina/noticia/2025/10/19/aluno-do-exercito-morre-ao-sofrer-parada-cardiaca-apos-corrida-em-joinville.ghtml"/>Edson Macedo Júnior/</a><p class="date">out 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251018183035/https://cybereality.com/the-matrix-is-real-but-its-not-what-you-think/"/>Matrix is Real/</a><p class="date">out 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251018181912if_/https://www.metropoles.com/distrito-federal/na-mira/misterio-dentista-do-exercito-e-encontrado-morto-dentro-de-quartel"/>Felipe Borsa Lago/</a><p class="date">out 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/DC6yfy0w-Gw"/>café of the seven sinners/</a><p class="date">out 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251011004010if/https://www.terra.com.br/noticias/soldado-de-19-anos-e-encontrado-morto-em-unidade-militar-do-exercito-em-sao-borja,cc35c285d85b1b34019075772ef69214287jpiyk.html"/>soldado morre em São Borja/</a><p class="date">out 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/american-horror-story-br"/>american horror story/</a><p class="date">out 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/dan.-vs./"/>Dan Vs/</a><p class="date">out 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/paprika-jolli"/>Paprika Jolli (2006)/</a><p class="date">out 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/studio-60-on-the-sunset-strip/"/>the sunset strip/</a><p class="date">out 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="http://pdtv.live/"/>pdtv.live all old series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/search-1972/"/>UFO Search (1972)/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/UFO.complete/"/>UFO Complete/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/leave-it-to-beaver-the-complete-series-1957-1963/Leave+It+to+Beaver+(The+Complete+Series)+%5B1957+-+1963%5D/"/>Leave it to Beaver/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/s-01.-e-17-ella-west.ia"/>Have a gun will travel/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/Dragnet1951"/>Dragnet (1951)/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/The-Cat-1966-Series/"/>T.H.E .Cat/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/sea-hunt/"/>sea hunt/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/s-01e-02.-point-blank/"/>Maverick/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/s-01-e-26-papa-benjamin/"/>Thriller 1960s/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/sctv-season-1"/>SCTV season 1/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/harry-o-s-01-/"/>Harry O/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/wanted-dead-or-alive-s-01-e-01-ep-1-the-martin-poster"/>Wanted Dead or Alive/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/naked-city-s-01-e-01-meridian/"/>Naked City/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/01-cheyenne-season-1-episodes-1-2-3_202402/"/>Cheyenne season 1/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/Coronet-Blue-1967-Series/"/>Coronet Blue series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/ElleryQueenSeries/"/>Ellery Queen series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/dark-shadows_202210/"/>Dark Shadows series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-time-tunnel/"/>The Time Tunnel/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/Alias-Smith-And-Jones-1973/"/>Alias Smith and Jones/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/TheBobNewhartShow/Extras"/>The bob newhart Show series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/bewitchedcomplete_202310/"/>Bewitched series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/GreenAcresCompleteSeries/"/>Green Acres series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/The-Monkees-Complete/"/>The Monkees series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/get-smart/"/>Get Smart series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/The_Fugitive_Series/"/>The Fugitive Series/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/s20191114"/>77 Sunset Strip/</a><p class="date">out 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/black-mirror-br"/>Black Mirror dublado/</a><p class="date">out 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20251002155001if_/https://eter9.com/files/c556a73d-5bb0-4822-93b2-5068cb5aab98"/>eter9
com json file/</a><p class="date">out 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/severance-br"/>severance dublado/</a><p class="date">out 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250930072718if_/https://3asyice.github.io/SixOhNine/script/sidebar/militares.html"/>militares e civis/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn721906.ca.archive.org/0/items/the-coming-wave-by-mustafa-suleyman-michael-bhaskar-pdfread.net/The Coming Wave By Mustafa SuleymanMichael Bhaskar-pdfread.net.pdf"/>the coming wave/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/DaddyOFive-youtube/"/>yt DaddyOFive/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/documentary-fullhd-10/"/>docs britânicos²/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/yt Leafyisherearchive/"/>Leafyisherearchive/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/Linguagem_Corporal_Comunicac_a_o_Na_o_Verbal.mp4"/>linguagem corporal/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/ITV4-Part3-tva/00083CC0-Terminator-2-Judgement-Day-2019-10-21T200000Z-ITV4.mp4"/>terminator 2.mp4/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/Channel-5-Part9/"/>channel 5/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/SCV7_2"/>danger knife in the dark/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/04-twilight-zone-s-01-e-04-16-millimeter-shrine/"/>the twilight z../</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/man-with-a-camera-s-01-e-04-turntable/"/>man with a camera/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/01-blondell-picture_202509/"/>Filmes dos 30s e 40s/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/BBC4-Part3-tva/"/>docs britânicos/</a><p class="date">set 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/albuns-de-musica"/>sertanejos e rap/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926042717/https://bancodedadosfeb.com.br/?soldiers=30"/>ANID ABIB/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926042432/https://bancodedadosfeb.com.br/?soldiers=29"/>ANTÔNIO LENI ABI/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926042244if_/https://bancodedadosfeb.com.br/?soldiers=28"/>Elias Abdo/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926042116/https://bancodedadosfeb.com.br/?soldiers=27"/>FRID ABDNOR/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926041906/https://bancodedadosfeb.com.br/?soldiers=26"/>Pedro Abdalla/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926041646if_/https://bancodedadosfeb.com.br/?soldiers=25"/>Pedro Abdalla/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926041455if_/https://bancodedadosfeb.com.br/?soldiers=24"/>JOÃO ANGÊLO ABATAYGUARA/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926041329if_/https://bancodedadosfeb.com.br/?soldiers=23"/>crispim abalô/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926041010if_/https://bancodedadosfeb.com.br/?soldiers=22"/>aranhão abait/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926040808if_/https://bancodedadosfeb.com.br/?soldiers=21"/>ricardo abadi/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250926040222if_/https://bancodedadosfeb.com.br/?soldiers=5692"/>guilherme coutinho/</a><p class="date">set 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/12-monkeys-season-1"/>twelve monkeys s1/</a><p class="date">set 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Spck-Test/camila_curriculo.pdf"/>Camila Currículo/</a><p class="date">set 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/CollectCinequar5/Cabana+do+Inferno+2.MP4.DUB.BaixarSeriesMP4.Com.mp4"/>Cabana do inferno/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/CollectCinequar1/"/>collect cinequar1/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/chavsd8"/>chaves serie/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/kgpyswibxohohdkb/"/>filmes e series ia/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/x-men-evolution"/>x-men evolution en/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/desenhos-x-men-evolution-20002003_202501"/>x-men evolution pt/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/thetwilightzone_20240918"/>além da imaginação t3/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/thetwilightzone_20240917"/>além da imaginação t2/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/thetwilightzone_202409"/>além da imaginação t1/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/05-temporada"/>x-men t5/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/04-temporada"/>x-men t4/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/03-temporada"/>x-men t3/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/02-temporada"/>x-men t2/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/08-o-indestrutivel-juggernaut_202309"/>x-men t1/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/planetadosmacacos/"/>Planeta dos Macaco/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/pacotefunkagosto2019/"/>funk brasilerio/</a><p class="date">set 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://m.ok.ru/video/1102587366007"/>Animal 2014 dublado/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtube.com/playlist?list=PLUcKUyr6iH6TMwH_n0VutJ-l2ybNPbS4l&si=r1CoHTpFdTS22rpk"/>A frequência Kirlian/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/anime-inu-yasha-dublado-portugues-brasil-spanish-japanese/"/>anime inu yasha ptbr/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/anime_20220908/"/>dragon ball gt/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/ModMouse_2021-08-17/2021-08-17+Anthem%2C+Washington%2C+District+of+Columbia/mm2021-08-17.vwmule.t08.flac"/>more of modest mouse/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/pjr15/"/>mp3 playlist songs/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/personal-playlist/"/>personal playlist/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/goodnewslive/"/>good news for peo.../</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/modest-mouse-the-lonesome-crowded-west-flac-24-bits-96000khz/"/>modest mouse.flac/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/ModMouse_1996-09-01/1996-09-01+Fletcher's%2C+Baltimore%2C+Maryland/07+Dramamine.flac"/>modest mouse (1996)/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.tokyvideo.com/br/video/interestelar-filme-completo-dublado"/>interestelar dublado/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the.-twilight.-zone.-2002.-s-01.480p.-dvd-rip.-x-264.-will-1869/The.Twilight.Zone.2002.S01.480p.DvdRip.X264.Will1869/S01E01-E02.mp4"/>the twili..(2002) s1/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-twilight-zone-1959-s-05-e-22-an-occurrence-at-owl-creek-bridge"/>the twilight zone s5/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-twilight-zone-1959-s-04-e-16-on-thursday-we-leave-for-home"/>the twilight zone s4/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-twilight-zone-1959-s-03-e-15-a-quality-of-mercy"/>the twilight zone s3/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-twilight-zone-1959-s-02-e-11-the-night-of-the-meek"/>the twilight zone s2/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/the-twilight-zone-1959-s-01-e-00-original-pilot"/>the twilight zone s1/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/APossessoDoMalAPossessoDeMichaelKing"/>A possessão do mal/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250913155807if_/https://mundodosanimes.com/curiosidades/a-frequencia-kirlian-o-horror-intimo-que-se-esconde-nos-detalhes/"/>Frequência kirlian/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/download/Dublagens"/>dublagens files/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/anoitedosmortosvivos1968dublado"/>noite dos mortos/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/shakma-a-furia-assassina-1990/"/>filmes de terror/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/rio-2-public-domain-movie-english-translation"/>Rio 2 (2014)/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/rio-2011_202506"/>Rio (2011)/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/o.-corcunda.de.-notre.-dame.-1996.720p.-blu-ray.x-264.-dublado-www.-bludv.-tv/"/>A família do futuro/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/a-era-do-gelo-1-2-3-4/"/>Coleção Desenhos/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/TesourosDaDisney19351951720P"/>Pato Donald/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/a-bela-adormecida-webrip-pt-pt-gc-tv"/>Desenhos Disney PtBr/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/disney-anthology-television-series/1954-1958+Disneyland/Disneyland+-+S00E01+-+One+Hour+In+Wonderland+(December+25%2C+1950).mp4"/>Programas da Disney/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/101-dalmatians-1996-uk-vhs_202404"/>Desenhos em VHS UK/</a><p class="date">set 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://pesquise.yay.boo/"/>pesquise.yay.boo/</a><p class="date">set 7, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250827205517id_/https://3asyice.github.io/SixOhNine/script/sd/39.html"/>39 Grégori Forgerini/</a><p class="date">ago 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://imagecolorpicker.com/"/>Color Picker/</a><p class="date">ago 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://gossip-fm-base.lovable.app/"/>609 gravações/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://jam-audio-player.lovable.app/"/>Terminal Militar 609/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia904603.us.archive.org/13/items/Popcornarchive-theBlairWitchProject1999/Popcornarchive-theBlairWitchProject1999.mp4"/>the Blair Witch.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn720004.ca.archive.org/0/items/movies_202211/Hacked.mp4"/>hacked.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801508.us.archive.org/35/items/movies_202211/Hacker%27s%20Game%20Redux.ia.mp4"/>hacker's game.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn720004.ca.archive.org/0/items/movies_202211/Hacker.mp4"/>hacker.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia601508.us.archive.org/35/items/movies_202211/Hackers.ia.mp4"/>hackers.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn720004.ca.archive.org/0/items/movies_202211/Fight%20Club.ia.mp4"/>fight club.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn721504.ca.archive.org/0/items/fd_movies_all/Final.Destination.2000.720p.BrRip.x264.YIFY.mp4"/>final destination.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801002.us.archive.org/3/items/fd_movies_all/Final.Destination.2.2003.720p.BrRip.x264.YIFY.mp4"/>final destination2.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn721504.ca.archive.org/0/items/fd_movies_all/Final.Destination.3.2006.BrRip.x264.YIFY.mp4"/>final destination3.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801002.us.archive.org/3/items/fd_movies_all/The.Final.Destination.2009.720p.BrRip.x264.YIFY.mp4"/>final destination4.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn721504.ca.archive.org/0/items/fd_movies_all/Final.Destination.5%20.2011.720p.BrRip.x264.YIFY.mp4"/>final destination5.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801508.us.archive.org/35/items/movies_202211/Halloween%20%281978%29.mp4"/>Halloween.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://dn720004.ca.archive.org/0/items/movies_202211/Coraline.ia.mp4"/>coraline.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://ia801508.us.archive.org/35/items/movies_202211/Evil%20Dead.mp4"/>evil dead.mp4/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://tools.oktopus.cloud/tool/js-obfuscator"/>ofuscador js/</a><p class="date">ago 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250819201616id_/https://3asyice.github.io/Spck-Test/"/>Archived Media/</a><p class="date">ago 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/download/004-archived-media/004%20Archived%20Media%20%281%29.apk"/>Archived Media.apk!!!/</a><p class="date">ago 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/station-609"/>Station 609.apk!!!/</a><p class="date">ago 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.reddit.com/r/nosurf/"/>no social medias/</a><p class="date">ago 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250815082454if_/https://3asyice.github.io/Spck-Test/Terminator2_JudgmentDay.zip"/>Terminator 2 HQ/</a><p class="date">ago 15, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250814190852id_/https://3asyice.github.io/Spck-Test/"/>Archived Media/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250814051240id_/https://3asyice.github.io/Tech-Info/script/turma/124/Davi_Pereira.html"/>Davi Pereira/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250814050509id_/https://3asyice.github.io/Tech-Info/script/turma/224/Andre_Oling.html"/>André Oling/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250814045935id_/https://3asyice.github.io/Tech-Info/script/turma/124/Ana_Julia.html"/>Ana Julia Pessoa/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a style="text-transform:uppercase;" href="https://web.archive.org/web/20250814045202id_/https://3asyice.github.io/Tech-Info/script/turma/424/Guilherme_Goetz.html"/>Guilherme Goetz/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250712004921if_/https://www.inf.ufpr.br/albini/apostila/Apostila_Redes1_Beta.pdf"/>Apostila de Redes²/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240618004528if_/https://www1.univap.br/bruno.pera/uploads/INFORMATICA/REDES/Apostila_de_Redes_V3.pdf"/>Apostila de Redes/</a><p class="date">ago 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://appmaker.xyz/webapp"/>Apk maker2/</a><p class="date">ago 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://jack-sbraincancer.github.io/Facebook-Login-Page/"/>Facebook Login Scam/</a><p class="date">ago 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Tapes/script/home.html"/>Lovser Story/</a><p class="date">ago 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Spck-Test/Livro.html"/>livro do recruta/</a><p class="date">ago 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/a-historia-de-um-recruta-o-filme"/>história do recruta/</a><p class="date">ago 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250731031109if_/https://3asyice.github.io/SixOhNine/script/sd/609.html"/>609 Carvalho/</a><p class="date">jul 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="http://archive.today/2025.07.30-225750/https://3asyice.github.io/Spck-Test/"/>Archived Media/</a><p class="date">jul 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/fd_movies_all"/>Final Destination All/</a><p class="date">jul 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://pwa2apk.com"/>apk maker/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://cdaudiobook.com/13-reasons-why-audiobook/"/>13 r. w. audiobook/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://famous.ai"/>famous.ai/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Spck-Test/quem_sou_eu?.txt"/>quem_sou_eu?.txt/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.dogpile.com"/>dogpile.com/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.wolframalpha.com"/>Wolframalpha.com/</a><p class="date">jul 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/SixOhNine/script/instrucao/pesquisa.html"/>Pesquisa Inteligente/</a><p class="date">jul 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://chatgpt.com/"/>chatgpt.com/</a><p class="date">jul 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724180414if_/https://g1.globo.com/tecnologia/noticia/2024/05/21/stalking-saiba-quando-a-perseguicao-na-internet-se-torna-crime.ghtml"/>perseguição Stalking/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/the-end-line/"/>The End Line/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724133401if_/https://3asyice.github.io/Spck-Test/instagram_stalking.mp4"/>4lex_fl - INSTAGRAM/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724133154if_/https://3asyice.github.io/Spck-Test/4lex_fl.mp4"/>4lex_fl/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724115247if_/https://3asyice.github.io/Spck-Test/boatekiss_trecho.mp4"/>boate kiss.mp4/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724100443if_/https://3asyice.github.io/Spck-Test/DeadMansHand.epub"/>Dead Man's Hand/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724095727if_/https://3asyice.github.io/Spck-Test/EndOfTheLine.epub"/>End Of The Line/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724095114if_/https://3asyice.github.io/Spck-Test/FinalDestination0.epub"/>Destination Zero/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724094507if_/https://3asyice.github.io/Spck-Test/LooksCouldKill.epub"/>looks could kill/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724092532if_/https://3asyice.github.io/Spck-Test/FinalDestinationDeathof.pdf"/>death of the senses/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724091728if_/https://3asyice.github.io/Spck-Test/FinalDest3_Christ.epub"/>bk final dest.. 3/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724091327if_/https://3asyice.github.io/Spck-Test//FinalDest2_Nancy.epub"/>bk final dest.. 2/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724090638if_/https://3asyice.github.io/Spck-Test/FinalDestination_Natasha.epub"/>bk final dest.. 1/</a><p class="date">jul 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724015258if_/https://3asyice.github.io/Spck-Test/curriculum.pdf"/>guilherme currículo/</a><p class="date">jul 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://emojipedia.org/"/>emojipedia/</a><p class="date">jul 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/channel-zero"/>Channel Zero tv serie/</a><p class="date">jul 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://sd614-teixeira.yay.boo/"/>Carlos H... Teixeira/</a><p class="date">jul 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://htmlforpeople.com/"/>html para internet/</a><p class="date">jul 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250724093238if_/https://3asyice.github.io/BlackMirrorwiki/script/season-1/the-entire-history-of-you.html"/>the entire h... s1e3/</a><p class="date">jul 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250720172119/https://3asyice.github.io/BlackMirrorwiki/script/season-1/15-million-merits.html"/>15 million m... s1e2/</a><p class="date">jul 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://g1.globo.com/fantastico/noticia/2025/06/29/escandalo-no-quartel-investigacao-revela-que-morte-de-soldado-divulgada-como-suicidio-foi-forjada-para-acobertar-homicidio.ghtml"/>Escândalo em Quartel/</a><p class="date">jul 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250719033916if_/https://correio.rac.com.br/internautas-criticam-boate-incendiada-em-rede-social-1.1043939"/>Boate Kiss Website/</a><p class="date">jul 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250716103755if_/https://oglobo.globo.com/brasil/noticia/2025/07/16/o-que-se-sabe-sobre-brasileiro-que-morreu-afogado-ao-salvar-parente-em-reservatorio-nos-eua.ghtml"/>Daniel Braga fig.../</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250711014438if_/https://3asyice.github.io/SixOhNine/script/black-news/Soldado-atropelado-por-advogada-enfrenta-sindic%C3%A2ncia.html"/>Sindicância carvalho/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250718094453if_/https://3asyice.github.io/BlackMirrorwiki/script/season-1/the-national-anthem.html"/>Hino Nacional S1E1/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250716141328id_/https://3asyice.github.io/SixOhNine/script/sd/Miguel.html"/># Miguel Flores/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.mediafire.com/file/e71ymeroxe9d5rn/Lista_de_PDF.zip/file"/>pdf em zip/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://heartive.pages.dev/"/>filmes&series piratas/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://fakeupdate.net"/>fakeupdate.net/</a><p class="date">jul 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/Radio"/>Radio Broadcast 609/</a><p class="date">jul 13, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250712043120if_/https://3asyice.github.io/Spck-Test/modelo_A.mp4"/>S Modelo funcionários/</a><p class="date">jul 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250712042103if_/https://3asyice.github.io/Spck-Test/modelo.mp4"/>supermercado modelo/</a><p class="date">jul 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250712035458if_/https://www.rdnews.com.br/cidades/conteudos/151425"/>Técnico de T.I. morre/</a><p class="date">jul 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250712034839if_/https://www.ijuinews.com.br/index.php?m=news&a=detail&id=6798"/>João Gabriel Domin.../</a><p class="date">jul 12, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250711060406if_/https://ijuinews.com.br/index.php?m=news&a=detail&id=9976"/>Andrei Cossetin Ijuí/</a><p class="date">jul 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.quora.com/Is-it-true-that-in-1977-we-received-a-radio-signal-from-space-that-lasted-72-seconds-and-up-till-this-day-we-don-t-know-where-it-came-from"/>Outer Space signal/</a><p class="date">jul 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250711025225id_/https://www.livescience.com/20718-computer-history.html"/>computer history/</a><p class="date">jul 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250711014417id_/https://3asyice.github.io/Spck-Test/"/>004 Archives/</a><p class="date">jul 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250710111728id_/https://www.otempo.com.br/mundo/2025/7/3/gerente-mata-funcionaria-ao-sentar-sobre-ela-durante-briga-no-trabalho.amp"/>Jessica McLaughlin/</a><p class="date">jul 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250710031000id_/https://3asyice.github.io/SixOhNine/script/sd/603.html"/>603 Guilherme Maidana/</a><p class="date">jul 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250710030136id_/https://3asyice.github.io/Tech-Info/script/turma/124/Alexis_Barnaski.html"/>Alexis Barnaski/</a><p class="date">jul 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250710025459id_/https://3asyice.github.io/SixOhNine/script/home.html"/>SixOhNine wiki diary/</a><p class="date">jul 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708211225id_/https://3asyice.github.io/Spck-Test/chatgpt.txt"/>chatgpt prompts.txt/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708170506id_/https://3asyice.github.io/SixOhNine/script/sd/602.html"/>602 Samuel Weber/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708170145id_/https://3asyice.github.io/SixOhNine/script/sd/601.html"/>601 Gabriel Tassinari/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708165740id_/https://3asyice.github.io/SixOhNine/script/sd/Isaias.html"/># Jessé Isaias/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708165354id_/https://3asyice.github.io/SixOhNine/script/sd/ziguinatti.html"/># Vitor Ziquinatti/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708165001id_/https://3asyice.github.io/SixOhNine/script/sd/069.html"/>069 Kawã Lorentz/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708164642id_/https://3asyice.github.io/SixOhNine/script/sd/39.html"/>39 Grégori Forgerini/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708164313id_/https://3asyice.github.io/SixOhNine/script/sd/37.html"/>37 Augusto Bergmann/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708164029id_/https://3asyice.github.io/SixOhNine/script/sd/31.html"/>31 Antônio Capisani/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708163734id_/https://3asyice.github.io/SixOhNine/script/sd/03.html"/>03 gabriel azevedo/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708163417id_/https://3asyice.github.io/SixOhNine/script/cel/soares.html"/>coronel soares/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708101157if_/https://3asyice.github.io/Spck-Test/Voce_Me_Ama_Caroline_Kepnes.pdf"/>Você Me Ama - Kepnes/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708104852if_/https://3asyice.github.io/Spck-Test/Corpos_Ocultos_Caroline_Kepnes.pdf"/>Corpos Ocultos - kepn/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708104629if_/https://3asyice.github.io/Spck-Test/Voce_Caroline_Kepnes.pdf"/>você - Caroline K.../</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20230331235733if_/https://zero.sci-hub.se/5268/7dda7cee52d7eb3ec606a82d0f1b9a61/giertsen1988.pdf"/>Byford Dolphin.pdf/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250708073114if_/https://3asyice.github.io/Tech-Info/terms.txt"/>termos&condições.txt/</a><p class="date">jul 08, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250706215403if_/https://www.megacurioso.com.br/ciencia/125049-byford-dolphin-um-dos-piores-acidentes-maritimos-ja-registrados.htm"/>Byford Dolphin Aci.../</a><p class="date">jul 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.reddit.com/r/concursospublicos/comments/1kprp4d/minha_carreira_acabou_exclus%C3%A3o_das_for%C3%A7as_armadas/"/>Exclusão do EB Fórum/</a><p class="date">jul 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250704235511if_/https://3asyice.github.io/Spck-Test/Archived_Media.zip"/>Archived_Media.zip/</a><p class="date">jul 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250704082125if_/https://3asyice.github.io/Spck-Test/cassia-araujo-pic.zip"/>Cássia Araújo pic.zip/</a><p class="date">jul 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250704082125if_/https://3asyice.github.io/Spck-Test/camila-braga-photos.zip"/>camila braga pics.zip/</a><p class="date">jul 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703181804if_/https://colegiomanoelribas.weebly.com/uploads/4/3/5/5/43556501/1º_i.pdf"/>1º ano Ens. M. Kainan/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703172847if_/https://www.ufsm.br/app/uploads/sites/342/2023/12/vestibular_2024_lista_de_espera.pdf"/>eng. elétrica weber/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703165122if_/https://processos.stm.jus.br/consulta.php?q_or=&s=&fq_assunto_pesquisa__1=DIREITO%20PENAL&fq_orgao=3%C2%AA%20AUDITORIA%20DA%203%C2%AA%20CJM&q=%2A&&fq_meio=ELETR%C3%94NICO"/>Everton Soares jus.br/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703121541if_/https://3asyice.github.io/SixOhNine/berg"/>Bergmann dançarino/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703114519if_/https://3asyice.github.io/Spck-Test/37_bergmann_609.html"/>Bergmann dançarino/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240506034114if_/https://www.healthline.com/nutrition/blue-lotus-flower"/>blue lotus flower/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240506064619if_/https://en.wikipedia.org/wiki/Nymphaea_nouchali_var._caerulea"/>blue lotus wikipedia/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703084042if_/https://www.ufsm.br/app/uploads/sites/342/2022/09/Vaga-confirmada-subsequentes.pdf"/>forgerini mecân. 2023/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703083239if_/https://3asyice.github.io/Spck-Test/forgerini-facebook-comments.mp4"/>forgerini comments FB/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703080320if_/https://3asyice.github.io/Spck-Test/test.html"/>nosedive rates/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703055626if_/https://3asyice.github.io/Spck-Test/hannahBaker.txt"/>Hannah Baker Fita.txt/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703055342if_/https://3asyice.github.io/Spck-Test/nada-importante.mp3"/>Petry - Nada é i.mp3/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703030624if_/https://3asyice.github.io/Infinity/script/news!/032.html"/>Campo Período Básico/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703030048if_/https://3asyice.github.io/Infinity/script/home.html"/>BADMGUSM NEWS/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250703025803if_/https://3asyice.github.io/Infinity/script/news!/000.html"/>incorporação 2024/</a><p class="date">jul 03, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250702211811if_/https://3asyice.github.io/Spck-Test/prompts.txt"/>chatgpt prompts.txt/</a><p class="date">jul 02, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/music-videos-MTV-00s"/>MTV 2000s video clip/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/vts-01-1_20201020_1822/MTV+Top+100+1989+94-75/VTS_01_1.VOB"/>MTV Top 100 1989/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/vts-01-1_20201015_1811/MTV+-+January+1986+A/1986-01-11/Disc+2/VTS_01_1.VOB"/>MTV Jan 1986/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/ds-store_202207/MTV+Jackass+Vol+1-6+dvds/Disc+1/VIDEO_TS/VTS_01_1.VOB"/>Jackass Show/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/details/youtube-njGbbwp1H2I"/>Final Destination yt/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250701183238if_/https://jovempan.com.br/noticias/brasil/sobrevivente-da-boate-kiss-que-seria-testemunha-morre-aos-33-anos.html"/>kiss survivor died/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250701182640if_/https://diariogaucho.clicrbs.com.br/policia/noticia/2013/02/apos-desistir-de-festa-na-boate-kiss-jovem-morre-em-acidente-no-parana-4034361.html"/>Jéssica's Premonition/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250701080906if_/https://hemeroteca-pdf.bn.gov.br/830259/per830259_1951_00821.pdf"/>hemeroteca.pdf/</a><p class="date">jul 01, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250630070439if_/https://3asyice.github.io/SixOhNine/script/sd/621.html"/>621 Kainan Zippen.../</a><p class="date">jun 30, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250628074644if_/https://www.the-independent.com/life-style/facebook-artificial-intelligence-ai-chatbot-new-language-research-openai-google-a7869706.html"/>facebook bots lan.../</a><p class="date">jun 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250624141753if_/https://pt.stackoverflow.com/questions/86869/o-que-%C3%A9-intelig%C3%AAncia-artificial"/>o que é I.A?/</a><p class="date">jun 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250624095059if_/https://dol.com.br/carajas/noticias/mundo/911773/descubra-o-numero-chocante-de-sobreviventes-do-titanic?d=1"/>Titanic número de.../</a><p class="date">jun 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250624075223if_/https://www.reddit.com/r/brasil/comments/1h00y3k/o_ex%C3%A9rcito_brasileiro_n%C3%A3o_serve_pra_nada_e/"/>sobre Exército Fórum/</a><p class="date">jun 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250624054823if_/https://www.defesaemfoco.com.br/visita-de-orientacao-tecnica-revela-progresso-do-projeto-ebfcil-na-guarnicao-de-santa-maria/"/>EB F@cil/</a><p class="date">jun 24, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250623213517if_/https://www.terra.com.br/noticias/brasil/cidades/boate-kiss-tragedia-completa-12-anos-saiba-quem-foi-responsabilizado-e-se-acusados-estao-presos,1da1d26c3781d132ebe350b166a9cbc6ui0f0k79.html"/>boate kiss história/</a><p class="date">jun 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250623180010if_/https://www.terra.com.br/noticias/brasil/cidades/jovem-e-morto-a-tiros-em-ijui-policia-investiga-o-caso,25b4f05b6f6a7232df64ce9da50b3bcen5zzh79o.html"/>gustavo daniel bat.../</a><p class="date">jun 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250623174808if_/https://ijuinews.com.br/index.php?m=news&a=detail&id=9660"/>gustavo daniel bat.../</a><p class="date">jun 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250623173859if_/https://www.radiocidadesa.com.br/index.php?m=noticias&a=detail&id=21426"/>colisão de carretas/</a><p class="date">jun 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622204333if_/https://3asyice.github.io/Spck-Test/badmgusm-pagamento.pdf"/>badmgusm pagamento/</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622201200if_/https://diariosm.com.br/noticias/geral/saiba_como_e_a_administracao_do_exercito_em_santa_maria.455060"/>Administração EB SM/</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622195938if_/https://geneall.net/pt/forum/46357/bicentenario-de-nascimento-do-duque-de-caxias/"/>Duque De Caxias/</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622195431if_/https://www.defesabrasil.com/forum/viewtopic.php?t=7195&start=45"/>Operações E... Fórum/</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622190605if_/https://www.cnnbrasil.com.br/internacional/saiba-como-trump-tomou-a-decisao-de-atacar-as-instalacoes-do-ira/"/>Decisão de Trump a.../</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250622184747if_/https://noticias.uol.com.br/internacional/ultimas-noticias/2025/06/22/eua-ataca-ira-que-se-reune-com-putin-entenda-o-risco-de-3-guerra-mundial.htm"/>EUA ataca Irã/</a><p class="date">jun 22, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250621054838if_/https://3asyice.github.io/Spck-Test/teste.txt"/>badmgusm links.txt/</a><p class="date">jun 21, 2025 </p> <hr> </div>
<div class="link-item"><a style="text-transform:uppercase;" href="https://3asyice.github.io/Infinity/script/home"/>BAD NEWS/</a><p class="date">jun 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20140822191407if_/http://www.boris-koch.de/wp-content/uploads/2011/01/Liste-Google-Hacking.pdf"/>google dork.pdf/</a><p class="date">jun 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.mediafire.com/file/9mac423oj2qskwt/A_HIST%25C3%2593RIA_DE_UM_RECRUTA.opus/file"/>A história de u...oga/</a><p class="date">jun 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.mediafire.com/file/yssd1rnzycz71pj/A_HIST%25C3%2593RIA_DE_UM_RECRUTA_-_O_FILME.mp4/file"/>A história de u...mp4/</a><p class="date">jun 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://www.mediafire.com/file/sxpuip86y7fuop0/A_HIST%25C3%2593RIA_DE_UM_RECRUTA.webm/file"/>A história de ...webm/</a><p class="date">jun 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250618174151if_/https://3asyice.github.io/SixOhNine/script/sd/31-sgt-capisani.html"/>31 Antônio Capisani/</a><p class="date">jun 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250617204510if_/https://3asyice.github.io/Spck-Test/"/>004 Archived Media/</a><p class="date">jun 17, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250617062257if_/https://3asyice.github.io/Spck-Test/assets/pdf/609/historia-de-um-recruta.pdf"/>história recruta.pdf/</a><p class="date">jun 17, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/iUOn6N6gD6U"/>Briga de Família yt/</a><p class="date">jun 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616212442if_/https://3asyice.github.io/SixOhNine/script/sd/628.html"/>628 Anderson Oliveira/</a><p class="date">jun 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="assets/pdf/609/609.docx"/>livro 609 recruta/</a><p class="date">jun 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616203340if_/https://3asyice.github.io/SixOhNine/script/sd/069.html"/>069 Kawã lorentz/</a><p class="date">jun 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616202658if_/https://3asyice.github.io/SixOhNine/script/sd/03.html"/>03 Azevedo/</a><p class="date">jun 16, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/SixOhNine/script/home.html"/>Não Clique Aqui/</a><p class="date">jun 14, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://bancodedadosfeb.com.br/?soldiers=5692"/>Guilherme Coutinho/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616205115if_/https://bancodedadosfeb.com.br/?soldiers=23620"/>2nd we Túlio Carvalho/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616204848if_/https://bancodedadosfeb.com.br/?soldiers=4289"/>2nd ww Octavio Car.../</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250616204629if_/https://bancodedadosfeb.com.br/?soldiers=4269"/>2nd ww Milton Carv.../</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250611064135if_/https://bancodedadosfeb.com.br/?soldiers=4232"/>2nd ww josé Carvalho/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250611063538if_/https://bancodedadosfeb.com.br/?soldiers=4225"/>2nd ww Souza Carvalho/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250611062809if_/https://bancodedadosfeb.com.br/?soldiers=4218"/>2nd WW Alípio Carv.../</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250611061440if_/https://bancodedadosfeb.com.br/?soldiers=4197"/>Jayme José Carvalho/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250611015646if_/https://3asyice.github.io/Spck-Test/"/>004 Archives/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://drive.google.com/drive/folders/1pk5NaqoPW2afinGSfSPeetL8qc4Rv8P8"/>final destination 1-5/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605012236if_/https://escola25dejulho.com.br/info/cpm.php"/>cpm 25 de julho/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://3asyice.github.io/SixOhNine/script/black-news/Soldado-atropelado-por-advogada-enfrenta-sindic%C3%A2ncia.html"/>sindicância carvalho/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605011818if_/https://3asyice.github.io/SixOhNine/script/black-news/Coronel-Soares-expulsa-Carvalho-da%20B-ADM-GU-SM.html"/>expulso da badmgusm/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605011729if_/https://3asyice.github.io/SixOhNine/script/black-news/Suic%C3%ADdio-na-B-ADM-GU-SM.html"/>suicídio de soldado/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605011216if_/https://3asyice.github.io/SixOhNine/script/cv/camila-dalcol-da-silva.html"/>advogada camila/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605010216if_/https://3asyice.github.io/SixOhNine/script/instrucao/ordem-das-pecas-do-fuzil-7-62.html"/>peças do fuzil 7,62/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605005739if_/https://3asyice.github.io/SixOhNine/script/instrucao/ordem_unida.html"/>ordem unida/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605005453if_/https://3asyice.github.io/SixOhNine/script/instrucao/duque_de_caxias.html"/>duque de caxias/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250605005202if_/https://3asyice.github.io/SixOhNine/script/instrucao/principios_e_valores.html"/>principios e valores/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604223622if_/https://3asyice.github.io/SixOhNine/script/cv/luciano-de-souza.html"/>fotógrafo luciano/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604233059if_/https://3asyice.github.io/SixOhNine/assets/txt/conversa.txt"/>2025 conversa.txt/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604231630if_/https://3asyice.github.io/SixOhNine/script/sd/752.html"/>752 josé gabriel/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604231442if_/https://3asyice.github.io/SixOhNine/script/sd/640.html"/>640 lucas van der.../</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604231255if_/https://3asyice.github.io/SixOhNine/script/sd/639.html"/>639 arthur keller/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604231113if_/https://3asyice.github.io/SixOhNine/script/sd/638.html"/>638 juliano oliveira/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604230829if_/https://3asyice.github.io/SixOhNine/script/sd/637.html"/>637 igor silva santos/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604230606if_/https://3asyice.github.io/SixOhNine/script/sd/636.html"/>636 emanuel pereira/</a><p class="date">jun 04, 2025 </p> <hr> </div> 
<div class="link-item"><a href="https://web.archive.org/web/20250604230339if_/https://3asyice.github.io/SixOhNine/script/sd/635.html"/>635 carlos eduardo/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604225322if_/https://3asyice.github.io/SixOhNine/script/sd/634.html"/>634 gabriel de vargas/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604225102if_/https://3asyice.github.io/SixOhNine/script/sd/633.html"/>633 vagner coelho/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604224925if_/https://3asyice.github.io/SixOhNine/script/sd/632.html"/>632 cassio alberto/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604224729if_/https://3asyice.github.io/SixOhNine/script/sd/631.html"/>631 jeremias fagundes/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604224343if_/https://3asyice.github.io/SixOhNine/script/sd/630.html"/>630 matheus machado/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604224033if_/https://3asyice.github.io/SixOhNine/script/sd/629.html"/>629 Cirineu Magalhães/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604223820if_/https://3asyice.github.io/SixOhNine/script/sd/627.html"/>627 joão vitor lemos/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604223319if_/https://3asyice.github.io/SixOhNine/script/sd/626.html"/>626 miguel xavier/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604222939if_/https://3asyice.github.io/SixOhNine/script/sd/625honig.html"/>625 leonardo hönig/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604222604if_/https://3asyice.github.io/SixOhNine/script/sd/624.html"/>624 alisson nesske/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604222246if_/https://3asyice.github.io/SixOhNine/script/sd/623.html"/>623 joão cardoso/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604221928if_/https://3asyice.github.io/SixOhNine/script/sd/622.html"/>622 charles preuss/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604221159if_/https://3asyice.github.io/SixOhNine/script/sd/621.html"/>621 kainan zippen.../</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604220929if_/https://3asyice.github.io/SixOhNine/script/sd/620.html"/>620 jeferson da silva/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604220707if_/https://3asyice.github.io/SixOhNine/script/sd/619.html"/>619 alisson zancan/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604215246if_/https://3asyice.github.io/SixOhNine/script/sd/618roger.html"/>618 luan roger/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604213332if_/https://3asyice.github.io/SixOhNine/script/sd/617.html"/>617 everton silvano/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604211640if_/https://3asyice.github.io/SixOhNine/script/sd/616.html"/>616 frederico gregori/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604211413if_/https://3asyice.github.io/SixOhNine/script/sd/615.html"/>615 ricardo bernardi/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604210958if_/https://3asyice.github.io/SixOhNine/script/sd/614.html"/>614 carlos teixeira/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604210751if_/https://3asyice.github.io/SixOhNine/script/sd/613.html"/>613 gabriel ebling/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604205831if_/https://3asyice.github.io/SixOhNine/script/sd/612.html"/>612 adrian gonçalves/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604205652if_/https://3asyice.github.io/SixOhNine/script/sd/611.html"/>611 carlos daniel/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604205518if_/https://3asyice.github.io/SixOhNine/script/sd/610.html"/>610 lucas da rosa/</a><p class="date">jun 04, 2025</p><hr></div>
<div class="link-item"><a style="text-transform:uppercase;font-weight:900;" href="https://web.archive.org/web/20250604203736if_/https://3asyice.github.io/SixOhNine/script/sd/609.html"/>609 Carvalho/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604203538if_/https://3asyice.github.io/SixOhNine/script/sd/608.html"/>608 gustavo drescher/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604203337if_/https://3asyice.github.io/SixOhNine/script/sd/607.html"/>607 Diniz Chimainski/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604203010if_/https://3asyice.github.io/SixOhNine/script/sd/606.html"/>606 Micael Schumacher/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604202744if_/https://3asyice.github.io/SixOhNine/script/sd/605.html"/>605 allan gabriel/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604202417if_/https://3asyice.github.io/SixOhNine/script/sd/604.html"/>604 Richard rafael/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604201720if_/https://3asyice.github.io/SixOhNine/script/sd/603.html"/>603 Guilherme Maidana/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604201248if_/https://3asyice.github.io/SixOhNine/script/sd/602.html"/>602 samuel weber/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604200937if_/https://3asyice.github.io/SixOhNine/script/sd/601.html"/>601 gabriel tassinari/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604200544if_/https://3asyice.github.io/SixOhNine/script/sd/39.html"/>39 grégori forgerini/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604200259if_/https://3asyice.github.io/SixOhNine/script/sd/37.html"/>37 Augusto Bergmann/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604200120if_/https://3asyice.github.io/SixOhNine/script/sd/03.html"/>03 gabriel azevedo/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604195945if_/https://3asyice.github.io/SixOhNine/script/cel/soares.html"/>## everton soares bio/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250604194006if_/https://outraspalavras.net/outrasmidias/pioneiro-da-internet-brasileira-conta-como-se-vigia-a-rede/"/>backdoor e vigilância/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250531193513if_/https://www.big-loser.site/M/Maio/Eterna%20Vigil%C3%A2ncia%20(Edward%20S_%20(Z-Library)"/>edward snowden.pdf/</a><p class="date">may 31, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529175736if_/https://3asyice.github.io/Spck-Test/butterfly-effect"/>teoria do caos/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529172715if_/https://www.big-loser.site/Caso/001"/>Caso 001/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529172004if_/https://3asyice.github.io/Tapes/script/ep/11.html"/>Ep 11: A Expulsão/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529171505if_/https://3asyice.github.io/Tapes/script/ep/10.html"/>Ep 10: A Alteração/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529170535if_/https://3asyice.github.io/Tapes/script/ep/8.html"/>Ep 8: Incorporação/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250529165827if_/https://3asyice.github.io/Tapes/script/ep/7.html"/>Ep 7: O Campo/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://youtu.be/qZhD2cU0UOo?si=OJ_AZy7NqLPBwtb-"/>YouTube Link/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250520114123if_/https://3asyice.github.io/SixOhNine/script/sd/602.html"/>602 Weber/</a><p class="date">may 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250520113858if_/https://3asyice.github.io/SixOhNine/script/sd/601.html"/>601 Tassinari/</a><p class="date">may 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250511220143if_/https://www.big-loser.site/M/Maio/everton-conceicao-soares-profile.mp4"/>everton soares.mp4/</a><p class="date">may 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250511002501if_/https://noticias.stf.jus.br/postsnoticias/mandado-de-seguranca-pede-anulacao-de-acordo-entre-brasil-e-oea-sobre-morte-de-cadete/"/>morte de cadete/</a><p class="date">may 11, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250510122753if_/https://saopauloantiga.com.br/a-tragedia-do-cine-oberdan/?hl=en-US"/>tragédia cinema/</a><p class="date">may 10, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250510122449if_/https://www.social.org.br/relatorio2001/relatorio003.htm?hl=en-US"/>Tortura Militar/</a><p class="date">may 10, 2025 </p> <hr> </div>
<div class="link-item"><a style="text-transform:uppercase;" href="https://web.archive.org/web/20250509232434if_/https://3asyice.github.io/Tapes/script/ep/9.html"/>Ep 9: a dor do luto/</a><p class="date">may 09, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://archive.org/download/vid-20240825-wa-0000/vid-20240825-wa-0000_archive.torrent"/>acidente.torrent/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013446if_/https://3asyice.github.io/Tapes/script/ep/4.html"/>ep 4: sindicância/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013307if_/https://3asyice.github.io/Tapes/script/ep/3.html"/>ep 3: sd Isaias/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013320if_/https://3asyice.github.io/Tapes/script/ep/2.html"/>ep 2: a mensagem/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013338if_/https://3asyice.github.io/Tapes/script/ep/6.html"/>ep 6: plantão/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013309if_/https://3asyice.github.io/Tapes/script/ep/5.html"/>ep 5: Internato/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013253if_/https://3asyice.github.io/Tapes/script/category.html"/>609 - Categorias/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250427013048if_/https://3asyice.github.io/Tapes/script/home.html"/>ep 1: decisão errada/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250423200251if_/https://www.big-loser.site/A/Audio/FITA-10,-LADO-A.m4a"/>Fita 10 Lado A/</a><p class="date">apr 23, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250421115329if_/https://3asyice.github.io/Loja-doRoni/"/>Roni's Old Store/</a><p class="date">apr 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250421113527if_/https://3asyice.github.io/Birthday-2024/"/>Birthday Note/</a><p class="date">apr 21, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250420231731if_/https://3asyice.github.io/frontend_course/"/>html, css, js/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250420190604if_/https://3asyice.github.io/Spck-Test/"/>archived media 004/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250420185859if_/https://3asyice.github.io/natal/"/>malditonatal origem/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250419043752if_/https://www.ocafezinho.com/2024/07/22/exercito-brasileiro-insistente-em-nao-revelar-militares-envolvidos-em-carta-golpista/"/>Carta Golpista EB/</a><p class="date">apr 19, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250418172619if_/https://www.scielo.br/j/rbh/a/3B49LhDfNKhDKqVPZjvxY5R/"/>Gran Circus Tragedy/</a><p class="date">apr 18, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250407110023if_/https://www.reddit.com/r/brasil/comments/1h00y3k/o_ex%C3%A9rcito_brasileiro_n%C3%A3o_serve_pra_nada_e/"> sobre Exército Fórum/</a><p class="date">apr 07, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250405050541if_/https://ric.com.br/seguranca/acidentes/aluna-ufsm-decidiu-nao-embarcar-na-vespera-de-acidente/"> sorte ou premonição?/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250405064854if_/https://www.big-loser.site/Caso/031"/>All Cassetes Fitas/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250405045939if_/https://ric.com.br/seguranca/acidentes/veja-lista-nomes-vitimas-acidente-onibus-ufsm/">bus accident 7 death/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250328081437if_/https://aventurasnahistoria.com.br/noticias/reportagem/perdida-no-oceano-trajetoria-de-bahia-bakari-unica-sobrevivente-de-um-terrivel-acidente-de-aviao.phtml"> Bahia Bakari_survivor/</a><p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250328000343if_/https://www.cnnbrasil.com.br/blogs/fernando-nakagawa/economia/macroeconomia/gasto-militar-com-pessoal-no-brasil-e-proporcionalmente-mais-que-o-triplo-dos-eua/">gasto militar no BR/</a> <p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250328075757if_/https://www.cnnbrasil.com.br/nacional/sudeste/sp/queda-de-aviao-relembre-cronologia-do-acidente-da-voepass-em-vinhedo-sp/">Voepass 2283/</a> <p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250328075304if_/https://cgn.inf.br/noticia/1773188/mae-de-vitima-do-voo-2283-critica-voepass-e-como-se-eles-matassem-nossos-familiares-outra-vez"> critica Voepass/</a><p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250328072720if_/https://manchetempo.uff.br/?p=2941">242 mortes Boate Kiss/</a> <p class="date"> mar 28, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250328072137if_/https://www.bbc.com/portuguese/articles/c89y43gvdl4o">503 dead gran circus/</a> <p class="date"> mar 28, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250325075854if_/https://www.big-loser.site/A/Audio/FITA-9,-LADO-A.opus">2:03 Fita 9 Lado a/</a> <p class="date"> mar 25, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250325075425if_/https://www.big-loser.site/A/Audio/FITA-8,-LADO-B.opus">0:59 Fita 8 Lado b/</a> <p class="date"> mar 25, 2025 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20250325075007if_/https://www.big-loser.site/A/Audio/FITA-8,-LADO-A.opus">1:59 Fita 8 Lado a/</a><p class="date">mar 25, 2025</p><hr></div>
<div class="link-item"><a style="text-transform:uppercase;text-shadow:1px 0 0 rgba(18, 255, 0, 1);" href="https://web.archive.org/web/20250320094119if_/https://www.big-loser.site/Caso/100">BACK TO BLACK/</a><p class="date">mar 20, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250319102007if_/https://www.big-loser.site/Caso/004">004 Archived Media/</a><p class="date">mar 19, 2025 </p><hr>
</div><div class="link-item"><a href="https://web.archive.org/web/20250318124659if_/https://www.big-loser.site/A/Audio/FITA-7,-LADO-B.opus">10:58 Fita 7 Lado B/</a><p class="date">mar 18, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250315131320if_/https://www.big-loser.site/A/Audio/FITA-7,-LADO-A.opus">8:12 Fita 7 Lado A/</a><p class="date">mar 15, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250313093351if_/https://www.big-loser.site/Caso/070">609 butterfly/</a><p class="date">mar 13, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312203737if_/https://badmgusm.eb.mil.br/index.php/component/content/article?id=2298&">Licenciamento SD EP/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312131355if_/https://www.big-loser.site/Caso/005">Camila Dalcol/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312130354if_/https://www.big-loser.site/Project_Apocalypse/comandante">everton soares/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312114500if_/https://www.big-loser.site/Project_Apocalypse/assedio">assédio 6bdainfbld/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312112446if_/https://www.big-loser.site/Project_Apocalypse/expulso">expulsão - carvalho/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312103040if_/https://www.big-loser.site/Project_Apocalypse/atropelamento">sd 609 carvalho/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250312093156if_/https://www.big-loser.site/Project_Apocalypse/suicide">614 sd teixeira/</a><p class="date">mar 12, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310232106if_/https://designculture.com.br/tipografia-para-web/">tipografia web²/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310231418if_/https://productoversee.com/um-guia-completo-de-tipografia-para-a-web/">tipografia para web/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310231032if_/https://rockcontent.com/br/blog/tipografia/">conceito tipografia/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310230359if_/https://www.futuraexpress.com.br/blog/o-que-e-tipografia/">termo tipografia/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310132256if_/https://www.big-loser.site/Caso/014">014 memorial/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310084236if_/https://www.change.org/p/stop-army-from-taking-back-signing-bonuses-10-years-later-after-vets-completed-contracts">army steals signing/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310062544if_/https://www.big-loser.site/Caso/004">004 Archived Media/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250310061904if_/https://www.big-loser.site/A/Audio/FITA-6,-LADO-B.m4a">13:57 Fita 6 Lado b/</a><p class="date">mar 10, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250308234225if_/https://www.big-loser.site/M/May/cfc_2019_motivacao.mkv">29° bib²⁰¹⁹cfc.mkv/</a><p class="date">mar 08, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250308185226if_/https://www.big-loser.site/M/May/cfc_2019_motivation.mp4">29° bib²⁰¹⁹cfc.mp4/</a><p class="date">mar 08, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250308185734if_/https://www.big-loser.site/Caso/004">004 Archived media/</a><p class="date">mar 08, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250308175311if_/https://veja.abril.com.br/mundo/mais-de-70-mil-russos-morreram-lutando-na-ucrania-diz-levantamento">70mil russos mortos/</a><p class="date">mar 08, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250308174549if_/https://www.big-loser.site/Project_Apocalypse/suicide">R.I.P 614 Teixeira/</a><p class="date">mar 08, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250307155847if_/https://www.big-loser.site/A/Audio/FITA-6,-LADO-A.opus">21:06 Fita 6 Lado A/</a><p class="date">mar 07, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250307162017if_/https://www.big-loser.site/Caso/img/helloNeo.gif">hello Neo.gif/</a><p class="date">mar 07, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250306020933if_/https://www.big-loser.site/Caso/004">004 archives/</a><p class="date">mar 06, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250306013305if_/https://www.big-loser.site/Caso/080TI.html">curso t.i./</a> <p class="date"> mar 06, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250306013007if_/https://www.big-loser.site/Caso/080Aluno.html">Alunos T.I./</a> <p class="date"> mar 06, 2025 </p> <hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250306012825if_/https://www.big-loser.site/Caso/080">Gangsters de T.I./</a> <p class="date"> mar 06, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250303005234if_/https://www.big-loser.site/M/Fev/plantao.txt">plantao.txt/</a> <p class="date"> mar 03, 2025 </p> <hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250303005031if_/https://www.big-loser.site/Caso/004">004 Archives/</a> <p class="date"> mar 03, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250303003949if_/https://www.big-loser.site/A/Audio/FITA-5,-LADO-B.opus">13:18 Fita 5 Lado B/</a><p class="date">mar 03, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250302152958if_/https://www.big-loser.site/A/Audio/Fita-5,-Lado-A.opus">15:03 Fita 5 Lado A/</a><p class="date">mar 02, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250302153444if_/https://www.big-loser.site/A/Audio/FITA-4,-LADO-B.m4a">7:56 Fita 4 Lado B/</a><p class="date">mar 02, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250302152744if_/https://www.big-loser.site/A/Audio/FITA-4,-LADO-A.opus">5:02 Fita 4 Lado A/</a><p class="date">mar 02, 2025 </p><hr></div>   
<div class="link-item"><a href="https://web.archive.org/web/20250301032023if_/https://www.montedo.com.br/2024/10/31/familia-e-oab-contestam-versao-do-exercito-de-suicidio-de-soldado-em-quartel-do-rio/">suicídio sd vitor/</a><p class="date">mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301025023if_/https://www.big-loser.site/M/Fev/incorporacao.txt">incorporação.txt/</a><p class="date">mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301024833if_/https://www.big-loser.site/M/Fev/decisao_errada.txt">decisao_errada.txt/</a><p class="date">mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301024655if_/https://www.big-loser.site/M/Fev/internato.txt">internato.txt/</a><p class="date"> mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301024124if_/https://www.big-loser.site/Caso/106">106 incorporacao/</a><p class="date"> mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301023707if_/https://www.big-loser.site/Caso/095">095 audio files/</a><p class="date"> mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301022959if_/https://www.big-loser.site/A/Audio/Mensagem.m4a">Mensagem.m4a/</a><p class="date">Mar 01, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250301002826if_/https://www.saocarlosagora.com.br/regiao/seis-militares-suspeitos-de-torturar-soldado-sao-expulsos-do-exercito/179370if_/">tortura de sd/</a><p class="date"> Mar 01, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250227193616if_/https://www.sociedademilitar.com.br/2025/02/militares-do-exercito-faz-relatos-chocantes-em-entrevista-sobre-suicidio-na-forca-denuncias-de-humilhacao-perseguicao-e-adoecimento-psicologico.html">relatos chocantes/</a><p class="date"> Feb 27, 2025 </p><hr></div>
 <div class="link-item"><a href="https://youtu.be/Gfvo3kMHoUs?si=39SJPFIcAq486Gdv">morte sd Vitor/</a> <p class="date"> Feb 27, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250227173247if_/https://noticias.r7.com/minas-gerais/mg-record/videos/familia-de-soldado-que-se-matou-em-quartel-do-exercito-diz-que-ele-sofria-humilhacoes-21022018/">suicídio sd pablo/</a><p class="date"> Feb 27, 2025 </p><hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250227174730if_/https://www.big-loser.site/M/Fev/pablo_soares.mp4"> sd pablo soares.mp4/</a> <p class="date"> Feb 27, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250227172730if_/https://www1.folha.uol.com.br/fsp/brasil/fc22069814.htm">suicídio sd Weslley/</a> <p class ="date"> Feb 27, 2025 </p> <hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250227090800if_/https://badmgusm.eb.mil.br/index.php/galeria-dos-eternos-comandantes">badmgusm last cmt/</a> <p class ="date"> Feb 27, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226193728if_/https://g1.globo.com/rs/rio-grande-do-sul/video/policial-militar-e-flagrado-agredindo-mulher-gravida-com-cassetete-13360745.ghtml">pm agride grávida/</a> <p class ="date"> Feb 26, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226192512if_/https://noticias.uol.com.br/cotidiano/ultimas-noticias/2025/02/21/policial-agride-mulher-gravida-rs.htm">pm agride grávida/</a><p class="date"> Feb 26, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226185730if_/https://www.big-loser.site/A/Audio/Audio_001">a decisão errada/</a><p class="date"> Feb 26, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226182415if_/https://www.big-loser.site/Caso/004">004 archives/</a><p class="date"> Feb 26, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226181518if_/https://www.big-loser.site/">big-loser.site/</a><p class="date"> Feb 26, 2025 </p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250226055552if_/https://www.big-loser.site/Caso/053">053 falecimento/</a><p class="date"> Feb 26, 2025 </p><hr></div>
<div class="link-item"><a href="https://jack-sbraincancer.github.io/CHAT-ONLINE/frontend/index.html">chat online/</a><p class="date">Feb 23, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250221180205if_/https://www.big-loser.site/">big-loser.site/</a> <p class="date"> Feb 21, 2025 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250220055600if_/https://www.big-loser.site/A/Feb/soldiers%20salary%20.pdf">sd salary.pdf/</a> <p class="date"> Feb 20, 2025 </p> <hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250220013715if_/https://www.big-loser.site/BADMGUSM.xlsx">sd salary.xlsx/</a> <p class="date"> Feb 20, 2025 </p> <hr></div>
<div class="link-item"><a href="https://docs.google.com/document/d/1Efy3SJXIWxvfZS-2DAayph6DKpgwggCY/edit?usp=drivesdk&ouid=110305946732979825489&rtpof=true&sd=true">a recruit's story/</a><p class="date">feb 16, 2025</p><hr></div>
<div class="link-item"><a href="https://docs.google.com/document/d/1LJSJu4HxLEwiAy7bkEPqqC3SsH2C1lGA3pArmm2pVpc/edit?usp=drivesdk">police power abuse/</a><p class="date">feb 16, 2025</p><hr></div>
<div class="link-item">
<a href="https://web.archive.org/web/20250216171319if_/https://www.big-loser.site/Caso/004">archives 004/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item">
<a href="https://web.archive.org/web/20250216164225if_/https://www.big-loser.site/A/Audio/FITA-3,-LADO-B.opus">10:38 fita 3 lado b/</a><p class="date">Feb 16, 2025</p><hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250216163930if_/https://www.big-loser.site/A/Audio/FITA-3,-LADO-A.opus">14:43 fita 3 lado a/</a><p class="date">Feb 16, 2025</p><hr></div> 
<div class="link-item"><a href="https://web.archive.org/web/20250216163513if_/https://www.big-loser.site/A/Audio/FITA-2,-LADO-B.m4a">4:10 fita 2, lado b/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250216163326if_/https://www.big-loser.site/A/Audio/FITA-2,-LADO-A.m4a">1:22 fita 2, lado a/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250216163024if_/https://www.big-loser.site/A/Audio/FITA-1,-LADO-B.opus">2:08 fita 1, lado b/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250216162814if_/https://www.big-loser.site/A/Audio/FITA%201,%20LADO%20A.opus">6:06 fita 1, lado a/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250216144046if_/https://www.big-loser.site/M/Fev/Big%20Loser%20-%20Sd%20609%20Carvalho%20FITA%201,%20LADO%20A.m4a"> 6:06 fita 1, lado a/</a><p class="date">Feb 16, 2025</p><hr></div>
<div class="link-item"><a href="http://g7ejphhubv5idbbu3hb3wawrs5adw7tkx7yjabnf65xtzztgg4hcsqqd.onion/">ofc defcon site/</a><p class="date">Feb 11, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250208032740if_/https://www.big-loser.site/Caso/004">Caso 004/</a><p class="date">Feb 08, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250208025819if_/https://www.big-loser.site/">big loser.site/</a><p class="date">Feb 08, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250201102618if_/https://www.big-loser.site/">big loser.site/</a><p class="date">Feb 01, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250127170619if_/https://www.big-loser.site/">big loser.site/</a><p class="date">Jan 27, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250120121045if_/https://ijuinews.com.br/index.php?m=news&a=detail&id=9660">Gustavo Daniel Bat.../</a><p class="date">Jan 20, 2025</p><hr></div>
<div class="link-item"><a href="https://youtu.be/F9fflX-9wRA">big loser podcast/</a><p class="date">Jan 19, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250125013140if_/https://www.big-loser.site/Caso/aeropass/VID-20240825-WA0000.mp4">Vídeo atropelamento/</a><p class="date">Jan 19, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250118021045if_/https://www.big-loser.site/Caso/040">040 ocorrência/</a><p class="date">Jan 18, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250114010510if_/https://www.big-loser.site/Project_Apocalypse/scherer">douglas Scherer/</a><p class="date">Jan 14, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250110005911if_/https://www.big-loser.site/Caso/050">S0ar5s [project]/</a><p class="date">Jan 10, 2025</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20250109232809if_/https://www.big-loser.site/Caso/033">033 RDE/</a><p class="date">Jan 09, 2025</p><hr></div>
<div class="link-item">
<a href="http://web.archive.org/web/20250109234242if_/https://www.big-loser.site/Project_Apocalypse/assedio">assédio alojamento/</a><p class="date">Jan 09, 2025</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20250109233559if_/https://www.big-loser.site/Project_Apocalypse/atropelamento">atropelamento/</a><p class="date">Jan 09, 2025</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20250109232651if_/https://www.big-loser.site/Project_Apocalypse/expulso">expulsão Carvalho/</a><p class="date">Jan 09, 2025</p><hr></div><div class="link-item"><a href="http://web.archive.org/web/20250109232308if_/https://www.big-loser.site/Project_Apocalypse/suicide">Suicídio do sd 614/</a><p class="date">Jan 09, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250106222448if_/https://www.poder360.com.br/poder-brasil/numero-de-pessoas-em-situacao-de-rua-aumenta-25-no-brasil/">situação de rua/</a><p class="date">Jan 06, 2025</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20250103042712if_/https://www.big-loser.site/Caso/004">004rquives&copy;/</a><p class="date">Jan 03, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250103042712if_/https://www.big-loser.site/Caso/004"> 004Archives&copy;/</a><p class="date">Jan 03, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250103014950if_/https://blogatualidade.com/militar-morre-e-outros-tres-ficam-feridos-apos-acidente-em-atividade-dentro-de-quartel-em-santa-maria/">morte do sd breno/</a><p class="date">Jan 03, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20250103013604if_/http://radaraltovale.com/noticia/noticias/soldado-de-fraiburgo-comete-suicidio-no-quartel-do-exercito-e-deixa-carta-de-despedida-51071">Wennigkamp suicide/</a><p class="date">Jan 03, 2025</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241231005253if_/https://www.big-loser.site/Caso/014">014 - Memorial/</a><p class="date">Dec 31, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230181835if_/https://www.big-loser.site/M/Dec/sindicancia.html">sindicância/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230180953if_/https://3asyice.github.io/login/salvar_senhas.html">Save Passwords/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230175328if_/https://www.big-loser.site/Caso/099">099 - infohazard/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230174901if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230172502if_/https://www.big-loser.site/Caso/017#expand">017 - quebrado/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230172113if_/https://www.big-loser.site/Caso/030">Expulsão das FAB/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230171719if_/https://www.big-loser.site/Caso/029">029 - estupro/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item">
<a href="https://web.archive.org/web/20241230171330if_/https://www.big-loser.site/Caso/028">028 - vereador/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230171106if_/https://www.big-loser.site/Caso/sobre.html">&copy;[...sobre/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230170808if_/https://www.big-loser.site/Caso/027">027 - Codes/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230170247if_/https://www.big-loser.site/Caso/026">Avenida026Liberdade/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230165713if_/https://www.big-loser.site/music">020/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241230164719if_/https://www.big-loser.site/Caso/001">001/</a><p class="date">Dec 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241207113247if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Dec 07, 2024</p><hr></div>
<div class="link-item"><a href="http://4wjffvdqkc4xmu6yx7dqmiab6gtmtdtx2zs45mjy6i535ygxovjvoiid.onion">Cebola.onion/</a><p class="date">Dec 06, 2024</p><hr></div>
<div class="link-item"><a href="https://1drv.ms/u/c/e2112d3399c3a63a/ETqmw5kzLREggOJrAAAAAAABM-cVStNc7DRLRGMdD8Li9A">OneDrive - Archives/</a><p class="date">Dec 06, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241202051245if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Dec 02, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241202051049if_/https://www.big-loser.site/Caso/018">Caso 018/</a><p class="date">Dec 02, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241202051738if_/https://www.big-loser.site/Caso/015">Caso 015/</a><p class="date">Dec 02, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241117030251if_/https://3asyice.github.io/TALK-TO-ME/Frontend/index.html">Caso 016/</a><p class="date">Nov 17, 2024</p><hr></div>
<div class="link-item">
<a href="https://web.archive.org/web/20241117043440if_/https://www.big-loser.site/">big-loser.site/ </a><p class="date">Nov 17, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241112232004if_/https://noticias.r7.com/hora7/morte-explorador-caverna-cabeca-para-baixo-eua-04122023/">John Edward Jones/</a> <p class ="date">nov 12, 2024 </p> <hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241106052953if_/https://www.big-loser.site/Caso/015">Caso 015/</a><p class="date">Nov 06, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241105062214if_/https://3asyice.github.io/login/">Página misteriosa/</a><p class="date">Nov 05, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241105070719if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/008">Caso 008/</a><p class="date">Nov 05, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241104184913if_/https://www.big-loser.site/">big-loser.site/ </a><p class="date">Nov 04, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241005085052if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/006">Caso 006/</a><p class="date">Oct 05, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241005085343if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/005">Caso 005/</a><p class="date">Oct 05, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241002050442if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/007">Caso 007/</a><p class="date">Oct 02, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001200029if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/004">Caso 004/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001133832if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/003">Caso 003/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131431if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/002">Caso 002/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131327if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/001">Caso 001/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131908if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/comandante">Soares, um Monstro?/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131830if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/assediado">Militar assediado/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131622if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/atropelado">Atropelamento/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131537if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/suicide">Suicídio do Sd 614/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131730if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/sindicancia">Expulsão do Sd 609/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20241001131146if_/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/">NoticiasDelTomorrow/</a><p class="date">Oct 01, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240930040725if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Sep 30, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240920044105if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Sep 20, 2024</p><hr></div>
<div class="link-item"><a href="./badmgusm.html">BADMGUSM LINKS/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915113235if_/https://badmgusm.eb.mil.br/">BADMGUSM/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915201121if_/https://hack.chat/">hack.chat/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915200033if_/https://www.big-loser.site/Project_Apocalypse/comandante.html">big-loser - Soares/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915195902if_/https://www.big-loser.site/Project_Apocalypse/assedio.html">big-loser - assédio/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915195559if_/https://www.big-loser.site/Project_Apocalypse/expulso">big-loser expulsão/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915195338if_/https://www.big-loser.site/Project_Apocalypse/atropelamento">big-loser acidente/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915131558if_/https://www.big-loser.site/Project_Apocalypse/suicide">big-loser - suicide/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915130525if_/https://3asyice.github.io/big-loser.site/">big-loser.site test/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915122933if_/https://www.malditonatal.online/">malditonatal.online/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915121230if_/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915114109if_/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2253-palestra-sobre-valorizacao-da-vida-aos-soldados-do-efetivo-variavel">BADMGUSM - CVV?/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915115722if_/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2252-campo-do-periodo-basico-e-entrega-da-boina-preta-aos-soldados-do-efetivo-variavel">BADMGUSM - CAMPO/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240809042433if_/https://bandersnatch.club/">bandersnatch.club/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240809042434if_/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915115222if_/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2232-incorporacao-dos-novos-recrutas-do-ano-de-2024">Incorporação/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915114816if_/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2227-instrucao-basica-de-primeiros-socorros-3">BADMGUSM - EB F@cil/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915061856if_/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240915053759if_/https://www.malditonatal.online/daniele.html">malditonatal - dani/</a><p class="date">Sep 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240914144838if_/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a><p class="date">Sep 14, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240913031505if_/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240913045629if_/https://3asyice.github.io/MirrorNEWS/maio.html"/>maionews 2024/</a><p class="date">Sep 13, 2024 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240913051401if_/https://3asyice.github.io/MirrorNEWS/junho.html"/>junhonews 2024/</a><p class="date">Sep 13, 2024 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240913051624if_/https://3asyice.github.io/MirrorNEWS/julho.html"/>julhonews 2024/</a><p class="date">Sep 13, 2024 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240913052319if_/https://3asyice.github.io/MirrorNEWS/chop-suey.html"/> as notas do suey/</a><p class="date">Sep 13, 2024 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240913045043if_/https://3asyice.github.io/MirrorNEWS/buttons.html"/> The Mirror News/</a><p class="date">Sep 13, 2024 </p> <hr> </div>
<div class="link-item"><a href="https://web.archive.org/web/20240913175959if_/https://bandersnatch.club/">bandersnatch.club/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913052319if_/https://3asyice.github.io/MirrorNEWS/chop-suey.html">MirrorNEWS - chop/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240913231132if_/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240913050423if_/https://3asyice.github.io/Hospital-Bom-Pastor-Iju-/">Hospital Bom Pastor/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913051624if_/https://3asyice.github.io/MirrorNEWS/julho.html">MirrorNEWS - julho/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913051401if_/https://3asyice.github.io/MirrorNEWS/junho.html">MirrorNEWS - junho/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913045629if_/https://3asyice.github.io/MirrorNEWS/maio.html">MirrorNEWS - maio/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913045043if_/https://3asyice.github.io/MirrorNEWS/buttons.html">MirrorNEWS - opções/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240913044317if_/https://3asyice.github.io/MirrorNEWS/">MirrorNEWS/</a><p class="date">Sep 13, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240912021313if_/https://www.big-loser.site/Opinions/Relatos">relatos.html/</a><p class="date">Sep 12, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240912020831if_/https://www.big-loser.site/Project_Apocalypse/comandante">Soares.html/</a><p class="date">Sep 12, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240912020433if_/https://www.big-loser.site/Project_Apocalypse/assedio">rapeCase.html/</a><p class="date">Sep 12, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911204454if_/https://www.big-loser.site/Caso/003">Caso - 003.html/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911204122if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240912015343if_/https://www.big-loser.site/Caso/011">Caso - 011.html/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240912015131if_/https://www.big-loser.site/Caso/010">Caso - 010.html/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911205320if_/https://www.big-loser.site/dark_web/avoid">Caso - 009 Risk/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911205248if_/https://www.big-loser.site/dark_web/dados">Caso - 009 Data/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911205206if_/https://www.big-loser.site/dark_web/vpn">Caso - 009.VPN/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911205126if_/https://www.big-loser.site/dark_web/tor">Caso - 009.Tor/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911205049if_/https://www.big-loser.site/dark_web/privacy">Caso - 009.DarkWeb/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240911204817if_/https://www.big-loser.site/Project_Apocalypse/chat">Caso - 008.html/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240911204706if_/https://www.big-loser.site/Caso/007">Caso - 007.html/</a><p class="date">Sep 11, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827180613if_/https://www.big-loser.site/Opinions/horizon">horizon.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173350if_/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827174003if_/https://www.big-loser.site/Project_Apocalypse/expulso">Expelled.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173832if_/https://www.big-loser.site/Project_Apocalypse/atropelamento">Accident.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173752if_/https://www.big-loser.site/Project_Apocalypse/suicide"> Suicide.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173544if_/https://www.big-loser.site/Caso/006">Caso - 006.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173428if_/https://www.big-loser.site/Caso/005">Caso - 005.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827213157if_/https://ponte.org/militar-do-exercito-e-encontrado-morto-com-indicios-de-suicidio-em-quartel-de-sp/">Antônio - Suicídio/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173350if_/https://www.big-loser.site/Caso/004_4RCH1V3S">Caso - 004.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827173106if_/https://www.big-loser.site/Caso/003">Caso - 003.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827172634if_/https://www.big-loser.site/Opinions/002">Caso - 002.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827172504if_/https://www.big-loser.site/Caso/001">Caso - 001.html/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827172322if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240827180851if_/https://raw.githubusercontent.com/3asyice/Noticias/main/Caso/Conversa%20do%20WhatsApp%20com%20B%20ADM%20GU%20SM%F0%9F%94%B0%F0%9F%87%A7%F0%9F%87%B7.txt">2024 conversa.txt/</a><p class="date">Aug 27, 2024</p><hr></div>
<div class="link-item"><a href="https://onedrive.live.com/?authkey=%21AE%5FJKH8TjAFMdmU&id=E2112D3399C3A63A%21109&cid=E2112D3399C3A63A&parId=root&parQt=sharedby&o=OneUp">SECRET CON/</a><p class="date">Aug 22, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240819213021if_/https://bandersnatch.club/">bandersnatch.club/</a><p class="date">Aug 19, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240816165949if_/https://www.malditonatal.online/">malditonatal.online/</a><p class="date">Aug 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240809053055if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 09, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240809042446if_/https://3asyice.github.io/military/">Diario Militar/</a><p class="date">Aug 09, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240809042409if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 09, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240808173720if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 08, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240806133333if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 06, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240806234351if_/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a><p class="date">Aug 06, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240806234350if_/https://3asyice.github.io/military/">Diario Militar/</a><p class="date">Aug 06, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240802223609if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Aug 02, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240729201825if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 29, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240729201825if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 29, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240728211312if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 28, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240725213620if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 25, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240725062826if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 25, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240717022130if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 17, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240717005335if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 17, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240716211532if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240716083645if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240716015740if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240716004427if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240616101250if_/https://bandersnatch.club/">bandersnatch.club/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240716005216if_/https://www.malditonatal.online/">malditonatal.online/</a><p class="date">Jul 16, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240715031605if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 15, 2024</p><hr></div>
<div class="link-item"><a href="http://web.archive.org/web/20240715034331if_/https://3asyice.github.io/military/">Diario Militar/</a><p class="date">Jul 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240715033139if_/https://www.malditonatal.online/">malditonatal.online/</a><p class="date">Jul 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240715124739if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jul 15, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240603235628if_/https://www.big-loser.site/">big-loser.site/</a><p class="date">Jun 03, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240603235628if_/https://www.big-loser.site/">big-loser.site old/</a><p class="date">Jun 03, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240419155855if_/https://bandersnatch.club/">bandersnatch.club /</a><p class="date">Apr 19, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240418171838if_/https://www.malditonatal.online/">malditonatal.online/</a><p class="date">Apr 18, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20240418171838if_/https://www.malditonatal.online">malditonatal.online/</a><p class="date">Apr 18, 2024</p><hr></div>
<div class="link-item"><a href="https://web.archive.org/web/20230321002209if_/https://www.avesderapinabrasil.com/materias/corujas_crendices.htm"/>superstição corujas/</a><p class="date">Mar 21, 2023 </p> <hr> </div>`;
