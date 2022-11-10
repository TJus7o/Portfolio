import React from 'react'
import './about.css'
import Me from '../../assets/b&w formal.jpg'
import {RiAwardLine} from 'react-icons/ri'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
    <div className='about__me'>
    <div className='about__me-image'>
    <img src={Me} alt='About'/>
    </div>
    </div>

    <div className='about__content'>
    <div className='about__cards'>
    <article className='about__card'>
    <RiAwardLine className='about__icon'/>
    <h5>Experience</h5>
    <small>2 months experience</small>
    </article>

    <article className='about__card'>
    <FiUsers className='about__icon'/>
    <h5>Clients</h5>
    <small>2 Clients</small>
    </article>

    <article className='about__card'>
    <VscFolderLibrary className='about__icon'/>
    <h5>Projects</h5>
    <small>3 Completed</small>
    </article>
    </div>

    <p>
    I have been working since I was 18 years old in a many fields that made me realize
    that i need something more stimulating.
    </p> 
    <p>
    It lead me to a Web and Mobile Development course at CESAE, that took place since
    mid February to the end of October, being the last two months as an intern in Merkle Dach, were i worked in a Frontend
    project for the company.
    </p>
    <p>
    After that I have been searching for my first oportunity as a Frontend Developer, and I am hoping that this Portfolio helps me get there.
    </p>
    

    <a href='#contact' className='btn btn-primary'>Let´s Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About