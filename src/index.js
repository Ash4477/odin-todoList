import "./styles.css";
import "./custom-checbox.css";
import addItemModal from "./code/addItemModal";
import createTodo from "./code/createTodo";

const start = function() {
    document.querySelector(".addtodo-create").appendChild(createTodo.createNoteDom());
    addItemModal();
} ();
