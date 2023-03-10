import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide} from 'swiper/react';
import Tes from "../../img/tes.jpg";
import Tes2 from "../../img/Tes2.jpeg";
import Tes3 from "../../img/Tes3.jpeg";
import Tes4 from "../../img/Tes4.jpeg";
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'
const Testimonial = () => {
    const clients =[
      {
        img: Tes,
        review: "He has fantastic service and is a great guy. We recommend him to anyone who needs a website or web services. We are excited to work with him on our future projects.",
      },
      {
        img: Tes2,
        review: "The logistics application that was developed by Toheeb and his team, made my job as a business development executive much easier. Our clients enjoy the use of the application and our business is growing.",
      },
      {
        img: Tes3,
        review: "Without a doubt one of the most talented programmers I have ever worked with. He has a comprehensive knowledge of his stacks and is very fast to respond to my inquiry whenever we run into any issue",
      },
      {
        img: Tes4,
        review: "I am glad that I entrusted the development of my e-commerce website to Toheeb, I can't imagine somebody else doing a better job for me. Not only was our experience personal and friendly, but his pieces of advice were also integral to me getting exactly what I wanted. ",
      },
    
    
    
    ]

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{ background: "skyblue"}}></div>
      </div>
      {/* slider */}
      <Swiper
      
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      >


        {clients.map((client, index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
              </div>
            </SwiperSlide>
          )
        })}




      </Swiper>

    </div>
  )
}

export default Testimonial