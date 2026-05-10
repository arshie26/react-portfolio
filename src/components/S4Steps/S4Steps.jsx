import React from 'react'
import '../../pages/Project/Project.css'

const Steps = (props) => {
    return (
        <section id="steps">
            <div class="container">
                <div class="row">
                    <div class="steps__container">
                        <figure class="section__image--container">
                            
                            <iframe src={props.desc.portfolio}></iframe>
                        </figure>
                        
                        <div class="steps__column">
                            <p class="section__label">STEPS</p>
                            <h1 class="project__section--title">The <span class="purple">Solution.</span></h1>
                            <div class="step__list--container">
                                <div class="step">
                                    <h2 class="step__number">01</h2>
                                    <div class="step__desc--container">
                                        <p class="step__title">{props.desc.stepTitle1}</p>
                                        <p class="step__desc">{props.desc.stepDesc1}</p>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2 class="step__number">02</h2>
                                    <div class="step__desc--container">
                                        <p class="step__title">{props.desc.stepTitle2}</p>
                                        <p class="step__desc">{props.desc.stepDesc2}</p>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2 class="step__number">03</h2>
                                    <div class="step__desc--container">
                                        <p class="step__title">{props.desc.stepTitle3}</p>
                                        <p class="step__desc">{props.desc.stepDesc3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps