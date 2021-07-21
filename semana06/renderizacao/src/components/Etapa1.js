import React from 'react'


class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h1> Primeira etapa - Dados Gerais</h1>
                <input> 1. Qual é o seu nome?</input>
                <input> 2. Qual é a sua Idade?</input>
                <input> 3. Qual é o seu E-mail?</input>
                <input> 4. Qual é a sua escolaridade?</input>
                <button>Próxima Etapa</button>

            </div>
        );
    }
}

export default Etapa1