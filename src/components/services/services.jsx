import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
    <h5>What i Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
    <article className='service'>
    <div className='service__head'>
    <h3>Frontend Development</h3>
    </div>
    <ul className='service__list'>
    <li>
    <AiOutlineCheck className='service__list-icon'/>
    <p>Responsive Websites for mobile devices.</p>
    </li>
    <li>
    <AiOutlineCheck className='service__list-icon'/>
    <p>Dynamically generated elements.</p>
    </li>
    <li>
    <AiOutlineCheck className='service__list-icon'/>
    <p>Websites that attend your business needs.</p>
    </li>
    <li>
    <AiOutlineCheck className='service__list-icon'/>
    <p>Consultancy on future changes on your website.</p>
    </li>
    </ul>
    </article>
    {/* END OF FRONTEND*/}
    <article className='service'>
    <div className='service__head'>
    <h3>Backend Development</h3>
    </div>
    <ul className='service__list'>
    <li>
    <AiOutlineCheck className='service__list-icon'/>
    <p>Working to be great on Frontend first, but i will get there.</p>
    </li>
    </ul>
    </article>

    </div>
    </section>
  )
}

export default Services