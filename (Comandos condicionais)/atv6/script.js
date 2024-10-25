function calcular() {
    
    const numero = parseInt(document.getElementById("numero").value);

    
    const antecessor = numero - 1;
    const sucessor = numero + 1;

    
    const resultado = `O antecessor de ${numero} é ${antecessor}, e o sucessor é ${sucessor}.`;
    document.getElementById("resultado").innerText = resultado;
}
