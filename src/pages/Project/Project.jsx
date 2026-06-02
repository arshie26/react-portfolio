import React from 'react'
import Modal from '../../components/Modal/Modal'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/S1Hero/S1Hero'
import Challenge from '../../components/S2Challenge/S2Challenge'
import Approach from '../../components/S3Approach/S3Approach'
import Steps from '../../components/S4Steps/S4Steps'
import Client from '../../components/S5Client/S5Client'
import Transformation from '../../components/S6Transformation/Sec6Transformation'
import Testimonials from '../../components/S7Testimonials/Sec7Testimonials'
import Start from '../../components/S8Start/S8Start'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import './Project.css'
import { useEffect } from 'react'

const Project = (props) => {

    const { id } = useParams();

    let project;

    function toggleModal(isModalOpen){
        if(isModalOpen){
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = true;
        document.body.classList += " modal--open";
    }

    function getProject(){
        
        project = props.experiences.filter((projectCycler) => {
            return projectCycler.project === id;
        })[0];
        console.log("Project is ", project);
    }

    getProject();

    return (
        <>
            <Navbar />
            <Modal toggleModal={toggleModal} />
            <Hero desc={project.hero} toggleModal={toggleModal} />
            <Challenge  desc={project.challenge} />
            <Approach desc={project.approach} toggleModal={toggleModal} />
            <Steps desc={project.steps}/>
            <Client desc={project.client} toggleModal={toggleModal}/>
            <Transformation desc={project.transformation} toggleModal={toggleModal} />
            <Testimonials desc={project.testimonial}/>
            <Start toggleModal={toggleModal} />
            <Footer />
        </>
    )

}

export default Project