
window.onload = function() {
    const botao = document.getElementById("verificarBtn");
    botao.addEventListener("click", verificarDivisibilidade);
};

function verificarDivisibilidade() {
    const numero = parseInt(document.getElementById("numero").value);
    let resultado = "";

    if (isNaN(numero)) {
        resultado = "Por favor, insira um número válido.";
    } else if (numero % 10 === 0) {
        resultado = `${numero} é divisível por 10.`;
    } else if (numero % 5 === 0) {
        resultado = `${numero} é divisível por 5.`;
    } else if (numero % 2 === 0) {
        resultado = `${numero} é divisível por 2.`;
    } else {
        resultado = `${numero} não é divisível por 10, 5 ou 2.`;
    }

    document.getElementById("resultado").textContent = resultado;
}
