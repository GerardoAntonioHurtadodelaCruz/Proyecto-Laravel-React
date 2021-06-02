import React, {useState} from 'react'; 
import Axios from 'axios';
import {Form, Button, FormGroup} from 'react-bootstrap';



function AgregarComic() {
    /* --------------------------------------------- BACKEND ------------------------------------------------------*/
    const [data, setData] = useState({
        titulo:'',
        descripcion:'',
        editorial:'',
        ano:'',
        paginas:'',
        precio:'',
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

        formData.append('titulo',data.titulo)
        formData.append('descripcion',data.descripcion)
        formData.append('editorial',data.editorial)
        formData.append('ano',data.ano)
        formData.append('paginas',data.paginas)
        formData.append('precio',data.precio)
        await Axios({
            method: 'post',
            url: 'api/nuevocomics',
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
                   <Form.Control type="text" name="titulo" placeholder="Escribe aqui el titulo" onChange={ handleInputChange}/>
               </Form.Group>
               <Form.Group controlId="formBasicDescripcion">
                   <Form.Label>Descripción: </Form.Label>
                   <Form.Control type="text" name="descripcion" placeholder="Escribe aqui la descripción"  onChange={ handleInputChange}/>
               </Form.Group>
               <Form.Group controlId="formBasicEditorial">
                   <Form.Label>Imagen(URL): </Form.Label>
                   <Form.Control type="text" name="editorial" placeholder="Ingresa la URL de la imagen"  onChange={ handleInputChange}/>
               </Form.Group>
               <Form.Group controlId="formBasicAno">
                   <Form.Label>Año: </Form.Label>
                   <Form.Control type="text" name="ano" placeholder="Ingresa el año de publicación"  onChange={ handleInputChange}/>
               </Form.Group>
               <Form.Group controlId="formBasicPaginas">
                   <Form.Label>Paginas: </Form.Label>
                   <Form.Control type="text" name="paginas" placeholder="Ingresa la cantidad de paginas"  onChange={ handleInputChange}/>
               </Form.Group>
               <Form.Group controlId="formBasicPrecio">
                   <Form.Label>Precio(MX): </Form.Label>
                   <Form.Control type="text" name="precio" placeholder="Ingresa el costo en pesos"  onChange={ handleInputChange}/>
               </Form.Group>
               <Button type="submit" onClick={handleSubmit}>Crear</Button>
           </Form>
        </div>
    )
}

export default AgregarComic
