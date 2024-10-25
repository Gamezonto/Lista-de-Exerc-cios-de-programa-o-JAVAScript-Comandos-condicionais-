
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 20; i++) {
        inputsDiv.innerHTML += `<p>Número ${i}: <input type="number" id="num${i}" /></p>`;
    }
};

function verificarNumeros() {
    let contador = 0;

    
    for (let i = 1; i <= 20; i++) {
        let numero = parseFloat(document.getElementById(`num${i}`).value);
        if (!isNaN(numero) && numero > 8) {
            contador++;
        }
    }

    
    document.getElementById("resultado").innerText =
        `Quantidade de números maiores que 8: ${contador}`;
}
