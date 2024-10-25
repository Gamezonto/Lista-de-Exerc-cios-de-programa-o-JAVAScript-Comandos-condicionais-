function calcularSoma() {
    let soma = 0;

    
    for (let i = 1; i <= 15; i++) {
        soma += i;
    }

    
    document.getElementById("resultado").innerText = "A soma dos números de 1 a 15 é: " + soma;
}
