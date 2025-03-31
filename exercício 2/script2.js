function lancamentoSoyuz() {
    let contagem = 10;

    let sequencia = setInterval(
        function contagemLancamento() {
            document.write(contagem);

            if (contagem == 5) {
                document.write("зажигание..."); //Ignição
            }

            if (contagem < 1) {
                document.write("взлет!"); //Lançado!
                clearInterval(sequencia);
            }

            contagem--; //contagem = contagem - 1
        } , 1000);
}