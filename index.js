/*

1. Зробити інпут для вводу тексту
2. Зробити кнопку, яка по натисненню текст з інпута перетворює на елемент списку.

<input type="text" />
<button>Click to add</buton>
<ul>
    <li>Зробити щось одне</li> <-- ось тут кнопка самознищення елементу списку
    <li>Зробити щось інше</li>
</ul>

Задачка з *:
до кожного li приєднати кнопку, за допомогою якої елемент зі списку можна видалити.

Задачка з **:
до кожного li доєднати другу кнопку, за натиснення якої можна відредагувати текст li
Створювати новий input поряд з li, кнопка яка була для зміни 




<li> Some text <button>Change text</button><button>X</button>
---> якщо натиснути на change text -->
<li> Some text <input type="text"><button>Save</button></li>
*/



const root = document.getElementById('root');
const form = document.getElementById('form');

const state = [];

form.addEventListener('submit', addItem);

function addItem(event){
    event.preventDefault();
    const {target: {textInput: {value}}} = event;
    state.push(value);
    addOneLi(value);
}

function addOneLi(value) {
    const li = createItem(value);
    root.append(li);
}

function updateView() {
    const liArray = state.map(item => createItem(item));
    root.append(...liArray);
}


function createItem(value) {
    const li = document.createElement('li');
    li.append(value);
    li.classList.add('item');
    return li;
}