import express, { Express, Request, Response } from "express";
import cors from 'cors'
import { AddressInfo } from "net";
import { UserType } from "./users";
import { user, users } from "./users";

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
}); 
// EXERCÍCIO 1

// a)  GET.
// b) Quem está sendo manipulado é o users.

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const result = users.map(user => ({
            id: user.id,
            name: user.name
        }));

        res
            .status(200)
            .send(result);
    } catch (error: any) {
        res
        .status(errorCode)
        .send(error);
    };
});

// EXERCÍCIO 2

// a) Ja que um tipo especifico é usado, foi passado por path params.
// b) Sim, pelo ENUM types.

app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const type: string = (req.params.type as string).toUpperCase();
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo inválido");
        };

        const matches = users.filter(((user) => user.type === type));

        res.status(200).send({ message: "Success", quantity: matches.length, users: matches });
    } catch (error: any) {
         res
        .status(errorCode)
        .send(error);
    };
});

// EXERCÍCIO 3

// a)  PATH PARAMS

app.get("/users/:name", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const result = users.find(
            user => user.name === req.params.name
        );

        if (result) {
            res.status(200).send(result);
        }
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error);
    };
});


// EXERCÍCIO 4

//a) Um novo user com id diferente.


app.post("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;

    try {
        const { id, name, email, type, age } = req.body;
        const validTypes: boolean = type === UserType.ADMIN || type === UserType.NORMAL
        const reqBody: user = {
            id: id,
            name: name,
            email: email,
            type: type,
            age: age
        };

        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Preencha corretamente todos os campos.");
        };

        if (!validTypes) {
            errorCode = 422;
            throw new Error("Tipo de usuário inválido");
        };

        users.push(reqBody);

        res.status(200).send({ message: "Usuário criado com sucesso!", user: reqBody });
    } catch (error: any) {
        res
            .status(errorCode)
            .send(error);
    };
});


