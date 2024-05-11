const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonenter = document.querySelector("#enter");

//funcion agregar tarea

function agregarTarea(tarea) {
  const elemento = ` <li id="elemento">    
  <i class="fi fi-bs-circle" data="Realizado" id="0"></i>
  <p class="text">${tarea}</p>
  <i class="fi fi-rr-trash-xmark" data="Eliminado" id="0"></i>
</li>`

    lista.insertAdjacentHTML("beforeend",elemento)
}

botonenter.addEventListener('click',()=>{
    const tarea= input.value
    if(tarea){
        agregarTarea(tarea)
    }
    input.value=''
});