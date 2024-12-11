import './Banner.css';

const Banner = () => {
    return(
        <div className='banner'>
            <nav>
                <p>Icon</p>
                <div>
                    <a href='https://github.com/Pauloglhr/react-organoGame' target='_blank' rel='noreferrer'>Visite o projeto</a>
                    <span>Config</span>
                </div>
            </nav>
            <h1>Forme equipes <em>fantásticas!</em> </h1>
            <p>Monte, organize e altere suas equipes com esse organograma.</p>
        </div>
    );
};

export default Banner;