import './case.css';
import smatphoneLogo from '../../assets/smartphone.svg';
import monitoreLogo from '../../assets/monitor.svg';
import slidersLogo from '../../assets/sliders.svg';

const Case = function() {
    return (
        <div id="servicos" className="content">
            <div className="head-case">
            <h1>O que fazemos <span></span> </h1>
            <h1 className="head-line">-</h1>
            </div>
       <div className="case">
           <div className="cases">
           <div className="img-case">
               <img src={monitoreLogo} alt="smartphone" />
           </div>
            <div className="info-case">
                <h3 className="title">Criação de sites</h3>
                <h3 className="title"><span className="dot">-</span></h3>
                <p className="text">Desenvovimento de websites responsivos e modernos com as melhores tecnologias</p>

            </div>
           </div>

           <div className="cases">
           <div className="img-case">
               <img src={slidersLogo} alt="smartphone" />
           </div>
            <div className="info-case">
                <h3 className="title">Sistemas web</h3>
                <h3 className="title"><span className="dot">-</span></h3>
                <p className="text">Sistemas web, sem precisar de instalação ou consumir espaco físico em seu computador</p>

            </div>
           </div>

           <div className="cases">
           <div className="img-case">
               <img src={smatphoneLogo} alt="smartphone" />
           </div>
            <div className="info-case">
                <h3 className="title">Aplicativos</h3>
                <h3 className="title"><span className="dot">-</span></h3>
                <p className="text">Aplicativos disponíveis na PlayStore e AppleStore, possibilitando qualquer cliente ter o app de seu negócio</p>

            </div>
           </div>
           </div>

           
       </div>
    )
}

export {Case}