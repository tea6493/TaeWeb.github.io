import TaeWeb from '../assets/TaeWeb.png';
import Frontend from '../assets/Frontend.png';
import React from '../assets/React.png';

function Projects() {

    return (
        <div className="projects-card-container">
            <h1>Projects</h1>
            <div className="project-card">
                <img className="project-image" src={TaeWeb} alt="profile picture"></img>
                <div className="project-card-right">
                    <h2 className='project-title'>Tae Web</h2>
                    <p className='project-desc'>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className="project-tech">
                        <img className="card-image" src={React} alt="React Logo"></img>
                        <img className="card-image" src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" src={TaeWeb} alt="profile picture"></img>
                <div className="project-card-right">
                    <h2 className='project-title'>Tae Web</h2>
                    <p className='project-desc'>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className="project-tech">
                        <img className="card-image" src={React} alt="React Logo"></img>
                        <img className="card-image" src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
            <div className="project-card">
                <img className="project-image" src={TaeWeb} alt="profile picture"></img>
                <div className="project-card-right">
                    <h2 className='project-title'>Tae Web</h2>
                    <p className='project-desc'>This is my portfolio website. I created this website to showcase my skills and projects. I used JavaScript React to create this website.</p>
                    <div className="project-tech">
                        <img className="card-image" src={React} alt="React Logo"></img>
                        <img className="card-image" src={Frontend} alt="Frontend Logo"></img>
                    </div>
                    <a href="https://github.com/tea6493/TaeWeb.github.io">inspect code</a>
                </div>
            </div>
        </div>
        
    )
}

export default Projects;