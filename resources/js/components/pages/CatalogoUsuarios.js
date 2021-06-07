import React, { useState, useEffect } from 'react';
import { Table, Button} from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom';

/* --------------------------------------------- BACKEND ------------------------------------------------------*/
const CatalogoUsuarios = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios({
                method: 'get',
                url: 'api/verusuarios'
            })
                .then(response => {
                    console.log('response.data', response.data)
                    setData(response.data);
                })
            setLoading(false);


        })();
    }, []);
    /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container pb-5 pt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Email</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(dataItem => (
                        <tr key={dataItem.id}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.nombre}</td>
                            <td>{dataItem.apellidoMa}</td>
                            <td>{dataItem.apellidoPa}</td>
                            <td>{dataItem.email}</td>
                            <td>{dataItem.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button as = {Link} to="/LaravelApp/public/registrarse"  variant="danger"> Regresar </Button>
        </div>
    )
}

export default CatalogoUsuarios
