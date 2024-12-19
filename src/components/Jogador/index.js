import './Jogador.css';

const Jogador = ({ jogos }) => {
    return(
        <div className='jogador'>
            <div className='bg-color' style={{backgroundColor: jogos.corSecundaria}}>
                <img src='assets/fb.jpg' alt='imagem do usuário'></img>
            </div>
            <div className='jogador-dados'>
                <span>Paulo</span>
                <p>Engenheiro de software</p>
            </div>
        </div>
    );
};

export default Jogador;