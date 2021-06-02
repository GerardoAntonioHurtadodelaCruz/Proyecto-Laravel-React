import React from 'react';
import './styles/footer.css';
import { FaFacebookF} from "react-icons/fa";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiOutlineMail,AiOutlineGithub } from "react-icons/ai";

function Footer (){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                        {/* Content of the column 1 */}
                        <div className="col-md-3 col-sm-6" id="hola">
                            <a><img src="https://static.vecteezy.com/system/resources/previews/001/199/586/non_2x/fist-comic-png.png"></img></a>
                        </div>
                        {/* Content of the column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Acerca de Comixcon</h4>
                                <ul className="list-unstyled">
                                  <li> Quienes somos </li>
                                  <li> Contactanos </li>
                                </ul>
                        </div>
                        {/* Content of the column 3 */}
                        <div className="col-md-3 col-sm-6">
                        <h4>Social</h4>
                                <ul className="list-unstyled">
                                  <li><FaFacebookF className="iconos"/><a href="https://www.facebook.com/profile.php?id=100009452160941" target="_blank"> Oscxr Slim SA</a></li>
                                  <li><TiSocialInstagramCircular className="iconos"/><a href="https://www.instagram.com/oscxrslimsa/?hl=es-la" target="_blank"> oscxrslimsa</a></li>
                                  <li><AiOutlineMail className="iconos"/><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"> oscxrslimsa@gmail.com </a></li>
                                  <li><AiOutlineGithub className="iconos"/><a href="https://github.com" target="_blank"> oscxrslimsa </a></li>
                                </ul>
                        </div>
                        {/* Content of the column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Social</h4>
                                <ul className="list-unstyled">
                                  <li><FaFacebookF className="iconos"/><a href="https://www.facebook.com/gerardohammett.hurtado/" target="_blank">Gerardo McFly</a></li>
                                  <li><TiSocialInstagramCircular className="iconos"/><a href="https://www.instagram.com/gerardodarken/?hl=es-la" target="_blank">Gerardo Darken </a></li>
                                  <li><AiOutlineMail className="iconos"/><a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">gerardodarkenxd@gmail.com </a></li>
                                  <li><AiOutlineGithub className="iconos"/><a href="https://github.com" target="_blank">ElbaLazo1 </a></li>
                                </ul>
                        </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} DESARROLLADO POR ALUMNOS DEL TECNM | TODOS LOS DERECHOS RESERVADOS
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
