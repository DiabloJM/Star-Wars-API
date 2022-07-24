import React, {useState} from 'react';
import planetsjson from '../Data/planets.json';
import Planet from './Planet';
import Pagination from '@mui/material/Pagination';

function Planets(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const countPage = 2;

    const handleChange = (event, value) => {
        setCurrentPage(value - 1);
    }

    return (
        <div className="List">
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} variant="outlined" shape="rounded"/>
            <div className="row">
                {
                planetsjson[currentPage].resultados.map((planet) => (
                        <Planet
                            key={planet.id}
                            nombre={planet.nombre}
                            imagen={planet.imagen}
                        />
                ))
                }
            </div>
            <Pagination count={countPage} page={currentPage + 1} onChange={handleChange} variant="outlined" shape="rounded"/>
        </div>
    );
}

export default Planets;