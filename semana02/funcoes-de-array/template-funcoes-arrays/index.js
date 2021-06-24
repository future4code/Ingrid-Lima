// ------------ EXERCICIO DE INTERPRETAÇÃO 

// EX. 01 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  
/// A) VAI IMPRIMIR A LISTA DO NOME E APELIDO DE AMBAS 



  // EX. 02 

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  
// A) VAT RETORNAR SOMENTE OS NOMES DO ARRAY 



// EX. 03 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)


  // A) VAI RETORNAR TODOS OS USUARIOS DIFERENTE DE CHIJO 




  // ------------------ EXERCICIO DE ESCRITA 

// EX. 01

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a)
const novoArray = pets.map ((cachorro) => {
    return cachorro.nome 
})

console.log(novoArray)

// b)
const novoArray2 = pets.filter ((cachorro) => {
    return cachorro.raca === "Salsicha"
})
console.log(novoArray2)

// c)
const poodleDesconto =(cachorro) => {
    if (cachorro.raca === "Poodle"){
        console.log( `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`)

    }

}
const poodle = pets.filter(poodleDesconto)
console.log(poodle)




// EX. 02

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a)

const novoArray3 = produtos.map ((item) => {
    return item.nome 
})

console.log(novoArray3)

// b)
const novoArray4 = produtos.map ((item) => ({
  nome: item.nome,
  preco: item.preco * 0.95,

}))
console.log(novoArray4)


// c) 

const novoArray5 = produtos.filter ((item) => {
    return item.categoria === "Bebidas"
})
console.log(novoArray5)

// d) 

const novoArray6 = produtos.filter ((item) => {
return item.nome.includes("Ypê")

})
  
console.log(novoArray6)

// e) 


    const frase =(item) => {
        if ( item.nome.includes("Ypê")){
            console.log( `Compre ${item.nome} por ${item.preco}`)
    
        }
    
    }
    const marca = produtos.filter(frase)
    console.log(marca)
    