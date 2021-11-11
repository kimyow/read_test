
const WEATHER_API_KEY = '9b7d2ca49f801034fc2363ab207244fa'

function onSuccess(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log(`lat=${lat}, lon=${lon}`)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const name = document.querySelector("#weather span:first-child")
            name.innerText = data.name
            const weather = document.querySelector("#weather span:last-child")
            weather.innerText = data.weather[0].main

        })
        .catch((error) => console.log("error", error))

}

function onError(error) {
    console.log(error)
}

navigator.geolocation.getCurrentPosition(onSuccess, onError)
