function ordenarDecrescente() {
    let numeros = [];
    let contador = 1;

    while (contador <= 4) {
        numeros[contador] = parseFloat(prompt("Informe o " + contador + "º número: "));

        contador++; //contador = contador + 1
    }

    console.log(numeros[1]);
    console.log(numeros[2]);
    console.log(numeros[3]);
    console.log(numeros[4]);

    let tamanho = numeros.length - 1;

    do {
        trocou = false;

        for (let a = 1; a < tamanho; a++) {
            if (numeros[a] < numeros[a + 1]) {
                [numeros[a], numeros[a + 1]] = [numeros[a + 1], numeros[a]];
                trocou = true;
            }
        }
        tamanho--;
    } while(trocou);

    console.log(numeros[1]);
    console.log(numeros[2]);
    console.log(numeros[3]);
    console.log(numeros[4]);
}