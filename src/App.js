import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

const jogos = [
  {
    nome: 'League of Legends',
    corPrimaria: '#CBA135',
    corSecundaria: '#0A1128'
  },
  {
    nome: 'PUBG',
    corPrimaria: '#D2B48C',
    corSecundaria: '#2E2E2E'
  },
  {
    nome: 'Counter-Strike',
    corPrimaria: '#E4D4A1',
    corSecundaria: '#9C7248'
  },
  {
    nome: 'Efootball',
    corPrimaria: '#0B0D98',
    corSecundaria: '#FFD700'
  },
  {
    nome: 'Overwatch',
    corPrimaria: '#FFA500',
    corSecundaria: '#000000'
  }
]

  return (
    <div className="App">
      <Banner />
      <Formulario jogos={jogos}/>
      <section className='times'>
        <h3><em>Meus times</em></h3>
        {jogos.map(jogo =>{
          return <Time key={jogo.nome} jogos={jogo}/>
        })}
      </section>
    </div>
  );
}

export default App;
