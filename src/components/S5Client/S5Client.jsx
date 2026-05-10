import React from 'react'
import dollar from '../../assets/dollar-sign.svg'
import briefcase from '../../assets/briefcase.svg'
import '../../pages/Project/Project.css'

const Client = (props) => {
    return (
        <section id="client">
            <div class="container">
                <div class="row">
                    <div class="values__container">
                        <div class="values__column">
                            <div class="values__description">

                                <p class="section__label">THE CLIENT</p>
                                <h1 class="project__section--title">{props.desc.clientTitle}<span class="purple">{props.desc.clientTitlePurple}</span></h1>
                                <p class="section__description">{props.desc.clientDesc}</p>
                                <div class="value__list--container">
                                    <div class="value first__value">
                                        <div class="value__container">
                                            <div class="value__title--container">
                                                <figure class="value__icon--container">
                                                    <img class="value__icon green__background" src={dollar} />
                                                </figure>
                                                <h3 class="value__title">
                                                    {props.desc.valueTitle1}
                                                </h3>
                                            </div>
                                            <div class="value__desc--container">
                                                <p class="value__desc">
                                                    {props.desc.valueDesc1}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="value second__value">
                                        <div class="value__container">  
                                            <div class="value__title--container">
                                                <figure class="value__icon--container">
                                                    <img class="value__icon pearl__background" src={briefcase} />
                                                </figure>
                                                <h3 class="value__title">
                                                    {props.desc.valueTitle2}
                                                </h3>
                                            </div>
                                            <div class="value__desc--container">
                                                <p class="value__desc">
                                                    {props.desc.valueDesc2}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="btn__container" href="#"><button onclick="toggleModal()" class="btn default-btn">Learn More</button></a>
                            </div>
                        </div>
                        <figure class="section__image--container">
                            <img class="section__image" src={props.desc.clientImg} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Client