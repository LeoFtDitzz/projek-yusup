document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CUSTOM CURSOR ---
    const cursor = document.getElementById('cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

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
        
        heart.style.left = Math.random() * 100 + 'vw';
        
        const size = Math.random() * 20 + 10 + 'px';
        heart.style.fontSize = size;
        
        const duration = Math.random() * 3 + 2 + 's';
        heart.style.animationDuration = duration;
        
        bgContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);


    // --- 3. LOGIKA TOMBOL NO KABUR KETIKA DIKLIK ---
    const noBtn = document.getElementById('no-btn');
    const wrapper = document.getElementById('btn-wrapper');

    // Tentukan posisi-posisi TETAP yang aman (tidak keluar layar)
    // Kita bagi area menjadi grid 3x3
    const safePositions = [
        { x: -120, y: 0 },   // Kiri
        { x: 120, y: 0 },   // Kanan
        { x: 0, y: -60 },   // Atas
        { x: 0, y: 60 },   // Bawah
        { x: -80, y: -50 }, // Kiri Atas
        { x: 80, y: -50 },  // Kanan Atas
        { x: -80, y: 50 },  // Kiri Bawah
        { x: 80, y: 50 }    // Kanan Bawah
    ];
    
    let currentPositionIndex = -1;

    function moveNoButton() {
        // Pilih posisi acak tapi BERBEDA dari posisi sebelumnya
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * safePositions.length);
        } while (newIndex === currentPositionIndex);
        
        currentPositionIndex = newIndex;
        const pos = safePositions[newIndex];
        
        // Terapkan perpindahan dengan animasi halus
        noBtn.style.transition = 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        noBtn.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        
        // Ubah teks jadi lucu-lucu
        const responses = ["mampos", "YAHAHAH", "raden", "ayotaaa", "Jangan", "pls"];
        noBtn.innerText = responses[Math.floor(Math.random() * responses.length)];
        
        // Biar tetap terlihat, reset ke posisi tengah setelah 3 detik (opsional)
        // setTimeout(() => {
        //     noBtn.style.transform = `translate(0, 0)`;
        //     noBtn.innerText = "NO";
        // }, 2000);
    }

    // TOMBOL NO KABUR KETIKA DIKLIK
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });


    // --- 4. TOMBOL YES (LINK KE IG) ---
});
