import './style.css'
import Logo from '../Logo';
import LinksMenu from '../LinksMenu';

function Menu(){
    return (
        <div className='menu'>
            <Logo/>
            <LinksMenu/>
        </div>
    );
}

export default Menu;