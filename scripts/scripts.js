const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("taskList");

// Función para agregar una nueva tarea
function agregarTarea() {
  const taskContent = task.value;

  if (taskContent !== "") {
    // Creo variables con los elementos que quiero agregar al añadir una tarea
    const item = document.createElement("li");
    item.innerHTML = `<input type="checkbox" />
    <span>${taskContent}</span>
    <button class="delete">Remove</button>`;

    // Asigno la función de eliminación al botón
    const deleteBtn = item.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      item.remove();
    });

    // Marcar una tarea como completada al hacer clic en ella
    item.addEventListener("click", () => {
      item.classList.toggle("completed");
    });

    // Limpio el campo de entrada después de agregar la tarea
    task.value = "";

    // Agrego los elementos al DOM
    list.appendChild(item);
  } else {
    alert("Por favor ingresa una tarea válida.");
  }
}
