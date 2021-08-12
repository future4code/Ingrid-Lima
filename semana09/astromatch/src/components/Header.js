
import React, { useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import Logo from '../img/logo.png'


const HeaderS = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
img {
    width: 200px;
    height: 100px;
    margin-left: 150px
    
}

`


function Header (){
    return (
        <HeaderS>


        
        <img src= {Logo}/>

      
        
       
       <button>Lista</button>
       


        </HeaderS>


    )
}














export default Header;