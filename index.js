const button = document.querySelector('#btn');

setTimeout(() => {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    addListener(div);
}, 2000);

function addListener(elem) {
    elem.addEventListener('click', ()=>{
        console.log('You are clicked on me!');
    })
}