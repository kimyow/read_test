
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input:first-child")
const greeting = document.querySelector("#greeting")

const CLASS_NAME_HIDDEN = "hidden"
const USER_NAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault()
    loginForm.classList.add(CLASS_NAME_HIDDEN)
    const userName = loginInput.value
    localStorage.setItem(USER_NAME_KEY, userName)
    paintGreetings(userName)
}

function paintGreetings(userName) {
    greeting.innerText = `Hello ${userName}`
    greeting.classList.remove(CLASS_NAME_HIDDEN)
}

const savedUserName = localStorage.getItem(USER_NAME_KEY)

if (savedUserName === null) {
    loginForm.classList.remove(CLASS_NAME_HIDDEN)
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUserName)
}