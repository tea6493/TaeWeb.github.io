/* REACT IMPORTS */
import { Link } from "react-router-dom"

/* STYLES IMPORTS */
import styles from "./header.module.css"

/* COMPONENTS IMPORTS */
import Links from "./links/Links.jsx"

function Header() {

    return(

        <div className={styles.container}>
            <Link to='/' className={styles.logo}>TaeWeb</Link>
            <div>
                <Links />
            </div>
        </div>

    )

}

export default Header;