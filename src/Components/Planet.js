import React from 'react';

export default function Planet(props){
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
                    <button>Ver</button>
                </div>
            </div>
        </div>
    )
}