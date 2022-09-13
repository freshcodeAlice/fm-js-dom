const btn = document.querySelector('#btnbtn');
console.log(btn);

const paragraphCollection = document.querySelectorAll('.paragraph:nth-child(even)');
console.log(paragraphCollection);

for (const par of paragraphCollection) {
    par.style.color = 'red';
}