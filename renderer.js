const versionInfoEl = document.getElementById('version-info')
const todoListEl = document.getElementById('todo-list')
const addBtn = document.getElementById('add-btn')
const removeBtn = document.getElementById('remove-btn')

function renderTodos() {
    todoListEl.innerHTML = ''
    window.todo.todos().then(todos => {
        for ( const todo of todos ) {
            const newTodoEl = document.createElement('li')
            newTodoEl.innerText = todo.text
            todoListEl.appendChild(newTodoEl)
        }
    })    
}

addBtn.onclick = async function addTodo() {
    const len = await window.todo.todos().then(res => res.length)
    const newTodo = { text: `TODO ${len+1}` }
    await window.todo.add(newTodo)
    renderTodos()
}

removeBtn.onclick = async function removeTodo() {
    await window.todo.remove()
    renderTodos()
}

versionInfoEl.innerText = `This app is using Chrome v${versions.chrome()}, Node v${versions.node()} and Electron v${versions.electron()}.`

renderTodos()
