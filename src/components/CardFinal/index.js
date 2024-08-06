import './style.css';
import background from '../../imagens/cardFinal.png';


function CardFinal(){
    return(
        <div className="card" style={{backgroundImage:`url(${background})`}}>
            <div className="card_body">
                <h2>Quer <span>aprender</span> uma tecnologia nova?</h2>
                <button><a href="#">Registrar</a></button>
            </div>
        </div>
    );
}

export default CardFinal; 