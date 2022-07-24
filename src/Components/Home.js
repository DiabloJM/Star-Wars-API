import React from 'react';
import Carousel from './Carousel';
import Planetas from '../shared/images/Planetas.png';
import Personajes from '../shared/images/Personajes.png';
import {Link} from 'react-router-dom';
import './Home.css';

function Home(props) {
    return (
        <div className = "Container">
            <div className = "Carousel">
                <div class="col-2"></div>
                <Carousel/>
            </div>

            <div className = "Nosotros">
                <h1 className = "Titulo">¿quienes Somos?</h1>
                <h2 className = "Texto">
                    Somos fan de Star Wars que quieres aportar su parte al fandom hispano con esta enorme
                    fuente de informacion para los fans y para aquellos que quieran entrar en ella. Tu puedes ser uno de nosotros.
                </h2>
                <h2 className = "Texto">Ayudamos a que esta API de Star Wars se vuelva la mas completa de todas y que crezca dia a dia.</h2>
            </div>
        
            <div className = "Botones">
                <Link to="/planetas">
                    <div className = 'col-5'>
                        <div className = 'card mb-3'>
                            <img 
                                src={Planetas}
                                alt="Planetas"
                                className='Planetas'
                            />
                            <div className = 'card-body'>
                                <h2 className = 'card-title'>Planetas</h2>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/personajes">
                    <div className = 'col-5'>
                        <div className = 'card mb-3'>
                            <img 
                                src={Personajes}
                                alt="Personajes"
                                className='Personajes'
                            />
                            <div className = 'card-body'>
                                <h2 className = 'card-title'>Personajes</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home;