import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const CambiarComic = props => {
    /* --------------------------------------------- BACKEND ------------------------------------------------------*/
    const{id} =useParams()
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios.get('api/verporid?id=13'/* ,{
                params: {
                    idComic:id
                } }*/
            )
                .then(response => {
                    setData(response.data);
                })
            setLoading(false);
        })();
    }, []);

    const handleInputChange = (event) =>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('id', data.id)
        formData.append('titulo', data.titulo)
        formData.append('descripcion', data.descripcion)
        formData.append('editorial', data.editorial)
        formData.append('ano', data.ano)
        formData.append('paginas', data.paginas)
        formData.append('precio', data.precio)

        await axios({
            method: "post",
            url: "api/updatecomics",
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
                console.log(response.data);
            });
    }

    /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container pt-5 pb-5">
            <h2>Editar Comic</h2>
            <p>Bienvendido, aquí podras editar tu comic</p>
            {data.map(dataItem => (

                <Form key={dataItem.titulo}>
                    <Form.Group controlId="formBasicTitle">
                        <Form.Label>Titulo: </Form.Label>
                        <Form.Control
                            type="text"
                            name="titulo"
                        
                            defaultValue={dataItem.titulo}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicDescripcion">
                        <Form.Label>Descripción: </Form.Label>
                        <Form.Control
                            type="text"
                            name="descripcion"
                            onChange={handleInputChange}
                            defaultValue={dataItem.descripcion}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEditorial">
                        <Form.Label>Imagen(URL): </Form.Label>
                        <Form.Control
                            type="text"
                            name="editorial"
                            onChange={handleInputChange}
                            defaultValue={dataItem.editorial}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicAno">
                        <Form.Label>Año: </Form.Label>
                        <Form.Control
                            type="text"
                            name="ano"
                            onChange={handleInputChange}
                            defaultValue={dataItem.ano}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPaginas">
                        <Form.Label>Paginas: </Form.Label>
                        <Form.Control
                            type="text"
                            name="paginas"
                            onChange={handleInputChange}
                            defaultValue={dataItem.paginas}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPrecio">
                        <Form.Label>Precio(MX): </Form.Label>
                        <Form.Control
                            type="text"
                            name="precio"
                            onChange={handleInputChange}
                            defaultValue={dataItem.precio}
                        />
                    </Form.Group>
                    <Button type="submit" onClick={handleUpdate}>Modificar</Button>
                    <br />
                    <br />
                    <Button as={Link} to="/LaravelApp/public/catalogo" variant="danger"> Cancelar </Button>
                </Form>
            ))}
        </div>
    )
}

export default CambiarComic
