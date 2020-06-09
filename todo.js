function onPageLoaded() {
  const input = document.querySelector("input[type='text']");
  const ul = document.querySelector("ul.todos");


  createTodo = () => {
      const li = document.createElement("li");
      const textSpan = document.createElement("span");
      textSpan.classList.add("todo-text");
      const newTodo = input.value;
      textSpan.append(newTodo);

      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("todo-trash");
      const icon = document.createElement("i");
      icon.classList.add("fas", "fa-trash-alt");
      deleteBtn.appendChild(icon);

      ul.appendChild(li).append(textSpan, deleteBtn);
      input.value = "";
      listenDeleteTodo(deleteBtn);
  }

  listenDeleteTodo = (element) => {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
  }

  function onClickTodo(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
  }

  input.addEventListener("keypress", (keyPressed) => {
      const keyEnter = 13;
      if (keyPressed.which == keyEnter) {
          createTodo();
      }
  });
  ul.addEventListener("click", onClickTodo);
}

document.addEventListener("DOMContentLoaded", onPageLoaded);