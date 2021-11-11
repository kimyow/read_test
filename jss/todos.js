
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("ul#todo_list")

const KEY_NAME_TODOS = "todos"

let todoItemList = []

function handleTodoSubmit(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value=""
    const todoItem = {
        "todo": newTodo,
        "id": Date.now()
    }
    todoItemList.push(todoItem)
    localStorage.setItem(KEY_NAME_TODOS, JSON.stringify(todoItemList))
    paintTodo(todoItem)
}

function handleDeleteButton(event) {
    console.dir(event)
    event.target.parentElement.remove()
    todoItemList = todoItemList.filter(todo => todo.id !== parseInt(event.target.parentElement.id))
    localStorage.setItem(KEY_NAME_TODOS, JSON.stringify(todoItemList))
}

function paintTodo(todoItem) {
    const item = document.createElement("li")
    const span = document.createElement("span")
    const button = document.createElement("button")
    item.appendChild(span)
    item.appendChild(button)
    button.innerText="X"
    span.innerText = todoItem.todo
    item.id = todoItem.id
    todoList.append(item)
    button.addEventListener("click", handleDeleteButton)
}

todoForm.addEventListener("submit", handleTodoSubmit)

savedTodoList = localStorage.getItem(KEY_NAME_TODOS)

if (savedTodoList !== null) {
    todoItemList = JSON.parse(savedTodoList)
    todoItemList.forEach(paintTodo)
}


