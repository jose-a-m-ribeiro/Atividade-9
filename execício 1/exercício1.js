function somaNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = 0;

        numero = parseFloat(prompt("Digite um número (ou informe '0' para sair:"));

        if (isNaN(numero)) {
            alert("Por favor, informe um número válido.");
        } else {
            soma += numero;
        }

        if (numero == 0) {
            continuar = false;
        }
    }

    alert("A soma dos números é: " + soma);
}