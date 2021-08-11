import React from "react";
import { createGlobalStyle } from 'styled-components'
import AddPlaylist from "./components/AddPlaylist";
import AddMusica from "./components/AddMusica";
import ListaPlaylist from "./components/ListaPlaylist";



const GlobalStyle = createGlobalStyle`
  body {
    color: white;
    background-color: black;
    text-align: center
  }
`


class App extends React.Component {
  

render (){
  return (
    <div >
     <GlobalStyle/>
     <h1>🎧 Labefy 🎧 </h1>
     
<AddPlaylist/>
 
<AddMusica/>

<br/><br/><br/>



<ListaPlaylist/>
   
    </div>
  );
}
 
}

export default App;
