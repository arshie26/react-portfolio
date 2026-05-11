import React from 'react'
import logo from '../../assets/A logo-white.png'
import '../../pages/Home/Home.css'

const HomeNav = () => {

    return (
        
        <nav className="navigation__bar">
            <figure className="logo__container">
                <img id="personal-logo" src={logo} /> 
            </figure>
            <ul className="nav__link--list">
                <li className="nav__link">
                    <a className="
                    
                    nav__link--mobile
                    ">About</a>
                </li>
                <li className="nav__link">
                    <a href="#projects" className="
                    
                    ">Projects</a>
                </li>
                <li className="nav__link" onClick={() => {toggleModal()}}>
                    <a className="
                    
                    ">Contact</a>
                </li>
                <li className="nav__link" onClick={() => {toggleTheme()}}>
                    <a className="
                    
                    "><i className="fas fa-adjust"></i></a>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNav