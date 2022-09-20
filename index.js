import {cargafotos} from "./libreria.js";


document.getElementById("carga").addEventListener('click',() =>{
fetch("carga_fotos.php")
.then(response => response.text())
.then(mensaje =>{
alert(mensaje);
cargafotos();
})
})
window.onload = function(){ 
    document.getElementById("busqueda").addEventListener('keypress',(event) => {
        console.log(event.key);
        })

        if (event.key == "Enter") {
            cargafotos(document.getElementById("busqueda").value);
            };
}

