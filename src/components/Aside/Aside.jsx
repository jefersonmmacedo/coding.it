import './aside.css'
import aboutImg from '../../assets/about.png'
const Aside = function() {
    return (
       <div className="aside">
            
           <div>
            <img src={aboutImg} alt="about" />
           </div>

           <div className="text-aside">
           <h1 className="first">A Coding<span className="dot">.</span>It</h1>
           <h1 className="delimitador"><span className="dot">-</span></h1>
                <p className="secound"> A Coding<span className="dot">.</span> It tem como objetivo trazer uma nova forma de desenvolver software, com designs atraentes, tecnologias em alta no mercado, além de entregar aquilo que nosso clientes realmente desejam.<br />Desenvolvimento de Sites, Sistemas Web e Aplicativos são os nossos principais serviços oferecidos.</p>
            <button className="button-aside"> Conhecer a Coding<span className="dot">.</span>It</button>
           </div>

    
       </div>
    )
}

export {Aside}