import { convertWind } from "../functions/maths/convertWind.js";
import { convertCountryCode } from "../functions/texts/convertCountryCode.js";
import { convertTimeStamp } from "../functions/texts/convertTimeStamp.js";
import {config} from '../config/config.js';

let currentCity = 'Sumaré';
let units = 'metric';

let city = document.querySelector('.weather__city');
let datetime = document.querySelector('.weather__datetime');
let weather__forecast = document.querySelector('.weather__forecast');
let weather__temperature = document.querySelector('.weather__temperature');
let weather__icon = document.querySelector('.weather__icon');
let weather__minmax = document.querySelector('.weather__minmax');
let weather__realfeel = document.querySelector('.weather__realfeel');
let weather__humidity = document.querySelector('.weather__humidity');
let weather__wind = document.querySelector('.weather__wind');
let weather__pressure = document.querySelector('.weather__pressure');

// Evento da barra de pesquisa
document.querySelector('.weather__search').addEventListener('submit', (event) => {
    let search = document.querySelector('.weather__searchform'); // Seleciona o campo de input onde o usuário digita o nome da cidade

    event.preventDefault(); // Impede a ação padrão do formulário (que seria recarregar a página ao ser submetido)
    currentCity = search.value; // Atualiza a variável global 'currentCity' com o valor que o usuário digitou no campo de pesquisa
    getWeather(); // Chama a função getWeather() para busca a previsão do tempo para a cidade atual
    search.value = ''; // limpa a barra de pesquisa
});

function getWeather() {
    const API_KEY = config.apiKeyWeather;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}&units=${units}&lang=pt_br`
    )
        .then((res) => res.json())
        .then((data) => {
            //console.log(data);
            city.innerHTML = `${data.name}, ${convertCountryCode(data.sys.country)}`;
            datetime.innerHTML = convertTimeStamp(data.dt, data.timezone);
            weather__forecast.innerHTML = `<p>${data.weather[0].description}`;
            weather__temperature.innerHTML = `${data.main.temp.toFixed()}&#176`;
            weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" />`;
            weather__minmax.innerHTML = `<p>Min: ${data.main.temp_min.toFixed()}&#176</p><p>Max: ${data.main.temp_max.toFixed()}&#176</p>`;
            weather__realfeel.innerHTML = `${data.main.feels_like.toFixed()}&#176`;
            weather__humidity.innerHTML = `${data.main.humidity}%`;
            weather__wind.innerHTML = `${convertWind(data.wind.speed)} Km/h`;
            weather__pressure.innerHTML = `${data.main.pressure} hPa`;
        });
}

document.addEventListener('DOMContentLoaded', getWeather());
