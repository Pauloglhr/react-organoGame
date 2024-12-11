import Input from '../Input';
import './Formulario.css';

const Formulario = () => {
    return(
        <div className='formulario'>
            <div className='formulario-imagem'></div>
            <div className='formulario-dados'>
                <h2>Informe os dados do jogador.</h2>
                <Input label={'Nome'} placeholder={'Digite o seu nome'}/>
                <Input label={'Função'} placeholder={'Digite sua função'}/>
                <Input label={'Imagem'} placeholder={'Informe o endereço da imagem'}/>
            </div>
        </div>
    );
};

export default Formulario;