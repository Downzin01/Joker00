function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    // Calcula a soma dos elementos do array
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }

    // Retorna a média (soma dividida pelo número de elementos)
    return soma / numeros.length;
}

document.getElementById('calcularButton').addEventListener('click', function() {
    let entrada = document.getElementById('numerosInput').value;
    let numeros = entrada.split(',').map(numero => parseFloat(numero.trim())).filter(numero => !isNaN(numero));
    let media = calcularMedia(numeros);


    document.getElementById('resultado').textContent = "A média é: " + media;
});
