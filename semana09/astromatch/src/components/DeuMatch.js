import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios"

const Card1 = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: flex-start;
margin-left: 60px;
margin-top: 30px;
gap: 10px;
`

const Card2 = styled.div`
display: flex;
align-items: center;
gap: 30px;
`

const Img = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`

function DeuMatch() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches])

    const getMatches = () => {
        axios
        .get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        )
        .then((response) => {
          setMatches(response.data.matches);
        })
        .catch((error) => {
          console.log(error.message);
        }); 

    }

    return (
        <Card1> 
             {matches.map((match) => {
            return (
              <Card2>
                <Img src={match.photo} alt={"foto perfil"} />
                <h3>{match.name}</h3>
                </Card2>
            );
        })}
             </Card1>
    );
}

export default DeuMatch;