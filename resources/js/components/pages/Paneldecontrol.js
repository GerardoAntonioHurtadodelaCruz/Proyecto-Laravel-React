import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import AgregarComic from './AgregarComic';
import CambiarComic from './CambiarComic';
import EliminarComic from './EliminarComic';

function Paneldecontrol() {
    return (
        <div className="container pt-3 pb-3">
            <h2>Agregar un nuevo Comic</h2>
            <p>Bienvendido, aquí podras agregar un nuevo comic</p>
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <AgregarComic/>
                </div>
            </div>
        </div>

    )
}

export default Paneldecontrol
