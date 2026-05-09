import {getElement, validateInput, createItem, getItemList} from "./functions.js";

const formItem = getElement("formItem");
const list = getElement("list");
const empty = getElement("empty-state")

formItem.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const bookTitle = getElement("bookTitle").value;
    const authorName = getElement("authorName").value;

    if(!validateInput(bookTitle) || !validateInput(authorName)){
        alert("Preencha todos os campos.")
        return;
    }

    const item = createItem(bookTitle, authorName);

    list.appendChild(item);

   getElement("bookTitle").value = '';
   getElement("authorName").value = '';
})

