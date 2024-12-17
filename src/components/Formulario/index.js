import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        const colaborador = {
            nome,
            funcao,
            imagem,
            jogo
        }
        console.log(colaborador);
        
    }

    const [nome, setNome] = useState('');
    const [funcao, setFuncao] = useState('');
    const [imagem, setImagem] = useState('');
    const [jogo, setJogo] = useState('');

    return(
        <div className='formulario'>
            <div className='formulario-imagem'></div>
            <form className='formulario-dados' onSubmit={aoSalvar}>
                <h2>Informe os dados do jogador.</h2>
                <CampoTexto aoAlterado={nome => setNome(nome)} label={'Nome'} placeholder={'Digite o seu nome'} required={true}/>
                <CampoTexto aoAlterado={funcao => setFuncao(funcao)} label={'Função'} placeholder={'Digite sua função'} required={true}/>
                <CampoTexto aoAlterado={imagem => setImagem(imagem)} label={'Imagem'} placeholder={'Informe o endereço da imagem'} required={true}/>
                <ListaSuspensa aoAlterado={jogo => setJogo(jogo)} label={'Jogos'} itens={props.jogos} required={true}/>
                <Botao>
                    Criar Jogador
                </Botao>
            </form>
        </div>
    );
};

export default Formulario;