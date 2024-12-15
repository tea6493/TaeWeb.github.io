
/* React Imports */
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

/* Style Imports */
import styles from './Header.module.css';

/* Component Imports */

/* Asset Imports */
import logo from '../../assets/Logo.png';

const links = [
    {
        title: "about",
        path: "/about",
    },
    {
        title: "projects",
        path: "/projects",
    },
    {
        title: "blogs",
        path: "/blogs",
    },
    {
        title: "secrets",
        path: "/secrets",
    },
];

function Header() {

    const [open, setOpen] = useState(false);

    const pathname = useLocation().pathname;

    return (
        <div className={styles.container}>
            <div>
                <Link to='/' className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo_icon}/>
                    Tae WEB
                </Link>
            </div>
            <div>
                <ul className={styles.links}>
                    {links.map((link) =>
                        <li>
                            <Link to={link.path} className={`${styles.linksContainer} ${pathname === link.path && styles.active}`}>{link.title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;