import React from "react";
import { createGlobalStyle } from 'styled-components'
import axios from "axios";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: black;
    text-align: center
  }
`
const CardPlaylist = styled.div`

border:2px solid black;
padding: 10px;
margin: 10px;
width:400px;
display: flex;
justify-content: space-between;

`


class ListaPlaylist extends React.Component {
    state = {
        playlists: []

    }

    componentDidMount(){
        this.pegarPlaylists()


    }
    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlistshttps://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        axios.get(url, {
            headers: {
                Authorization: "ingrid-lima"
            }
        })
        .then((res) =>{
            this.setState({playlists: res.data})
            })
            .catch((err) => {
            alert("Ocorreu um problema. Tente novamnete!")   
            })
    }


    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ingrid-lima"
            }
        })
        .then((res) =>{
        alert("Playlist deletada com Sucesso")
        this.pegarUsuarios()
            })
            .catch((err) => {
            alert("Ocorreu um problema. Tente novamnete!")
            })
        }


render (){

    const ListaPlaylist = this.state.playlists.map ((list) => {
        return <CardPlaylist key={list.id}>
            
            {list.name}

            <button onClick = {() => this.deletarPlaylist(list.id)}>X</button>
        
        </CardPlaylist>
    })


    return (
        <div>
        <GlobalStyle/>
        <button onClick={this.props.irParaInicio}>Voltar ao inicio</button>
        <h2>Playlist</h2>
        {ListaPlaylist}


    </div>
    )
}

}

export default ListaPlaylist;
