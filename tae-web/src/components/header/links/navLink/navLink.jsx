/* REACT IMPORTS */
import { Link } from "react-router-dom"
import { useLocation } from "react-router"

/* STYLES IMPORTS */
import styles from "./navLink.module.css"

function NavLink({ item }) {

    const pathname = useLocation().pathname;

    return (
        <li>
            <Link to={item.path} className={'${styles.container} ${pathname === item.path && styles.active}'}>{item.title}</Link>
        </li>
    )
}

export default NavLink;