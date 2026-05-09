export function getElement(id) {
    return document.getElementById(id);
}

export function getItemList(item, className) {
    return item.querySelector(`.${className}`);
}

export function validateInput(value) {
    if (!value) return false;

    return true;
}

export function createItem(title, author) {
    let editMode = false;

    const li = document.createElement("li");
    li.classList.add("item");

    const bookContent = document.createElement("div");
    bookContent.classList.add("content");

    const authorContent = document.createElement("div");
    authorContent.classList.add("content")

    const labelBook = document.createElement("label");
    labelBook.innerHTML = "&#128214;";

    const labelAuthor = document.createElement("label");
    labelAuthor.innerHTML = "&#128100;";

    const spanBook = document.createElement("span");
    spanBook.classList.add("span", "span-book");
    spanBook.textContent = title;

    const spanAuthor = document.createElement("span");
    spanAuthor.classList.add("span", "span-author");
    spanAuthor.textContent = author;

    const inputBook = document.createElement("input");
    inputBook.type = "text";
    inputBook.classList.add("input", "input-book", "hidden");

    const inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.classList.add("input", "input-author", "hidden");

    const buttonEdit = document.createElement("button");
    buttonEdit.classList.add("button", "edit");
    buttonEdit.textContent = "Editar";

    const buttonCancel = document.createElement("button")
    buttonCancel.classList.add("button", "cancel", "hidden");
    buttonCancel.textContent = "Cancelar"

    buttonEdit.addEventListener("click", () => {
        if (!editMode) {
            inputBook.value = spanBook.textContent;
            inputAuthor.value = spanAuthor.textContent;

            buttonEdit.textContent = "Salvar"
            buttonEdit.classList.add("save");
            buttonCancel.classList.remove("hidden")

            editMode = true;
        } else {
            spanBook.textContent = inputBook.value;
            spanAuthor.textContent = inputAuthor.value;

            buttonEdit.textContent = "Editar";
            buttonEdit.classList.remove("save");
            buttonCancel.classList.add("hidden")

            editMode = false;
        }

        spanBook.classList.toggle("hidden");
        spanAuthor.classList.toggle("hidden");
        inputBook.classList.toggle("hidden");
        inputAuthor.classList.toggle("hidden");
    })

    buttonCancel.addEventListener("click", () => {

        spanBook.classList.remove("hidden");
        spanAuthor.classList.remove("hidden");
        inputBook.classList.add("hidden");
        inputAuthor.classList.add("hidden");

        buttonEdit.textContent = "Editar";
        buttonEdit.classList.remove("save");
        buttonCancel.classList.add("hidden");

        editMode = false;
    })

    bookContent.append(labelBook, spanBook, inputBook)
    authorContent.append(labelAuthor, spanAuthor, inputAuthor)

    li.append(bookContent, authorContent, buttonEdit, buttonCancel);

    return li;
}