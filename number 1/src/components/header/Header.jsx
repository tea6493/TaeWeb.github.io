
/* ASSETS IMPORTS */
import Logo from "../../assets/Logo.png";

function Header() {

    return(
        <header>
            <div className='header-left'>
                <a href='#'><img className='logo' src={Logo} alt="Logo Image" href="#"></img></a>
                <a href='#'><h1>Tae Web</h1></a>
            </div>
            <nav>
                <ul>
                    <li><a href="#" className='home'>Home</a></li>
                    <li><a href="#aboutme">About me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#bucketList">Bucket List</a></li>
                </ul>
            </nav>
            <div className='header-right'>
                <a href="#">Log In</a>
            </div>
        </header>
    )

}

export default Header;