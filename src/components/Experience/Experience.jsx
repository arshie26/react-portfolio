import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/Home/Home.css'



const Experience = (props) => {
    return (
        <div className="project">
            <div className="project__wrapper" >
                <img className="project__img" src={props.experience.sneak} />
                <div className="project__description--container">
                    <Link to={`/project/${props.experience.project}`}>
                        <h1 className="project__title">{props.experience.title}</h1>
                    </Link>
                    <h3 className="project__languages">{props.experience.language}</h3>
                    <p className="project__description">{props.experience.desc1}</p>
                    
                    <p className="project__description">{props.experience.desc2}</p>
                </div>
            </div>
        </div>
    )
}

export default Experience