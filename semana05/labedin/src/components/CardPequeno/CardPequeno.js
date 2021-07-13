import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
                <strong><p>{ props.palavras}</p></strong>
                <p>{ props.email}</p>
            </div>
    
    )
}

export default CardPequeno;