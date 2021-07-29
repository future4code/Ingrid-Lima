import React from "react"
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`

border:2px solid black;
padding: 10px;
margin: 10px;
width:400px;
display: flex;
justify-content: space-between;

`



 class TelaListaUsuario extends React.Component {

state = {
    usuarios: []
}

    componentDidMount() {
        this.pegarUsuarios()
    }
   
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: "ingrid-lima"
            }
        })
        .then((res) =>{
            this.setState({usuarios: res.data})
            })
            .catch((err) => {
            alert("Ocorreu um problema. Tente novamnete!")   
            })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "ingrid-lima"
            }
        })
        .then((res) =>{
        alert("Usuário deletado com Sucesso")
        this.pegarUsuarios()
            })
            .catch((err) => {
            alert("Ocorreu um problema. Tente novamnete!")
            })
    }
    
    
    
    
    
    
    
    
    render() {

        const listaUsuarios = this.state.usuarios.map ((user) => {
            return <CardUsuario key={user.id}>
                
                {user.name}

                <button onClick = {() => this.deletarUsuario(user.id)}>X</button>
            
            </CardUsuario>
        })


        return (
            <div>

            <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
            <h2>Lista de Usuários</h2>
            {listaUsuarios}


        </div>
        )
    }

}



export default TelaListaUsuario;