import React, {useState, useEffect} from 'react';
import useDataFetching from "../Hooks/useDataFetching";
import task from "../Data/data2.json"; 

function Characters(props) {
    const [currentPage, setCurrentPage] = useState("https://rickandmortyapi.com/api/character");
    const [pages, setPages] = useState();
    const [loading, error, data] = useDataFetching(task);
    //const [countPage, setCountPage] = useState(1);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        setCharacters(data);
    }, [data])
    console.log(characters);

    return (
        
        <div>
            <h1>CHARACTERS!</h1>
            <p>{characters}</p>
        </div>
    );
}

export default Characters;