// script.js

let bee = document.getElementById('bee');
let plants = document.querySelectorAll('.plant');
let scoreElement = document.getElementById('score');
let pollenCollected = 0;

document.addEventListener('keydown', moveBee);

function moveBee(event) {
    let beeRect = bee.getBoundingClientRect();
    let gameAreaRect = document.getElementById('gameArea').getBoundingClientRect();

    switch(event.key) {
        case 'ArrowUp':
            if (beeRect.top > gameAreaRect.top) {
                bee.style.top = bee.offsetTop - 10 + 'px';
            }
            break;
        case 'ArrowDown':
            if (beeRect.bottom < gameAreaRect.bottom) {
                bee.style.top = bee.offsetTop + 10 + 'px';
            }
            break;
        case 'ArrowLeft':
            if (beeRect.left > gameAreaRect.left) {
                bee.style.left = bee.offsetLeft - 10 + 'px';
            }
            break;
        case 'ArrowRight':
            if (beeRect.right < gameAreaRect.right) {
                bee.style.left = bee.offsetLeft + 10 + 'px';
            }
            break;
    }
    
    collectPollen();
}

function collectPollen() {
    let beeRect = bee.getBoundingClientRect();

    plants.forEach(plant => {
        let plantRect = plant.getBoundingClientRect();

        if (beeRect.left < plantRect.right && beeRect.right > plantRect.left &&
            beeRect.top < plantRect.bottom && beeRect.bottom > plantRect.top) {
            
            plant.style.backgroundColor = 'brown';
            pollenCollected++;
            updateScore();
            
            // Move the plant to a new random position
            plant.style.top = Math.random() * (gameAreaRect.height - 50) + 'px';
            plant.style.left = Math.random() * (gameAreaRect.width - 50) + 'px';
        }
    });
}

function updateScore() {
    scoreElement.innerText = `Pollen collected: ${pollenCollected}`;
}
