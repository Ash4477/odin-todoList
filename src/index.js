import "./styles.css";
import "./custom-checbox.css";
import addItemModal from "./code/addItemModal";
import createTodo from "./code/createTodo/createTodo";
import todoFunctions from "./code/todoFunctions/todoFunctions";

const start = function() {
    document.querySelector(".addtodo-create").appendChild(createTodo.createNoteDom());
    addItemModal();
    todoFunctions.loadTodos();
} ();
