/* =========================================================
   CONFIGURAÇÃO PRINCIPAL
========================================================= */

/*
    DATA EXATA EM QUE GUILHERME E ELAINE COMEÇARAM
    A NAMORAR.

    Formato:
    AAAA-MM-DDTHH:MM:SS

    11/04/2026 às 14:15
*/

const relationshipStart =
    new Date("2026-04-11T14:15:00");


/* =========================================================
   ELEMENTOS
========================================================= */

const yearsElement =
    document.getElementById("years");

const monthsElement =
    document.getElementById("months");

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const totalDaysElement =
    document.getElementById("totalDays");

const totalHoursElement =
    document.getElementById("totalHours");

const totalMinutesElement =
    document.getElementById("totalMinutes");

const totalSecondsElement =
    document.getElementById("totalSeconds");

const anniversaryCountdown =
    document.getElementById("anniversaryCountdown");

const anniversaryDate =
    document.getElementById("anniversaryDate");

const anniversaryTitle =
    document.getElementById("anniversaryTitle");

const dynamicMessage =
    document.getElementById("dynamicMessage");

const systemTime =
    document.getElementById("systemTime");


/* =========================================================
   FUNÇÃO PARA FORMATAR NÚMEROS
========================================================= */

function pad(number) {

    return String(number).padStart(2, "0");

}


/* =========================================================
   DIFERENÇA REAL DE CALENDÁRIO
========================================================= */

/*
    Esta função calcula:

    ANOS
    MESES
    DIAS
    HORAS
    MINUTOS
    SEGUNDOS

    sem assumir que todo mês possui 30 dias.
*/

function calculateRelationshipTime(start, now) {

    let years =
        now.getFullYear() - start.getFullYear();

    let months =
        now.getMonth() - start.getMonth();

    let days =
        now.getDate() - start.getDate();

    let hours =
        now.getHours() - start.getHours();

    let minutes =
        now.getMinutes() - start.getMinutes();

    let seconds =
        now.getSeconds() - start.getSeconds();


    /*
        Corrige segundos negativos.
    */

    if (seconds < 0) {

        seconds += 60;
        minutes--;

    }


    /*
        Corrige minutos negativos.
    */

    if (minutes < 0) {

        minutes += 60;
        hours--;

    }


    /*
        Corrige horas negativas.
    */

    if (hours < 0) {

        hours += 24;
        days--;

    }


    /*
        Se os dias ficarem negativos,
        pegamos a quantidade correta de dias
        do mês anterior.
    */

    if (days < 0) {

        const previousMonth =
            new Date(
                now.getFullYear(),
                now.getMonth(),
                0
            );

        days += previousMonth.getDate();

        months--;

    }


    /*
        Corrige meses negativos.
    */

    if (months < 0) {

        months += 12;
        years--;

    }


    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };

}


/* =========================================================
   TEMPO TOTAL
========================================================= */

function calculateTotals(now) {

    const milliseconds =
        now.getTime() -
        relationshipStart.getTime();


    const totalSeconds =
        Math.floor(milliseconds / 1000);


    const totalMinutes =
        Math.floor(totalSeconds / 60);


    const totalHours =
        Math.floor(totalMinutes / 60);


    const totalDays =
        Math.floor(totalHours / 24);


    return {
        totalSeconds,
        totalMinutes,
        totalHours,
        totalDays
    };

}


/* =========================================================
   ATUALIZAÇÃO DO CONTADOR
========================================================= */

function updateCounter() {

    const now = new Date();


    const time =
        calculateRelationshipTime(
            relationshipStart,
            now
        );


    /*
        CONTADOR PRINCIPAL
    */

    yearsElement.textContent =
        time.years;

    monthsElement.textContent =
        pad(time.months);

    daysElement.textContent =
        pad(time.days);


    /*
        CONTADOR SECUNDÁRIO
    */

    hoursElement.textContent =
        pad(time.hours);

    minutesElement.textContent =
        pad(time.minutes);

    secondsElement.textContent =
        pad(time.seconds);


    /*
        NÚMEROS TOTAIS
    */

    const totals =
        calculateTotals(now);


    totalDaysElement.textContent =
        totals.totalDays.toLocaleString("pt-BR");

    totalHoursElement.textContent =
        totals.totalHours.toLocaleString("pt-BR");

    totalMinutesElement.textContent =
        totals.totalMinutes.toLocaleString("pt-BR");

    totalSecondsElement.textContent =
        totals.totalSeconds.toLocaleString("pt-BR");


    /*
        ANIVERSÁRIO
    */

    updateAnniversary(now);


    /*
        FRASE
    */

    updateDynamicMessage(totals.totalDays);

}


/* =========================================================
   PRÓXIMO ANIVERSÁRIO
========================================================= */

function updateAnniversary(now) {

    let anniversaryYear =
        now.getFullYear();


    let nextAnniversary =
        new Date(
            anniversaryYear,
            relationshipStart.getMonth(),
            relationshipStart.getDate(),
            relationshipStart.getHours(),
            relationshipStart.getMinutes(),
            relationshipStart.getSeconds()
        );


    /*
        Se o aniversário deste ano já passou,
        usamos o próximo ano.
    */

    if (nextAnniversary <= now) {

        anniversaryYear++;

        nextAnniversary =
            new Date(
                anniversaryYear,
                relationshipStart.getMonth(),
                relationshipStart.getDate(),
                relationshipStart.getHours(),
                relationshipStart.getMinutes(),
                relationshipStart.getSeconds()
            );

    }


    /*
        Quantos anos serão completados?
    */

    const anniversaryNumber =
        anniversaryYear -
        relationshipStart.getFullYear();


    /*
        Diferença até o próximo aniversário.
    */

    const difference =
        nextAnniversary.getTime() -
        now.getTime();


    const totalSeconds =
        Math.floor(difference / 1000);


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400) / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );


    const seconds =
        totalSeconds % 60;


    anniversaryTitle.textContent =
        `PRÓXIMO ANIVERSÁRIO — ${anniversaryNumber} ANO${anniversaryNumber !== 1 ? "S" : ""}`;


    anniversaryCountdown.textContent =
        `${days} DIAS, ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;


    anniversaryDate.textContent =
        nextAnniversary.toLocaleDateString(
            "pt-BR",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        ).toUpperCase();

}


/* =========================================================
   FRASES DINÂMICAS
========================================================= */

const messages = [

    "Cada segundo ao seu lado é um segundo que vale a pena.",

    "O relógio continua contando. Minha escolha por você também.",

    "Entre bilhões de pessoas, nossas histórias encontraram uma à outra.",

    "O tempo passa. O que sentimos continua.",

    "Cada dia é mais um capítulo da nossa história.",

    "Nosso tempo juntos ainda está apenas começando.",

    "Se pudesse voltar ao primeiro dia, escolheria você novamente.",

    "Algumas conexões não deveriam ser desconectadas.",

    "O sistema registra o tempo. O coração registra as memórias.",

    "Enquanto houver tempo, haverá nós."
];


let currentMessage = 0;


function updateDynamicMessage(days) {

    /*
        Troca aproximadamente a cada 7 dias.
    */

    const index =
        Math.floor(days / 7) %
        messages.length;


    if (index !== currentMessage) {

        currentMessage = index;

        dynamicMessage.style.opacity = "0";

        setTimeout(() => {

            dynamicMessage.textContent =
                messages[index];

            dynamicMessage.style.opacity = "1";

        }, 300);

    }

}


/* =========================================================
   RELÓGIO DO SISTEMA
========================================================= */

function updateSystemClock() {

    const now = new Date();

    systemTime.textContent =
        now.toLocaleTimeString("pt-BR");

}


/* =========================================================
   PARTÍCULAS
========================================================= */

function createParticles() {

    const container =
        document.getElementById("particles");


    for (let i = 0; i < 60; i++) {

        const particle =
            document.createElement("div");


        particle.classList.add("particle");


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            (5 + Math.random() * 12) + "s";


        particle.style.animationDelay =
            Math.random() * 10 + "s";


        particle.style.opacity =
            Math.random();


        container.appendChild(particle);

    }

}


/* =========================================================
   TIMELINE
========================================================= */

/*
    ADICIONE NOVOS MOMENTOS AQUI.

    Exemplo:

    {
        data: "20/04/2026",
        titulo: "Nosso primeiro passeio",
        descricao: "Descrição do momento.",
        foto: "fotos/passeio.jpg"
    }
*/

const moments = [

    {
        data: "11/04/2026",
        titulo: "O começo",
        descricao:
            "O dia em que a nossa história começou.",
        foto: ""
    },

    {
        data: "MEMÓRIA",
        titulo: "Um novo capítulo",
        descricao:
            "Este espaço está esperando pelas próximas memórias que vamos criar.",
        foto: ""
    }

];


function createTimeline() {

    const timeline =
        document.getElementById("timeline");


    timeline.innerHTML = "";


    moments.forEach((moment) => {

        const item =
            document.createElement("div");


        item.className =
            "timeline-item";


        item.innerHTML = `

            <div class="timeline-dot"></div>

            <div class="timeline-date">
                ${moment.data}
            </div>

            <div class="timeline-title">
                ${moment.titulo}
            </div>

            <div class="timeline-description">
                ${moment.descricao}
            </div>

        `;


        timeline.appendChild(item);

    });

}


/* =========================================================
   MODO SECRETO
========================================================= */

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");


secretButton.addEventListener(
    "click",
    () => {

        secretMessage.classList.toggle("hidden");

        if (
            !secretMessage.classList.contains("hidden")
        ) {

            secretButton.textContent =
                "ACCESS // GRANTED";

        } else {

            secretButton.textContent =
                "ACCESS // CLASSIFIED";

        }

    }
);


/* =========================================================
   MÚSICA
========================================================= */

const startButton =
    document.getElementById("startButton");

const introScreen =
    document.getElementById("introScreen");

const mainSite =
    document.getElementById("mainSite");

const musicButton =
    document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");


let musicPlaying = false;


/*
    A música começa SOMENTE depois
    que o usuário clicar.
*/

startButton.addEventListener(
    "click",
    async () => {

        introScreen.style.opacity = "0";

        introScreen.style.transition =
            "opacity 1s ease";


        setTimeout(() => {

            introScreen.classList.add(
                "hidden"
            );

            mainSite.classList.remove(
                "hidden"
            );

            musicButton.classList.remove(
                "hidden"
            );

            window.scrollTo(0, 0);

        }, 1000);


        try {

            await backgroundMusic.play();

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

        } catch (error) {

            console.log(
                "Música aguardando interação do usuário."
            );

        }

    }
);


/*
    Botão da música
*/

musicButton.addEventListener(
    "click",
    async () => {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent = "♪";

        } else {

            await backgroundMusic.play();

            musicPlaying = true;

            musicButton.classList.add(
                "playing"
            );

            musicButton.textContent = "♫";

        }

    }
);


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

createParticles();

createTimeline();

updateCounter();

updateSystemClock();


/*
    Atualiza o contador a cada segundo.
*/

setInterval(
    updateCounter,
    1000
);


/*
    Atualiza o relógio do sistema.
*/

setInterval(
    updateSystemClock,
    1000
);