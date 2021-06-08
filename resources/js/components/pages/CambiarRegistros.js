import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CambiarRegistros = props => {
    /* --------------------------------------------- BACKEND ------------------------------------------------------*/
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios.get('api/verusuariosporid?id=15')
                .then(response => {
                    setData(response.data);
                })
            setLoading(false);
        })();
    }, []);
     /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container pt-5 pb-5">
            <h2>Editar Usuarios</h2>
            <p>Bienvendido, aquí podras editar registros de usuarios</p>
            {data.map(dataItem => (

                <Form key={dataItem.titulo}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre"
                            defaultValue={dataItem.nombre}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicDescripcion">
                        <Form.Label>Apellido Paterno:</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidoPa"
                            defaultValue={dataItem.apellidoPa}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEditorial">
                        <Form.Label>Apellido Materno:</Form.Label>
                        <Form.Control
                            type="text"
                            name="apellidoMa"
                            defaultValue={dataItem.apellidoMa}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAno">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            defaultValue={dataItem.email}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAno">
                        <Form.Label>Edad:</Form.Label>
                        <Form.Control
                            type="text"
                            name="edad"
                            defaultValue={dataItem.edad}
                        />
                    </Form.Group>
                    <Button type="submit">Modificar</Button>
                    <br />
                    <br />
                    <Button as={Link} to="/LaravelApp/public/catalogousuarios" variant="danger"> Cancelar </Button>
                </Form>
            ))}
        </div>
    )
}

export default CambiarRegistros
