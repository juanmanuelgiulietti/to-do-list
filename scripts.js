const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("taskList");

function agregarTarea() {
  const taskContent = task.value;

  if (taskContent !== "") {
    /* Creo variables con los elementos que quiero agregar al añadir una tarea*/
    const item = document.createElement("li");
    item.textContent = taskContent;
    const inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    const remove = document.createElement("button");
    remove.textContent = "Eliminar";

    /* Asigno la función de eliminación al botón */
    remove.onclick = function () {
      list.removeChild(item);
      list.removeChild(inputCheck);
    };

    /* Agrego los elementos al DOM */
    document.getElementById("taskList").appendChild(inputCheck);
    document.getElementById("taskList").appendChild(item);
    document.getElementById("taskList").appendChild(remove);
  } else {
    alert("Por favor ingresa una tarea válida.");
  }
}
