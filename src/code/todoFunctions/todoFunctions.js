const todoFunctions = function() {
    let todos = [
        { id: 1, title: 'cook', details: 'cook dinner for fam', priority: 'medium', isCompleted: true },
        { id: 2, title: 'fight', details: 'kill hassan', priority: 'high', isCompleted: false },
        { id: 3, title: 'comeback', details: 'make a comeback', priority: 'high', isCompleted: false},
    ];

    const createCheckboxDiv = (todoTitle, isCompleted, id) => {
        const labelInput = document.createElement("input");
        labelInput.setAttribute("type", "checkbox");

        labelInput.checked = isCompleted;

        const labelSpan = document.createElement("span");
        labelSpan.classList.add("checkmark");

        const checkboxLabel = document.createElement("label");
        checkboxLabel.classList.add("custom-checkbox");
        checkboxLabel.appendChild(labelInput);
        checkboxLabel.appendChild(labelSpan);

        const checkboxText = document.createElement("p");
        checkboxText.textContent = todoTitle;

        if (isCompleted) {
            checkboxText.style.textDecoration = "line-through";
            checkboxText.style.opacity = "0.5";
        }

        const checkboxDiv = document.createElement("div");
        checkboxDiv.appendChild(checkboxLabel);
        checkboxDiv.appendChild(checkboxText);

        labelInput.addEventListener("change", () => {
            todos.forEach(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
            });
            loadTodos();
        })

        return checkboxDiv;
    };

    const createEditDiv = (date, id) => {
        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "DETAILS";

        const dateText = document.createElement("p");
        dateText.classList.add("date");
        dateText.textContent = "Jan 19th";

        const editButton = document.createElement("button");
        editButton.classList.add("icon");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square fa-lg"></i>`;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("icon");
        deleteButton.innerHTML = `<i class="fa-solid fa-trash fa-lg"></i>`;
        deleteButton.addEventListener("click", () => {
            todos = todos.filter(todo => todo.id != id);
            loadTodos();
        });

        const editDiv = document.createElement("div");
        editDiv.appendChild(detailsBtn);
        editDiv.appendChild(dateText);
        editDiv.appendChild(editButton);
        editDiv.appendChild(deleteButton);
        return editDiv;
    };

    const createTodoItemDom = ({ id, title, details, priority, isCompleted }) => {
        const todoItemBox = document.createElement("div");
        todoItemBox.classList.add("todo-item-box");
        todoItemBox.appendChild(createCheckboxDiv(title, isCompleted, id));
        todoItemBox.appendChild(createEditDiv("", id));

        return todoItemBox;
    };

    const loadTodos = () => {
        document.querySelector("main").innerHTML = "";
        todos.forEach((todo) => {
            document.querySelector("main").appendChild(createTodoItemDom(todo));
        });
    };

    const addTodo = (id, title, details, priority, isCompleted) => {
        todos.push({ id, title, details, priority, isCompleted});
        loadTodos();
    };

    return { loadTodos, addTodo };
} ();

export default todoFunctions;