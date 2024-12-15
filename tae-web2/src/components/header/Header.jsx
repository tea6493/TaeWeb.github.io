/* REACT IMPORTS */
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

/* STYLES IMPORTS */
import styles from "./header.module.css"

const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Projects",
        path: "/projects",
    },
];

function Header() {

    const [open, setOpen] = useState(false);

    const pathname = useLocation().pathname;

    return(
        <div className={styles.container}>
            <Link to='/' className={styles.logo}>
                TaeWeb
            </Link>
            <ul className={styles.links}>
                {links.map((link) =>
                    <li>
                        <Link to={link.path} className={`${styles.linksContainer} ${pathname === link.path && styles.active}`}>{link.title}</Link>
                    </li>
                )}
            </ul>
            <div className={`${styles.hamburgerIcon} ${open && styles.open}`} onClick={() => {setOpen((prev) => !prev); }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) =>
                        <li>
                            <Link to={link.path} className={`${styles.linksContainer} ${pathname === link.path && styles.active}`}>{link.title}</Link>
                        </li>
                    )}
                </div>
            )}
        </div>

    )

}

export default Header;