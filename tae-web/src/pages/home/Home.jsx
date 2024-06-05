/* React IMPORTS */ 

/* STYLE IMPORTS */
import { Link } from "react-router-dom"
import styles from "./home.module.css"

/* COMPONENT IMPORTS */


function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.heroContainer}>
                <div className={styles.heroUpper}>
                    <h1>Taesuk</h1>
                    <h2>Song</h2>
                </div>
                <div className={styles.heroLower}>
                    <h3>Tae·suk</h3>
                    <h4>tā-sək</h4>
                </div>
            </div>

            <p>Hi. Im Taesuk. Just the ordinary guy. Doing ordinary things.</p>
            <Link to="/about">Learn More about Me</Link>
        </div>
    )
}

export default Home