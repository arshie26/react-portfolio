import React from 'react'
import HomeNav from '../../components/HomeNav/HomeNav'
import Modal from '../../components/Modal/Modal'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import css from '../../assets/css-131-722685.png'
import html from '../../assets/HTML5_Badge.svg.png'
import js from '../../assets/javascript-1-225993.png'
import react from '../../assets/react.svg'
import semicircle from '../../assets/semi circle.svg'
import circle from '../../assets/circle.svg'
import squiggly from '../../assets/squiggly.svg'
import triangle from '../../assets/triangle.svg'
import Experience from '../../components/Experience/Experience'
import experiences from '../../assets/experiences.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';


const Home = () => {

    function moveBackground(event){
        const shapes = document.querySelectorAll(".shape");
        const scaleFactor = 1/20;
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
        //console.log(x, y);
    
        for(let i = 0; i < shapes.length; ++i){
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd? -1:1;
            shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
        }
    }

    
    
    function toggleModal(isModalOpen){
        if(isModalOpen){
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }

    return (
        <div>
            <div id='landing-page' onMouseMove={moveBackground}>
                <HomeNav toggleModal={toggleModal}/>
                <header className="header">
                    <div className="header__content">
                        <h1 className="title">Hey</h1>
                        <h1 className="title--secondary">I'm Arsh</h1>
                        <p className="header__para">I'm a web developer and <span className="orange">technical project manager</span> who helps businesses turn clunky, frustrating digital experiences into streamlined systems that support growth, trust, and customer experience.</p>
                        <p className="header__para">Here's a bit more <a onClick={() => {toggleModal()}} className="orange">about me</a></p>
                        <div className="social__list">
                            <a href="https://www.linkedin.com/in/arshie26/" className="social__link">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://github.com/arshie26" className="social__link">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="Arsh Agarwal web dev resume current 2026.pdf" download className="social__link" target="_blank">
                                <FontAwesomeIcon icon='file-pdf' />
                            </a>
                        </div>
                    </div>
                </header>
                <img src={semicircle} className="shape shape--0" />
                <img src={circle} className="shape shape--1" />
                <img src={squiggly} className="shape shape--2" />
                <img src={circle} className="shape shape--3" />
                <img src={triangle} className="shape shape--4" />
                <img src={circle} className="shape shape--5" />
                <img src={squiggly} className="shape shape--6" />
                <img src={circle} className="shape shape--7" />
                <img src={semicircle} className="shape shape--8" />
                <a className="scroll" href="#projects">
                        <div className="scroll__icon click">
                        </div>
                </a>
            </div>
            <Modal toggleModal={toggleModal} />
            <div className="languages__container">
                <h1>Languages</h1>
                <div className='languages'>
                    <div className="language">
                        <figure className="language__img--wrapper">
                            <img className="language__img" src={html} alt="" class="language__img html" />
                        </figure>
                        <span className="language__name">HTML</span>
                    </div>
                    <div className="language">
                        <figure className="language__img--wrapper">
                            <img className="language__img" src={css} alt="" class="language__img css" />
                        </figure>
                        <span className="language__name">CSS</span>
                    </div>
                    <div className="language">
                        <figure className="language__img--wrapper">
                            <img className="language__img" src={js} alt="" class="language__img js" />
                        </figure>
                        <span className="language__name">JavaScipt</span>
                    </div>
                    <div className="language">
                        <figure className="language__img--wrapper">
                            <img className="language__img" src={react} alt="" class="language__img ts" />
                        </figure>
                        <span className="language__name">React</span>
                    </div>
                </div>
            </div>
            <section id="projects">
                <div className="project__container">
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