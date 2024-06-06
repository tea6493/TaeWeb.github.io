
/* STYLE IMPORTS */
import styles from "./about.module.css";

/* ASSET IMPORTS */
import ProfilePic from "../../assets/ProfilePic.jpg";
import Python from '../../assets/Python.png';
import Java from '../../assets/Java.png';
import Frontend from '../../assets/Frontend.png';
import C from '../../assets/C.png';
import React from '../../assets/React.png';
import AWS from '../../assets/AWS.png';
import Docker from '../../assets/Docker.png';

function About() {
    return (
        <div className={styles.aboutme}>
            <div className={styles.aboutmeUpper}>
                <img src={ProfilePic} alt="Profile Picture" className={styles.profilePic}></img>
                <div className={styles.aboutmeRight}>
                    <h3>Hey, That's me!</h3>
                    <p><strong>Software Engineering</strong> student at George Mason University and a future <strong>Full Stack Developer</strong>. With Over 3 years of immersive internship and entrepreneurial experience, specializing in programming and crafting captivating <strong>UX/UI</strong> designs for a diverse range of front-end and back-end projects. I hope to research and develop <strong>Machine Learning</strong> technology in the future. I love the challenges and discoveries I get from programming. Eager to contribute my skills and knowledge to innovative endeavors!</p>
                    <a href="../assets/Taesuk Song Resume.pdf" target="_blank">View Resume</a>
                </div>
            </div>
            <h3>Technologies</h3>
            <div className={styles.aboutmeLower}>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={Python} alt="Python Logo"></img>
                    <h2 className={styles.cardTitle}>Python</h2>
                    <p className={styles.cardText}>5+ years</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={Java} alt="Java Logo"></img>
                    <h2 className={styles.cardTitle}>Java</h2>
                    <p className={styles.cardText}>5+ years</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={Frontend} alt="Frontend Logo"></img>
                    <h2 className={styles.cardTitle}>HTML/CSS</h2>
                    <p className={styles.cardText}>4+ years</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={C} alt="C Logo"></img>
                    <h2 className={styles.cardTitle}>C/C++</h2>
                    <p className={styles.cardText}>3+ years</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={React} alt="React Logo"></img>
                    <h2 className={styles.cardTitle}>React</h2>
                    <p className={styles.cardText}>3+ years</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={AWS} alt="AWS Logo"></img>
                    <h2 className={styles.cardTitle}>AWS</h2>
                    <p className={styles.cardText}>1 year</p>
                </div>
                <div className={styles.technologyCard}>
                    <img className={styles.cardImage} src={Docker} alt="Docker Logo"></img>
                    <h2 className={styles.cardTitle}>Docker</h2>
                    <p className={styles.cardText}>1 year</p>
                </div>
            </div>
        </div>
    )
}

export default About