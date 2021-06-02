import React, {useState} from 'react';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function EliminarComic() {
     /* --------------------------------------------- BACKEND ------------------------------------------------------*/
     const [data, setData] = useState({
        id:'',
    })

    const [comics, setComics] = useState([])

    const handleInputChange = (event) =>{
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();

        formData.append('id',data.id)
        await Axios({
            method: 'get',
            url: 'api/eliminarcomics',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
    }
    /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Titulo: </Form.Label>
                    <Form.Control type="text" name="id" placeholder="Escribe aqui el titulo" onChange={ handleInputChange}/>
                </Form.Group>
                <Button type="submit"  onClick={handleSubmit}>Eliminar</Button>
            </Form>
        </div>
    )
}

export default EliminarComic
