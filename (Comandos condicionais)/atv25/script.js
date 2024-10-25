let soma = 0; 

function adicionarNumero() {
    let numero = parseFloat(document.getElementById("numero").value); 

    if (numero < 0) {
        
        document.getElementById("resultado").innerText = 
            `Execução encerrada. Soma final: ${soma}`;
        return;
    }

    
    if (!isNaN(numero)) {
        soma += numero;
        document.getElementById("resultado").innerText = `Soma: ${soma}`;
    }

    
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}
