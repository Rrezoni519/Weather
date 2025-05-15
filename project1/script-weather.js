const apiKey = "c5563bf95d8722aab903069554d09619"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      resultDiv.innerHTML = "City not found.";
      return;
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <strong>${data.name}</strong><br>
      Temp: ${data.main.temp}°C<br>
      Weather: ${data.weather[0].description}<br>
      Humidity: ${data.main.humidity}%<br>
      Wind: ${data.wind.speed} m/s
    `;
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather data.";
  }

console.log(`Fetching: ${city}`);
console.log(`URL: https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);


    }