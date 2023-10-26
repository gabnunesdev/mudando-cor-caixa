var corInicial = "blue";
var currentColor = "corInicial";
var textoInicial = document.getElementById("box").textContent;
var currentText = textoInicial;

document
  .getElementById("botao")
  .addEventListener("click", function changeColor() {
    var caixaColorida = document.getElementById("box");
    var mudarCor =
      ((caixaColorida.style.backgroundColor = "green"),
      (caixaColorida.style.color = "white"));
    var mudarTexto = (caixaColorida.innerText = "Xbox Series S");
    if (currentColor === corInicial) {
      (caixaColorida.style.backgroundColor = "green"),
        (caixaColorida.innerText = "Xbox Series S");
      (currentColor = mudarCor), mudarTexto;
    } else {
      (caixaColorida.style.backgroundColor = corInicial),
        (caixaColorida.innerText = textoInicial);
      currentColor = corInicial;
      currentText = textoInicial;
    }
  });
