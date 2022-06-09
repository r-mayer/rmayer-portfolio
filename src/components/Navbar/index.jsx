import MainButton from '../MainButton';
import './index.css';

function Navbar() {
    return ( 
        <div className="navbar-container">
            <p className='logo'><i class="fa-solid fa-terminal"></i> Rodrigo Mayer</p>
            <ul className='navbar-list'>
                <li className='navbar-item'>Sobre mim</li>
                <li className='navbar-item'>Portfolio</li>
                <li className='navbar-item'>Contato</li>
                <li className='navbar-item'>Currículo <i class="fa-solid fa-download icon-margin"></i></li>
            </ul>
            <MainButton><i class="fa-brands fa-github"></i> Meu Github</MainButton>
        </div>
     );
}

export default Navbar;