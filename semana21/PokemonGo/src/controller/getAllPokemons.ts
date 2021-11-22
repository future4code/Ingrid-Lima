import { Request, Response } from "express"
import { getAllPokemonsLogic } from "../business/getAllPokemons"

export const getAllPokemons = async (
    req: Request,
    res: Response
    ): Promise<void> => {
    try {
        const id = Number(req.query.id)
        const Name = String (req.query.Name || "%")
        const Evolution_Stage = String (req.query.Evolution_Stage || "%")
        const Type1 = String (req.query.Type1 || "%")
        const Weather1 = String (req.query.Weather1 || "%")

        

        let result = await getAllPokemonsLogic(id, Name as string, Evolution_Stage as string, Type1 as string, Weather1 as string)

        res.send(result)

    } catch (error) {
        console.log(error)
        res.status(500).send("algo deu errado :(")
    }
}