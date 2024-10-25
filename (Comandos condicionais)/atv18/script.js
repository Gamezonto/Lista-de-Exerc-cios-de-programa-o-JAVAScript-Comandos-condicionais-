function converterParaReal() {
    
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    let quantidadeDolar = parseFloat(document.getElementById("quantidadeDolar").value);

    
    if (isNaN(cotacao) || isNaN(quantidadeDolar) || cotacao <= 0 || quantidadeDolar <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
        return;
    }

    
    let valorEmReais = cotacao * quantidadeDolar;

    
    document.getElementById("resultado").innerText =
        `Valor em Reais: R$ ${valorEmReais.toFixed(2)}`;
}
