//------------------------- EXERCICIO DE ESCRITA DE CÓDIGO --------------------

// EX. 01 

const bichinhos =() => {
    let bichosArray = []

    const quantidadeDeBichos = Number(prompt('Quantos animais de estimação você tem ?'))
    if (quantidadeDeBichos === 0) {
        console.log("Que pena!!! Você pode adotar um pet")

    
    } else {
        while ( bichosArray.length < quantidadeDeBichos) {
            const nomeDoBicho = prompt ("Qual o nome do seu animalzinho ? :) ")
            bichosArray.push(nomeDoBicho)
        }
        console.log(bichosArray)

    }
}
bichinhos()


// EX. 02

const arrayOriginal = [10, 20, 35, 50, 65, 83, 98, 150, 321]
for(array of arrayOriginal) {
    console.log(array)
}

for(let array of arrayOriginal){
    let divisao = array / 10
    console.log(divisao)
}
for(let array of arrayOriginal){
    let par = array % 2 
    console.log(par)
    
}

let novoArray = []
for(let array of arrayOriginal){
    if(Array % 2 === 0) {
        novoArray.push(array)
    }
}
console.log(novoArray)
novoArray(arrayOriginal)