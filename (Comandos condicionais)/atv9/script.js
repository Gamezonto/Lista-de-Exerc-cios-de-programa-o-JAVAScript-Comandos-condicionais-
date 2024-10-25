function calcularSalarios() {
    const salarioMinimo = 1212.00; // Valor fixo do salário mínimo
    const salarioUsuario = parseFloat(document.getElementById("salarioUsuario").value);

    if (isNaN(salarioUsuario) || salarioUsuario <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um salário válido.";
        return;
    }

    const quantidade = salarioUsuario / salarioMinimo;

    document.getElementById("resultado").innerText = 
        "Você ganha " + quantidade.toFixed(2) + " salários mínimos.";
}
