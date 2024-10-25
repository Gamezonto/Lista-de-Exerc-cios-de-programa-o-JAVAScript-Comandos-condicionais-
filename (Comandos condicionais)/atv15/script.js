
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 20; i++) {
        inputsDiv.innerHTML += `<p>Idade da Pessoa ${i}: <input type="number" id="idade${i}" min="0" /></p>`;
    }
};

function calcularSomaIdades() {
    let soma = 0;

    
    for (let i = 1; i <= 20; i++) {
        let idade = parseInt(document.getElementById(`idade${i}`).value);
        if (!isNaN(idade)) {
            soma += idade;
        }
    }

    
    document.getElementById("resultado").innerText = 
        "A soma das idades é: " + soma;
}
