import React from 'react'

function Inicio() {
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
        </div>
    )
}

export default Inicio
