import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <a href='#' className='footer__logo'>Tiago Justo</a>

    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#services'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>

    <div className='footer__socials'>
    <a href='https://www.linkedin.com/in/tiago-justo/'><BsLinkedin/></a>
    <a href='https://github.com/TJus7o'><BsGithub/></a>
    </div>

    <div className='footer__copyright'>
    <small>&copy; Tiago Justo Frontend Developer</small>
    </div>
    </footer>
  )
}

export default Footer