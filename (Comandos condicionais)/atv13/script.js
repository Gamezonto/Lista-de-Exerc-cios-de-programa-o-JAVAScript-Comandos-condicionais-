function converterTemperatura() {
    
    let celsius = parseFloat(document.getElementById("celsius").value);

    
    if (isNaN(celsius)) {
        document.getElementById("resultado").innerText = "Por favor, insira uma temperatura válida.";
        return;
    }

    
    let fahrenheit = (9 * celsius + 160) / 5;

    
    document.getElementById("resultado").innerText = 
        `${celsius}°C equivale a ${fahrenheit.toFixed(2)}°F.`;
}
