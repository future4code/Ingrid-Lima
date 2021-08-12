import React from 'react';
import styled from "styled-components"
import Body from './components/Body'
import Header from './components/Header';




const AppContainer = styled.div `
display: flex;
flex-direction: column;
width: 600px;
min-height: 100vh;
border: 1px solid black;
margin-left: 450px;
align-items: center;
`


const App = ()=> {
  return (
   
     <AppContainer>
      <Header></Header>
      
      <Body></Body>

     </AppContainer>
 
  );
}

export default App;
