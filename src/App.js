import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Times from './components/Times';

function App() {

  const jogos = [
    'League of Legends',
    'PUBG',
    'Counter-Strike',
    'Efootball',
    'Overwatch'
]

  return (
    <div className="App">
      <Banner />
      <Formulario jogos={jogos}/>
      <Times />
    </div>
  );
}

export default App;
