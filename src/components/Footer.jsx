import Github from '../assets/Github.png';
import LinkedIn from '../assets/Linkedin.png';

function Footer() {
    return (
        <footer>
            <div className='footer-upper'>
                <a href='https://github.com/tea6493'><img className="contact-icon" src={Github} alt="Github Logo"></img></a>
                <a href='https://www.linkedin.com/in/taesuk-song/'><img className="contact-icon" src={LinkedIn} alt="LinkedIn Logo"></img></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Tae Web.  All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;