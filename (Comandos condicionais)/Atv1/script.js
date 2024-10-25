function calcularCalorias() {
    const prato = parseInt(document.getElementById('prato').value);
    const sobremesa = parseInt(document.getElementById('sobremesa').value);
    const bebida = parseInt(document.getElementById('bebida').value);

    const totalCalorias = prato + sobremesa + bebida;

    document.getElementById('resultado').innerText = 
        `Total de calorias: ${totalCalorias} cal`;
}
