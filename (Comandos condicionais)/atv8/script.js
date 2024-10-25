function calcularTotal() {
    let ipi = parseFloat(document.getElementById("ipi").value);
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let quant1 = parseInt(document.getElementById("quant1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let quant2 = parseInt(document.getElementById("quant2").value);

    let total = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);

    document.getElementById("resultado").innerText = "Total: R$ " + total.toFixed(2);
}
