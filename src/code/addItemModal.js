const addItemModal = function() {
    const addBtn = document.querySelector("#add-btn");
    const closeBtn = document.querySelector("#close-btn")
    const dialog = document.querySelector(".addtodo-dialog");
    const main = document.querySelector("body");
    addBtn.addEventListener("click", () => {
        dialog.showModal();
        main.style.filter = "blur(5px)";
        main.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    });
    closeBtn.addEventListener("click", () => {
        dialog.close();
        main.style.filter = "none";
        main.style.backgroundColor = ""; 
    });
};

export default addItemModal;