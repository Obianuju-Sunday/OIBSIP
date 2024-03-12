window.addEventListener('load', () => {
    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const list_el = document.getElementById('tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        if (!task) {
            alert('Please write your todo!');
        } else {


            const task_el = document.createElement('div');
            task_el.classList.add('task');

            const task_content_el = document.createElement('div');
            task_content_el.classList.add('content');

            task_el.appendChild(task_content_el)

            const task_input_el = document.createElement('input');
            task_input_el.classList.add('text');
            task_input_el.type = 'text';
            task_input_el.value = task;
            task_input_el.setAttribute('readonly', 'readonly')

            task_content_el.appendChild(task_input_el);

            const task_actions_el = document.createElement('div');
            task_actions_el.classList.add('actions');

            const task_edit_el = document.createElement('button');
            task_edit_el.classList.add('edit', 'task-button');
            task_edit_el.innerHTML = `<i class="fa fa-pencil-square" aria-hidden="true"></i>`
            task_el.appendChild(task_edit_el);


            const task_delete_el = document.createElement('button');
            task_delete_el.classList.add('delete');
            task_delete_el.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
            task_el.appendChild(task_delete_el);

            list_el.appendChild(task_el)


            input.value = '';

            const task_complete_el = document.createElement('button');
            task_complete_el.classList.add('task-button');
            task_complete_el.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
            task_el.appendChild(task_complete_el);

            task_edit_el.addEventListener('click', () => {
                if (task_edit_el.innerHTML == `<i class="fa fa-pencil-square" aria-hidden="true"></i>`) {
                    task_input_el.removeAttribute('readonly')
                    task_input_el.focus();
                    task_edit_el.innerText = 'Save'
                } else {
                    task_input_el.setAttribute('readonly', 'readonly');
                    task_edit_el.innerHTML = `<i class="fa fa-pencil-square" aria-hidden="true"></i>`
                }
            })

            task_delete_el.addEventListener('click', () => {
                if (task_delete_el.innerHTML == `<i class="fa fa-trash" aria-hidden="true"></i>`) {
                    list_el.removeChild(task_el)
                }
            })


            task_complete_el.addEventListener('click', () => {
                if (task_complete_el.innerHTML == `<i class="fa fa-check" aria-hidden="true"></i>`) {
                    list_el.removeChild(task_el);

                    task_el.classList.add('completed-task');
                    task_input_el.setAttribute('readonly', 'readonly');
                    task_el.removeChild(task_edit_el);
                    task_el.removeChild(task_complete_el);

                    task_delete_el.addEventListener('click', () => {
                        document.getElementById('completed-tasks').removeChild(task_el);
                    });

                    document.getElementById('completed-tasks').appendChild(task_el);

                }
            })
        }

    })

    
})