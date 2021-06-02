import React, {useState} from 'react'; 
import Axios from 'axios';
import {Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../styles/Registrarse.css';


function Registrarse() {
 /* --------------------------------------------- BACKEND ------------------------------------------------------*/
    const [data, setData] = useState({
        nombre:'',
        apellidoPa:'',
        apellidoMa:'',
        email:'',
        edad:''
    })

    const [usuarios,setUsuarios] = useState([])

    const handleInputChange = (event) =>{
        setData({   
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();

        formData.append('nombre',data.nombre)
        formData.append('apellidoPa',data.apellidoPa)
        formData.append('apellidoMa',data.apellidoMa)
        formData.append('email',data.email)
        formData.append('edad',data.edad)
        await Axios({
            method: 'post',
            url: 'api/nuevousuarios',
            data: formData,
            config: {headers: {'Content-Type': 'multipart/form-data'}}
        })
        .then(response =>{
            console.log('ya lo agregaste');
        })
    }

     /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div className="container pt-5 pb-5 form">
           <form>
            <Form.Group controlId="formBasicNombre">  
                <Form.Label>Nombre Perro </Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Ingresa tu nombre" onChange={ handleInputChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicApellidoPa">  
                <Form.Label>Apellido Paterno </Form.Label>
                <Form.Control type="text" name="apellidoPa" placeholder="Ingresa tu apellido paterno" onChange={ handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicApellidoMa">  
                <Form.Label>Apellido Materno </Form.Label>
                <Form.Control type="text" name="apellidoMa" placeholder="Ingresa tu apellido materno" onChange={ handleInputChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">  
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="ejemploemail@gmail.com" onChange={ handleInputChange}/>
                <Form.Text className="text-muted"> Asegurate de ingresar un formato correcto. </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicedad">  
                <Form.Label>Edad </Form.Label>
                <Form.Control type="text" name="edad" placeholder="Ingresa tu edad" onChange={ handleInputChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit} >Enviar</Button> 
           </form>
        </div>
    )
}

export default Registrarse
