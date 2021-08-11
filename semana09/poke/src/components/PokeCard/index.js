import axios from "axios";
import React,{useState, useEffect} from "react";


const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState ({})

   

      const PegaPokemon = (pokeName) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
              .then(response => {
                // guarda as infos do pokemon no estado
                setPokemon(response.data)
              })
              .catch(err => {
                console.log(err);
              });
              useEffect(() => {
                PegaPokemon(props.pokename)
                }, [props.pokemon, setPokemon])
        
    };
  
   
  
       
      
      return (
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.weight} Kg</p>
          {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      );
    }
  
  
  export default PokeCard;
  