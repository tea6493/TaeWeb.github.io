import ProfilePic from '../assets/ProfilePic.jpg';
import Python from '../assets/Python.png';
import Java from '../assets/Java.png';
import Frontend from '../assets/Frontend.png';
import C from '../assets/C.png';
import React from '../assets/React.png';
import AWS from '../assets/AWS.png';
import Docker from '../assets/Docker.png';

function Aboutme() {

    return(
        <div className="aboutme">
            <div className="aboutme-upper">
                <img src={ProfilePic} alt="Profile Picture" className='profile-pic'></img>
                <div className="aboutme-right">
                    <h3>Hey, I'm Taesuk.</h3>
                    <p><strong>Software Engineering</strong> student at George Mason University and a future <strong>Full Stack Developer</strong>. With Over 3 years of immersive internship and entrepreneurial experience, specializing in programming and crafting captivating <strong>UX/UI</strong> designs for a diverse range of front-end and back-end projects. I hope to research and develop <strong>Machine Learning</strong> technology in the future. I love the challenges and discoveries I get from programming. Eager to contribute my skills and knowledge to innovative endeavors!</p>
                    <a href="../assets/Taesuk Song Resume.pdf" target="_blank">View Resume</a>
                </div>
            </div>
            <h3>Technologies</h3>
            <div className="aboutme-lower">
                <div className='technology-card'>
                    <img className="card-image" src={Python} alt="Python Logo"></img>
                    <h2 className='card-title'>Python</h2>
                    <p className='card-text'>5+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={Java} alt="Java Logo"></img>
                    <h2 className='card-title'>Java</h2>
                    <p className='card-text'>5+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={Frontend} alt="Frontend Logo"></img>
                    <h2 className='card-title'>HTML/CSS</h2>
                    <p className='card-text'>4+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={C} alt="C Logo"></img>
                    <h2 className='card-title'>C/C++</h2>
                    <p className='card-text'>3+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={React} alt="React Logo"></img>
                    <h2 className='card-title'>React</h2>
                    <p className='card-text'>3+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={AWS} alt="AWS Logo"></img>
                    <h2 className='card-title'>AWS</h2>
                    <p className='card-text'>1+ years</p>
                </div>
                <div className='technology-card'>
                    <img className="card-image" src={Docker} alt="Docker Logo"></img>
                    <h2 className='card-title'>Docker</h2>
                    <p className='card-text'>1+ years</p>
                </div>
            </div>
            
        </div>
    )
}

export default Aboutme;