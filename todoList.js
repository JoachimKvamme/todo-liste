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
    console.log("Trenger et listepunkt for å fortsette");
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
  this.parentNode.parentNode.removeChild(this.parentNode);
}

function updateTodowithId(id, updatedInfo) {}

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
  const todoElementRemoveButton = document.createElement("button");
  // const todoElementTickButton = document.createElement("button");
  todoElementRemoveButton.textContent = "❌";
  // todoElementTickButton.textContent = "✔️";
  const todoText = document.createElement("p");
  todoText.textContent = newTodo.title;
  console.log(newTodoListItem);

  todoElementRemoveButton.addEventListener("click", removeTodoById);

  newTodoListItem.append(todoText);
  newTodoListItem.append(todoElementRemoveButton);
  // newTodoListItem.append(todoElementTickButton);

  // legger til liste-elementet til html-dokumentet
  listDisplay.append(newTodoListItem);
}

buttonElement.addEventListener("click", handleAddTodo);
