// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
// implemente sua lógica aqui
const altura = Number(prompt("Altura"))
const largura = Number(prompt("Largura"))

console.log(altura * largura)
}



// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const ano = Number(prompt('Ano atual'))
const anoDeNascimento = Number(prompt('ano que nasceu'))

console.log(ano - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)

}
const Resultado = (calculaIMC(85, 1.8))
console.log('Resultado é: ', Resultado)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Informe seu nome")
const idade = prompt("Qual sua idade?")
const email = prompt("Informe seu email: ")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Insira a primeira cor")
const cor2 = prompt("Insira a segunda cor")
const cor3 = prompt("Insira a terceira cor ")
console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}
const custo = calculaIngressosEspetaculo()
console.log(custo)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1 > string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const retornaPrimeiroElemento = array[0]
return retornaPrimeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const retornaUltimoElemento = array[array.length -1]
return retornaUltimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const trocaPrimeiroEUltimo = array[0]
array[0]=array[array.length -1]
array[array.length -1]=trocaPrimeiroEUltimo
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() >= string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const ano = Number(prompt('Ano atual'))
  const anoDeNascimento = Number(prompt('ano que nasceu'))
  const emissao =Number(prompt('ano que sua identidade foi emitida '))
  const idade = (ano - anoDeNascimento)
  const carteira = (ano - emissao)
  const menorQue20 = idade <= 20 && carteira >= 5
  const entre20e50 = idade > 20 && idade <= 50 && carteira >= 10
  const maiorQue50 = idade > 50 && carteira >= 15
  const precisaOuNaoPrecisa = menorQue20 || entre20e50 || maiorQue50
  console.log(precisaOuNaoPrecisa)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const primeiro = ano % 400 ===0
const segundo = ano % 4 === 0 && !(ano % 100 === 0 && ! primeiro)
return primeiro || segundo
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const maioridade = prompt('Você tem mais de 18 anos?').toLowerCase()
const escolaridade = prompt('Possui ensino médio?').toLowerCase()
const disponibilidade = prompt('Possui disponibilidade exclusiva durante os horários do curso?').toLowerCase()
const positivo = maioridade === "sim" && escolaridade ==='sim' && disponibilidade === 'sim'
console.log(positivo)
}