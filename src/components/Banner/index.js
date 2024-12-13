import './Banner.css';
import { IoMenu } from "react-icons/io5";

const Banner = () => {
    return(
        <div className='banner'>
            <nav>
                <img src="/assets/banner-logo.png" width={64} alt='logo do organo'/>
                <div>
                    <a href='https://github.com/Pauloglhr/react-organoGame' target='_blank' rel='noreferrer'>Visite o projeto</a>
                    <IoMenu size={32} className="menu"/>
                </div>
            </nav>
            <h1>Forme equipes <em>fantásticas!</em> </h1>
            <p>Monte, organize e altere suas equipes com esse organograma.</p>
        </div>
    );
};

export default Banner;