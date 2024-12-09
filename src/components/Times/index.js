import './Times.css';

const Times = (props) =>{
    return(
        <section className='times'>
            <h3>Meus squads:</h3>
            {props.times.map(time =>{ 
                return(
                    <div key={time}>
                        <h4>{time}</h4>
                    </div>
                )
                
            })}
        </section>
    );
};

export default Times;