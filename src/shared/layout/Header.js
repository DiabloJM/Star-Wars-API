import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/Star_Wars_Logo.png';
import {Link} from 'react-router-dom';


const Header = (props) => {
    const { title, url} = props;

    return (
        <header className="App-header">
            <div className="App-header-logo">
                <Link to="/">
                    <a href={url}>
                            <img src={logo} className="App-logo" alt="logo" />
                    </a>
                </Link>
                    <h1>{title}</h1>

            </div>

            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/personajes">Personajes</Link></li>
                <li><Link to="/planetas">Planetas</Link></li>
            </ul>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;