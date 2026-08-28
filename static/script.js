const card = document.getElementById('interactive-card');
const coordsDisplay = document.getElementById('coords');

// Evento de movimiento de ratón sobre la tarjeta
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    
    coordsDisplay.textContent = `X: ${x}, Y: ${y}`;
    
    // Pequeño efecto 3D simple
    const moveX = (x - rect.width / 2) / 10;
    const moveY = (y - rect.height / 2) / 10;
    card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    coordsDisplay.textContent = 'Mueve el ratón aquí';
});