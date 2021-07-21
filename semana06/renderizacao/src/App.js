import React from 'react';

import './App.css';
import Etapa1 from './components/Etapa1';
 import Etapa2 from "./components/Etapa2";
 import Etapa3 from './components/Etapa3';

 class App extends React.Component {
   state ={
   etapa: 1
   }
 }
 renderizarEtapa =() => {
   switch (this.state.etapa){
     case 1:
       return <Etapa1 />
       case 2: 
       return <
   }
 }