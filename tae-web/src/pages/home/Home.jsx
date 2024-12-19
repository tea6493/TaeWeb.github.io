
/* React Imports */

/* Style Imports */
import styles from './Home.module.css';

/* Component Imports */
import Button from '../../components/button/Button';

/* Asset Imports */

function Home() {
    return (
        <div className={styles.container}>
            <div>
                <h1>Hi. Im Taesuk.</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <p>Just an ordinary guy, doing an ordinary things,<br />looking for friends along the way.</p>
            <Button text="Learn More about me" />
        </div>
    )
}

export default Home;