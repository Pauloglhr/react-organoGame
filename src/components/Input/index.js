import './Input.css';

const Input = (props) => {
    return(
        <div className='input'>
            <label htmlFor={props.label}><strong>{props.label}</strong></label> 
            <input
                id={props.label} 
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;