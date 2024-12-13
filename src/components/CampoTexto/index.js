import './Input.css';

const CampoTexto = (props) => {
    return(
        <div className='campoTexto'>
            <label htmlFor={props.label}><strong>{props.label}</strong></label> 
            <input
                id={props.label} 
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    );
};

export default CampoTexto;