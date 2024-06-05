/* React IMPORTS */ 

/* STYLE IMPORTS */
import styles from "./footer.module.css"

/* COMPONENT IMPORTS */ 

/* ASSETS IMPORTS */
import Github from '../../assets/Github.png';
import LinkedIn from '../../assets/Linkedin.png';

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <a href='https://github.com/tea6493'><img className={styles.icon} src={Github} alt="Github Logo"></img></a>
                <a href='https://www.linkedin.com/in/taesuk-song/'><img className={styles.icon} src={LinkedIn} alt="LinkedIn Logo"></img></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Tae Web.  All Rights Reserved.</p>
        </div>
    )
}

export default Footer