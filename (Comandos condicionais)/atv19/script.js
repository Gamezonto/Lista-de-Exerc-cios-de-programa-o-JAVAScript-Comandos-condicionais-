
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 10; i++) {
        inputsDiv.innerHTML += `
            <p>Nome da Pessoa ${i}: <input type="text" id="nome${i}" /></p>
            <p>Idade da Pessoa ${i}: <input type="number" id="idade${i}" min="0" /></p>
        `;
    }
};

function exibirMaisNova() {
    let nomeMaisNova = "";
    let menorIdade = Infinity;

   
    for (let i = 1; i <= 10; i++) {
        let nome = document.getElementById(`nome${i}`).value;
        let idade = parseInt(document.getElementById(`idade${i}`).value);

        if (!isNaN(idade) && idade < menorIdade) {
            menorIdade = idade;
            nomeMaisNova = nome;
        }
    }

    
    if (nomeMaisNova) {
        document.getElementById("resultado").innerText =
            "A pessoa mais nova é: " + nomeMaisNova;
    } else {
        document.getElementById("resultado").innerText =
            "Por favor, preencha todas as informações corretamente.";
    }
}
