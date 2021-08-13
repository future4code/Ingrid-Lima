
import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Logo from '../img/logo.png'


const HeaderS = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

img {
    width: 250px;
    height: 80px;
    margin: 2px
    
}

`
const EstiloBotao = styled.div`
display: flex; 
align-items: center;

gap: 50px;
gap: 20px;
margin-left: 20px;
button {
    padding: 5px;
    color: white;
    background-color:purple;
    border-radius : 10px;
}
`


function Header (props){

   

    return (
        <div>
        <HeaderS>


        
        <img src= {Logo}/>

      
        
       
        <EstiloBotao>
                    
                    <button onClick={() => props.mudarTela("VerMatches")}> Match</button>
                   
                    

                </EstiloBotao>


        </HeaderS>
        <hr></hr>
        </div>

    )
}














export default Header;