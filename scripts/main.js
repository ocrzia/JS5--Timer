const timerElement = document.querySelector('.timer');

let seconds = 0;

// Fonction pour mettre à jour le contenu de l'élément .timer
function updateTimer() {
    timerElement.textContent = `${seconds} secondes`;
    seconds++;
}


// Démarre le timer et met à jour toutes les secondes
setInterval(updateTimer, 1000);