
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 20; i++) {
        inputsDiv.innerHTML += `<p>Idade da Pessoa ${i}: <input type="number" id="idade${i}" min="0" /></p>`;
    }
};

function calcularMediaIdades() {
    let soma = 0;
    let quantidade = 20;

    
    for (let i = 1; i <= 20; i++) {
        let idade = parseInt(document.getElementById(`idade${i}`).value);
        if (!isNaN(idade)) {
            soma += idade;
        } else {
            document.getElementById("resultado").innerText = 
                "Por favor, preencha todas as idades corretamente.";
            return;
        }
    }

    
    let media = soma / quantidade;

    
    document.getElementById("resultado").innerText = 
        "A média das idades é: " + media.toFixed(2);
}
