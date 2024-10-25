function verificarClasse() {
    let idade = parseInt(prompt("Digite a sua idade:"));

    if (idade < 16) {
        alert("Você é não eleitor.");
    } else if (idade >= 18 && idade < 65) {
        alert("Você é eleitor obrigatório.");
    } else {
        alert("Você é eleitor facultativo.");
    }
}
