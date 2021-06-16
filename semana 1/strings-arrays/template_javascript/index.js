// ---------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO---------//

// ---------------EXERCICIO 1------------------

// let array
// console.log('a. ', array) //INDEFILNIDO //

// array = null
// console.log('b. ', array) // NULL //

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) //  A QUANTIDADE DE COMPONENTE EXISTENTES NESSA LISTA //

// let i = 0
// console.log('d. ', array[i]) // LISTA DE UM UNICO COMPONENTE 

// array[i+1] = 19
// console.log('e. ', array) //POSIÇÃO EM QUE O NUMERO SE ENCONTRA

// const valor = array[i+6]
// console.log('f. ', valor) // VALOR DO ARRAY +6


//-----------------EXERCICIO 2-------------------------

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // VAI APRESENTAR O TEXTO EM CAIXA ALTA SUBSTITUIDO TADAS AS LETRAS a POR i//




//---------------------------- EXERCICIO DE ESCRITA DE CÓDIGO-----------------------------------------------//

//----------------------------EXECICIO 1------------------------------------------------////

// const nomeUsuario = prompt('Qual o seu nome?')
// const emailDoUsuario = prompt('informe seu email:')
// console.log(nomeUsuario)
// console.log(emailDoUsuario)
// console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o) ${nomeUsuario}` )

// --------------------------EXERCICIO 2--------------------------------------------///

 //const comidaFavorita =[ 'comidaJaponesa', 'Macarronada', 'Hamburguer', 'Feijoada', 'Pizza' ]
// console.log(comidaFavorita)
// console.log('Essas são minhas comidas preferidas: ', comidaFavorita)
// const comidaPreferida = prompt('Uma comida')
// comidaFavorita.splice(1, 4)
// comidaFavorita.push(comidaPreferida,'sushi', 'churrasco', 'Farofa')



// --------------------------EXERCICIO 3------------------------------------------/////
let listaDeTarefas = []
console.log(listaDeTarefas)
const tarefas = prompt('Primeira tarefa do dia ´? ')
const tarefas2 = prompt('segunda tarefa do dia é?')
const tarefas3 = prompt('terceira tarefa do dia ?')
listaDeTarefas.push(tarefas, tarefas2, tarefas3)
console.log('As tarefas que preciso fazer são: ', tarefas, tarefas2, tarefas3)
const numero = prompt('Digite um numero de 0 a 2 ')
console.log(listaDeTarefas.splice(numero))









