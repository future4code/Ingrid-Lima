//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

//console.log("d. ", typeof resultado)

///let primeiroNumero = prompt("Digite um numero!")
//let segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)//

///--------------------- EXERCICIO DE ESCRITA DE CÓDIGO----------------------
///---------------------- EX 1 ----------------

let idade =Number (prompt ('Qual a sua idade?'))
let idade2 =Number (prompt ("Qual a idade do seu melhor amigo?"))

console.log ('Sua idade é maior que a do seu amigo?',idade > idade2, false)
console.log ('A diferença de idade é', idade - idade2)


//// --------------EXERCICIO  2----------------

let numeorPar = Number(prompt('Digite um numero par '))
console.log (numeorPar % 2)

// ----------------EXERCICIO 3----------------

const idadeAno = Number(prompt('Qual a sua idade'))

console.log ('Sua idade é :', idadeAno * 12)
console.log('Sua idade em dias é;', idadeAno * 365)
console.log('Sua Idade em horas é ', idadeAno * 8760)

/// ----------------EXERCICIO 4----------------
const primeiro = Number(prompt('Digite um numero'))
const segundo = Number(prompt('Digite outro numero'))
const divisaoPrimeiro = primeiro % segundo
const divisaoSegundo =  segundo % primeiro

console.log('O primeiro numero é maior que o segundo?', primeiro > segundo)
console.log('O .primeiro numero é igual ao segundo?', primeiro === segundo)
console.log('o primeiro numero é divisivel pelo segundo?', divisaoPrimeiro == 0)
console.log('o segundo numero é dividivel pelo primeiro ', segundo % primeiro) 
