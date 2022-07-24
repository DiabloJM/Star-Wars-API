import React from 'react';
import {useParams} from 'react-router-dom';
import Planet from './Planet';

export default function DetailsCharacter(){
     const {nombre, especie, genero, altura, nacimiento, planeta, imagen, descripcion} = useParams();
 
    return(
        <div className="main">
            <h1>{nombre}</h1>

            <div className = "row">
                <div className = "details">
                    <img 
                        src={imagen}
                        alt={nombre}
                    />
                    <div className = "info">
                        <p>Nacimiento: {nacimiento}</p>
                        <p>Genero: {genero}</p>
                        <p>Especie: {especie}</p>
                        <p>Altura: {altura}</p>
                    </div>
                </div>

                <div className = "description">
                    <h2>Descripcion:</h2>
                    <p>{descripcion}</p>
                    <h2>Planeta Natal:</h2>
                    if(planeta === "DESCONOCIDO")
                    {
                        <h2>DESCONOCIDO</h2>
                    }
                    else {
                        <Planet nombre={planeta.nombre} imagen={planeta.imagen}/>
                    }

                </div>
            </div>
        </div>
    )
}