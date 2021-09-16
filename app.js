/* selectors */

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

/* event listners */

todoButton.addEventListener('click', addTodo);

/* functions */
function addTodo(event){
    /* prevent form from submit*/
    event.preventDefault();
   /* Todo Div */
    const todoDiv = document.createElement('div');
    /* Create LI */
    const newTodo = document.createElement('li');
    newTodo.innerHTML = "hi there";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    /* check marked button */
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "del";
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    /* check trash button */
    const teadhButton = document.createElement('button');
    teadhButton.innerHTML = "trash";
    teadhButton.classList.add('complete-btn');
    todoDiv.appendChild(teadhButton);

    /* appned to list */
    todoList.appendChild(todoDiv);
}   