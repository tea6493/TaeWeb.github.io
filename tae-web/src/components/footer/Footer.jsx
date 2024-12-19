
/* React Imports */
import { Link } from 'react-router-dom';

/* Style Imports */
import styles from './Footer.module.css';

/* Component Imports */

/* Asset Imports */
import Github from '../../assets/Github.png';
import LinkedIn from '../../assets/Linkedin.png';

function Footer() {
    return (

        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <h2>Wanna talk to me?</h2>
                    <h4>You can reach me at:</h4>
                </div>

                <div className={styles.link_container}>
                    <div className={styles.contact}>
                        <Link to='https://www.linkedin.com/in/taesuk-song/'><img src={LinkedIn} alt='LinkedIn Link' className={styles.logo_icon}/></Link>
                        <Link to='https://github.com/tea6493'><img src={Github} alt='Github Link' className={styles.logo_icon}/></Link>
                    </div>
                    <h3>or</h3>
                    <Link to='mailto:Taesuk.Song@outlook.com'><h4>Taesuk.Song@outlook.com</h4></Link>
                </div>

                <p>&copy; {new Date().getFullYear()} Tae Web.  All Rights Reserved.</p>
                
            </div>
        </div>


    )
}

export default Footer;