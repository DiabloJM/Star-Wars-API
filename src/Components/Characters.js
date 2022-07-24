import React, {useState} from 'react';
import characterjson from '../Data/characters.json';
import Character from './Character';
import Pagination from '@mui/material/Pagination';
import './Characters.css';

function Characters(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState('');
    const countPage = 2;

    const handleChange = (event, value) => {
        setCurrentPage(value - 1);
    }

    return (
        <div className="List">
            <input type="text" placeholder="Buscar" onChangeText={(text) => setFilter(text)}/>
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} variant="outlined" shape="rounded"/>
            <div className="row">
            {
                characterjson[currentPage].resultados.map((character) => (
                        <Character
                            key={character.id}
                            nombre={character.nombre}
                            imagen={character.imagen}
                        />
                ))
                }
            </div>
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
    );
}

export default Characters;