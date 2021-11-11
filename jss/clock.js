
const clock = document.querySelector("h2#clock")

function displayTime() {
    const hour = String(new Date().getHours()).padStart(2, "0")
    const min = String(new Date().getMinutes()).padStart(2, "0")
    const seconds = String(new Date().getSeconds()).padStart(2, "0")
    clock.innerText=`${hour}:${min}:${seconds}`
}

displayTime()
setInterval(displayTime, 1000)