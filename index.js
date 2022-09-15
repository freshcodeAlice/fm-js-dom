/*
Дан section, на якій треба клацати мишею
Дан div, який має переміститись на точку, в яку клацнули мишею.


*/

const field = document.querySelector('#game-field');
const box = document.querySelector('#box');

field.addEventListener('click', clickHandler, {capture: true});


function clickHandler(event) {
    event.stopPropagation();
    if(event.currentTarget === event.target) {
        const {target:{children: {box}}, clientX, clientY } = event;
        box.style.top = `${clientY - (box.offsetHeight / 2)}px`;
        box.style.left = `${clientX - (box.offsetWidth / 2)}px`;
    }
}