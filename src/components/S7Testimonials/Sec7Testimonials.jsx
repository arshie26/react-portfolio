import React from 'react'
import testimonialImg from '../../assets/love-illustration.c759090fa833369ad6ffb6eb19cacb3e.svg'
import '../../pages/Project/Project.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = (props) => {
    return (
        <section id="testimonials">
            <div class="container">

                <div class="row">
                    <div class="testimonials__container">
                        <figure class="section__image--container testimonials__image--container">
                            <img class="section__image" src={testimonialImg} />
                        </figure>
                        <div class="testimonials__column">
                            <p class="section__label">TESTIMONIALS</p>
                            <h1 class="project__section--title">{props.desc.testimonialName}</h1>
                            <p class="section__description">{props.desc.testimonialDesc}</p>
                            <div class="testimonials__list--container">
                                <div class="testimonial">
                                    <div class="testimonial__container">
                                        <div class="testimonial__title--container">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <h3 class="testimonial__title">
                                                {props.desc.testimonialTitle}
                                            </h3>
                                            <p class="testimonial__desc">
                                                {props.desc.testimonial} 
                                            </p>
                                        </div>
                                        <div class="testimonial__footer">
                                            <figure class="testimonial__thumbnail--container">
                                                <img class="testimonial__thumbnail" src={props.desc.testimonialImage} />
                                            </figure>
                                            <div class="testimonial__source">
                                                <p class="testimonial__name">
                                                    {props.desc.testimonialName}
                                                </p>
                                                <p class="testimonial__position">
                                                    {props.desc.testimonialPosition}
                                                </p>
                                            </div>
                                            <div class="carousel">
                                                <button class="arrow btn left__arrow"></button>
                                                <div class="divider"></div>
                                                <button class="arrow btn right__arrow"><i class="fa-solid fa-arrow-right"></i></button>
                                            </div>
                                        </div>
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

export default Testimonials