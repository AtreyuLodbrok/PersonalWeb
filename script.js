var modal = document.getElementById("myModal");

var img = document.getElementById("myImgPorfile");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


// para copiar numero en porta papeles

document.getElementById('cel-phone').addEventListener('click', copiarAlPortapapeles);
function copiarAlPortapapeles(ev) {
    // Obtener contenido del div oculto
    let contenido = document.getElementById('TextoACopiar').textContent;
    // Crear input
    let input = document.createElement('input');
    // Asignar contenido
    input.value = contenido;
    // Agregar input a documento
    document.body.appendChild(input);
    // Seleccionar contenido
    input.select();
    // Copiar
    document.execCommand('copy');
    // Eliminar input
    input.remove();
}
/*function alertCopy(){
  alert("Número copiado")
}*/

function alertCopy() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}