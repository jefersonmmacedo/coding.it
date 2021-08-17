import logoImg from '../../assets/logo1.png'

import './navigator.css'

const Navigator = function() {
    return (
        <div className="navigator">
            <img src={logoImg} alt="" />

            <nav>
                 <ul>
                     <li><a href="#coding">A Coding<span>.</span>it</a></li>
                     <li><a href="#servicos">Serviços</a></li>
                     <li><a href="#cases">Cases</a></li>
                     <li><a href="#contato">Contato</a></li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=5521971684632&text=Ol%C3%A1.%20Gostaria%20de%20um%20or%C3%A7amento%20de%20um%20projeto%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer" className="btn"> Fale conosco via Whatsapp</a>
             </nav>
        </div>
    )
}

export default Navigator