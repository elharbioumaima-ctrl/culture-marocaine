// MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Sélection du bouton et du body
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Vérifie si l'utilisateur avait déjà choisi le mode sombre
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
}

// Quand on clique sur le bouton
darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Sauvegarde le choix dans le localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

