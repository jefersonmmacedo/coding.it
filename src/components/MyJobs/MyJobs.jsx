import notebookImg from '../../assets/notebook.png';
import './myjobs.css'

const MyJobs = function() {
    return (
        <div className="MyJobs">
            <img src={notebookImg} alt="notebook" />
            <div className="text-job">
                <h1>Projetos ideiais para o seu negócio</h1>
                <p>Estar na internet hoje é essencial para todo e qualquer negócio. Temos a colução perfeita para o seu negócio entrar ou melhorar sua posição na internet.</p>
            
                <a href="https://api.whatsapp.com/send?phone=5521971684632&text=Ol%C3%A1.%20Gostaria%20de%20um%20or%C3%A7amento%20de%20um%20projeto%20para%20meu%20neg%C3%B3cio." target="_blank" rel="noreferrer" className="btn">Entre em contato conosco</a>
 
            </div>
        </div>
    )
}

export default MyJobs;