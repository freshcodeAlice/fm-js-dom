/*
1. Маємо число
2. Маємо дві кнопки: +, -
3. За натиснення "+" число збільшується на 1
4. За натиснення "-" число зменьшується на 1

*/
let num = 0;

const div = document.querySelector('#number');
const [prev, next] = document.querySelectorAll('.btn');
console.dir(div);


function updateDiv() {
    div.innerHTML = num;
}

prev.addEventListener('click', () => {
    num--;
    updateDiv();
});

next.addEventListener('click', () => {
    num++;
    updateDiv();
})