import PokemonGo from "./PokemonGo.json"
import { connection } from "./connection"

const pokemonGo = async()=> {

    try{

        await connection.raw(`
        CREATE TABLE IF NOT EXISTS pokemon_go (
          id VARCHAR(255) ,
          Name VARCHAR(255),
          Pokedex_Number VARCHAR(255),
          Img_name VARCHAR(255),
          Generation VARCHAR(255),
          Evolution_Stage VARCHAR(255),
          Evolved VARCHAR(255),
          FamilyID VARCHAR(255),
          Cross_Gen VARCHAR(255),
          Type1 VARCHAR(255),
          Type2 VARCHAR(255),
          Weather1 VARCHAR(255),
          Weather2 VARCHAR(255),
          STAT_TOTAL VARCHAR(255),
          ATK VARCHAR(255),
          DEF VARCHAR(255),
          STA VARCHAR(255),
          Legendary VARCHAR(255),
          Aquireable VARCHAR(255),
          Spawns VARCHAR(255),
          Regional VARCHAR(255),
          Raidable VARCHAR(255),
          Hatchable VARCHAR(255),
          Shiny VARCHAR(255),
          Nest VARCHAR(255),
          New VARCHAR(255),
          NotGettable VARCHAR(255),
          Future_Evolve VARCHAR(255),
          CP40 VARCHAR(255),
          CP39 VARCHAR(255)
      );
        `)  
        console.log("Tabela criada!")

         await connection ("pokemon_go").insert(PokemonGo)

    } catch (error:any) {
        console.log(error.message)

    } finally {
        connection.destroy()
    }
}

pokemonGo()