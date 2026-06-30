// ==============================
// ASYUKURAN KHITANAN
// Muh. Nur Ramadhan Pulu (Nani)
// ==============================

// Elemen
const cover = document.querySelector(".cover");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");
const musicBtn = document.querySelector(".music-btn");
const guestName = document.getElementById("guestName");

// ==============================
// Nama Tamu dari URL
// contoh:
// index.html?to=Hasan
// ==============================

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {

    guestName.innerHTML = `
    <p class="guest-title">Kepada Yth.</p>
    <h3>${decodeURIComponent(guest)}</h3>
    <small>Mohon maaf apabila ada kesalahan penulisan nama.</small>
    `;

}

// ==============================
// Buka Undangan
// ==============================

function openInvitation(){

    cover.style.display = "none";

    content.style.display = "block";

    document.body.style.overflowY = "auto";

    music.play().catch(() => {});

    createConfetti();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ==============================
// Tombol Musik
// ==============================

let playing = true;

function toggleMusic(){

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🎵 Musik : ON";

        playing=true;

    }else{

        music.pause();

        musicBtn.innerHTML="🔇 Musik : OFF";

        playing=false;

    }

}

// ==============================
// Countdown
// ==============================

const countdown=document.getElementById("countdown");

const targetDate=new Date("July 2, 2026 19:00:00").getTime();

setInterval(function(){

const now=new Date().getTime();

const distance=targetDate-now;

if(distance<0){

countdown.innerHTML="<h2>Acara Sedang Berlangsung</h2>";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

countdown.innerHTML=`

<div class="time-box">

<span>${days}</span>

Hari

</div>

<div class="time-box">

<span>${hours}</span>

Jam

</div>

<div class="time-box">

<span>${minutes}</span>

Menit

</div>

<div class="time-box">

<span>${seconds}</span>

Detik

</div>

`;

},1000);


// ==============================
// Efek Confetti
// ==============================

function createConfetti(){

for(let i=0;i<120;i++){

let conf=document.createElement("div");

conf.className="confetti";

conf.style.left=Math.random()*100+"vw";

conf.style.animationDuration=(Math.random()*3+2)+"s";

conf.style.backgroundColor=randomColor();

conf.style.width=Math.random()*8+6+"px";

conf.style.height=conf.style.width;

document.body.appendChild(conf);

setTimeout(()=>{

conf.remove();

},5000);

}

}

function randomColor(){

const colors=[

"#FFD700",

"#4CAF50",

"#ffffff",

"#66BB6A",

"#FBC02D"

];

return colors[Math.floor(Math.random()*colors.length)];

}


// ==============================
// Animasi Bintang
// ==============================

for(let i=0;i<40;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(star);

}


// ==============================
// Efek Scroll
// ==============================

window.addEventListener("scroll",()=>{

document.querySelectorAll(".section").forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("show");

}

});

});


// ==============================
// Console
// ==============================

console.log("Website Asyukuran Khitanan - Nani");
