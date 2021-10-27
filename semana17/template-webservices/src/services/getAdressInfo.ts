import axios from "axios"
import { adressInfo } from "../types"
export const getAdressInfo = async (
    zipCode: number
    ): Promise <adressInfo | null >  =>{

        try {
    const response: any  = await axios.get(
    `https://viacep.com.br/ws/${zipCode}/json/`)
        

    return {
    street: response.data.logradouro,
    neighborhood: response.data.bairro,
    city: response.data.localidade,
    state: response.data.uf,
} 
}catch (error) {
    console.log (error)
    
    return null
}
    }
