console.log(5+5)
// alert("Bienvenido")

let contador = 0;
let limite = 5;


//Hacer referencia a los elementos que vamos a manipular
//Los guardamos en constantes

const boton = document.getElementById("contador")
const numero = document.getElementById("numero")

function sumaClick () {
    console.log(contador)
    if(contador > 3){
        boton.setAttribute("disabled", "true")
    }
    contador = contador + 1;
    numero.innerText = contador

}

// ejemplo de como añadir html a un elemento
// numero.innerHTML =  "<p> heeeey </p>"

//se añade una escucha de eventos - addEventListener
// boton.addEventListener("click", () => {
//     contador = contador + 1
// })

boton.addEventListener("click", sumaClick)

// -------------

const inputColor = document.getElementById("colorSelector")

function changeColor(event) {
    // event.target.value es el input que estoy usando
    // el body de mi html: document.body.style.backgroundColor
    document.body.style.backgroundColor = event.target.value;
    console.log(event.target.value)
}

// inputColor.addEventListener("input", (e) => changeColor(e) )

inputColor.addEventListener("input", changeColor)

// -------------

//Hacer referencia a los elementos que vamos a manipular

const lista = document.getElementById('lista')
const formulario = document.getElementById("formulario")

function enviarFormulario(evento) {
    //Previene comportamiento por defecto del formulario
    //El form refresca la pagina al ser enviado - submit
    evento.preventDefault();
    const item = document.getElementById("item").value
    if(item){
        console.log(item)
       const li = document.createElement("li")
       li.innerText = item
       //appendChild ingresa a la lista el nuevo list item con el texto
       lista.appendChild(li)

       formulario.reset()
    }
}


formulario.addEventListener("submit", enviarFormulario)