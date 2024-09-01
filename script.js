document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const city = document.getElementById('city-input').value;
    const apiKey = 'af2012652ea62ca5046deec3bb0046a7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found');
        return;
    }

    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
}
