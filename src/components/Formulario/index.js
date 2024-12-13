import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const jogos = [
        'League of Legends',
        'PUBG',
        'Counter-Strike',
        'Efootball',
        'Overwatch'
    ]

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        console.log('O formulário foi submetido.');
    }

    return(
        <div className='formulario'>
            <div className='formulario-imagem'></div>
            <form className='formulario-dados' onSubmit={aoSalvar}>
                <h2>Informe os dados do jogador.</h2>
                <CampoTexto label={'Nome'} placeholder={'Digite o seu nome'} required={true}/>
                <CampoTexto label={'Função'} placeholder={'Digite sua função'} required={true}/>
                <CampoTexto label={'Imagem'} placeholder={'Informe o endereço da imagem'} required={true}/>
                <ListaSuspensa label={'Jogos'} itens={jogos} required={true}/>
                <Botao>
                    Criar Jogador
                </Botao>
            </form>
        </div>
    );
};

export default Formulario;