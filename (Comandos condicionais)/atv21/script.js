function calcularPrestacoes() {
    
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);

    
    if (isNaN(valorCompra) || valorCompra <= 0) {
        document.getElementById("resultado").innerText = 
            "Por favor, insira um valor de compra válido.";
        return;
    }

    
    let prestacao = valorCompra / 5;

    
    document.getElementById("resultado").innerText = 
        `O valor de cada prestação é: R$ ${prestacao.toFixed(2)}`;
}
