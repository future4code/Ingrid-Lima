import React from "react";
import { createGlobalStyle } from 'styled-components'
import axios from "axios";




const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: black;
    text-align: center
  }
`


class AddPlaylist extends React.Component {
state = {
    nome:""
}
playlistNome = (event) => {
    this.setState ({nome: event.target.value})
}

AddPlaylist = ()=>{
const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const body = {
    name: this.state.nome
}
axios.post(url, body, {
    headers: {
     Authorization: "ingrid-lima"
    }
})
.then((res) =>{
alert("Playlist criada com sucesso")
this.setState({nome:""})
})
.catch((err) => {
    alert(err.response.data.message)
    
})

}




render (){
  return (
    <div >
     <GlobalStyle/>
     <h3>Adicionar playlist</h3>
     <br/>
             <input 
                placeholder = {"Nome"}
                value={ this.state.nome}
                onChange={this.playlistNome}
             />
             <br/><br/>
              <button onClick={this.AddPlaylist}>Adicionar Playlist</button>
              <br/><br/><br/>

  
    
    </div>
  );
}
 
}

export default AddPlaylist;
