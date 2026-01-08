const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("taskList");

// Función para agregar una nueva tarea
function agregarTarea() {
  const taskContent = task.value;

  if (taskContent !== "") {
    // Creo variables con los elementos que quiero agregar al añadir una tarea
    const listContainer = document.createElement("div");
    listContainer.id = "listContainer";
    const item = document.createElement("li");
    item.textContent = taskContent;
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    const remove = document.createElement("button");
    remove.textContent = "Remove";

    // Asigno la función de eliminación al botón
    remove.onclick = function () {
      list.removeChild(item);
      list.removeChild(inputCheck);
    };

    // Marcar una tarea como completada al hacer clic en ella
    inputCheck.addEventListener("click", () => {
      if (inputCheck.checked) {
        item.style.textDecoration = "line-through";
      } else {
        item.style.textDecoration = "none";
      }
    });

    // Limpio el campo de entrada después de agregar la tarea
    task.value = "";

    // Agrego los elementos al DOM
    document.getElementById("taskList").appendChild(listContainer);
    document.getElementById("listContainer").appendChild(inputCheck);
    document.getElementById("taskList").appendChild(item);
    document.getElementById("taskList").appendChild(remove);
  } else {
    alert("Por favor ingresa una tarea válida.");
  }
}
