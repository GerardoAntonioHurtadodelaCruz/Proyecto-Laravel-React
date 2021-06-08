import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { GrLogin } from "react-icons/gr";
import Footer from './Footer';
import './styles/Barra.css';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Registrarse from './pages/Registrarse';
import Paneldecontrol from './pages/Paneldecontrol';
import CambiarComic from './pages/CambiarComic';
import CatalogoUsuarios from './pages/CatalogoUsuarios';
import CambiarRegistros from './pages/CambiarRegistros';


function Example() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand as = {Link} to="/LaravelApp/public/paneldecontrol">Comixcon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link  as = {Link} to="/LaravelApp/public/inicio">Inicio</Nav.Link>
                            <Nav.Link  as = {Link} to="/LaravelApp/public/catalogo">Catalogo</Nav.Link>
                            <Nav.Link  as = {Link} to="/LaravelApp/public/contacto">Reseña</Nav.Link>
                            <Nav.Link  as = {Link} to="/LaravelApp/public/nosotros">Nosotros</Nav.Link>      
                            <Nav.Link  as = {Link} to="/LaravelApp/public/registrarse">Registrarse</Nav.Link>           
                        </Nav>
                        <Nav>
                         <Nav.Link href="#deets"><GrLogin/>  Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Switch>
                <Route exact path="/LaravelApp/public/inicio" component ={Inicio}/>
                <Route exact path="/LaravelApp/public/catalogo" component ={Catalogo}/>
                <Route exact path="/LaravelApp/public/contacto" component ={Contacto}/>
                <Route exact path="/LaravelApp/public/nosotros" component ={Nosotros}/>
                <Route exact path="/LaravelApp/public/registrarse" component ={Registrarse}/>
                <Route exact path="/LaravelApp/public/paneldecontrol" component ={Paneldecontrol}/>
                <Route exact path="/LaravelApp/public/cambiocomic" component ={CambiarComic}/>
                <Route exact path="/LaravelApp/public/catalogousuarios" component ={CatalogoUsuarios}/>
                <Route exact path="/LaravelApp/public/cambioregistros" component ={CambiarRegistros}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default Example;
