```function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let macaValor
  if(quantidade> 1 && quantidade < 12){
    macaValor = quantidade * 1.30
  } else if (quantidade >= 12){
    macaValor = quantidade * 1.00
  }
  return macaValor
}```