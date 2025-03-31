function verifica() {
    let letra = prompt("Digite uma letra");

    let vogais = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

    if  (vogais.includes(letra)) {
        document.write(`A letra digitada foi ${letra}, ela é uma vogal`)
      } else {
        document.write(`A letra digitada foi ${letra}, ela é uma consoante`)
      }
    }
