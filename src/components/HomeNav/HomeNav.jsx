import React from 'react'
import '../../pages/Home/Home.css'

const HomeNav = () => {

    return (
        
        <nav className="navigation__bar">
            <figure className="logo__container">
                <img id="personal-logo" src="./assets/A logo-white.png" /> 
            </figure>
            <ul className="nav__link--list">
                <li className="nav__link">
                    <a className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    nav__link--mobile
                    ">About</a>
                </li>
                <li className="nav__link">
                    <a href="#projects" className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Projects</a>
                </li>
                <li className="nav__link" onClick={() => {toggleModal()}}>
                    <a className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    ">Contact</a>
                </li>
                <li className="nav__link" onClick={() => {toggleTheme()}}>
                    <a className="
                    nav__link--anchor
                    link__hover-effect
                    link__hover-effect--black
                    "><i className="fas fa-adjust"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNav