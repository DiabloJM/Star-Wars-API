import React from 'react';
import Carousel from './Carousel';
import './Home.css';

function Home(props) {
    return (
        <div className = "Container">
            <div className = "Carousel">
                <Carousel/>
            </div>
            <div className = "Nosotros">
                <h1 className = "Titulo">¿Quienes Somos?</h1>
                <h2 className = "Texto">
                    Somos fan de Star Wars que quieres aportar su parte al fandom hispano con esta enorme
                    fuente de informacion para los fans y para aquellos que quieran entrar en ella. Tu puedes ser uno de nosotros.
                </h2>
                <h2 className = "Texto">Ayudamos a que esta API de Star Wars se vuelva la mas completa de todas y que crezca dia a dia.</h2>
            </div>
        </div>
    );
}

export default Home;