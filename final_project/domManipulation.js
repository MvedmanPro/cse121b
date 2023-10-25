//Final_project
import { weatherData, getWeatherData } from '/cse121b/final_project/fetchData.js';

let now = new Date();
let dateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

// Function to display weather data
export function displayWeatherData() {
    const weatherDiv = document.getElementById('weather');
    if (weatherDiv) { // Check if the element exists
        weatherDiv.innerHTML = ''; // Clear the div

        // Use of template literals and array method (forEach)
        weatherData.forEach(data => {
            const weatherInfo = `
                <h2>Weather in ${data.name}</h2>
                <p>Right now: ${dateTime}</p> 
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(1)}°C</p>
                <p>Feels Like: ${(data.main.feels_like - 273.15).toFixed(1)}°C</p>
                <p>Highest Temperature: ${(data.main.temp_max - 273.15).toFixed(1)}°C</p>
                <p>Lowest Temperature: ${(data.main.temp_min - 273.15).toFixed(1)}°C</p>
                <p>Wind: ${(data.wind.speed)}</p>`;
            weatherDiv.innerHTML += weatherInfo;
        });
    }
}

// Event listener for the form submission
document.getElementById('weather-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeatherData(city).then(() => displayWeatherData());
});