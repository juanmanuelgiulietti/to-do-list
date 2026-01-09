const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("taskList");

const Key = "tasks";

// Guarda el estado actual del DOM en LocalStorage
function saveTasks() {
  const tasks = [];

  // Recorro cada tarea en la lista y guardo su contenido y estado
  document.querySelectorAll("#taskList li").forEach((item) => {
    tasks.push(item.querySelector("span").textContent);
    tasks.push(item.classList.contains("completed") ? "completed" : "pending");
  });

  // Guardo las tareas en el almacenamiento local como una cadena JSON
  localStorage.setItem(Key, JSON.stringify(tasks));
}

// Carga tareas desde LocalStorage y reconstruyo la UL
function loadTasks() {
  const raw = localStorage.getItem(Key);
  if (!raw) return;

  let tasks;
  try {
    tasks = JSON.parse(raw);
  } catch (e) {
    return;
  }

  // Limpio para evitar duplicados al recargar
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i += 2) {
    const taskContent = tasks[i];
    const status = tasks[i + 1]; // "completed" o "pending"

    // Creo variables con los elementos que quiero agregar al añadir una tarea
    const item = document.createElement("li");
    item.innerHTML = `<input type="checkbox" />
    <span>${taskContent}</span>
    <button class="delete">Remove</button>`;

    // Si estaba completada, restauro clase y checkbox
    if (status === "completed") {
      item.classList.add("completed");
      item.querySelector('input[type="checkbox"]').checked = true;
    }

    // Asigno la función de eliminación al botón
    const deleteBtn = item.querySelector(".delete");
    deleteBtn.addEventListener("click", (e) => {
      item.remove();
      saveTasks(); // ✅ guardo después de borrar
    });

    // Marcar una tarea como completada al hacer clic en ella
    item.addEventListener("click", () => {
      item.classList.toggle("completed");
      saveTasks(); // guardo después de completar/descompletar
    });

    // Agrego los elementos al DOM
    list.appendChild(item);
  }
}

// Función para agregar una nueva tarea
function addTask() {
  const taskContent = task.value;

  if (taskContent !== "") {
    // Creo variables con los elementos que quiero agregar al añadir una tarea
    const item = document.createElement("li");
    item.innerHTML = `<input type="checkbox" />
    <span>${taskContent}</span>
    <button class="delete">Remove</button>`;

    // Asigno la función de eliminación al botón
    const deleteBtn = item.querySelector(".delete");
    deleteBtn.addEventListener("click", (e) => {
      item.remove();
      saveTasks(); // guardo después de borrar
    });

    // Marcar una tarea como completada al hacer clic en ella
    item.addEventListener("click", () => {
      item.classList.toggle("completed");
      saveTasks(); // ✅ guardo después de completar/descompletar
    });

    // Limpio el campo de entrada después de agregar la tarea
    task.value = "";

    // Agrego los elementos al DOM
    list.appendChild(item);
  } else {
    alert("Por favor ingresa una tarea válida.");
  }

  // Guardo las tareas en el almacenamiento local
  function saveTasks() {
    const Key = "tasks";
    const tasks = [];

    // Recorro cada tarea en la lista y guardo su contenido y estado
    document.querySelectorAll("#taskList li").forEach((item) => {
      tasks.push(item.querySelector("span").textContent);
      tasks.push(
        item.classList.contains("completed") ? "completed" : "pending"
      );
    });

    // Guardo las tareas en el almacenamiento local como una cadena JSON
    localStorage.setItem(Key, JSON.stringify(tasks));
  }

  // Guardar al final de agregar
  saveTasks();
}

// Cargar automáticamente al recargar la página
loadTasks();
