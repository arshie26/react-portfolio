import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                                <h1 class="project__section--title">My Role: <span class="purple">{props.desc.role}</span></h1>
                                <p class="section__description">{props.desc.approachDesc}</p>
                                    <div>
                                        <div class="quality__bullet">
                                            <FontAwesomeIcon icon="lightbulb" />
                                            <p>{props.desc.approach1}</p>
                                        </div>
                                        <div class="quality__bullet">
                                            <FontAwesomeIcon icon="gear" />
                                            <p>{props.desc.approach2}</p>
                                        </div>
                                        <div class="quality__bullet">
                                            <FontAwesomeIcon icon="rocket" />
                                            <p>{props.desc.approach3}</p>
                                        </div>
                                        
                                    </div>
                            </div>
                            <a href="#" className="btn__container"><button onClick={() => {props.toggleModal(false)}} class="btn default-btn">Get Started</button></a>
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