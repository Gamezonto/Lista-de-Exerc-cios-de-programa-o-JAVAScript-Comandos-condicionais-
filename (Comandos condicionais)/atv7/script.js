function calcularMedias() {
    
    const media1 = (8 + 9 + 7) / 3;
    const media2 = (4 + 5 + 6) / 3;

    
    const somaDasMedias = media1 + media2;

    
    const mediaDasMedias = somaDasMedias / 2;

    
    const resultado = `
        Média de 8, 9 e 7: ${media1.toFixed(2)}<br>
        Média de 4, 5 e 6: ${media2.toFixed(2)}<br>
        Soma das duas médias: ${somaDasMedias.toFixed(2)}<br>
        Média das médias: ${mediaDasMedias.toFixed(2)}
    `;
    document.getElementById("resultado").innerHTML = resultado;
}
