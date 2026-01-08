const input = document.getElementById('input');
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

function agregarTarea(){
    const tarea = input.value;
    if(tarea !== ''){
        const item = document.createElement('li');
        item.textContent = tarea;
        document.getElementById('lista').appendChild(item);
    } else {
        alert('Por favor ingresa una tarea válida.');
    }
};