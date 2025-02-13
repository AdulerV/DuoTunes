import { validarEntradas, contornarBordaInput } from '../conta/validacao.js';

let inputs = document.querySelectorAll(".inpFormulario");
const form = document.querySelector("form");

for(const input of inputs) {
    input.addEventListener("blur", function () {
        contornarBordaInput(input);
    })
}

form.addEventListener("submit", function (evento) {
    for(const input of inputs) {
        if (validarEntradas(input.value)) {
            evento.preventDefault();
            mostrarMensagem();
        }
    }
});

function mostrarMensagem() {
    const span = document.querySelector("#resultado");
    span.textContent = "Usuário ou senha incorretos.";
    span.style.padding = "0.5rem";
    span.style.color = "red";
}