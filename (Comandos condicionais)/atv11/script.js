function calcularSalarioFinal() {
    
    let nome = document.getElementById("nomeVendedor").value;
    let salarioFixo = parseFloat(document.getElementById("salarioFixo").value);
    let totalVendas = parseFloat(document.getElementById("totalVendas").value);

    
    if (nome === "" || isNaN(salarioFixo) || isNaN(totalVendas)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    
    let comissao = totalVendas * 0.15;
    let salarioFinal = salarioFixo + comissao;

    
    document.getElementById("resultado").innerText = 
        `Vendedor: ${nome}\nSalário Fixo: R$ ${salarioFixo.toFixed(2)}\nSalário Final: R$ ${salarioFinal.toFixed(2)}`;
}
