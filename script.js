// 1. Fungsi Mengambil Parameter Nama Tamu dari URL (?to=Nama+Tamu)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestContainer = document.getElementById('guestName');
    
    if (guestName) {
        guestContainer.innerText = guestName;
    } else {
        guestContainer.innerText = "Calon Tamu Undangan";
    }
});

// 2. Fungsi Buka Undangan & Putar Musik
function openInvitation() {
    // Slide up cover screen
    const cover = document.getElementById('cover');
    cover.classList.add('slide-up');
    
    // Tampilkan Konten Utama
    const content = document.getElementById('content');
    content.classList.remove('content-hidden');
    
    // Tampilkan Tombol Musik
    const musicBtn = document.getElementById('musicBtn');
    musicBtn.classList.remove('hidden');
    
    // Putar Audio secara aman setelah interaksi pengguna
    const audio = document.getElementById('bgMusic');
    audio.play().catch(error => {
        console.log("Autoplay musik diblokir browser, menunggu interaksi manual.");
    });
}

// 3. Fungsi Play / Pause Musik Latar
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    
    if (audio.paused) {
        audio.play();
        btn.innerText = "🎵";
    } else {
        audio.pause();
        btn.innerText = "🔇";
    }
}

// 4. Hitung Mundur (Countdown) - Waktu Target: 02 Juli 2026 19:00:00 WITA
const targetDate = new Date("July 2, 2026 19:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const countdownEl = document.getElementById("countdown");
    
    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownEl.innerHTML = "<h4>Acara Sedang Berlangsung / Sudah Selesai</h4>";
    } else {
        countdownEl.innerHTML = `
            <div class="countdown-container">
                <div class="countdown-item">
                    <div class="countdown-number">${days}</div>
                    <div class="countdown-label">Hari</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-number">${hours}</div>
                    <div class="countdown-label">Jam</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-number">${minutes}</div>
                    <div class="countdown-label">Menit</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-number">${seconds}</div>
                    <div class="countdown-label">Detik</div>
                </div>
            </div>
        `;
    }
}, 1000);
