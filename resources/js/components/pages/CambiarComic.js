import React, {useState, useEffect} from 'react'; 
import Axios from 'axios';
import {Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CambiarComic =props => {
     /* --------------------------------------------- BACKEND ------------------------------------------------------*/
     const [data, setData] = useState([]);
     const [isLoading, setLoading] = useState(false);
     useEffect(() => {  
        (async () => {  
          setLoading(true);
          const response = await Axios({ method: 'get', url: 'api/vercomics'/* ,params: {idComics:id} */})
            .then(response => {
                setData(response.data);
            })
          setLoading(false);
          
          /* console.log(data) */
        })();
      }, []);

        const handleUpdate = async (e) =>{
          e.preventDefault();
          let formData = new FormData()
          formData.append('id', this.state.form.id) 
          formData.append('titulo', this.state.form.id) 
          formData.append('descripcion', this.state.form.id) 
          formData.append('editorial', this.state.form.id) 
          formData.append('ano', this.state.form.id) 
          formData.append('paginas', this.state.form.id) 
          formData.append('precio', this.state.form.id) 

          await axios({
              method: "post",
              url: "api/updatecomics",
              data: formData,
              config: {headers: {'Content-Type': 'multipart/form-data'}}
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
            {data.map(dataItem =>(

            <Form key={dataItem.titulo}>
            <Form.Group controlId="formBasicTitle">
                   <Form.Label>Titulo: </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="titulo"
                   defaultValue={dataItem.titulo}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Form.Group controlId="formBasicDescripcion">
                   <Form.Label>Descripción: </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="descripcion"
                   defaultValue={dataItem.descripcion}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Form.Group controlId="formBasicEditorial">
                   <Form.Label>Imagen(URL): </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="editorial"
                   defaultValue={dataItem.editorial}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Form.Group controlId="formBasicAno">
                   <Form.Label>Año: </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="ano"
                   defaultValue={dataItem.ano}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Form.Group controlId="formBasicPaginas">
                   <Form.Label>Paginas: </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="paginas"
                   defaultValue={dataItem.paginas}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Form.Group controlId="formBasicPrecio">
                   <Form.Label>Precio(MX): </Form.Label>
                   <Form.Control 
                   type="text" 
                   name="precio"
                   defaultValue={dataItem.precio}
                   onChange={e => {
                    const newValue = e.target.value;
                    setDataobj(prevState => ({
                    ...prevState, titulo: newValue
                       })
                       );
                   }}  
                   />
               </Form.Group>
               <Button type="submit" onClick={handleUpdate}>Modificar</Button>
               <br/>
               <br/>
               <Button as = {Link} to="/LaravelApp/public/catalogo"  variant="danger"> Cancelar </Button>
            </Form>
            ))}
        </div>
    )
}

export default CambiarComic
