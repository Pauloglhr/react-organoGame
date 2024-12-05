import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Times from './components/Times';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores);
  }

  const jogos = [
    'League of Legends',
    'eFootball',
    'Counter-Strike',
    'Dota',
    'Fortnite'  
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario aoNovoColaborador={colaborador => aoNovoColaboradorAdicionado(colaborador)} jogos={jogos}/>
      <Times times={jogos}/>
    </div>
  );
}

export default App;
