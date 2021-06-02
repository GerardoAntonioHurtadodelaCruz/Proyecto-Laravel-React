import React, {useState} from 'react';
import Axios from 'axios';
import {Form, Button} from 'react-bootstrap';


function Contacto() {
     /* --------------------------------------------- BACKEND ------------------------------------------------------*/
     const [data, setData] = useState({
        correo:'',
        asunto:'',
        mensaje:''
    })

    const [comentarios,setComentarios] = useState([])
    const handleInputChange = (event) =>{
        setData({   
            ...data,
            [event.target.name] : event.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();

        formData.append('correo',data.correo)
        formData.append('asunto',data.asunto)
        formData.append('mensaje',data.mensaje)
        await Axios({
            method: 'post',
            url: 'api/nuevocomentarios',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
    }
    /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container-fluid pb-5">
            <div className="container pt-3 text-center prueba">
                <h1>¿Necesitas contactarnos?</h1>
                <p>Envianos un mensaje</p>
            </div>
            <div className="row">
                <div className="col-sm-12  col-lg-6" id="datos">
                    <form className="container-fluid">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Correo electronico:</Form.Label>
                            <Form.Control type="email" name="correo" placeholder="nombre@ejemplo.com" onChange={ handleInputChange}/>
                        </Form.Group>
                        <Form.Label>Asunto:</Form.Label>
                        <Form.Control type="text" name="asunto" onChange={ handleInputChange}/>
                        <br/>
                        <Form.Label>Dejanos tu mensaje:</Form.Label>
                        <Form.Control as="textarea" rows={10} name="mensaje" onChange={ handleInputChange}/>
                            <div className="pt-3">
                                <Button variant="light" onClick={handleSubmit} type="submit">Enviar</Button>
                            </div>
                    </form>
                </div>
                <div className="col-sm-12 col-lg-6" widht="300">
                    <img className="img-fluid cover" src="https://images2.alphacoders.com/588/thumbbig-588014.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Contacto
