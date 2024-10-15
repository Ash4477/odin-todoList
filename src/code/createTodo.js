import "./createTodo.css";

const createTodo = function() {

    const createDueDateBox = () => {
        const container = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");

        label.textContent = "Due Date:";
        label.setAttribute("for", "due-date-input");

        input.id = "due-date-input";
        input.setAttribute("type", "date");
        input.setAttribute("placeholder", "DD/MM/YYYY");

        container.appendChild(label);
        container.appendChild(input);

        return container;
    };

    const createPriorityOptions = () => {
        const label = document.createElement("label");
        label.textContent = "Priority:";
        const options = [document.createElement("button"), document.createElement("button"), document.createElement("button")];
        options[0].textContent = "LOW";
        options[0].classList.add("low-p");
        options[1].textContent = "MEDIUM";
        options[1].classList.add("med-p");
        options[2].textContent = "HIGH";
        options[2].classList.add("high-p");

        const priorityBox = document.createElement("div");
        priorityBox.classList.add("priority-box");
        priorityBox.appendChild(label);
        options.forEach(option => priorityBox.appendChild(option));
        return priorityBox;  
    };

    const createAddBtn = (text) => {
        const button = document.createElement("button");
        button.textContent = text;
        button.classList.add("create-button");
        return button;
    };

    const createInputBox = (title, details, type) => {
        const titleInput = document.createElement("input");
        titleInput.setAttribute("placeholder", `Title: ${title}`);

        const inputBox = document.createElement("div");
        inputBox.classList.add("input-box");
        inputBox.appendChild(titleInput);

        if (type === 1) {
            const detailsInput = document.createElement("textarea");
            detailsInput.setAttribute("placeholder", `Details: ${details}`);
            detailsInput.setAttribute("rows", "8");
            inputBox.appendChild(detailsInput);
        }

        return inputBox;
    };
    
    const createTodoDom = () => {
        const alignBox = document.createElement("div");
        alignBox.classList.add("align-box");
        alignBox.appendChild(createPriorityOptions());
        alignBox.appendChild(createAddBtn("ADD TO DO"));

        const buttonsBox = document.createElement("div");
        buttonsBox.classList.add("buttons-box");
        buttonsBox.appendChild(createDueDateBox());
        buttonsBox.appendChild(alignBox);

        const todoBox = document.createElement("div");
        todoBox.appendChild(createInputBox("Pay bills", "e.g internet, phone, rent", 1));
        todoBox.appendChild(buttonsBox);
        return todoBox;
    };

    const createProjectDom = () => {
        const projectBox = document.createElement("div");
        projectBox.appendChild(createInputBox("House Renovation", "", 2));
        projectBox.appendChild(createAddBtn("CREATE PROJECT"));
        return projectBox;
    };

    const createNoteDom = () => {
        const noteBox = document.createElement("div");
        noteBox.appendChild(createInputBox("Grocery Items", "e.g apple, bread", 1));
        noteBox.appendChild(createAddBtn("CREATE NOTE"));
        return noteBox;
    };

    return { createTodoDom, createProjectDom, createNoteDom };
}();

export default createTodo;