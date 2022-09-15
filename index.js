/*
Переробити гру навпаки: відслідковувати натиснення на box, якщо мишею попали - збільшити лічильник поряд з ігровим полем. Якщо не попали, нічого не змінювати, а box отримує нові рандомні координати

Math.floor(Math.random() * (parent.offsetWidth - 0)) + min - координата по горизонтали + 'px';
 - координата по горизонтали + 'px';
*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');
const divCounter = document.querySelector('#counter');
let counter = 0;

field.addEventListener('click', clickHandler);


function clickHandler(event) {
    const {currentTarget, target, currentTarget:{children: {box}}} = event;
    if(currentTarget !== target) {
      updateCounter();
    }

    box.style.top = `${randomCoordinates(currentTarget.offsetHeight)}px`;
    box.style.left = `${randomCoordinates(currentTarget.offsetWidth)}px`;
}

function updateCounter() {
    divCounter.textContent = ++counter;
}


function randomCoordinates(max) {
    return Math.floor(Math.random() * max);
}