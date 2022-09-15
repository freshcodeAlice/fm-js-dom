const root = document.querySelector('#root');

const cardArray = data.map((user)=>createCard(user));

function createCard(user) {
    /* TODO:
    1. Refactor to short code
    2. Create image placeholder: first letter of name + random background-color
    3. When image is loading, show placeholder, than change placeholder to img
    */
    const article = document.createElement('article');
    article.classList.add('card-wrapper');

    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card-image');

    const h2 = document.createElement('h2');
    h2.append(user.name);
    h2.classList.add('username');

    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    article.append(img, h2, p);

    return article;
}


root.append(...cardArray);