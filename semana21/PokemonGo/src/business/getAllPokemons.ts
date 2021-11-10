import { filterPokemons } from "../data/filterPokemons"
import { getPokemonsById } from "../data/getPokemonsById"


export const getAllPokemonsLogic = async (
    id: number,
    Name: string,
    Evolution_Stage: string,
    Type1: string,
    Weather1: string,
   
) => {

    let result

    if (id) {

        result = await getPokemonsById(id)

    }else {

        result = await filterPokemons (Name, Evolution_Stage, Type1, Weather1)
    }
}