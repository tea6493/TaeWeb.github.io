import Logo from '../assets/Logo.png';

function Header() {

    return(
        <header>
            <div className='logo-container'>
                <img className='logo' src={Logo} alt="Logo Image" href="#"></img>
                <a href='#'>Tae Web</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#NextStep">NextStep</a></li>
                </ul>
            </nav>
            <a href="#">Log In</a>
        </header>
    )

}

export default Header;