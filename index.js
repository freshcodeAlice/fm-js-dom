const collection = document.getElementsByClassName('paragraph');
// console.log(collection);

const btns = document.getElementsByTagName('button');
console.log(btns);



function hello() {
    console.log('Hello, user');
}

for (const btn of btns) {
    btn.addEventListener('click', hello);
}