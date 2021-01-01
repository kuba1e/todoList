 const button = document.querySelector('.but');
const parent = document.querySelector('body');
const counter = document.querySelector('.counter b');
const parentChildren = parent.children;
const nameInput = document.querySelector('.name-input');


button.addEventListener('click', function(e){
    e.preventDefault();
    //create a new element
    const newElement = document.createElement('div');
    // asign class to element
    newElement.classList.add('block');
    //assign text to element
    newElement.innerText=nameInput.value;
    //put element into parent
    parent.appendChild(newElement);
    counter.innerText = parentChildren.length;
    newElement.addEventListener('click', deleteItem)
    //delete the value from input
    nameInput.value = "";
    console.log(nameInput.value);
});

//for (it of parentChildren) {it.addEventListener('click', deleteItem)};

function deleteItem(e){
    e.target.remove();
    e.stopPropagation();
};

counter.addEventListener('click', function(){
    console.log("wohoo!");
    counter.classList.toggle('hide')
});



let stor = ['hey','hop','hey'];

localStorage.setItem('hop', JSON.stringify(stor));
sessionStorage.setItem('jacob', 'petryk');

let show = JSON.parse(localStorage.getItem('hop'));

console.log(show);

