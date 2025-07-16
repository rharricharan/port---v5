const nameTag = document.querySelector('.name-tag');
const menuHeader = document.querySelector('.menu-header');
const tooltip = document.getElementById('custom-tooltip');

menuHeader.style.position = 'relative';

let tooltipTimeout;

nameTag.addEventListener('mouseenter', () => {
    clearTimeout(tooltipTimeout);
    tooltip.classList.remove('exit');
    tooltip.classList.add('enter');
});

nameTag.addEventListener('mousemove', (e) => {
    const rect = menuHeader.getBoundingClientRect();
    tooltip.style.left = (e.clientX - rect.left) + 'px';
    tooltip.style.top = (e.clientY - rect.top + 24) + 'px';
});

menuHeader.addEventListener('mouseleave', () => {
    tooltip.classList.remove('enter');
    tooltip.classList.add('exit');
    // Optionally, after animation, hide completely
    tooltipTimeout = setTimeout(() => {
        tooltip.classList.remove('exit');
    }, 300); // Match transition duration
});