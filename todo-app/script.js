// // // const todoDescription = document.getElementById('todo-description');
// // // const addBtn = document.getElementById('add-btn');


// // // document.querySelector("#add-btn").addEventListener("click", function(){
// // //     if(todoDescription.value === ''){
// // //         document.querySelector("#add-btn").style.display = "none";
// // //     }
// // // })


// document.addEventListener('DOMContentLoaded', () => {
//     const addBtn = document.getElementById('add-btn');
//     const todoDescription = document.getElementById('todo-description');
//     const todoList = document.getElementById('todo-list');

//     addBtn.addEventListener('click', () => {


//         const description = todoDescription.value.trim();

//         if (description !== '') {

//             // Create a new todo item
//             const todoItem = document.createElement('div');
//             todoItem.textContent = description;
//             todoItem.classList.add('todo-item');

//             todoList.appendChild(todoItem);

//             todoDescription.value = '';
//         } else {
//             alert('Please enter a todo description.');
//         }
//     });
// });


