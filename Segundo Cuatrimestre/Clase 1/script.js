let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let edad = document.getElementById("edad");
    let url = document.getElementById("url");

    let divPersona = document.getElementById("card-contenedor");

    divPersona.innerHTML +=
    `
        <div class="card">
            <img src="${url.value}" alt="Foto Persona"/>
            <h2>${nombre.value} ${apellido.value}</h2>
            <p>Edad: ${edad.value}</p>
        </div>
    
    `
    console.log("Se agrego Card");
})