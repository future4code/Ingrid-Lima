//Exercícios de interpretação de código

// EX. 01 //

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?

// ELE VAI IMPRIMIR O PRIMEIRO E O ULTIMO NOME DO ELENCO 
//E O CANAL QUE SERA TRANSMITIDO O FILME = O HORARIO DA 
// TRANSMISSÃO .

//EX. 02 //

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

//A LISTA COMPLETA DE DADOS DO ANIMAIS INSERIDOS.

//b) O que faz a sintaxe dos três pontos antes do nome de 
//um objeto?

//ALTERA OS DADOS PARA O QUE FOI PEDIDO NA SEQUENCIA

// EX. 03 //

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// APRESENTA UM ERRO 

//b) Explique o valor impresso no console. 
//Você sabe por que isso aconteceu?

// PORQUE A CONST PESSOA NÃO FOI CHAMADA.







// Exercícios de escrita de código

// EX. 01 //

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
 // Exemplo de saída
 //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

const pessoa = {
    nome: 'Ingrid',
    apelido: ["Grid", 'Gid', 'Indigri']
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]} `)

//b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// EX. 02 //

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const pessoa1 = {
    nome: 'Ingrid',
    idade: 23,
    profissao: 'Estudante',

};

const pessoa2 ={
    nome:'Murilo',
    idade: 27,
    profissao: 'Projetista'

};
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function array(objeto) {
    return [
        objeto.nome,
        objeto.nome.length,
        objeto.idade,
        objeto.profissao,
        objeto.profissao.length,
    ];
}

console.log(array(pessoa1))
console.log(array(pessoa2))

// EX. 03 //

//a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e disponibilidade (boolean - devem começar como true)

const fruta = {
    nome: 'Maçã',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Melão',
    disponibilidade: true
}

const fruta3 = {
    nome: "Melância",
    disponibilidade: true
}

//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados. 

const adicionarAoCarrinho = (fruta, fruta2, fruta3) =>{
    carrinho.push(fruta, fruta2, fruta3)
}

adicionarAoCarrinho(fruta3, fruta2, fruta)
console.log(carrinho)