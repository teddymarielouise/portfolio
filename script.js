// Système de filtrage
function filterSelection(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Gérer les boutons actifs
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(category) || 
           (category === 'all' && btn.innerText === 'Tous')) {
            btn.classList.add('active');
        }
    });

    // Filtrer les cartes
    cards.forEach(card => {
        card.style.display = "none";
        if (category === 'all') {
            card.style.display = "block";
        } else if (card.classList.contains(category)) {
            card.style.display = "block";
        }
    });
}

// Menu mobile
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fcfaf5';
        navLinks.style.padding = '20px';
    });
}