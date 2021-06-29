/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de BlackJack!")

    if (confirm("Deseja iniciar uma nova rodada?")) {
     
         let cartaUser = [comprarCarta(), comprarCarta()];
         let cartaComputer = [comprarCarta(), comprarCarta()];
         
         let soma = [cartaUser[0].valor + cartaUser[1].valor,
         cartaComputer[0].valor + cartaComputer[1].valor,
         ]
         console.log(`User - cartas : ${cartaUser[0].texto} ${cartaUser[1].texto} - pontuação ${soma[0]}` );
         console.log(`Computer - cartas : ${cartaComputer[0].texto} ${cartaComputer[1].texto} - pontuação ${soma[1]}` );

         if (soma[0] > soma[1]) {
            console.log('Você ganhou!');
            
         } else if (soma[0] < soma[1]){
            console.log("O computador ganhou!");
         } else {
            console.log('Empate!');
         }
         
      } else {
         console.log("O jogo acabou.")
   }
   
