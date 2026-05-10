import React from 'react'
import '../../pages/Project/Project.css'

const Footer = () => {
    return (
        <footer>
                <div class="footer__container">
                    <div class="link__columns">
                        <div class="link__column">
                            <p class="column__title">MAIN</p>
                            <div class="column__links">
                                <a class="footer__link" href="#">Blog</a>
                                <a class="footer__link" href="#">FAQs</a>
                                <a class="footer__link" href="#">Support</a>
                                <a class="footer__link" href="#">About Us</a>
                            </div>
                        </div>
                        <div class="link__column">
                            <p class="column__title">PRODUCT</p>
                            <div class="column__links">
                                <a class="footer__link" href="#">Log In</a>
                                <a class="footer__link" href="#">Personal</a>
                                <a class="footer__link" href="#">Business</a>
                                <a class="footer__link" href="#">Team</a>
                            </div>
                        </div>
                        <div class="link__column">
                            <p class="column__title">PRESS</p>
                            <div class="column__links">
                                <a class="footer__link" href="#">Logos</a>
                                <a class="footer__link" href="#">Events</a>
                                <a class="footer__link" href="#">Stories</a>
                                <a class="footer__link" href="#">Office</a>
                            </div>
                        </div>
                        <div class="link__column">
                            <p class="column__title">TEAM</p>
                            <div class="column__links">
                                <a class="footer__link" href="#">Career</a>
                                <a class="footer__link" href="#">Founders</a>
                                <a class="footer__link" href="#">Culture</a>
                                <a class="footer__link" href="#">Onboarding</a>
                            </div>
                        </div>
                        <div class="link__column">
                            <p class="column__title">LEGAL</p>
                            <div class="column__links">
                                <a class="footer__link" href="#">GDPR</a>
                                <a class="footer__link" href="#">Privacy Policy</a>
                                <a class="footer__link" href="#">Terms of Service</a>
                                <a class="footer__link" href="#">Disclaimer</a>
                            </div>
                        </div>
                    </div>
                    <hr class="footer__divider" />
                    <div class="icons">
                        <div class="company__name--wrapper footer__logo">
                            <figure class="logo__wrapper">
                                <img class="logo__image--footer" src="./A logo-white.png" />
                            </figure>
                            <h2 class="company__name--footer">Arsh Agarwal</h2>
                        </div>
                        <p class="copyright">&copy; 2018 Treact Inc. All Rights Reserved.</p>
                        <div class="social__media--icons">
                            <a class="social__media--link btn" href="">    
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a class="social__media--link btn" href="">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a class="social__media--link last__link btn" href="">
                                <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer