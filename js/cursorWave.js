const wave = document.getElementById('iridescent-wave');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // Create a radial iridescent gradient centered on the cursor
    wave.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            #ffecd2 0%,
            #fcb69f 20%,
            #a1c4fd 40%,
            #c2e9fb 60%,
            #fbc2eb 80%,
            transparent 100%
        )
    `;
});

let fadeTimeout;
document.addEventListener('mousemove', (e) => {
    // ... (gradient code above)
    wave.style.opacity = '0.7';
    clearTimeout(fadeTimeout);
    fadeTimeout = setTimeout(() => {
        wave.style.opacity = '0';
    }, 300);
});