/*
1. В html створити квадрат 50х50
2. за натиснення під ним створити інпут для вводу тексту
3. За ентером інпут зникає, а в квадраті відображається те, що було введено в інпут
*/


const box = document.querySelector('#box');

box.addEventListener('click', boxClickHandler)


function boxClickHandler(event) {
    const input = document.createElement('input');
    input.addEventListener('keydown', inputKeyHandler);
    const parent = event.target.parentNode;
    parent.append(input);
}

function inputKeyHandler (event) {
    if(event.keyCode === 13) {
        const {target, target: {value, previousElementSibling}} = event;
        // 2. Передали дані сусідньому елементу (боксу)
        previousElementSibling.textContent = value;
        //1. Знищили сам інпут
        target.remove();
    }
};