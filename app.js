const form = document.querySelector("form");
const container = document.querySelector('.todo-container');
const ul = document.createElement('ul');
var index = 0;
const list_container = []

ul.classList.add = "todo-list";

// To display todo list 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const display_input = document.querySelector('.todo-input').value;

    if (display_input) {
        container.append(ul);
        const li = document.createElement('li')
        const todo_box = `
        <span class="display"> ${display_input} </span>
        <span>
            <i class="fa-solid fa-check-circle fa-2x check"></i>
            <i class="fa-solid fa-trash fa-2x trash"></i>
        </span>`

        li.innerHTML = todo_box;
        ul.appendChild(li);
        document.querySelector('.todo-input').value = "";
        list_container[index++] = li;

        // To Check todo list
        const check = li.querySelector('.check');
        const display = li.querySelector('.display');
        const trash = li.querySelector('.trash');

        var flag = true;
        check.addEventListener('click', () => {
            display.classList.toggle("line_check");

            if (flag) {
                trash.style.display = 'block';
                flag = false;
            }
            else {
                trash.style.display = 'none';
                flag = true;
            }
        })

        // To Delete todo list
        trash.addEventListener('click', () => {
            console.log("hello")
            display.parentElement.remove();
            if (ul.innerHTML === "") {
                ul.remove();
            }
        })

    }
});
