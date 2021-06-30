// EXERCÍCIO 01
function inverteArray(array) {
const arrayInvertido =[]
for ( let i = array.length - 1;  i => 0; i--){
  arrayInvertido.push(array[i]);
}
return arrayInvertido 
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
const nParesElevadoDois = []
for(let i =0; i < array.length; i++){
  if(array[i] % 2 === 0){
    nParesElevadoDois.push(array[i]**2)
  }

}
return nParesElevadoDois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const nPares = []
  for(num of array)
    if (num %2 === 0 ){
      nPares.push(num)
      console.log(nPares)
    }
    return nPares
  }
  
  


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
 maior = 0
 for (num of array){
   if (num > maior){
     num = maior[array] 
   }
   return num
 }
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 const resposta = [false, false, true, true, true]
 return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
const pares = []

for(let i = 0; i < n * 2; i++) {
  if( i % 2 === 0) {
  pares.push(i)
  }
}
return pares
} 

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if (a === b && a === c && b === c ){
    return "Equilátero"
  } else if ( a !== b && c !== a) {
    return "Escaleno"
  } else {
    return "Isósceles"
  }
}
console.log (checaTriangulo(4, 2, 4))

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let maiorNumero
let menorNumero
if (num1 > num2 ) {
  maiorNumero = num1
  menorNumero =num2
  
}else {
  maiorNumero = num2
  menorNumero =num1
}

const maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

const diferenca = maiorNumero - menorNumero

return {
  maiorNumero: maiorNumero,
  maiorDivisivelPorMenor: maiorDivisivelPorMenor,
  diferenca: diferenca
}
}


// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
