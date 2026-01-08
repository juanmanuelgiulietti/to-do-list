const input = document.getElementById("input");
const agregar = document.getElementById("agregar");
const tareas = document.getElementById("tareas");
    const estado = document.getElementById("estado");

    agregar.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const item = document.createElement("li");
        const inputEstado = document.createElement("input");
        inputEstado.type = "checkbox";
        inputEstado.id = "estado";
        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        eliminar.id = "eliminar";

        item.textContent = input.value.trim();
        tareas.appendChild(item);

        item.appendChild(inputEstado);
        if (inputEstado.checked) {
            item.style.textDecoration = "line-through";
        }

        item.appendChild(eliminar);
        if (eliminar) {
            eliminar.addEventListener("click", () => {
                tareas.removeChild(item);
            });
        }

        input.value = "";
        
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
});