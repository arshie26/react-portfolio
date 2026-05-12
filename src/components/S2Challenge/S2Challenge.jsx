import React from 'react'
import '../../pages/Project/Project.css'
import shield from '../../assets/shield.svg';
import support from "../../assets/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg"
import customize from "../../assets/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg"
import reliable from "../../assets/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg"
import fast from "../../assets/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg"
import simple from "../../assets/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg"

const Challenge = (props) => {

    console.log("Challenge is ", props.desc);

    return (
        <section id="challenge">
            <div class="container">
                <div class="row">
                    <div class="features__container">
                        <p class="section__label">THE CHALLENGE</p>
                        <h2 class="project__section--title">{props.desc.challengeTitle}<span class="purple">{props.desc.challengeTitlePurple}</span></h2>
                        <p class="section__description features__description">{props.desc.challengeDesc}</p>
                        <div class="feature__list--container">
                            <div class="feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={shield} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle1}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc1}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={support} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle2}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={customize} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle3}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={reliable} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle4}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc4}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={fast} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle5}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc5}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature last__feature">
                                <div class="feature__container">

                                    <figure class="feature__icon--container">
                                        <img class="feature__icon" src={simple} />
                                    </figure>
                                    <div class="feature__desc--container">
                                        
                                        <h2 class="feature__title">
                                            {props.desc.featureTitle6}
                                        </h2>
                                        <p class="feature__desc">
                                            {props.desc.featureDesc6}
                                        </p>
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

export default Challenge