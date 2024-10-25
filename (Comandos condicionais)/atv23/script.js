
window.onload = function () {
    let inputsDiv = document.getElementById("inputs");
    for (let i = 1; i <= 20; i++) {
        inputsDiv.innerHTML += `<p>Número ${i}: <input type="number" id="num${i}" /></p>`;
    }
};

function verificarNumeros() {
    let entre0e100 = 0;
    let entre101e200 = 0;
    let maiorQue200 = 0;

    
    for (let i = 1; i <= 20; i++) {
        let numero = parseFloat(document.getElementById(`num${i}`).value);

        if (!isNaN(numero)) {
            if (numero >= 0 && numero <= 100) {
                entre0e100++;
            } else if (numero >= 101 && numero <= 200) {
                entre101e200++;
            } else if (numero > 200) {
                maiorQue200++;
            }
        }
    }

   
    document.getElementById("resultado").innerText =
        `Entre 0 e 100: ${entre0e100}\nEntre 101 e 200: ${entre101e200}\nMaiores que 200: ${maiorQue200}`;
}
