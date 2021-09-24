import express, {Express, Response, Request}  from "express";
import cors from 'cors'
import { accounts } from "./users";

const app: Express = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor está rodando na porta 3003")

})

app.post("/users", (req: Request, res: Response) =>{

    try {

    } catch (error){

    }
})