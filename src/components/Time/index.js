import Jogador from '../Jogador';
import './Time.css';

const Time = ( {jogos} ) => {
    return(
        <div className='time' style={{backgroundColor: jogos.corPrimaria }}>
            <h4 style={{borderColor: jogos.corSecundaria}}>{jogos.nome}</h4>
            <div className='jogadores'>
                <Jogador jogos={jogos}/>
            </div>
        </div>
    );
};

export default Time;