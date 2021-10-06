//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');



//Event Listeners
todoButton.addEventListener("click", addTodo);



//Functions
function addTodo(event) {
    //Prevent form from submitting 
    event.preventDefault();
    

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); 
    //Check Mark
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);


    //Append to list
    todoList.appendChild(todoDiv); 

}