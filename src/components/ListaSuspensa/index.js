import './ListaSuspensa.css';

const ListaSuspensa = (props) =>{
    return (
        <div className='lista'>
            <label><strong>{props.label}</strong></label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default ListaSuspensa;