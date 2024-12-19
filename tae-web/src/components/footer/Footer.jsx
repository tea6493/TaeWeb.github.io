
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
                    <h1 className={styles.title}>Wanna talk to me?</h1>
                    <h3>You can reach me at:</h3>
                </div>

                <div className={styles.link_container}>
                    <div className={styles.contact}>
                        <Link to='https://www.linkedin.com/in/taesuk-song/'><img src={LinkedIn} alt='LinkedIn Link' className={styles.logo_icon}/></Link>
                        <Link to='https://github.com/tea6493'><img src={Github} alt='Github Link' className={styles.logo_icon}/></Link>
                    </div>
                    <h2>or</h2>
                    <Link to='mailto:Taesuk.Song@outlook.com'><h3>Taesuk.Song@outlook.com</h3></Link>
                </div>

                <p className={styles.copyright}>&copy; {new Date().getFullYear()} Tae Web.  All Rights Reserved.</p>
                
            </div>
        </div>


    )
}

export default Footer;