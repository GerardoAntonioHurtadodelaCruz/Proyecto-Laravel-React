import React from 'react';
import '../styles/Catalogo.css';
import {Carousel} from 'react-bootstrap';
import Cards from './Cards';
import EliminarComic from './EliminarComic';

function Catalogo() {
    return (
        <div className="contenedor">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images2.alphacoders.com/106/thumb-1920-1062230.jpg" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.alphacoders.com/669/thumb-1920-669681.jpg" alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images6.alphacoders.com/371/thumb-1920-371734.jpg" alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
            <div>
              <Cards/>
            </div>
        </div>
    )
}

export default Catalogo
