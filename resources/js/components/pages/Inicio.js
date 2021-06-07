import Axios from 'axios';
import React, { useState, useEffect} from 'react';
import {Toast,ToastHeader, ToastBody } from 'react-bootstrap';




/* --------------------------------------------- BACKEND ------------------------------------------------------*/

const Inicio = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await Axios({
                method: 'get',
                url: 'api/vercomentarios'
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
        <div className="container pt-3 pb-5" >
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img className="img-fluid" src="https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </div>
                <div className="col-lg-6 col-sm-12 section pt-5">
                    <h2>¿Que es Comixcon?</h2>
                    <p className="text-justify">
                        Comixcon es un sitio dedicado a los verdaderos fans de los comics, el cual te permite interactuar
                        con otros fanaticos para intercambiar conceptos, ideas, conspiraciones e incluso debatir si spiderman es el mejor
                        superheroe.
                    </p>
                </div>
            </div>
            <div className="container pt-5 pb-5">
                <h2>Reseñas de la pagina:</h2>
            </div>
            {data.map(dataItem => (
                <Toast>
                <Toast.Header>
                  <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                  <strong className="mr-auto">{dataItem.asunto}</strong>
                  <small>{dataItem.created_at}</small>
                </Toast.Header>
                <Toast.Body>{dataItem.mensaje}</Toast.Body>
              </Toast>
                     ))}
        </div>
    )
}

export default Inicio
