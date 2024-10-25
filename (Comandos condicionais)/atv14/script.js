
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 10; i++) {
        inputsDiv.innerHTML += `<p>Número ${i}: <input type="number" id="num${i}" /></p>`;
    }
};

function calcularSoma() {
    let soma = 0;

    
    for (let i = 1; i <= 10; i++) {
        let num = parseFloat(document.getElementById(`num${i}`).value);
        if (!isNaN(num)) {
            soma += num;
        }
    }

    
    document.getElementById("resultado").innerText = 
        "A soma dos números é: " + soma;
}
