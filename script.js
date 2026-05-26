/* --- VARIABEL --- */
:root {
    --bg-pastel: #ffe2e6;
    --bg-dewasa: #ffb6c1;
    --text-dark: #2c2c2c;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
}

body {
    font-family: 'Poppins', sans-serif;
    background: radial-gradient(circle at center, var(--bg-dewasa), var(--bg-pastel));
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* --- CUSTOM CURSOR --- */
.custom-cursor {
    width: 20px;
    height: 20px;
    background-color: #ff4081;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: width 0.2s, height 0.2s;
    mix-blend-mode: multiply;
}

body:hover .custom-cursor.gede {
    width: 60px;
    height: 60px;
    background-color: #ff4081;
    opacity: 0.3;
}

/* --- LAYOUT --- */
.container {
    text-align: center;
    z-index: 10;
    padding: 20px;
    max-width: 600px;
    width: 100%;
}

/* Badge */
.badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.6);
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 600;
    color: #555;
    letter-spacing: 2px;
    margin-bottom: 30px;
    backdrop-filter: blur(5px);
}

/* Teks */
.question-text {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 10px;
    line-height: 1.2;
}

.sub-text {
    font-size: 1rem;
    color: #666;
    margin-bottom: 50px;
    font-weight: 300;
}

/* --- AREA TOMBOL --- */
.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
    min-height: 100px;
    margin: 0 auto;
}

.btn {
    padding: 15px 45px;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    border: none;
    border-radius: 50px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    min-width: 120px;
    /* AWALAN: state normal */
    position: relative; 
    transform: translate(0, 0);
}

/* YES BUTTON */
.yes-btn {
    background-color: #000000;
    color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 5;
}

.yes-btn:hover {
    transform: scale(1.1);
    background-color: #333;
}

/* NO BUTTON */
.no-btn {
    background-color: white;
    color: var(--text-dark);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 4;
}

.no-btn:hover {
    transform: scale(1.05);
}

/* --- BACKGROUND HEARTS --- */
.bg-heart {
    position: absolute;
    bottom: -50px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 20px;
    animation: floatUp linear forwards;
    z-index: 1;
}

@keyframes floatUp {
    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
    20% { opacity: 0.8; }
    100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
}

/* --- RESPONSIVE --- */
@media (max-width: 600px) {
    .question-text { font-size: 2rem; }
    .button-wrapper { flex-direction: column; gap: 20px; }
}
