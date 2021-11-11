
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("ul#todo_list")

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value=""
    paintTodo(newTodo)
}

function paintTodo(todo) {
    const item = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    item.appendChild(span)
    item.appendChild(button)
    button.innerText="X"
    span.innerText = todo
    todoList.append(item)
}

todoForm.addEventListener("submit", handleTodoSubmit)

console.log('test')
