function calcularReajuste() {
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (isNaN(saldo) || saldo < 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um saldo válido.";
        return;
    }

    const reajuste = saldo * 1.015; // Reajuste de 1,5%

    document.getElementById("resultado").innerText = 
        "Seu saldo com reajuste é: R$ " + reajuste.toFixed(2);
}
