import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Susy Store.png'
import IMG2 from '../../assets/Next blog.png'
import IMG3 from '../../assets/React blog.png'
import IMG4 from '../../assets/Logo Carrossel.jpeg'
import IMG5 from '../../assets/IN TRANSMISSION.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Susy Store (Next JS)',
    github: 'https://github.com/TJus7o/ecommerce_sanity_stripe',
    link: 'https://ecommerce-sanity-stripe-orcin-nu.vercel.app' 
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog do Justo (Next JS)',
    github: 'https://github.com/TJus7o/NextJS---Blog',
    link: 'https://blog-do-justo.vercel.app' 
  },
  {
    id: 3,
    image: IMG3,
    title: 'React Blog (React JS)',
    github: 'https://github.com/TJus7o/FrontEnd-React-Blog',
    link: 'https://front-end-react-blog.vercel.app' 
  },
  {
    id: 4,
    image: IMG4,
    title: 'Carrossel Mágico (WordPress)',
    github: '/',
    link: 'https://carrossel-magico.pt' 
  },
  {
    id: 5,
    image: IMG5,
    title: 'IN-TRANSMISSION (WordPress)',
    github: '/',
    link: 'https://webby1.pt' 
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

<div className='container portfolio__container'>
    {
      data.map(({id, image, title, github, link}) => {
        return (
          <article key={id} className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={image} alt={title}/>
    </div>
    <h3>{title}</h3>
    <div className='portfolio__item-cta'>
    <a href={github} className='btn'>Github</a>
    <a href={link} className='btn btn-primary' target='_blank'>Link</a>
    </div>
    </article>
        )
      })
    }
    </div>
    </section>
  )
}

export default Portfolio