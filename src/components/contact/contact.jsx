import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9xocxhi', 'template_s6y6ov6', form.current, 'ccjcrgGx9GG2BlwEq')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
    <div className='contact__options'>
    <article className='contact__option'>
    <AiOutlineMail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>tiago.justo7@gmail.com</h5>
    <a href='mailto:tiago.justo7@gmail.com' target='_blank'>Send me an Email</a>
    </article>
    <article className='contact__option'>
    <ImWhatsapp className='contact__option-icon'/>
    <h4>Whatsapp</h4>
    <h5>+351 935197007</h5>
    <a href='https://api.whatsapp.com/send?phone=+351935197007' target='_blank'>Send me a Message</a>
    </article>
    </div>
    {/*END OF CONTACT OPTIONS*/}
    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Name' required />
    <input type='email' name='email' placeholder='Your Email' required />
    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact