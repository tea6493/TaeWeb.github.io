
/* React Imports */
import { Link } from 'react-router-dom';

/* Style Imports */
import styles from './Home.module.css';

/* Component Imports */

/* Asset Imports */

function Home() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Hi. Im Taesuk.</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <h4>Just an ordinary guy, doing an ordinary things,<br />looking for friends along the way.</h4>
            <button className={styles.button}>wanna learn more about me?</button>
        </div>
    )
}

export default Home;