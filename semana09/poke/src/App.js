import React,{useState} from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import React,{useEffect} from "react";

const App = () => {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")

  const changePokeName = event => {
    setPokeName (event.target.value)
  }
  return (
    <div>
      oi
    </div>
  );
}

export default App;
