import React from 'react'
import './experience.css'
import {BsCheckSquare} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
    <div className='experience__frontend'>
    <h3>Frontend Development</h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>HTML</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>CSS</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>Javascript</h4>
    <small className='text-light'>Beginner</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>Bootstrap</h4>
    <small className='text-light'>Beginner</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>React</h4>
    <small className='text-light'>Beginner</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>Next</h4>
    <small className='text-light'>Beginner</small>
    </div>
    </article>
    </div>
    </div>
    {/* END OF FRONTEND */}

    <div experience__backend>
    <h3>Backend Development</h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>MySQL</h4>
    <small className='text-light'>Beginner</small>
    </div>
    </article>
    </div>
    </div>
 {/* END OF BACKEND */}

    <div experience__others>
    <h3>Others</h3>
    <div className='experience__content'>
    <article className='experience__details'>
    <BsCheckSquare className='experience__details-icon'/>
    <div>
    <h4>WordPress</h4>
    <small className='text-light'>Intermediate</small>
    </div>
    </article>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Experience