import './ListaSuspensa.css';

const ListaSuspensa = (props) =>{
    return (
        <div className='lista'>
            <label><strong>{props.label}</strong></label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
};

export default ListaSuspensa;