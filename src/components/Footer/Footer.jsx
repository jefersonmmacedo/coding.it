import InstaImg from '../../assets/insta.svg';
import FaceImg from '../../assets/face.svg';
import WhatsImg from '../../assets/whats.svg';
import logo2Img from '../../assets/logoFooter2.png';

import './footer.css'
 
const Footer = function() {
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo2Img} alt="logo" />
            </div>
            <div className="company">
                <h3>A Empresa</h3>
                <p><a href="/">Sobre nós</a></p>
                <p><a href="/">Portfólio</a></p>
                <p><a href="/">Contato</a></p>
                <p><a href="/">Suporte</a></p>
            </div>
            <div className="social">
                <h3>Social</h3>
                <div className="icons">
                <a href="https://www.instagram.com/coding.itbr/" target="_blank" rel="noreferrer"><img src={InstaImg} alt="Instagram"/></a>
                <a href="https://www.facebook.com/coding.itbr" target="_blank" rel="noreferrer"><img src={FaceImg} alt="Facebook" /></a>
                <a href="https://api.whatsapp.com/send?phone=5521971684632&text=Ol%C3%A1.%20Gostaria%20de%20um%20or%C3%A7amento%20de%20um%20projeto%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer"><img src={WhatsImg} alt="Whatsapp" /></a>        
            </div>
                </div>
            <div className="copy">
                <p>Coding It . ©2021 - Todos os direitos reservados</p>
            </div>
            
        </div>
        
    )
};

export {Footer}