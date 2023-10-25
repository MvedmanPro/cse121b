//Final_project
// Importing the fetch module

// Array to store fetched data
export let weatherData = [];

// Function to fetch weather data
export async function getWeatherData(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b409ee506ffe2f7f43e8a343d4018ab0`);
    const data = await response.json();
    console.log(data)
    weatherData.push(data);
}
