import './Input.css';

const Input = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
                onChange={aoDigitado}
                placeholder={props.placeholder} 
                required={props.obrigatorio}
            />
        </div>
    );
};

export default Input;