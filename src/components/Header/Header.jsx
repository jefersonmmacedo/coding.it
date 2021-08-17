import './header.css'
import logoImg2 from '../../assets/logo2.svg'

const Header = function() {
    return (
      <div className="header">
            <h1 className="text-first-header logo-header"> Coding<span className="dot">.</span>It  </h1><br />
            <h1 className="text-first-header">Um <span className="bold-header">novo conceito</span> de <br />
desenvolvimento de software
            </h1>

<img src={logoImg2} alt="" />

        <h3 className="text-botton-header">Sistemas web, sites e aplicativos. <br />
Soluções completas para a necessidade do seu negócio</h3>

<a href="https://api.whatsapp.com/send?phone=5521971684632&text=Ol%C3%A1.%20Gostaria%20de%20um%20or%C3%A7amento%20de%20um%20projeto%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer" className="btn">Fale conosco</a>
      </div>
    )
};

export {Header}