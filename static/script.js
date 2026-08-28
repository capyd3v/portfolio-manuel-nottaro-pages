


document.addEventListener('DOMContentLoaded', function() {
	const viewportElements = document.querySelectorAll(
		'.hero h1, .hero-text p, .hero-image > img, .hero-portrait > img, ' +
		'.hero-portrait .hero-text p img, .hero-portrait h2, ' +
		'.thinking figure img, .contact > img, .contact h2, .image-stack'
	);

	const revealStack = (stack) => {
		stack.querySelectorAll('img').forEach(image => {
			image.classList.add('animate');
		});
	};

	const activateElement = (element) => {
		element.classList.add('is-visible');
		if (element.classList.contains('image-stack')) {
			revealStack(element);
		}
	};

	if (!('IntersectionObserver' in window)) {
		viewportElements.forEach(activateElement);
		return;
	}

	const observer = new IntersectionObserver((entries, elementObserver) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			}

			activateElement(entry.target);
			elementObserver.unobserve(entry.target);
		});
	}, { threshold: 0.1 });

	viewportElements.forEach(element => observer.observe(element));
});

// const card = document.getElementById('interactive-card');
// const coordsDisplay = document.getElementById('coords');

// // Evento de movimiento de ratón sobre la tarjeta
// card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = Math.round(e.clientX - rect.left);
//     const y = Math.round(e.clientY - rect.top);
    
//     coordsDisplay.textContent = `X: ${x}, Y: ${y}`;
    
//     // Pequeño efecto 3D simple
//     const moveX = (x - rect.width / 2) / 10;
//     const moveY = (y - rect.height / 2) / 10;
//     card.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
// });

// card.addEventListener('mouseleave', () => {
//     card.style.transform = 'rotateY(0deg) rotateX(0deg)';
//     coordsDisplay.textContent = 'Mueve el ratón aquí';
// });
