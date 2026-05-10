import React from 'react'
import '../../pages/Project/Project.css'

const Start = () => {
    return (
        <section id="start">
            <div class="container">
                <div class="row">
                    <div class="start__container">
                        <div class="start__title--container">
                            <h1 class="contact__title">Developers all over the world are happily using Treact.</h1>
                        </div>
                        <div class="buttons">
                            <a href="#"><button class="start__btn start__btn--effects">Get Started</button></a>
                            <a href="#"><button class="contact__btn start__btn--effects" onclick="toggleModal()">Contact Us</button></a>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Start