//selectors 
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-button');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter-todo');

//event listener 
document.addEventListener('DOMContentLoaded', todos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
//function


function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //to do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('to-do');
    //create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('to-do-item');
    newTodo.innerText=todoInput.value;
    todoDiv.appendChild(newTodo);
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    //complete and delete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append to list 
    todoList.appendChild(todoDiv);
    todoInput.value='';
};

function deleteCheck(e) {
    e.stopPropagation();
    const item = e.target ;
    if (item.classList[0] === 'delete-btn') {
        const tododel = item.parentElement ;
        tododel.classList.toggle('delanim');
        removeLocalStorage(tododel);
        console.log(tododel.childNodes);
        tododel.addEventListener('transitionend', function(){
            tododel.remove();
        });
    };
    if (item.classList[0] === 'completed-btn') {
        const todoDone = item.parentElement ;
        todoDone.classList.toggle('completed') ;
    };
    
};

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all': 
            todo.style.display = 'flex';
            break;
            case 'completed':
            if (todo.classList.contains('completed')){
                todo.style.display = 'flex';
            } else {
                todo.style.display = 'none';
            };
            break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                };
                break;
        }
    }); 
};

function saveLocalTodos(todo){
    //checking is there any info
    let todos; 
    if(localStorage.getItem('todos')===null){
        todos=[]; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


//getting todos

function todos(){
    let todos;

    if(localStorage.getItem('todos')===null){
        todos=[]; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
//prevent form from submitting
    //to do div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('to-do');
    //create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('to-do-item');
    newTodo.innerText=todo;
    todoDiv.appendChild(newTodo);
    //complete and delete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    //append to list 
    todoList.appendChild(todoDiv);
    })
};


function removeLocalStorage(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[]; 
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todo.children[0].innerText;
    console.log(todo.children[0]);
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos', JSON.stringify(todos));
}