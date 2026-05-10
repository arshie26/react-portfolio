import React from 'react'
import '../../pages/Project/Project.css'
import logo from '../../assets/A logo-white.png'

const Navbar = () => {

    return (

        
        
        <nav className="project__nav">
            <div className="company__name--wrapper">
                <figure className="logo__wrapper">
                    <img className="logo__image" src={logo} />
                </figure>
                <h1>Arsh Agarwal</h1>
            </div>
            <ul className="nav__links">
                <li><a href="../index.html" className="nav__link">Home</a></li>
                <li><a href="#challenge" className="nav__link">Challenge</a></li>
                <li><a href="#approach" className="nav__link">Approach</a></li>
                <li><a href="#client" className="nav__link">Client</a></li>
                <li><a href="#transformation" className="nav__link">Transformation</a></li>
                <li className="nav__link--login nav__link--hover"><a href="#testimonials" className="nav__link">Testimonial</a></li>
                <li className="nav__link--anchor btn" onclick="toggleModal()"><a>Contact</a></li>
            </ul>
            <button className="open__icon" onclick="openMenu()">
                <i className="fas fa-bars"></i>
            </button>
            <div className="mobile__menu">
                <figure className="close__icon" onclick="closeMenu()">
                    <i className="fas fa-times"></i>
                </figure>
                <ul className="mobile__links">
                    <li><a href="../index.html" className="nav__link" onclick="closeMenu()">Home</a></li>
                    <li><a href="#challenge" className="nav__link" onclick="closeMenu()">Challenge</a></li>
                    <li><a href="#approach" className="nav__link" onclick="closeMenu()">Approach</a></li>
                    <li><a href="#client" className="nav__link" onclick="closeMenu()">Client</a></li>
                    <li><a href="#transformation" className="nav__link" onclick="closeMenu()">Transformation</a></li>
                    <li><a href="#testimonials" className="nav__link" onclick="closeMenu()">Testimonial</a></li>
                    <li className="nav__link--anchor"><a href="" className="nav__link">Contact</a></li>
                </ul>
            </div>  
        </nav>
    )
}

export default Navbar