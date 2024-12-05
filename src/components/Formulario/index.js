import Input from '../Input';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import './Formulario.css';
import { useState } from 'react';

const Formulario = (props) => {
    
    const aoSalvar = (e) =>{
        e.preventDefault();
        props.aoNovoColaborador({
            nome,
            descricao,
            imagem,
            jogo
        })
    }

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');
    const [jogo, setJogo] = useState('')

    return(
        <div className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <Input 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    obrigatorio={true}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input 
                    label='Descrição' 
                    placeholder='Digite sua descrição. exemplo: posição/função.'
                    obrigatorio={true}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <Input 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem'
                    obrigatorio={true}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label='Jogos' 
                    itens={props.jogos}
                    aoAlterado={valor => setJogo(valor)}
                />
                <Botao>Enviar</Botao>
            </form>
        </div>
    );
};

export default Formulario;