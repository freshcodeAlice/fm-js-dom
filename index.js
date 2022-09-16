const root = document.querySelector('#root');

const cardArray = data.map((user)=>createCard(user));

function createCard(user) {
    /* TODO:
    1. Refactor to short code
    2. Create image placeholder: first letter of name + random background-color
    3. When image is loading, show placeholder, than change placeholder to img
    */
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    const h2 = createElement('h2', {classNames: ['username']}, user.name);
    const p = createElement('p', {classNames: ['desciption', 'super-pagraph']}, user.description);

    return createElement('article', {classNames: ['card-wrapper']}, img, h2, p);
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



root.append(...cardArray);