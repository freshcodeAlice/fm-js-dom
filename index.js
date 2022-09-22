/*
Задача: зробити погодний віджет

Алгоритм вирішення:
+1. Зробити верстку елементів, які отримують від користувача дані про місто
+2. Отримати дані і обробити їх (підготувати до запиту на сервер)
+3. Зробити на сервер і прийняти відповідь
4. Обробити дані відповіді та відобразити їх користувачу.



https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

*/


const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('.btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({target}) {
    const selectValue = target.previousElementSibling.value;
    requestAPI(selectValue);
}


function requestAPI(city) {
    // готуємо URL
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data)=> {
            displayWeather(data)
        })
}


/*

        <article class="weather">
            <p>City:</p>
            <p>Temperature: </p>
            <p>Pressure: </p>
            <p>Weather description:</p>
            <p>Wind:</p>
        </article>

*/

function displayWeather(weatherData) {
        const {name, main: {temp, pressure}, weather: {description}} = weatherData;
        const article = document.createElement('article');
        const city = document.createElement('p');
        city.append('City:', name);
        const temperature = document.createElement('p');
        temperature.append('Temperature:', temp);
        const press = document.createElement('p');
        press.append('Pressure:', pressure);
        const descr = document.createElement('p');
        descr.append('Weather description:', description);
        article.append(city, temperature, press, descr);

        const section = document.querySelector('.wrapper');
        section.append(article);

}