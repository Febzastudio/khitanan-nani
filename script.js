// 1. FUNGSI MEMBUKA UNDANGAN
function openInvitation() {
    // Sembunyikan Cover dengan Slide Up dan hilangkan visibility-nya
    const cover = document.getElementById('cover');
    cover.classList.add('slide-up');
    
    // Tampilkan Konten Utama
    const content = document.getElementById('content');
    content.classList.remove('content-hidden');
    
    // Putar Musik Otomatis
    const audio = document.getElementById('bgMusic');
    audio.play().catch(function(error) {
        console.log("Autoplay dicegah oleh browser, musik akan menyala saat tombol diklik.");
    });
    
    // Tampilkan Tombol Musik Floating
    document.getElementById('musicBtn').classList.remove('hidden');
}

// 2. FUNGSI TOMBOL ON/OFF MUSIK
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    
    if (audio.paused) {
        audio.play();
        musicBtn.innerHTML = "🎵";
    } else {
        audio.pause();
        musicBtn.innerHTML = "⏸️";
    }
}

// 3. MEMBACA NAMA TAMU OTOMATIS DARI URL (?to=Nama+Tamu)
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    
    if (guestName) {
        // Mengubah tanda '+' atau '%20' menjadi spasi normal
        document.getElementById('guestName').innerText = decodeURIComponent(guestName);
    } else {
        // Nama default jika link dibagikan tanpa parameter nama tamu
        document.getElementById('guestName').innerText = "Calon Tamu Undangan";
    }
});

// 4. HITUNG MUNDUR (COUNTDOWN) ACARA (02 Juli 2026)
const targetDate = new Date("July 2, 2026 19:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    // Kalkulasi Waktu
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    // Tampilkan ke Elemen HTML
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        countdownEl.innerHTML = days + " Hari  " + hours + " Jam  " + minutes + " Menit  " + seconds + " Detik ";
    }

    // Jika waktu habis
    if (gap < 0) {
        clearInterval(countdownInterval);
        if (countdownEl) {
            countdownEl.innerHTML = "Acara Sedang Berlangsung / Telah Selesai";
        }
    }
}, 1000);
