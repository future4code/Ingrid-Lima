///---------------------------------------------------EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO----------------------------------------------------------///

// EXERCICIO 01

// A)  PARA TODO NUMERO QUE FOR DIGITADO E DE O RESTO = 0  ELE INFORMA SE FOI APROVADO OU NÃO .

// B) PARA TODO NUMERO QUE FOR PAR.

// C) TODO NUMERO IMPAR.



// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }



// EXERCICIO 02

// A) LOCALIZAR O VALOR DA FRUTA ESCOLHIDA 

// B) 'O PREÇO DA FRUTA MAÇÃ É r$ 2.25.'

// C) O VALOR DA PERA SAIRÁ COM O VALOR DO DEFAULT (5.00)


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// EXERCICIO 03

// A) CRIANDO UM PROMPT PARA DIGITAR UM NUMERO PARA DA O RESULTADO MAIOR QUE 0

// B) A PRIMEIRA PASSARA NO TESTE, A SEGUNDA NÃO TEM RESPOSTA NO CONSOLE 

// C) 


// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)





///---------------------------------------------------EXERCICIO DE ESCRITA DE CÓDIGO----------------------------------------------------------///

// EXERCICIO 01


 const identificarIdade = () => {
     const idade =Number(prompt("Qual sua idade?"))
    
     if  (idade >= 18){
         console.log('Você pode dirigir')

     }else{
         console.log('Você não pode dirigir')
     }
 }
 identificarIdade()


// EXERCICIO 02

 const horarioDeEstudo = prompt('Insira a letra M, V ou N para seu respectivo horário de estudo : M = Manhã, V = Vespertino (tarde) e N = Noite.').toUpperCase()


 const periodo = (turno) => {
     if (turno === 'M') {
         console.log('Bom Dia !!')
     }else if (turno === 'V'){
         console.log('Boa Tarde!!')
     }else if (turno === 'N'){
         console.log('Boa Noite!!')
     }else{
         console.log('Opção desconhecida, Digite uma das opções pedidas!!')
     }
 }
 console.log(periodo(horarioDeEstudo))


// EXERCICIO 03

const horario = prompt('Insira a letra M, V ou N para seu respectivo horário de estudo : M = Manhã, V = Vespertino (tarde) e N = Noite.').toUpperCase()

switch (horario) {
    case 'M' :
        console.log('Bom Dia !!')
        break
    case 'V' :
        console.log('Boa Tarde !!')
        break
    case 'N' :
        console.log('Boa Noite !!')
        break
    default:
        console.log('Opção desconhecida, Digite uma das opções pedidas!!')

}

// EXERCICIO 04 

const cinema = () => {
    
    const genero = prompt("Qual o gênero do filme?")
    const valor = Number(prompt("Qual o valor do ingresso?"))

    if (genero === 'fantasia' && valor === 15){
        console.log('Bom filme :)')
    
    } else {
    console.log('Escolha outro filme :(')
    }
}
cinema()

