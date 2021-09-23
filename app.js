/* selectors */

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
/* event listners */

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', DeleteCheck);
filterOption.addEventListener('click', filterTodo);

/* functions */
function addTodo(event){
    /* prevent form from submit*/
    event.preventDefault();
  
    /* Todo Div */
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
  
    /* Create LI */
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
  
    /* check marked button */
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check-circle"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    /* check trash button */
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    /* appned to list */
    todoList.appendChild(todoDiv);
    /* clear input value */
    todoInput.value = " ";
}   

function DeleteCheck(e) {
    const item = e.target;
    
    /* Delete ToDo */
    if(item.classList[0] == 'trash-btn'){
        
        const todo = item.parentElement;
       /* animation */
       todo.classList.add('fall')
       todo.addEventListener('transitionend',function(){
        todo.remove();
       })
        

    }
    /* check mark */
    if(item.classList[0] == 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                console.log("all");
                break;
            case "uncompleted":
                if(todo.classList.contains("Uncompleted")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }   
        }    
    });  
}

  