import React from 'react';
import Axios from 'axios';
import {Form,Button} from 'react-bootstrap';

const CambiarComic =props => {
     /* --------------------------------------------- BACKEND ------------------------------------------------------*/
   /*  const [data, setData] =useState({});
    const [dataobj, setDataobj] = useState({
        titulo:"",
        descripcion:"",
        editorial:"",
        ano:"",
        paginas:"",
        precio:""
    });
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios({
                method='get',
                url: 'api/cambiarcomics'
                })
                .then(response => {
                    setDataobj(prevState => ({
                        ...prevState,
                        titulo : response.data[0].titulo,
                        descripcion : response.data[0].descripcion,
                        editorial : response.data[0].editorial,
                        ano : response.data[0].ano,
                        paginas : response.data[0].paginas,
                        precio : response.data[0].precio
                        })
                    )
                })
                setLoading(false);
        })();
    },[]);

    
 */
     /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
        <div>
            <Form>
            <Form.Group controlId="formBasicTitle">
                   <Form.Label>Titulo: </Form.Label>
                   <Form.Control 
                  /*  type="text" 
                   name="titulo"
                   value={dataobj.titulo}
                   onChange={e => {
                       const newValue = e.target.value;
                       setDataobj(prevState => ({
                           ...prevState, titulo: newValue
                       })
                       );
                   }} */
                   />
               </Form.Group>
               <Form.Group controlId="formBasicDescripcion">
                   <Form.Label>Descripción: </Form.Label>
                   <Form.Control type="text" name="descripcion"/>
               </Form.Group>
               <Form.Group controlId="formBasicEditorial">
                   <Form.Label>Imagen(URL): </Form.Label>
                   <Form.Control type="text" name="editorial"/>
               </Form.Group>
               <Form.Group controlId="formBasicAno">
                   <Form.Label>Año: </Form.Label>
                   <Form.Control type="text" name="ano"/>
               </Form.Group>
               <Form.Group controlId="formBasicPaginas">
                   <Form.Label>Paginas: </Form.Label>
                   <Form.Control type="text" name="paginas"/>
               </Form.Group>
               <Form.Group controlId="formBasicPrecio">
                   <Form.Label>Precio(MX): </Form.Label>
                   <Form.Control type="text" name="precio"/>
               </Form.Group>
               <Button type="submit">Modificar</Button>
            </Form>
        </div>
    )
}

export default CambiarComic
