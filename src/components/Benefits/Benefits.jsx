import './Benefits.css'
import r3e from '../../assets/r3e.png'
import ricardo from '../../assets/ricardo.png'
import aplika from '../../assets/aplika.png'
import camararb from '../../assets/camararb.png'

const Benefits = function() {
    return (
        <div id="cases" className="content2">


           <div className="head-Benefits">
            <h1>Projetos entregues </h1>
            <span>-</span>
            </div>

            <div className="projects">
                <div className="project">
                    <img src={r3e} alt="http://r3e.com.br" />
                    <a href="http://r3e.com.br"  target="_blank" rel="noreferrer" className="btn">Acessar</a>
                </div>

                <div className="project">
                    <img src={ricardo} alt="https://ricardosouzaimoveis.com" />
                    <a href="https://ricardosouzaimoveis.com"  target="_blank" rel="noreferrer" className="btn">Acessar</a>
                </div>

                <div className="project">
                    <img src={aplika} alt="http://aplikasignrj.com.br" />
                    <a href="http://aplikasignrj.com.br"  target="_blank" rel="noreferrer" className="btn">Acessar</a>
                </div>

                <div className="project">
                    <img src={camararb} alt="https://camarariobonito.rj.gov.br" />
                    <a href="https://camarariobonito.rj.gov.br"  target="_blank" rel="noreferrer" className="btn">Acessar</a>
                </div>

                
            </div>

           
       </div>
    )
}

export default Benefits;