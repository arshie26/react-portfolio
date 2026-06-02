import React from 'react'
import css from '../../assets/css-131-722685.png'
import html from '../../assets/HTML5_Badge.svg.png'
import js from '../../assets/javascript-1-225993.png'
import react from '../../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal__half modal__about">
                <h1 className="modal__title">Here's a bit about me.</h1>
                <h6 className="modal__sub-title">Frontend Software Engineer.</h6>
                <p className="modal__para">
                    My development experience includes working with React, JavaScript, CSS, HTML, and responsive web design to build and improve websites, storefronts, and user-facing platforms. 
                </p>
                <p className="modal__para">
                    I’ve collaborated with developers, designers, executives, and clients to translate requirements into functional, brand-aligned digital experiences while balancing timelines, technical limitations, and user experience. 
                </p>
                <p className="modal__para">
                    Beyond coding, I bring strong communication and project management skills that allow me to organize projects, troubleshoot problems efficiently, and guide clients through technical decisions without overwhelming them. 
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
                <figure className="close__icon" onClick={() => {props.toggleModal(true)}}>
                    <FontAwesomeIcon icon="times" />
                </figure>
                <p className="modal__para">
                    What sets me apart is my ability to combine technical problem-solving with empathy and business understanding. I’ve worked on projects ranging from modernizing ecommerce storefronts and implementing frontend functionality to supporting backend workflows and automation systems. 
                </p>
                <p className="modal__para">
                    Whether managing developers, building responsive frontend experiences, or helping businesses simplify complicated systems, I focus on creating solutions that are practical, scalable, and easy for both teams and customers to use.
                </p>
                <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
                <h3 className="modal__sub-title modal__sub-title--contact">I'm currenty open to new opportunities</h3>
                <p>Email me at arshtist@gmail.com</p>
                <div className="modal__overlay modal__overlay--loading">
                    <i className="fas fa-spinner"></i>
                </div>
                <div className="modal__overlay modal__overlay--success">
                    Thanks for the message! Looking forward to speaking with you soon.
                </div>
            </div>
        </div>
    )
}

export default Modal