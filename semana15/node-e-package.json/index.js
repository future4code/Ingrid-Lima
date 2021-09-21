///////////////////// EXERCICIO 1///////////////////////

//  a)  Como fazemos para acessar os parâmetros passados na linha de comando para o Node?

// Através do progress.argv


//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// const name = process.argv[2]
// const age = process.argv[3]

// console.log(`Olá, ${name} ! Você tem ${age} anos.`)

// Olá, Ingrid ! Você tem 23 anos.

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// const name = process.argv[2]
// const age = process.argv[3]
// const sum = Number(age) + 7

// console.log (`Olá, ${name} ! Você tem ${age}  anos. Em sete anos você terá ${sum}.`)

// Olá, Ingrid ! Você tem 23  anos. Em sete anos você terá 30.

///////////////////// EXERCICIO 2///////////////////////

const result1 = Number(progress.argv[2])
const result2 = Number(progress.argv[3])
const operation = progress.argv[4]


switch (operation) {
    case "soma":
        console.log(result1 + result2)
        break;
    case "subtracao":
        console.log(result1 - result2)
        break;
    case "multiplicacao":
        console.log(result1 * result2)
        break;
    case "divisao":
        console.log(result1 / result2)
        break;            
}

console.log(operation())