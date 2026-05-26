document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Script loaded!");
    
    // --- 1. CUSTOM CURSOR ---
    const cursor = document.getElementById('cursor');
    
    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });

    const buttons = document.querySelectorAll('.btn, .music-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => cursor.classList.add('gede'));
        btn.addEventListener('mouseleave', () => cursor.classList.remove('gede'));
    });


    // --- 2. FLOATING HEARTS (BACKGROUND) ---
    const bgContainer = document.getElementById('floating-hearts-bg');
    
    function createHeart() {
        if (!bgContainer) return;
        
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = '❤️';
        
        heart.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 20 + 10 + 'px';
        heart.style.fontSize = size;
        
        const duration = Math.random() * 3 + 2 + 's';
        heart.style.animationDuration = duration;
        
        bgContainer.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 5000);
    }

    setInterval(createHeart, 300);


    // --- 3. LOGIKA TOMBOL NO KABUR KETIKA DIKLIK ---
    const noBtn = document.getElementById('no-btn');
    
    if (noBtn) {
        console.log("NO button found!");
        
        const moves = [
            { x: -150, y: 0 },
            { x: 150, y: 0 },
            { x: 0, y: -100 },
            { x: 0, y: 100 },
            { x: -120, y: -80 },
            { x: 120, y: -80 },
            { x: -120, y: 80 },
            { x: 120, y: 80 }
        ];

        let clickCount = 0;

        noBtn.addEventListener('click', (e) => {
            console.log("NO clicked!");
            
            clickCount++;
            
            const randomIndex = Math.floor(Math.random() * moves.length);
            const move = moves[randomIndex];
            
            noBtn.style.transform = `translate(${move.x}px, ${move.y}px)`;
            
            const texts = ["Nice try 😂", "GK akan!", "Ketemu?", "Lari lagi!", "Jangan deh", "Yah..."];
            noBtn.innerText = texts[clickCount % texts.length];
            
            setTimeout(() => {
                noBtn.style.transform = `translate(0, 0)`;
            }, 1500);
        });
    }


    // --- 4. LOGIKA TOMBOL YES (BUKA POPUP) ---
    const yesBtn = document.getElementById('yes-btn');
    const confirmPopup = document.getElementById('confirm-popup');
    const cancelBtn = document.getElementById('cancel-btn');
    
    if (yesBtn && confirmPopup) {
        yesBtn.addEventListener('click', () => {
            console.log("YES clicked! Show popup.");
            confirmPopup.classList.add('active');
        });
        
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                confirmPopup.classList.remove('active');
            });
        }
    }


    // --- 5. MUSIK (PLAY/PAUSE) ---
    const musicBtn = document.getElementById('music-btn');
    const musicIcon = document.getElementById('music-icon');
    const musicLabel = document.querySelector('.music-label');
    const bgMusic = document.getElementById('bg-music');
    
    let isPlaying = false;

    if (musicBtn && bgMusic) {
        // Set volume (0.3 = 30% agar tidak terlalu keras)
        bgMusic.volume = 0.3;
        
        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                // Pause musik
                bgMusic.pause();
                musicIcon.innerText = '🔇';
                musicBtn.classList.remove('playing');
                musicLabel.innerText = 'Klik buat musik 🎵';
                isPlaying = false;
            } else {
                // Mainkan musik
                bgMusic.play().then(() => {
                    musicIcon.innerText = '🔊';
                    musicBtn.classList.add('playing');
                    musicLabel.innerText = 'Now Playing: You! 🎶';
                    isPlaying = true;
                }).catch(err => {
                    console.log("Gagal mainkan musik:", err);
                    alert("Klik tombol lagi untuk mulai musik!");
                });
            }
        });
    }
});
