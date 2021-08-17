import React,{useEffect, useState} from 'react'
import axios from 'axios'
import styled from "styled-components"






    
    const CardS = styled.div`
    display: grid,
    width: 200px;
    flex-direction: column;
    align-items: center;
     margin-left: 50px;
    margin-top: 20px;
    img {
        width: 300px;
        height: 300px;
        border-radius:50px;
        margin-left: 20px;

    }
    h3 {
        display: flex;
        justify-content: center;
        text-aling:center;
        margin-right: 50px;
    }
    h5 {
        display: flex;
        justify-content: center;
        text-aling:center;
        align-items: center;
        color: purple;
        width: 300px;
        margin-left: 20px;
    `
    const EstiloBotao = styled.div`
display: flex; 
align-items: center;
justify-content: center;

gap: 50px;
gap: 30px;
margin-left: 20px;
button {
    padding: 5px;
    color: white;
    background-color:purple;
    border-radius : 10px;
}
`
const EstiloBotao2 = styled.div`
display: flex; 
align-items: center;
justify-content: center;

gap: 50px;
gap: 100px;
margin-left: 120px;
button {
    padding: 20px;
    color: white;
    background-color:#3de3c5;
    border-radius : 50%;
}
`


   
    
    
    function Body() {
        const [limpar, setLimpar] = useState([]);



        const deletarMatch = () => {
            axios
                .put(
                    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
                )
                .then((response) => {
                    alert("Match deletado!")
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    
        const [perfil, setPerfil] = useState({})
        const [escolha, setEscolha] = useState(false)
    
        useEffect(() => {
            getPerfil();
        }, []);
    
        const getPerfil = () => {
            axios
                .get(
                    `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
                )
                .then((response) => {
                    setPerfil(response.data.profile);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    
        const escolherPessoa = () => {
            const body = { id: perfil.id, choice: true }
            axios
                .post(
                    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
                    body
                )
                .then((response) => {
                    setEscolha(response.data);
                    getPerfil();
    
                })
                .catch((error) => {
                    console.log(error);
                    alert("Ocorreu um erro!");
                });
        }
    
        return (
            <div>
                <CardS>
                    <img src={perfil.photo} />
                    <h3>{perfil.name}</h3>
                    <h5>{perfil.bio}</h5>
                </CardS>

                <br/>  
               
            <EstiloBotao2> 
                <button onClick={() => { escolherPessoa(); }}> 💖 </button>
                        <button onClick={() => { getPerfil(); }}> ❌ </button>

                        <br/>
                      
                        </EstiloBotao2>

                        <br/><br/>  <br/> 

                        <EstiloBotao> 
                        <button onClick={() => { deletarMatch() }}>Limpar Match</button>
                        </EstiloBotao>
            </div>
        );
    }
    
 

export default Body;