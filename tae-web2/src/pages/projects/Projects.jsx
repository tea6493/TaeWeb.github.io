/* React IMPORTS */ 

/* STYLE IMPORTS */
import styles from "./projects.module.css"

/* COMPONENT IMPORTS */

/* ASSET IMPORTS */
import TaeWeb from '../../assets/TaeWeb.png';
import Frontend from '../../assets/Frontend.png';
import React from '../../assets/React.png';

function Projects() {
    return (
        <div className={styles.projectCardsContainer}>
            <h1>Projects</h1>
            <div className={styles.projectCard}>
                <img className={styles.projectImage} src={TaeWeb} alt="profile picture"></img>
                <div className={styles.projectCardRight}>
                    <h2 className={styles.projectTitle}>Tae Web</h2>
                    <p className={styles.projectDesc}>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className={styles.projectTech}>
                        <img className={styles.cardImage} src={React} alt="React Logo"></img>
                        <img className={styles.cardImage} src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
            <div className={styles.projectCard}>
                <img className={styles.projectImage} src={TaeWeb} alt="profile picture"></img>
                <div className={styles.projectCardRight}>
                    <h2 className={styles.projectTitle}>Tae Web</h2>
                    <p className={styles.projectDesc}>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className={styles.projectTech}>
                        <img className={styles.cardImage} src={React} alt="React Logo"></img>
                        <img className={styles.cardImage} src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
            <div className={styles.projectCard}>
                <img className={styles.projectImage} src={TaeWeb} alt="profile picture"></img>
                <div className={styles.projectCardRight}>
                    <h2 className={styles.projectTitle}>Tae Web</h2>
                    <p className={styles.projectDesc}>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className={styles.projectTech}>
                        <img className={styles.cardImage} src={React} alt="React Logo"></img>
                        <img className={styles.cardImage} src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects