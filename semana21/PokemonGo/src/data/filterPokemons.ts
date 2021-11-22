import { Pokemon } from "../business/entities/Pokemon";
import { connection } from "./connection";


export const filterPokemons = async (
    Name: string,
    Evolution_Stage: string,
    Type1: string,
    Weather1: string,
    
): Promise <Pokemon[]> => {
    
    const result = await connection ("pokemon_go")
    .where("Name", "LIKE", `%${Name}%`)
    .andWhere("Evolution_Stage", "LIKE", `%${Evolution_Stage}%`)
    .andWhere("Type1", "LIKE", `%${Type1}%`)
    .andWhere("Weather1", "LIKE", `%${Weather1}%`)
    
    return result.map(pokemons => {
        return new Pokemon(pokemons.Name, pokemons.Evolution_Stage, pokemons.Type1, pokemons.Weather1, pokemons.id )
    })
}