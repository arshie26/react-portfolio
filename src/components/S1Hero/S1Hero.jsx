import React from 'react'
import Picture from "./Picture1.png"
import '../../pages/Project/Project.css'

const Hero = (props) => {

    console.log("Hero is ", props.desc);

    return (
        <section id="hero-banner">
            <div className="row">
                <div className="hero__container">
                    <div className="left__column">
                        <h1 className="project__section--title hero__title">{props.desc.heroTitle}<span className="purple">{props.desc.heroTitlePurple}</span></h1>
                        <p className="section__description hero__description">{props.desc.heroDesc1}</p>
                        <p className="section__description hero__description">{props.desc.heroDesc2}</p>
                        <button className="email__button btn" onclick="toggleModal()">Get Started</button>
                    </div>
                    <figure className="hero__image--container">
                        <img className="hero__image" src={Picture} />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero