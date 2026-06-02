import React from 'react'
import '../../pages/Project/Project.css'

const Transformation = (props) => {
    return (
        <>
            <section id="transformation">
                <div class="container">
                    <div class="row">
                        <div class="pricing__container">
                            <p class="section__label">TRANSFORMATION</p>
                            <h2 class="project__section--title">Facelift for the <span class="purple">Future</span></h2>
                            <p class="section__description subtitle">Here's what it looked like to deliver a transformation to the client and walk them into the future!</p>
                            <div class="pricing__list--container">
                                <div class="price">
                                    <div class="price__stripe"></div>
                                    <div class="price__container">
                                        <div class="price__desc--container">
                                            
                                            <h3 class="price__title">
                                                
                                            </h3>

                                            <h3 class="price__display">BEFORE</h3>
                                            <h4 class="cadence">PANIC</h4>
                                            <hr class="pricing__divider--top" />

                                            <p class="feature__list audience">{props.desc.beforeTitle}</p>
                                            <p class="feature__list">{props.desc.beforeDesc1}</p>
                                            <p class="feature__list">{props.desc.beforeDesc2}</p>
                                            <p class="feature__list">{props.desc.beforeDesc3}</p>
                                            <p class="feature__list">{props.desc.beforeDesc4}</p>
                                            
                                            <hr class="pricing__divider--bottom" />

                                            <a href="#"><button class="personal__btn pricing__btn" onClick={() => {props.toggleModal(false)}}>GET STARTED</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="price__container business">
                                        <div class="price__desc--container">
                                            
                                            <h3 class="price__title">
                                                
                                            </h3>
                                            <h3 class="price__display">DURING</h3>
                                            <p class="cadence">RELIEF</p>
                                            <hr class="pricing__divider--top" />

                                            <p class="feature__list audience">{props.desc.duringTitle}</p>
                                            <p class="feature__list">{props.desc.duringDesc1}</p>
                                            <p class="feature__list">{props.desc.duringDesc2}</p>
                                            <p class="feature__list">{props.desc.duringDesc3}</p>
                                            <p class="feature__list">{props.desc.duringDesc4}</p>
                                            
                                            <hr class="pricing__divider--bottom" />
                                            
                                            <a href="#"><button class="business__btn pricing__btn" onClick={() => {props.toggleModal(false)}}>GET STARTED</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="price">
                                    <div class="price__stripe"></div>
                                    <div class="price__container">
                                        <div class="price__desc--container">
                                            
                                            <h3 class="price__title">
                                                
                                            </h3>

                                            <h3 class="price__display">AFTER</h3>
                                            <p class="cadence">CERTAINTY</p>
                                            <hr class="pricing__divider--top" />

                                            <p class="feature__list audience">{props.desc.afterTitle}</p>
                                            <p class="feature__list">{props.desc.afterDesc1}</p>
                                            <p class="feature__list">{props.desc.afterDesc2}</p>
                                            <p class="feature__list">{props.desc.afterDesc3}</p>
                                            <p class="feature__list">{props.desc.afterDesc4}</p>
                                            
                                            <hr class="pricing__divider--bottom" />
                                            
                                            <a href="#"><button class="enterprise__btn pricing__btn" onClick={() => {props.toggleModal(false)}}>GET STARTED</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="row">
                    <figure className="portfolio__container">
                        <iframe className="portfolio__pdf" src={props.desc.portfolio}></iframe>
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Transformation