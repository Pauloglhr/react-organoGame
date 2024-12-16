import './Input.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) =>{
        {props.aoAlterado(evento.target.value)}
    }

    return(
        <div className='campoTexto'>
            <label htmlFor={props.label}><strong>{props.label}</strong></label> 
            <input
                id={props.label} 
                placeholder={props.placeholder}
                required={props.required}
                onChange={aoDigitado}
            />
        </div>
    );
};

export default CampoTexto;