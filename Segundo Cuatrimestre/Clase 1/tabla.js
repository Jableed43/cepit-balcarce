let formProducto = document.querySelector('#form-producto');

formProducto.addEventListener("submit",function(e){
    e.preventDefault();

    let producto = document.querySelector('#producto');
    let cantidad = document.querySelector('#cantidad');
    let precio = document.querySelector('#precio');

    let tbody = document.querySelector('#lista-producto');

    let row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text" value="${producto.value}" disabled/></td>
        <td><input type="number" value="${cantidad.value}" disabled/></td>
        <td><input type="number" value="${precio.value}" disabled/></td>
        <td><button class="delete">-</button><button class="edit">Edit</button></td>
    `;


    tbody.appendChild(row);

    row.querySelector(".delete").addEventListener("click",function(e){
        console.log(row);
        console.log(e);
        row.remove();
    })

    document.querySelectorAll(".edit").forEach(button => {
        button.addEventListener("click", function(e) {
            let tr = e.target.closest('tr'); 
            let inputs = tr.querySelectorAll('input');  
            inputs.forEach(input => {
                input.toggleAttribute('disabled'); 
            });
        });
    });
    



})