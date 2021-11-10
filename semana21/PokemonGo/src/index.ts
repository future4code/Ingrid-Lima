import app from "./controller/app";
import { getAllPokemons } from "./controller/getAllPokemons";

app.get("/pokemons", getAllPokemons) 


 