function ejecuta() {
  // document.querySelector("#principal p:last-child").onclick=saludo;

  var elementos = document.querySelectorAll("#principal p, span");
  elementos.forEach(elemento => elemento.onclick=saludo);
}

function saludo() {
  alert("Hello World!");
}

window.onload=ejecuta;