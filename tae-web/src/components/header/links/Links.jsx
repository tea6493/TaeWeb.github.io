/* REACT IMPORTS */


/* STYLES IMPORTS */
import styles from "./links.module.css";

/* COMPONENTS IMPORTS */
import NavLink from "./navLink/navLink";

/* ASSETS IMPORTS */

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

function Links() {

    const linkList = links.map((link) =>
        <NavLink item={link} key={link.title} />
    );

    return (
        <div className={styles.container}>
            <ul className={styles.links}>
                {linkList}
            </ul>
        </div>
    )
}

export default Links;