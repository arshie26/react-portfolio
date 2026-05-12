import React from 'react'
import HomeNav from '../../components/HomeNav/HomeNav'
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


const Home = () => {

    function moveBackground(event){
        const shapes = document.querySelectorAll(".shape");
        const scaleFactor = 1/20;
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
        console.log(x, y);
    
        for(let i = 0; i < shapes.length; ++i){
            const isOdd = i % 2 !== 0;
            const boolInt = isOdd? -1:1;
            shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
        }
    }

    let isModalOpen = false;
    
    function toggleModal(){
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
            <div className="modal">
                <div className="modal__half modal__about">
                    <h1 className="modal__title">Here's a bit about me.</h1>
                    <h6 className="modal__sub-title">Frontend Software Engineer.</h6>
                    <p className="modal__para">I'm a 21 year-old Australian frontend <b className="orange">software engineer</b> with experience developing websites for top-tech companies like <b class="orange">Google and Canva.</b>
                        I currently solve extremely difficult engineering problems every day with React, TypeScript and MobX in Canva's Video team. 
                    </p>
                    <div className="modal__languages">
                        <div className="language">
                            <figure className="language__img--wrapper">
                                <img className="language__img" src={html} alt="" class="language__img html" />
                            </figure>
                            <span className="language__name">HTML</span>
                        </div>
                        <div className="language">
                            <figure className="language__img--wrapper">
                                <img className="language__img" src={css} alt="" class="language__img css"/>
                            </figure>
                            <span className="language__name">CSS</span>
                        </div>
                        <div className="language">
                            <figure className="language__img--wrapper">
                                <img className="language__img" src={js} alt="" class="language__img js"/>
                            </figure>
                            <span className="language__name">JavaScipt</span>
                        </div>
                        <div className="language">
                            <figure className="language__img--wrapper">
                                <img className="language__img" src={react} alt="" class="language__img ts"/>
                            </figure>
                            <span className="language__name">React</span>
                        </div>
                        
                    </div>
                </div>
                <div className="modal__half modal__contact">
                    <figure className="close__icon" onClick={toggleModal}>
                        <FontAwesomeIcon icon="times" />
                    </figure>
                    <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
                    <h3 className="modal__sub-title modal__sub-title--contact">I'm currenty open to new opportunities</h3>
                    <form id="contact__form" onsubmit="contact(event)">
                        <div className="form__item">
                            <label className="form__item--label" value="Name">Name</label>
                            <input className="input" name="user_name" type="text"></input>
                        </div>
                        <div class="form__item">
                            <label className="form__item--label" value="E-mail">Email</label>
                            <input className="input" name="user_email" type="email"></input>
                        </div>
                        <div className="form__item">
                            <label className="form__item--label" value="Message">Message</label>
                            <textarea className="input" name="message" type="text"></textarea>
                        </div>
                        <button id="contact__submit" class="form__submit" type="submit">Send it my way</button>
                    </form>
                    <div className="modal__overlay modal__overlay--loading">
                        <i className="fas fa-spinner"></i>
                    </div>
                    <div className="modal__overlay modal__overlay--success">
                        Thanks for the message! Looking forward to speaking with you soon.
                    </div>
                </div>
            </div>
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