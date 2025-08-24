const versionInfoEl = document.getElementById('version-info')
const todoListEl = document.getElementById('todo-list')

versionInfoEl.innerText = `This app is using Chrome v${versions.chrome()}, Node v${versions.node()} and Electron v${versions.electron()}.`

window.todo.todos().then(todos => {
    for ( const todo of todos ) {
        const newTodoEl = document.createElement('li')
        newTodoEl.innerText = todo.text
        todoListEl.appendChild(newTodoEl)
    }
})