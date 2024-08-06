import './style.css';
import background from '../../imagens/cardEntrada.png'

function CardEntrada(){
    return(
    <div className="cardEntrada" style={{backgroundImage: `url(${background})`}}>
        <div className="texto">
            <h1>Conheça nossos Cursos</h1>
            <p>AprendeDev oferece uma abordagem única e prática para aprender programação. Nossos cursos são desenvolvidos por especialistas da indústria e são projetados para fornecer as habilidades mais relevantes e atuais.</p>
        </div>
    </div>
    );
}

export default CardEntrada