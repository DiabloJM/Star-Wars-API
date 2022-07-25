import React, {useState} from 'react';
import planetsjson from '../Data/planets.json';
import Planet from './Planet';
import Pagination from '@mui/material/Pagination';
import './Planets.css';

function Planets(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const [filter, setFilter] = useState('');
    const countPage = 2;

    const handleChange = (event, value) => {
        setCurrentPage(value - 1);
    }

    return (
        <div className="List">
            <input className="SearchBar" type="text" placeholder="Buscar..." onChange={e => setFilter(e.target.value)} />
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} size="large" variant="outlined" shape="rounded" className="Pagination"/>
            <div className="row">
                {
                planetsjson[currentPage].resultados.filter(planetsjson => planetsjson.nombre.includes(filter)).map( planet =>
                        <Planet
                            key={planet.id}
                            nombre={planet.nombre}
                            imagen={planet.imagen}
                        />
                )
                }
            </div>
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} size="large" variant="outlined" shape="rounded" className="Pagination"/>
        </div>
    );
}

export default Planets;