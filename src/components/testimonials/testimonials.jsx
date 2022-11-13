import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/susana.jpg'
import AVTR2 from '../../assets/ines.jpg'
import AVTR3 from '../../assets/Paulo.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR2,
    name: 'Inês Lopes',
    review: 'Um colega de curso que liderei no projecto final e que fez um trabalho incrivel no frontend, que por sua vez nos ajudou a alcançar o 19 como nota final',
  },
  {
    avatar: AVTR1,
    name: 'Susana Justo Miranda',
    review: 'Desenvolveu um website para a minha loja que superou todas as minhas expectivas, visto ser alguém com pouca experiência.',
  },
  {
    avatar: AVTR3,
    name: 'Paulo Oliveira',
    review: 'Tiago mais que um incrível colega de curso, tornou-se um ótimo amigo! Foi sempre muito consistente em todo o seu percurso durante o curso, demonstrando uma ótima evolução.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
    <h5>Review from Clients and Wok partners</h5>
    <h2>Testimonials</h2>

    <Swiper className='container testimonials__container'
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
  {
    data.map(({avatar, name, review}, index) => {
      return (
        <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
        <img src={avatar} alt={name}/>
        </div>
        <h5 className='client__name'>{name}</h5>
        <small className='client__review'>{review}</small>
        </SwiperSlide>
      )
    })
  }
    </Swiper>
    </section>
  )
}

export default Testimonials