
/* React Imports */

/* Style Imports */
import styles from './Button.module.css';

/* Component Imports */

/* Asset Imports */

const Button = ({ text, color, href }) => {
    return (
        <button className={styles.button} style={'font-size': '100px'}>{text}</button>
    )
}
export default Button;