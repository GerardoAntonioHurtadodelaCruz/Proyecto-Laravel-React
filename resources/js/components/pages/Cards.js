import Axios from 'axios';
import {Link} from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import '../styles/Cards.css';


  /* --------------------------------------------- BACKEND ------------------------------------------------------*/
const cards = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => { 
        (async () => {  
          setLoading(true);
          const response = await Axios({
              method: 'get',
              url: 'api/vercomics'
            })
            .then(response => {
               console.log('response.data',response.data) 
                setData(response.data);
            })
          setLoading(false);
          
         
        })();
      }, []);
      
      /* --------------------------------------------- FRONTEND ------------------------------------------------------*/
    return (
      <div className="container-fluid pt-5 pb-5">   
        {data.map(dataItem =>(
          <div className="row" key={dataItem.id}>
            <div className="col-sm-12 col-lg-6 pt-3 pb-3">
            <Card className="img-fluid">
            <Card.Img src={dataItem.editorial} />
            <Card.Body>
                <Card.Title>{dataItem.titulo}</Card.Title>
                <Card.Text>
                {dataItem.descripcion}
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="col-sm-12 col-lg-6 pt-3 pb-3 caracterisiticas">
              <h4>Detalles </h4>
              <h5>ID: {dataItem.id} </h5>
              <br/>
              <br/>
              <h6>Precio Aproximado(Mx): </h6>
              <p>${dataItem.precio}</p>
              <h6>Año de publicación: </h6>
              <p>{dataItem.ano}</p>
              <h6>Paginas totales: </h6>
              <p>{dataItem.paginas}</p>
              <Button as = {Link} to="/LaravelApp/public/cambiocomic"> Editar </Button>
              <br/>
              <br/>
              <br/>
              <Button as = {Link} to="/LaravelApp/public/eliminarcomic"> Eliminar </Button>
            </div>
            <br/>
          </div>
        ))}
      
      </div>
       
    )
} 

export default cards
