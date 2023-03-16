/*const botao = document.querySelector([data-botao]);

botao.addEventListener("click", () => {
    none;
})*/

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
    lista.setAttribute("data-lista", "mostrar");
})

document.querySelector(".close").addEventListener("click", () => {
    lista.setAttribute("data-lista", "esconder");
})