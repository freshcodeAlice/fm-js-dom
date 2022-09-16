const root = document.querySelector('#root');

const cardArray = data.map((user)=>createCard(user));

function createCard(user) {
    /* TODO:
    +1. Refactor to short code
    2. Create image placeholder: first letter of name + random background-color
    3. When image is loading, show placeholder, than change placeholder to img
    */

    const imageWrapper = createImageWrapper(user);

    const h2 = createElement('h2', {classNames: ['username']}, user.name);
    const p = createElement('p', {classNames: ['desciption', 'super-pagraph']}, user.description);

    return createElement('article', {classNames: ['card-wrapper']}, imageWrapper, h2, p);
}

/**
 * 
 * @param {String} type - тип елемента, що треба створити
 * @param {Object} options 
 * @param {String[]} options.classNames - список классів
 * @param {Node} children - список дочірніх вузлів
 */

function createElement(type, {classNames}, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function createImageWrapper(user) {
    const imgWrapper = createElement('div', {classNames: ['image-wrapper']});
    imgWrapper.setAttribute('id', `wrapper${user.id}`);
    const img = createUserImage(user);
    return imgWrapper;
}



function createUserImage(user) {
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.dataset.id = user.id; //data-id
    img.classList.add('card-image');

    img.addEventListener('error', imageErrorHandler);
    img.addEventListener('load', imageLoadHandler);
    return img;

}


function imageLoadHandler({target}) {
    console.log('image successfully loaded');
    const parentWrapper = document.getElementById(`wrapper${target.dataset.id}`);
   parentWrapper.append(target);
}

function imageErrorHandler({target}) {
    target.remove();
    console.log('image loading has error');
}



root.append(...cardArray);