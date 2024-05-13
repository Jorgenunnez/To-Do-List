const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonenter = document.querySelector("#enter");
const check = 'fi-rs-check-circle';
const uncheck= 'fi-bs-circle';
const lineThrough= 'line-through';
let id ;
let list;


//funcion de fecha
const FECHA= new Date()
fecha.innerHTML=FECHA.toLocaleDateString('es-AR',{weekday:'long',month:'long' ,day:'numeric'})



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
 
//funcion de tarea realizada
function tareaRealizada(element){
  element.classList.toggle(check)
  element.classList.toggle(uncheck) 
  element.parentNode.querySelector('.text').classList.toggle(lineThrough)
  list[element.id].realizado = list[element.id].realizado ?false :true
}

//funcion de tarea eliminada 
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    list[element.id].eliminado = true
}




// EVENTO DE AGREGAR LA TAREA MEDIANTE CLICK
botonenter.addEventListener('click',()=>{
    const tarea= input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
        list.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado : false
        })
    }
    localStorage.setItem('TODO',JSON,stringify(list))
    input.value=''
    id++
});

// EVENTO DE AGREGAR LA TAREA CON EL BOTON ENTER

document.addEventListener('keyup', function(event){
    if(event.key == 'Enter'){
        const tarea= input.value
        if(tarea){
            agregarTarea(tarea,id,false,false)
            list.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado : false
            })
        }
        localStorage.setItem('TODO',JSON,stringify(list))
        input.value=''
        id++
    }
});


//EVENTO PARA CHECK DE TAREAS 

lista.addEventListener('click',function(event){
    const element= event.target
    const elementData= element.attributes.data.value

        if(elementData==='Realizado'){
            tareaRealizada(element)
        }
        else if(elementData==='Eliminado'){
            tareaEliminada(element)
        }
        localStorage.setItem('TODO',JSON,stringify(list))
})


//local storage 

let data = localStorage.getItem('TODO')
if(data){
    list.JSON.parse(data)
    id= list.length
    cargarlista(list)
}else{
    list=[]
    id=0
}

function cargarlista(DATA){
    DATA.forEach(i => {
        agregarTarea(i.nombre, i.id, i.realizado, i.eliminado)
    });
}