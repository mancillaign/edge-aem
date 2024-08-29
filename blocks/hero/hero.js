document.addEventListener('DOMContentLoaded', function () {
    const heroBlock = document.querySelector('.hero.block');
    heroBlock.classList.add('loaded');
    
    heroBlock.querySelector('h1').style.opacity = '1';
    heroBlock.querySelector('h1').style.transform = 'translate(-50%, -50%) scale(1)';
});
