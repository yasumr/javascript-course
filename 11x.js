const todoList = [];
if (localStorage.getItem('local-todoList')) {
 todoList.push(localStorage.getItem('local-todoList'));
}

console.log(todoList);

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  localStorage.setItem('local-todoList', todoListHTML);
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}
