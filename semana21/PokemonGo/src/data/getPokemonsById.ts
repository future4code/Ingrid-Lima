import { Pokemon } from "../business/entities/Pokemon";
import { connection } from "./connection";


export const getPokemonsById = async (id: number): Promise<Pokemon> => {
    const [result] = await connection ("pokemon_go")
    .where({ id })

return new Pokemon(result.Name, result.Evolution_Stage, result.Type1, result.Weather1, result.id )
}