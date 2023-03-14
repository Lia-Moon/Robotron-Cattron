// Criar função anônima que retorne a frase "fui clicado"

const calcular = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

calcular.addEventListener("click", () => {
    resultado.innerHTML = "Fui clicado :o";
});