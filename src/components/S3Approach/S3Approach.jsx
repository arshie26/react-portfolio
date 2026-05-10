import React from 'react'
import '../../pages/Project/Project.css'

const Approach = (props) => {
    return (
        <section id="approach">
            <div class="container">
                <div class="row">
                    <div class="quality__container">
                        <div class="quality__text">
                            <div class="quality__text--container">
                                <p class="section__label">THE APPROACH</p>
                                <h1 class="project__section--title">My Role: <span class="purple">Web Developer</span></h1>
                                <p class="section__description">{props.desc.approachDesc}</p>
                                    <div>
                                        <div class="quality__bullet">
                                            <i class="fa-regular fa-lightbulb"></i>
                                            <p>{props.desc.approach1}</p>
                                        </div>
                                        <div class="quality__bullet">
                                            <i class="fa-solid fa-gear"></i>
                                            <p>{props.desc.approach2}</p>
                                        </div>
                                        <div class="quality__bullet">
                                            <i class="fa-solid fa-rocket"></i>
                                            <p>{props.desc.approach3}</p>
                                        </div>
                                        
                                    </div>
                            </div>
                            <a href="#" class="btn__container"><button onclick="toggleModal()" class="btn default-btn">Get Started</button></a>
                        </div>
                        <figure class="section__image--container">
                            <img class="section__image" src={props.desc.approachImg} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approach