function executarPrograma() {
    let saldoMedio = parseFloat(prompt("Digite o saldo médio:"));
    calcularCredito(saldoMedio);
}

function calcularCredito(saldoMedio) {
    let credito;

    if (saldoMedio >= 0 && saldoMedio <= 500) {
        credito = 0;
    } else if (saldoMedio <= 1000) {
        credito = saldoMedio * 0.30;
    } else if (saldoMedio <= 3000) {
        credito = saldoMedio * 0.40;
    } else {
        credito = saldoMedio * 0.50;
    }

    alert(`Saldo médio: R$ ${saldoMedio}\nCrédito concedido: R$ ${credito}`);
}
