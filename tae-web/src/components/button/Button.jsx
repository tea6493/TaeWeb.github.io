
/* React Imports */

/* Style Imports */
import styles from './Button.module.css';

/* Component Imports */

/* Asset Imports */

const Button = ({ text }) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}
export default Button;