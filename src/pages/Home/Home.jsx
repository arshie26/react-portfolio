import React from 'react'
import HomeNav from '../../components/HomeNav/HomeNav'
import './Home.css'
import Experience from '../../components/Experience/Experience'
import experiences from '../../assets/experiences.js'


const Home = () => {

    return (
        <div>
            <div id='landing-page'>
                <HomeNav />
                <header className="header">
                    <div className="header__content">
                        <h1 className="title">Hey</h1>
                        <h1 className="title--secondary">I'm Arsh</h1>
                        <p className="header__para">I'm a <span className="orange">Frontend Software Engineer</span> with a strong passion for building web applications with great user experiences.</p>
                        <p className="header__para">Here's a bit more <a onClick={() => {toggleModal()}} className="orange">about me</a></p>
                        <div className="social__list">
                            <a href="https://www.linkedin.com/in/arshie26/" className="social__link">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="" className="social__link">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="Arsh Agarwal web dev resume current 2026.pdf" download className="social__link" target="_blank">
                                <i className="fa-solid fa-file-pdf"></i>
                            </a>
                        </div>
                    </div>
                </header>
                <a className="scroll" href="#projects">
                        <div className="scroll__icon click">
                        </div>
                </a>
            </div>
            <section id="projects">
                <div className="container">
                    <div className="row">
                        <h1 className="section__title">Here are some of my <span class="orange">projects</span></h1>
                        
                        {
                            experiences.map((exp, index) => {
                                return (
                                    <Experience key={index} experience = {exp} />
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home