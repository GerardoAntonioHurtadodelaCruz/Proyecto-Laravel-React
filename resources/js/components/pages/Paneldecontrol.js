import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import AgregarComic from './AgregarComic';
import CambiarComic from './CambiarComic';
import EliminarComic from './EliminarComic';

function Paneldecontrol() {
    return (
        <div className="container pt-3 pb-3">
            <h2>Panel de control</h2>
            <p>Bienvendido, aquí podras controlar la base de datos</p>
            <div className="row">
                <div className="col-sm-12 col-lg-4">
                    <Modal.Dialog>
                        <Modal.Header >
                            <Modal.Title>Registrar comic</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <AgregarComic/>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <Modal.Dialog>
                        <Modal.Header >
                            <Modal.Title>Modificar comic</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <CambiarComic/>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
                <div className="col-sm-12 col-lg-4">
                    <Modal.Dialog>
                        <Modal.Header >
                            <Modal.Title>Eliminar comic</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EliminarComic/>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
               
            </div>
        </div>

    )
}

export default Paneldecontrol
