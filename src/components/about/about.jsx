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
    <img src={Me} alt='About Image'/>
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
    I work since I was 18 years old in a lot of areas that lead me to stagnation
    and no self-fulfillment. In February 2022 I started a Web and Mobile
    Development course that I concluded in October of the same year.
    Since then, I have had an internship where I learned React js and Next js.
    I became passionate about Web Development and I am seeking a
    professional challenge, in this area, with focus, determination and resilience.
    </p>

    <a href='#contact' className='btn btn-primary'>Let´s Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About