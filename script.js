console.log('Nydra - Ciberseguridad para MIPyMEs');

// Add a subtle parallax effect to the background grid if desired
document.addEventListener('mousemove', (e) => {
    const grid = document.querySelector('.background-grid');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    grid.style.transform = `translate(-${x * 10}px, -${y * 10}px)`;
});
