const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonenter = document.querySelector("#enter");
const check = 'fi fi-br-check';
const uncheck= 'fi fi-bs-circle';
const lineThrough= 'line-through';
let id = 0;

//funcion agregar tarea

function agregarTarea(tarea,id,Realizado,Eliminado) {

    if(Eliminado){return}

    const REALIZADO = Realizado ?check :uncheck
    const LINE = Realizado ?lineThrough :''

  const elemento = ` <li id="elemento">    
  <i class="fi ${REALIZADO}" data="Realizado" id="${id}"></i>
  <p class="text ${LINE}">${tarea}</p>
  <i class="fi fi-rr-trash-xmark" data="Eliminado" id="${id}"></i>
</li>`

    lista.insertAdjacentHTML("beforeend",elemento)
}
// EVENTO DE AGREGAR LA TAREA MEDIANTE CLICK
botonenter.addEventListener('click',()=>{
    const tarea= input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
    }
    input.value=''
    id++
});

// EVENTO DE AGREGAR LA TAREA CON EL BOTON ENTER

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea= input.value
        if(tarea){
            agregarTarea(tarea,id,false,false)
        }
        input.value=''
        id++
    }
});


//EVENTO PARA CHECK DE TAREAS 

lista.addEventListener('click',function(event){
    const element= event.target
    const elementData= element.attributes.data.value
})