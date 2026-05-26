document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CUSTOM CURSOR ---
    const cursor = document.getElementById('cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efek cursor membesar saat hover tombol
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => cursor.classList.add('gede'));
        btn.addEventListener('mouseleave', () => cursor.classList.remove('gede'));
    });


    // --- 2. FLOATTING HEARTS (BACKGROUND) ---
    const bgContainer = document.getElementById('floating-hearts-bg');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤️';
        
        // Posisi acak horizontal
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Ukuran acak
        const size = Math.random() * 20 + 10 + 'px';
        heart.style.fontSize = size;
        
        // Kecepatan acak
        const duration = Math.random() * 3 + 2 + 's';
        heart.style.animationDuration = duration;
        
        bgContainer.appendChild(heart);
        
        // Hapus setelah animasi selesai
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Buat hati setiap 300ms
    setInterval(createHeart, 300);


    // --- 3. LOGIKA TOMBOL NO KABUR (KETIKA CURSOR MENDEKAT) ---
    const noBtn = document.getElementById('no-btn');
    const wrapper = document.getElementById('btn-wrapper');
    const yesBtn = document.getElementById('yes-btn');

    // Fungsi untuk menggerakkan NO ke posisi acak
    function moveNoButton() {
        // Ambil ukuran area wrapper
        const wrapperRect = wrapper.getBoundingClientRect();
        
        // Hitung posisi acak внутри wrapper (dengan batas margins)
        // Kita buat area sedikit lebih kecil agar tidak keluar batas
        const maxX = wrapperRect.width - 120; // lebar tombol kurang lebih
        const maxY = 80; // tinggi tombol kurang lebih
        
        const randomX = Math.floor(Math.random() * maxX) - (maxX/2);
        const randomY = Math.floor(Math.random() * maxY) - (maxY/2);
        
        // Terapkan perpindahan menggunakan transform translate
        // Ini lebih stabil daripada mengubah top/left langsung
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Ubah teks tombol sekalian (opsional, lucu aja)
        const responses = ["Yakin?", "Jangan deh", "Berani klik!", "Stay there", "Nice try"];
        noBtn.innerText = responses[Math.floor(Math.random() * responses.length)];
    }

    // Deteksi mouse mendekat ke tombol NO
    noBtn.addEventListener('mouseenter', () => {
        moveNoButton();
    });

    // Juga kalau mouse bergerak cepat di dalam area button-wrapper
    // Kita cek secara periodik posisi mouse VS posisi NO
    document.addEventListener('mousemove', (e) => {
        const noRect = noBtn.getBoundingClientRect();
        const distThreshold = 100; // Jarak Pixel untuk deteksi "mendekat"
        
        // Posisi mouse saat ini
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Pusat tombol NO
        const noCenterX = noRect.left + noRect.width / 2;
        const noCenterY = noRect.top + noRect.height / 2;
        
        // Hitung jarak Euclidean
        const distance = Math.sqrt(
            Math.pow(mouseX - noCenterX, 2) + 
            Math.pow(mouseY - noCenterY, 2)
        );
        
        // Kalau jarak kurang dari 100px, tombol kabur!
        if (distance < distThreshold) {
            moveNoButton();
        }
    });


    // --- 4. TOMBOL YES (SUDAH DI HTML berupa link ke IG) ---
    // Tidak perlu JS extra, kecuali ingin tambahkan efek suara atau analytics
    const yesBtnElement = document.getElementById('yes-btn');
    
    yesBtnElement.addEventListener('click', () => {
        // Ini adalah fallback, sebenernya proses pengarahan ada di href HTML
        console.log("Navigasi ke Instagram...");
    });

});