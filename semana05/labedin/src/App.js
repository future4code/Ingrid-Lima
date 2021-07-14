import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from "./perfil.jpg"
import CardPequeno from './components/CardPequeno/CardPequeno';
import emailLogo from "./email.png"
import localizacao from './localizacao.png'
import logoLabenu from "./logoLabenu.png"
import mecanica from './mecanica.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil}
          nome="Ingrid Lima " 
          descricao="Oi, eu sou a Ingrid, tenho 23 anos, sou estudante de Web Full stack e Mecânica Automobilistica, adoro carros e suas funcionalidades."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

<CardPequeno
          imagem={emailLogo}
          palavras='Email:'
          email=" silva_ingrid@outlook.com"
        />

<CardPequeno
          imagem={localizacao}
          palavras='Endereço:'
          email=" Itaquaquecetuba, São paulo, Brasil"
        />

        </div>

      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoLabenu}
          nome="Web Full Stack" 
          descricao="Front - End ( JavaScript, HTML, CSS e React)."
          
        />
        
        <CardGrande 
          imagem= {mecanica}
          nome="Mecânica Automobilistica" 
          descricao="Pequenos Reparos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
