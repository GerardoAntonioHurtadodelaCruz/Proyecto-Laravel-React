import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EliminarUsuario = props => {
    /* --------------------------------------------- BACKEND ------------------------------------------------------*/
    const{id} =useParams()
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios.get('api/eliminarusuarios?id=2'/* ,{
                    idComic:id
                } }*/
            )
                .then(response => {
                    setData(response.data);
                })
            setLoading(false);
        })();
    }, []);

    /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container pt-5 pb-5">
            <h2>Editar Comic</h2>
            <p>Bienvendido, aquí podras editar tu comic</p>
            {data.map(dataItem => (
                        <h1>Hola</h1>
            
            ))}
        </div>
    )
}

export default EliminarUsuario
