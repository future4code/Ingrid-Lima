import React from "react";
import { createGlobalStyle } from 'styled-components'
import AddPlaylist from "./components/AddPlaylist";
import AddMusica from "./components/AddMusica";



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
   
    </div>
  );
}
 
}

export default App;
