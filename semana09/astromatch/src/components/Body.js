import React,{useEffect, useState} from 'react'
import axios from 'axios'
import styled from "styled-components"






    
    const CardS = styled.div`
    display: grid,
    width: 200px;
    flex-direction: column;
    align-items: center;
    // margin-left: 200px;
    margin-top: 30px;
    img {
        width: 300px;
        height: 300px;
        border: 1px solid black;
    }
    h3 {
        display: flex;
        justify-content: center;
    }
    h5 {
        display: flex;
        justify-content: center;
        text-aling:center;
        color: red;
        width: 300px;
        
    }
    `


   
    
    
    function Body() {
    
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
    
        const choosePerson = () => {
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
                    alert("Opa, algo deu errado!");
                });
        }
    
        return (
            <div>
                <CardS>
                    <img src={perfil.photo} />
                    <h3>{perfil.name}</h3>
                    <h5>{perfil.bio}</h5>
                </CardS>
               
            
                        <button onClick={() => { getPerfil(); }}> No </button>
                        
                        <button onClick={() => { choosePerson(); }}> Yes </button>
                       
            </div>
        );
    }
    
 

export default Body;