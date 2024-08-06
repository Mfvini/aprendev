import './style.css';
import logo from '../../imagens/logo.webp';


function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="Logo empresa" />
            <p className="description">APRENDEV</p>
        </div>
    );
}


export default Logo