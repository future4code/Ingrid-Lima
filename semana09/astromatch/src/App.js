import React,{useState} from 'react';
import styled from "styled-components"
import Body from './components/Body'
import Header from './components/Header';
import DeuMatch from './components/DeuMatch'



const AppContainer = styled.div `
display: flex;
flex-direction: column;
width: 500px;
min-height: 105vh;
border: 1px solid black;
margin-left: 500px;
align-items: center;
border-radius : 50px;
`


function App() {


  const [Tela, setTela] = useState("Body")

	
  const renderTela = () => {
		switch (Tela) {
			case "Body":
				return <Body />;

			case "VerMatches":
				return <DeuMatch/>;
    }
  }

  const mudarTela = (screen) => {
    setTela(screen)

  }

  return (
    <AppContainer>
     <Header mudarTela={mudarTela} Tela={Tela}/>
     {renderTela()}
   
    </AppContainer>
  );
}

export default App;
