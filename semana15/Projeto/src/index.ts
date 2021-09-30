import express, {Express, Response, Request}  from "express";
import cors from 'cors'
import { accounts } from "./users";

const app: Express = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Servidor está rodando na porta 3003")

})

app.post("/users/create", (req: Request, res: Response) =>{

    try {
     const { name, cpf, dateOfBirthAsString} = req.body
     const [day, month, year] = dateOfBirthAsString.split("/")
     const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
     const age : number = Date.now() - dateOfBirth.getTime()
     const ageInYears: number = age / 1000 / 60 / 60 / 24 / 365

     if(ageInYears < 18){
         res.statusCode = 406 
         throw new Error("Idade do usuário deve ser maior que 18 anos!!")
     }

     
     accounts.push({
         name,
         cpf,
         dateOfBirth,
         balance:0,
         statement: []
     })
     res.status(201).send("Conta Criada com Sucesso!!")
    } catch (error){
        console.log(error)
res.status(400).send(error)
    }
})

app.get ("users/all", (req:Request, res: Response) => {
    try{
        if (!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta foi encontrada!!")
            
        }
        res.status(200).send(accounts)
        

    }catch (error) {
        res.send(error)

    }
})