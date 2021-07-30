import React from "react";
import { createGlobalStyle } from 'styled-components'
import axios from "axios";





const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: black;
    text-align: center;
    
  }
`


class AddMusica extends React.Component {
state ={
    nome:"",
    artista:"",
    url:""

}
 musicaNome = (event) => {
    this.setState ({nome: event.target.value})

 }
 musicaArtista = (event) => {
    this.setState ({artista: event.target.value})

 }
 musicaUrl = (event) => {
    this.setState ({url: event.target.value})

 }

 addMusica = () => {
     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
     const body = {
         name: this.state.nome,
         artist: this.state.artista,
         url: this.state.url

    }
    axios.post(url, body, {
        headers: {
            Authorization: "ingrid-lima"
           }

  })
  .then((res) =>{
    alert("Música adicionada com sucesso")
    this.setState({nome:"", artista:"", url: ""})
    })
    .catch((err) => {
        alert(err.response.data.message)
        
    })

 }


render () {
  return (
    <div >
     <GlobalStyle/>  

    <h3>Adicionar Músicas</h3>
     
     <input 
                placeholder = {"Nome"}
                value={ this.state.nome}
                onChange={this.musicaNome}
                
                />
                <br/> <br/>
                <input 
                placeholder = {"Artista"}
                value={ this.state.artista}
                onChange={this.musicaArtista}
                />
                <br/> <br/>
                <input 
                placeholder = {"URL"}
                value={ this.state.url}
                onChange={this.musicaUrl}
                />
                <br/> <br/>
                <button onClick={this.addMusica}>Adicionar</button>
   


    
    </div>
  );
}
 
}

export default AddMusica;
