function balancoAnual () {
    let mesesGanho = []
    let mesesDespesa = []
    let ganhoFinal = 0
    let despesaFinal = 0
    let lucro = 0
  
    for (var i = 0; i < 12; i++) {
      mesesGanho[i] = parseFloat(prompt("Digite o ganho total do mês"));
      ganhoFinal = ganhoFinal + mesesGanho[i];
  
      mesesDespesa[i] = parseFloat(prompt("Digite a despesa total do mês"));
      despesaFinal = despesaFinal + mesesDespesa[i]
    }
  
    lucro = ganhoFinal - despesaFinal
  
    if (lucro < 0) {
      document.write(`A empresa teve um lucro de: R$${lucro}`)
    } else {
      if (lucro == 0) {
        document.write(`A empresa não teve lucros nem prejuízos`)
      } else {
        document.write(`A empresa teve um prejuízo de: R$${lucro}`)
       }
    }
  }