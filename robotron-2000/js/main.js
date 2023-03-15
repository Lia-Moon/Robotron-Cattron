const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");
const contador = document.querySelectorAll("controle-contador");

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent);
    })
})

function manipulaDados(operacao) {
    if(operacao === "-") {
        contador.value = parseInt(contador.value) -1;
    } else {
        contador.value = parseInt(contador.value) +1;
    }
}