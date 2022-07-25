import React from 'react';

import {Link} from 'react-router-dom';

export default function Character(props){
    const {nombre, imagen} = props;

    return(
        <div className="col-3">
            <div className="card mb-3">
                <img 
                    src={imagen}
                    alt={nombre}
                    width="500"
                    height="300"
                    className="card-img-top"
                />
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <Link to="/detallesPersonaje/" 
                    params={{nombre: nombre, imagen: imagen, especie: props.especie, genero: props.genero, altura: props.altura,
                    nacimiento: props.nacimiento, planeta: props.planeta, descripcion: props.descripcion}} >Ver</Link>
                </div>
            </div>
        </div>
    )
}