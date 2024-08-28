console.log("todo list loaded");

/* 
Todo list

todoes: Todo Model []

    addTodo: (title: string) => Todo model
    removeTodoById: (id) => void
    updateTodoWithId: (id, updateInfo) => void



Todo Model:
    title: streng
    isComplete: bool

*/

const todoes = [];

/**
 *
 * @param {string} title
 */

function addTodo(title) {
  if (title.length === 0) {
    console.log("Trenger et gjøremål for å fortsette");
    return;
  }
  // Lager det nye objektet
  const newTodo = {
    title: title,
    isComplete: false,
  };
  todoes.push(newTodo);
  return newTodo;
}

function removeTodoById() {
  // Denne kodebiten fjerner det listeelementet som knappen man trykker, bor i.
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function updateTodoStatus() {
  let statusLocator = this.parentNode.parentNode;
  let statusField = statusLocator.querySelector("label");
  statusField.textContent = "Fullført!";
  statusField.style.background = "green";
}

const todoListElement = document.querySelector("#todoList");
const inputField = todoListElement.querySelector("input");
const buttonElement = todoListElement.querySelector("button");
const listDisplay = todoListElement.querySelector("ul");

function handleAddTodo() {
  // les input

  const inputValue = inputField.value;
  const newTodo = addTodo(inputValue);
  console.log(inputValue);
  // legg til i listen: Dette skjer når addTodo() kjører lenger oppe.
  // oppdater html
  console.log(todoes);

  // Lager html-elementene som utgjør selve listen.
  const newTodoListItem = document.createElement("li");
  newTodoListItem.classList.add("todoListItem");
  const listItemTextArea = document.createElement("div");
  const listItemButtonfield = document.createElement("div");
  const todoElementRemoveButton = document.createElement("button");
  const todoElementTickButton = document.createElement("button");
  const todoStatus = document.createElement("label");
  const todoText = document.createElement("p");

  //Legger til klasser til de nye elementene, slik at de kan styles.
  listItemTextArea.classList.add("listItemTextArea");
  listItemButtonfield.classList.add("listItemButtonField");

  todoStatus.textContent = "Ufullført";
  todoStatus.style.background = "crimson";
  todoElementRemoveButton.textContent = "❌";
  todoElementTickButton.textContent = "✔️";
  todoText.textContent = newTodo.title;
  console.log(newTodoListItem);

  todoElementRemoveButton.addEventListener("click", removeTodoById);
  todoElementTickButton.addEventListener("click", updateTodoStatus);

  //Legger til en event-listener som gjør at brukeren kan trykke enter og få et nytt gjøremål, fra input-feltet.

  inputField.addEventListener("keypress", function (click) {
    if (click.key === "Enter") {
      buttonElement.click();
      inputField.value = "";
      inputField.focus();
    }
  });

  newTodoListItem.append(listItemTextArea);
  newTodoListItem.append(listItemButtonfield);

  listItemTextArea.append(todoText);
  listItemButtonfield.append(todoElementTickButton);
  listItemButtonfield.append(todoElementRemoveButton);
  newTodoListItem.append(todoStatus);

  // legger til liste-elementet til html-dokumentet
  listDisplay.append(newTodoListItem);
}

buttonElement.addEventListener("click", handleAddTodo);
