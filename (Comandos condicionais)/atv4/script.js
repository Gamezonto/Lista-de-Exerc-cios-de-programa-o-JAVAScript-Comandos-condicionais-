function ordenarValores() {
    let a = parseFloat(prompt("Digite o valor A:"));
    let b = parseFloat(prompt("Digite o valor B:"));
    let c = parseFloat(prompt("Digite o valor C:"));

    let valores = [a, b, c];
    valores.sort((x, y) => y - x);

    alert(`Valores em ordem decrescente: ${valores.join(", ")}`);
}
