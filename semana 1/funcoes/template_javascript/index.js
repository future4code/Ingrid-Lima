// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO 

// EX1 Leia o código abaixo


// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))



// A) Ele retornara a variavel mulptiplicada por 5 
// ex.: minhaFuncao(2) * variavel = 10

// B) ele não imprime no console a informação 



//EX2 Leia o código abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)



// A)  Ela vai retornar a informação em caixa baixa com dizerndo se é true or false

// B)  I -Eu gosto de cenoura // TRUE
//     II - CENOURA é bom pra vista // TRUE
//     III - Cenouras crescem na terra // TRUE 


// EXERCICIOS DE ESCRITA DE CÓDIGO 

//EX 1 - Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function dados(){
    console.log( 'Eu sou Ingrid, tenho 23 anos, moro em Itaquaquecetuba e sou estudante.')
}

dados()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:


function dados1(nome, idade, endereço, profissao){
    console.log(` Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}`)
}
dados('Ingrid', '23', 'Itaquaquecetuba', 'estudante')


//EX 2 - Escreva as funções explicadas abaixo:

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function numeros(numero1, numero2){
    const soma = numero1 + numero2 
    console.log('O resultado da soma é: ', soma)
}
numeros(100, 55.6)

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
 function comparacao(numero3, numero4){

     return numero3 >= numero4
    
 }
 const resultado = comparacao(5, 4)
 console.log(' É maior ou igual ?', resultado)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function par(numero5){
    return (numero5 % 2 == 0)
}
const resultado2 = par(5)
console.log('O numero é par? ', resultado2 )

// d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

function mensagem(texto){
    return texto.length && texto.toUpperCase()
}
const resultado3 = mensagem('Amante dos carros e entusiasta a Programadora')
console.log(resultado3)

// EX. 03 -Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
// Números inseridos: 30 e 3
// Soma: 33
// Diferença: 27
// Multiplicação: 90
// Divisão: 10

function soma(a, b){
    return a + b
}


function subtracao(c, d){
    return c - d 

}

function multiplicacao(e, f){
    return e * f 
}

function divisao(g, h){
   return g / h 
}
const resultado4 = Number(prompt('Insira um numero:'))
const resultado5 = Number(prompt('Insira outro numero: '))
console.log(`Numeros inseridos: ${resultado4} e ${resultado5}`)
console.log(`Soma = ${soma(resultado4, resultado5)}`)
console.log(`Subtração = ${subtracao(resultado4, resultado5)}`)
console.log(`Multiplicação = ${multiplicacao(resultado4, resultado5)}`)
console.log(`Divisão = ${divisao(resultado4, resultado5)}`)
