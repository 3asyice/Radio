const CACHE_NAME = "fm609-cache-v1";
const FILES_TO_CACHE = [
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

  
  // exemplo de música offline
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
