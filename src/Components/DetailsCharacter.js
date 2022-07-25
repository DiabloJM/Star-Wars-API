import React from 'react';
import Planet from './Planet';

export default function DetailsCharacter (params){
    const {nombre} = params.nombre;
    const {imagen} = params.imagen;
    const {especie} = params.especie;
    const {genero} = params.genero;
    const {altura} = params.altura;
    const {nacimiento} = params.nacimiento;
    const {planeta} = params.planeta;
    const {descripcion} = params.descripcion;

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